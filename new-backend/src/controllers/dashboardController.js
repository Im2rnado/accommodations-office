const Student = require('../models/Student');
const Announcement = require('../models/Announcement');

exports.getDashboardStats = async (req, res) => {
    try {
        const totalStudents = await Student.countDocuments();
        const totalAnnouncements = await Announcement.countDocuments();
        const approvedStudents = await Student.countDocuments({ status: 'Approved' });
        const pendingStudents = await Student.countDocuments({ status: 'Pending' });
        const appliedStudents = await Student.countDocuments({ status: 'Applied' });

        const stats = [
            { title: "Total Students", value: totalStudents },
            { title: "Total Announcements", value: totalAnnouncements },
            { title: "Approved Students", value: approvedStudents },
            { title: "Pending Students", value: pendingStudents },
            { title: "Applied Students", value: appliedStudents }
        ];

        return res.status(200).json({ success: true, stats });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};