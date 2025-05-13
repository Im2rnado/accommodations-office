const express = require("express");
const router = express.Router();
const deanController = require("../controllers/deanController");

// Create a new dean
router.post("/", deanController.createDean);

// Dean login
router.post("/login", deanController.loginDean);

// Get all deans
router.get("/", deanController.getAllDeans);

// Get a dean by ID
router.get("/:id", deanController.getDeanById);

// Get students by faculty
router.get("/students/:faculty", deanController.getStudentsByFaculty);

// Get dashboard stats for a dean's faculty
router.get("/dashboard/:faculty", deanController.getDashboardStats);

// Update accommodation approval status
router.post("/approve-accommodation", deanController.updateAccommodationStatus);

module.exports = router;