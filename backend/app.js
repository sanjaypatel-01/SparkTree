import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import useragent from "express-useragent";

// import userRoutes from "./routes/userRoutes.js";

// Load environment variables from .env file
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(useragent.express());

// // Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

// Root route handler
app.get("/", (req, res) => {
    res.send("Backend is running!");
});

// API routes
// app.use("/api", userRoutes); 

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

