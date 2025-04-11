const express = require("express");
const { default: mongoose } = require("mongoose");

const previousPlanRouter = express.Router();

const previousPlanSchema = new mongoose.Schema({
    "semester": String,
        "accommodations": [
            String,
            String,
            String
        ],
    objectId:mongoose.Schema.Types.ObjectId
});

const PreviousPlan = mongoose.model("PreviousPlan", previousPlanSchema);


previousPlanRouter.get("/", async (req, res)=>{
    try {
        const previousPlans = await PreviousPlan.find({});
        console.log("PreviousPlans fetched successfully");
        console.log(previousPlans);
        res.json(previousPlans);
    } catch (error) {
        console.log("PreviousPlans fetching failed: " + error);
    }
})

module.exports = previousPlanRouter;