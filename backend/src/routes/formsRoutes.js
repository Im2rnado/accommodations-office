const express = require("express");
const mongoose = require("mongoose");
const Form = require("../models/Form");
const formsRouter = express.Router();

// I changed pendingForms to Forms as its the same, we just need to add status as an attribute to it
formsRouter.get("/", async (req, res)=>{ // get all forms
    try {
        const Forms = await Form.find({});
        console.log("Forms fetched successfully");
        console.log(Forms);
        res.json(Forms);
    } catch (error) {
        console.log("Forms fetching failed at formsRoutes.js: " + error);
    }
}).post("/", async (req, res)=>{
    try {
        Form.create(req.body);
        res.status(201).json({ success: true, announcement: req.body });
    } catch (error) {
        res.status(500).json({ success: false, message: error });
    }
});

module.exports = formsRouter;