const Dean = require("../models/Dean");
const Student = require("../models/Student");

// Create a new dean
exports.createDean = async (req, res) => {
    try {
        const dean = new Dean(req.body);
        await dean.save();
        res.status(201).json({ success: true, dean });
    } catch (error) {
        console.error(error);
        res.status(400).json({ success: false, message: error.message });
    }
};

// Dean login
exports.loginDean = async (req, res) => {
    try {
        const { email, password } = req.body;
        const dean = await Dean.findOne({ email });

        if (!dean) {
            return res.status(404).json({ success: false, message: "Dean not found" });
        }

        // For simplicity, we're directly comparing passwords
        // In a real app, you should use bcrypt to compare hashed passwords
        if (password !== dean.password) {
            return res.status(401).json({ success: false, message: "Invalid credentials" });
        }

        res.status(200).json({ success: true, dean });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get all deans
exports.getAllDeans = async (req, res) => {
    try {
        const deans = await Dean.find();
        res.status(200).json({ success: true, deans });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get dean by ID
exports.getDeanById = async (req, res) => {
    try {
        const dean = await Dean.findById(req.params.id);
        if (!dean) {
            return res.status(404).json({ success: false, message: "Dean not found" });
        }
        res.status(200).json({ success: true, dean });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get students by faculty for dean
exports.getStudentsByFaculty = async (req, res) => {
    try {
        const faculty = req.params.faculty;
        const students = await Student.find({
            faculty: faculty,
            status: "Dean Review"
        });
        res.status(200).json({ success: true, students });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get dashboard stats for dean
exports.getDashboardStats = async (req, res) => {
    try {
        const faculty = req.params.faculty;

        const totalStudents = await Student.countDocuments({ faculty });
        const pendingStudents = await Student.countDocuments({ faculty, status: "Dean Review" });
        const approvedStudents = await Student.countDocuments({
            faculty,
            status: "Approved",
            deanReviewedBy: { $exists: true, $ne: null }
        });

        const stats = [
            { title: "Total Students", value: totalStudents },
            { title: "Pending Review", value: pendingStudents },
            { title: "Approved Students", value: approvedStudents }
        ];

        res.status(200).json({ success: true, stats });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update accommodation approval status
exports.updateAccommodationStatus = async (req, res) => {
    try {
        const { studentId, supportType, itemIndex, approved, flagged, notes } = req.body;
        const deanId = req.body.deanId;

        let student = await Student.findOne({ id: studentId });
        if (!student) {
            return res.status(404).json({ success: false, message: "Student not found" });
        }

        // Update the specific accommodation item
        const accommodations = student.learningPlan[supportType];

        if (!accommodations || itemIndex >= accommodations.length) {
            return res.status(400).json({ success: false, message: "Invalid accommodation item" });
        }

        // Update the specific accommodation
        accommodations[itemIndex].deanApproved = approved;
        accommodations[itemIndex].deanFlagged = flagged;
        accommodations[itemIndex].deanNotes = notes || "";

        // Set the dean review info
        student.deanReviewedAt = new Date();
        student.deanReviewedBy = deanId;

        // Check if all accommodations have been reviewed
        const allExamAccommodationsReviewed = student.learningPlan["Exam Support"]?.every(
            item => item.deanApproved !== null
        );

        const allTeachingAccommodationsReviewed = student.learningPlan["Teaching Support"]?.every(
            item => item.deanApproved !== null
        );

        // If all accommodations are reviewed and none are flagged, update student status to Approved
        if (allExamAccommodationsReviewed && allTeachingAccommodationsReviewed) {
            const hasAnyFlagged =
                student.learningPlan["Exam Support"]?.some(item => item.deanFlagged) ||
                student.learningPlan["Teaching Support"]?.some(item => item.deanFlagged);

            if (!hasAnyFlagged) {
                student.status = "Approved";
            }
        }

        await student.save();
        res.status(200).json({ success: true, student });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};