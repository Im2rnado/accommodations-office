const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const cors = require("cors");
const PORT = process.env.PORT || 4000;

const feedbackRouter = require("./routes/feedbackRouter");
const previousPlanRouter = require("./routes/previousPlanRouter");
const pendingFormsRouter = require("./routes/pendingFormsRouter.js");
const currentLearningPlanRouter = require("./routes/currentLearningPlanRouter.js")

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

app.use("/feedback", feedbackRouter);

app.use("/previousPlan", previousPlanRouter);

app.use("/pendingForms", pendingFormsRouter);

app.use("/currentLearningPlan", currentLearningPlanRouter);

app.listen(PORT, () => {
    console.log(`[SERVER] Running on http://localhost:${PORT}`);
});