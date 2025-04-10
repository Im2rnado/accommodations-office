const express = require("express");
const { default: mongoose } = require("mongoose");

const feedbackRouter = express.Router();

const feedbackSchema = new mongoose.Schema({ 
    from: String, 
    date: String, 
    message: String,
    objectId: mongoose.Schema.Types.ObjectId
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

feedbackRouter.get("/feedback", async (req, res)=>{

    try {
        const feedbacks = await Feedback.find({});
        console.log("Feedbacks fetched successfully");
        console.log(feedbacks);
        res.json(feedbacks);
    } catch (error) {
        console.log("Fetching 'Feedbacks' Failed: " + error);
    }
    
});


module.exports = feedbackRouter;