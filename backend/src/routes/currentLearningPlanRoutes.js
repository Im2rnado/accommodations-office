const express = require("express");
const mongoose = require("mongoose");
const currentLearningPlanRouter = express.Router();

const currentLearningPlanSchema = new mongoose.Schema({
    teachingSupport:Array,
    objectId:mongoose.Schema.Types.ObjectId
});

const CurrentLearningPlan = mongoose.model("CurrentLearningPlan", currentLearningPlanSchema);

currentLearningPlanRouter.get("/", async (req, res)=>{
    try {
        const currentLearningPlan = await CurrentLearningPlan.find({});
        console.log("CurrentLearningPlan successfully fetched");
        console.log(currentLearningPlan);
        res.json(currentLearningPlan);
    } catch (error) {
        console.log("Failed Fetching CurrentLearningPlan " + error);
    }
});

module.exports = currentLearningPlanRouter;