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
        image: "https://i.pravatar.cc/150",
        faculty: "Business",
        status: "Pending",
        disability: "Dyslexia",
        learningPlan: {}
    },
    {
        name: "Sarah Ahmed",
        id: 232400406,
        image: "https://i.pravatar.cc/150",
        faculty: "Computing",
        status: "Applied",
        disability: "ADHD",
        learningPlan: {}
    },
    {
        name: "Nada Hesham",
        id: 232400407,
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
            date: "2024-11-29"
        },
        {
            title: "Announcement Two",
            message: "Doctor feedback is due tomorrow.",
            sender: "John Smith",
            date: "2024-11-28"
        },
        {
            title: "Announcement Three",
            message: "The new plan has been implemented.",
            sender: "Alice Johnson",
            date: "2024-11-27"
        }
    ];

    return res.status(200).json({ success: true, announcements });
});

router.post("/login", async (req, res) => {
    console.log("[POST] /login");

    let username = req.body.username;
    const password = req.body.password;

    username = username.toLowerCase();

    try {
        console.log("[200] Login successful");
        return res.status(200).json({ success: true, message: "Login successful", type: user.type });
    } catch (error) {
        console.log("[500] Internal server error");
        res.status(500).json({ success: false, message: error.message });
    }
});

app.listen(port, () => {
    console.log("[SERVER] Running on http://localhost:" + port);
});
