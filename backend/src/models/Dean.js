const mongoose = require("mongoose");

const deanSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    faculty: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: "https://i.pravatar.cc/150"
    },
    role: {
        type: String,
        default: "dean"
    }
});

const Dean = mongoose.model("Dean", deanSchema);

module.exports = Dean;