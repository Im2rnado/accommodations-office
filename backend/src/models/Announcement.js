const mongoose = require("mongoose");

const announcementSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    sender: {
        type: String,
        required: true
    },
    student: Number,
    date: {
        type: Date,
        default: Date.now
    }
});

const Announcement = mongoose.model("Announcement", announcementSchema);

module.exports = Announcement;