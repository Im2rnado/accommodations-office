const express = require("express");
const Feedback = require("../models/Feedback");
const feedbackRouter = express.Router();

feedbackRouter.get("/", async (req, res)=>{

    try {
        const feedbacks = await Feedback.find({});
        console.log("Feedbacks fetched successfully");
        console.log(feedbacks);
        res.json(feedbacks);
    } catch (error) {
        console.log("Fetching 'Feedbacks' Failed: " + error);
    }
    
}).post("/", (req, res)=>{
    try {
        Feedback.create(req.body);
        res.status(201).json({ success: true, announcement: req.body });
    } catch (error) {
        res.status(500).json({ success: false, message: error });
    }
});


module.exports = feedbackRouter;