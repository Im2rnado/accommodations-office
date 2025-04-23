const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true,
        unique: true
    },
    dob: {
        type: Date,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    faculty: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["Approved", "Pending", "Applied"],
        required: true
    },
    disability: {
        type: String,
        required: true
    },
    graduationYear: Number,
    medicalReports: [{
        name: String,
        url: String
    }],
    doctorsForm: {
        name: String,
        url: String
    },
    learningPlan: {
        examSupport: [{
            item: String,
            value: mongoose.Schema.Types.Mixed
        }],
        teachingSupport: [{
            item: String,
            value: mongoose.Schema.Types.Mixed
        }]
    },
    subjects: [{
        type: String
    }]
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;