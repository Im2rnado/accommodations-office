const express = require("express");
const mongoose = require("mongoose");


const contactSchema = new mongoose.Schema({
    name: String,
    type: String,
    email: String,
    message: String,
    date:Date,
    objectId: mongoose.Schema.Types.ObjectId
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
