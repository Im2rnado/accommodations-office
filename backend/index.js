const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const port = 4000;
const router = express.Router();
const app = express();

const students = [
    {
        name: "Ahmed Hatem",
        id: 232400404,
        dob: "2006-05-28",
        image: "https://i.pravatar.cc/150",
        faculty: "Computing",
        status: "Approved",
        disability: "Autism",
        learningPlan: {
            "Exam Support": [
                { item: "Extra time in exams", value: "25 minutes" },
                { item: "Rest break time in exams", value: "15 minutes" },
                { item: "Use of university PC in exams", value: true },
                { item: "Exam NOT in a large hall", value: true },
                { item: "Exam taken alone", value: false },
                { item: "Exam reader", value: true },
                { item: "Exam scribe", value: false },
                { item: "Use of assistive software in exams", value: true },
                { item: "One to one tutoring", value: true },
                { item: "Extra time for assignment submission", value: "7 days" },
            ],
            "Teaching Support": [
                { item: "Allowed to record your lectures in line with University Policy", value: true },
                { item: "Extensions to course work deadlines", value: true },
                { item: "A note taker provided for your classes", value: true },
                { item: "Materials in alternative formats (coloured paper or braille)", value: true },
                { item: "Practical support (library or lab assistance)", value: false },
                { item: "Assistive software (screen reading or speech recognition)", value: true },
                { item: "Specialist equipment (radio aid)", value: false },
                { item: "Access or mobility requirements", value: false }
            ]
        },
        subjects: ["Java", "Python", "C++", "Web Development", "Data Structures"]
    },
    {
        name: "Mohamed Ali",
        id: 232400405,
        dob: "2006-05-28",
        image: "https://i.pravatar.cc/150",
        faculty: "Business",
        status: "Pending",
        disability: "Dyslexia",
        learningPlan: {
            "Exam Support": [
                { item: "Extra time in exams", value: "25 minutes" },
                { item: "Rest break time in exams", value: "15 minutes" },
                { item: "Use of university PC in exams", value: true },
                { item: "Exam NOT in a large hall", value: true },
                { item: "Exam taken alone", value: false },
                { item: "Exam reader", value: true },
                { item: "Exam scribe", value: false },
                { item: "Use of assistive software in exams", value: true },
                { item: "One to one tutoring", value: true },
                { item: "Extra time for assignment submission", value: "7 days" },
            ],
            "Teaching Support": [
                { item: "Allowed to record your lectures in line with University Policy", value: true },
                { item: "Extensions to course work deadlines", value: true },
                { item: "A note taker provided for your classes", value: true },
                { item: "Materials in alternative formats (coloured paper or braille)", value: true },
                { item: "Practical support (library or lab assistance)", value: false },
                { item: "Assistive software (screen reading or speech recognition)", value: true },
                { item: "Specialist equipment (radio aid)", value: false },
                { item: "Access or mobility requirements", value: false }
            ]
        },
        subjects: ["Marketing", "Finance", "Accounting", "Management", "Economics"]
    },
    {
        name: "Sarah Ahmed",
        id: 232400406,
        dob: "2006-05-28",
        image: "https://i.pravatar.cc/150",
        faculty: "Computing",
        status: "Applied",
        disability: "ADHD",
        medicalReports: [{ name: "Al Salam Hospital Report", url: "https://www.google.com" }],
        doctorsForm: { name: "Dr. Ahmed Shawky", url: "https://www.google.com" },
        learningPlan: {
            "Exam Support": [
                { item: "Extra time in exams", value: "25 minutes" },
                { item: "Rest break time in exams", value: "15 minutes" },
                { item: "Use of university PC in exams", value: true },
                { item: "Exam NOT in a large hall", value: true },
                { item: "Exam taken alone", value: false },
                { item: "Exam reader", value: true },
                { item: "Exam scribe", value: false },
                { item: "Use of assistive software in exams", value: true },
                { item: "One to one tutoring", value: true },
                { item: "Extra time for assignment submission", value: "7 days" },
            ],
            "Teaching Support": [
                { item: "Allowed to record your lectures in line with University Policy", value: true },
                { item: "Extensions to course work deadlines", value: true },
                { item: "A note taker provided for your classes", value: true },
                { item: "Materials in alternative formats (coloured paper or braille)", value: true },
                { item: "Practical support (library or lab assistance)", value: false },
                { item: "Assistive software (screen reading or speech recognition)", value: true },
                { item: "Specialist equipment (radio aid)", value: false },
                { item: "Access or mobility requirements", value: false }
            ]
        },
        subjects: ["Java", "Python", "C++", "Web Development", "Data Structures"]
    },
    {
        name: "Nada Hesham",
        id: 232400407,
        dob: "2006-05-28",
        image: "https://i.pravatar.cc/150",
        faculty: "Business",
        status: "Approved",
        disability: "Physical Disability",
        learningPlan: {
            "Exam Support": [
                { item: "Extra time in exams", value: "10 minutes" },
                { item: "Rest break time in exams", value: "2 minutes" },
                { item: "Use of university PC in exams", value: false },
                { item: "Exam NOT in a large hall", value: false },
                { item: "Exam taken alone", value: false },
                { item: "Exam reader", value: false },
                { item: "Exam scribe", value: false },
                { item: "Use of assistive software in exams", value: false },
                { item: "One to one tutoring", value: false },
                { item: "Extra time for assignment submission", value: false }
            ],
            "Teaching Support": [
                { item: "Allowed to record your lectures in line with University Policy", value: false },
                { item: "Extensions to course work deadlines", value: false },
                { item: "A note taker provided for your classes", value: false },
                { item: "Materials in alternative formats (coloured paper or braille)", value: false },
                { item: "Practical support (library or lab assistance)", value: false },
                { item: "Assistive software (screen reading or speech recognition)", value: false },
                { item: "Specialist equipment (radio aid)", value: false },
                { item: "Access or mobility requirements", value: false }
            ]
        },
        subjects: ["Marketing", "Finance", "Accounting", "Management", "Economics"]
    }
];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/", router);

router.get("/", (req, res) => {
    return res.status(200).json({ success: true, message: "Server is working" });
});

router.get("/admin-students", (req, res) => {
    console.log("[GET] /admin-students");

    return res.status(200).json({ success: true, students });
});

router.get("/admin-student/:id", (req, res) => {
    console.log("[GET] /admin-student/" + req.params.id);

    const student = students.find((student) => student.id == req.params.id);

    if (!student) {
        return res.status(404).json({ success: false, message: "Student not found" });
    }

    return res.status(200).json({ success: true, student });
});

router.get("/admin-dashboard", (req, res) => {
    console.log("[GET] /admin-dashboard");

    const stats = [
        { title: "Applied Students", value: 2 },
        { title: "Pending Students", value: 3 },
        { title: "Approved Students", value: 1 }
    ];

    return res.status(200).json({ success: true, stats });
});

router.get("/announcements", (req, res) => {
    console.log("[GET] /announcements");

    const announcements = [
        {
            title: "Announcement One",
            message: "The next meeting is on Monday.",
            sender: "John Doe",
            date: "20/11/2024"
        },
        {
            title: "Announcement Two",
            message: "Doctor feedback is due tomorrow.",
            sender: "John Smith",
            date: "27/11/2024"
        },
        {
            title: "Announcement Three",
            message: "The new plan has been implemented.",
            sender: "Alice Johnson",
            date: "3/12/2024"
        }
    ];

    return res.status(200).json({ success: true, announcements });
});

router.post("/announcements", (req, res) => {
    console.log("[POST] /announcements");

    const { title, message, sender, date } = req.body;

    const newAnnouncement = { id: Date.now(), title, message, sender, date };

    // announcements.push(newAnnouncement);
    res.json({ success: true, announcement: newAnnouncement });
});

router.delete("/announcements/:id", (req, res) => {
    const { id } = req.params;

    console.log("[DELETE] /announcements/" + id);

    // const index = announcements.findIndex((announcement) => announcement.id === parseInt(id));

    // if (index !== -1) {
    // announcements.splice(index, 1);
    res.json({ success: true });
    // } else {
    //    res.status(404).json({ success: false, message: "Announcement not found" });
    // }
});

router.post("/login", async (req, res) => {
    console.log("[POST] /login");

    let email = req.body.email;

    email = email.toLowerCase();

    try {
        if (email.includes("@eslsca.edu.eg")) {
            console.log("[200] Login successful");
            return res.status(200).json({ success: true, message: "Login successful", type: "admin" });
        }
        else {
            console.log("[200] Login successful");
            return res.status(200).json({ success: true, message: "Login successful", type: "student" });
        }
    } catch (error) {
        console.log("[500] Internal server error");
        res.status(500).json({ success: false, message: error.message });
    }
});

app.listen(port, () => {
    console.log("[SERVER] Running on http://localhost:" + port);
});
