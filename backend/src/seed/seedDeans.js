const mongoose = require('mongoose');
const Dean = require('../models/Dean');
const connectDB = require('../config/db');

// Connect to the database
connectDB();

const deans = [
    {
        name: "Dr. Ahmed Hassan",
        email: "dean.business@eslsca.edu",
        password: "deanpassword",
        faculty: "Business",
        image: "https://i.pravatar.cc/150?img=61"
    },
    {
        name: "Dr. Sarah Mohamed",
        email: "dean.computing@eslsca.edu",
        password: "deanpassword",
        faculty: "Computing",
        image: "https://i.pravatar.cc/150?img=32"
    },
    {
        name: "Dr. Omar Ali",
        email: "dean.engineering@eslsca.edu",
        password: "deanpassword",
        faculty: "Engineering",
        image: "https://i.pravatar.cc/150?img=68"
    }
];

const seedDeans = async () => {
    try {
        // Delete existing deans
        await Dean.deleteMany({});
        console.log('Deleted existing deans');

        // Insert new dean data
        const createdDeans = await Dean.insertMany(deans);
        console.log(`${createdDeans.length} deans created successfully`);

        // Exit process
        process.exit(0);
    } catch (error) {
        console.error('Error seeding deans:', error);
        process.exit(1);
    }
};

seedDeans();