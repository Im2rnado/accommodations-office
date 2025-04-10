const express = require("express");
const mongoose = require("mongoose");
const feedbackRouter = require("./routes/feedbackRouter");
const app = express();
require("dotenv").config();
const cors = require("cors");
const PORT = process.env.PORT || 4000;

const connectToDatabase = async() =>
{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Successfully connected to MongoDB");
    } catch (error) {
        console.log("MongoDB connection failed: " + error);
    }
}

connectToDatabase();

app.use(cors({origin: 'http://localhost:3000'}));
app.use("/", feedbackRouter);

app.listen(PORT, () => {
    console.log(`[SERVER] Running on http://localhost:${PORT}`);
});