// Load environment variables from .env file, always load this first
import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import cors from "cors";
import useragent from "express-useragent";
import db from "./config/mongoose-connection.js" // MongoDB Connection
import userRoutes from "./routes/user-route.js"
import linkRoutes from "./routes/link-route.js"
import apperanceRoutes from "./routes/appearance-route.js"

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // For raw JSON data
app.use(express.urlencoded({ extended: true })); // For x-www-form-urlencoded data
app.use(useragent.express());


// Root route handler
app.get("/", (req, res) => {
    res.send("Backend is running!");
});

// API routes
app.use("/user", userRoutes); 
app.use("/api", linkRoutes); 
app.use("/appearance", apperanceRoutes); 

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

