const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const announcementRoutes = require("./routes/announcementRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const studentRoutes = require("./routes/studentRoutes");
const connectDB = require("./config/db");

const app = express();

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Define routes
app.use("/api/announcements", announcementRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/students", studentRoutes);

app.get("/", (req, res) => {
    res.status(200).json({ success: true, message: "API is running" });
});

module.exports = app;