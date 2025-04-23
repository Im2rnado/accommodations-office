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
    console.log(req.body);
    Feedback.create(req.body);
});


module.exports = feedbackRouter;