const express = require("express");
const Contact = require("../models/Contact");
const contactRouter = express.Router();

contactRouter.get("/", async (req, res)=>{
    try {
        const contact = await Contact.find({});
        console.log("Fetched contact successfully");
        console.log(contact);
        res.json(contact)
    } catch (error) {
        console.log("Failed fetching contact: " + error);
    }
}).post("/", (req, res)=>{
    try {
        Contact.create(req.body);
        res.status(201).json({ success: true, announcement: req.body });
    } catch (error) {
        res.status(201).json({ success: false, message: error });
    }
}).post("/delete", async (req, res)=>{
    try {
        await Contact.deleteOne(req.body);
        console.log("Deleted contact successfully");
        console.log(req.body);
        res.status(201).json({ success: true, announcement: req.body });
    } catch (error) {
        res.status(201).json({ success: false, message: error });
    }
});

module.exports = contactRouter;