const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("[DATABASE] MongoDB connected successfully");
    } catch (error) {
        console.error("[DATABASE] MongoDB connection failed:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;