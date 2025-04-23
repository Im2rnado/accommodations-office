const { default: mongoose } = require("mongoose");

const feedbackSchema = new mongoose.Schema({ 
    from: String,
    to:String, 
    date: String, 
    message: String,
    objectId: mongoose.Schema.Types.ObjectId
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

// Feedback.create({
//     "from": "Support Office",
//     "to":"232400404",
//     "date": "2024-02-15",
//     "message": "Successfully implemented exam accommodations",
//   });

module.exports = Feedback;