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
    email: {
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
        enum: ["Approved", "Pending", "Applied", "Dean Review"],
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
    currentLearningPlan: {
        "Exam Support": [{
            item: String,
            value: mongoose.Schema.Types.Mixed,
            deanApproved: {
                type: Boolean,
                default: null
            },
            deanFlagged: {
                type: Boolean,
                default: false
            },
            deanNotes: String
        }],
        "Teaching Support": [{
            item: String,
            value: mongoose.Schema.Types.Mixed,
            deanApproved: {
                type: Boolean,
                default: null
            },
            deanFlagged: {
                type: Boolean,
                default: false
            },
            deanNotes: String
        }]
    },
    previousLearningPlan: {
        "Exam Support": [{
            item: String,
            value: mongoose.Schema.Types.Mixed
        }],
        "Teaching Support": [{
            item: String,
            value: mongoose.Schema.Types.Mixed
        }]
    },
    learningPlan: {
        "Exam Support": [{
            item: String,
            value: mongoose.Schema.Types.Mixed,
            deanApproved: {
                type: Boolean,
                default: null
            },
            deanFlagged: {
                type: Boolean,
                default: false
            },
            deanNotes: String
        }],
        "Teaching Support": [{
            item: String,
            value: mongoose.Schema.Types.Mixed,
            deanApproved: {
                type: Boolean,
                default: null
            },
            deanFlagged: {
                type: Boolean,
                default: false
            },
            deanNotes: String
        }]
    },
    subjects: [{
        type: String
    }],
    deanReviewedAt: Date,
    deanReviewedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dean'
    }
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;