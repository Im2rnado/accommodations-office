const { default: mongoose } = require("mongoose");

const formsSchema = new mongoose.Schema({
    id: String, 
    type: String, 
    submitted: String,
    status: String,
    student: Number,
    objectId: mongoose.Schema.Types.ObjectId
});

const Forms = mongoose.model("Forms", formsSchema);

module.exports = Forms;