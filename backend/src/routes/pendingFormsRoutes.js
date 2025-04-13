const express = require("express");
const mongoose = require("mongoose");
const pendingFormsRouter = express.Router();

const pendingFormsSchema = new mongoose.Schema({
    id: String, 
    type: String, 
    submitted: String,
    objectId: mongoose.Schema.Types.ObjectId
});

const PendingForms = mongoose.model("PendingForms", pendingFormsSchema);

pendingFormsRouter.get("/", async (req, res)=>{
    try {
        const pendingForms = await PendingForms.find({});
        console.log("PendingForms fetched successfully");
        console.log(pendingForms);
        res.json(pendingForms);
    } catch (error) {
        console.log("PendingForms fetching failed: " + error);
    }
});

module.exports = pendingFormsRouter;