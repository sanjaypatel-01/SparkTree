import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = () => {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected successfully!"))
    .catch((error) => console.error("Error connecting to MongoDB:", error));
};

connectDB();

export default mongoose.connection;

// import mongoose from "mongoose";

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB connected successfully!"))
//   .catch((error) => console.error("Error connecting to MongoDB:", error));

// module.exports = mongoose.connection;
