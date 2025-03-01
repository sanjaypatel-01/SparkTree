import express from "express";
const router = express.Router();
import userModel from "../models/user-model.js";
import authMiddleware from "../middleware/Auth.middleware.js";
import jwt from "jsonwebtoken";


router.get("/", (req, res) => {
  res.send("Hey, it's working");
});

// router.post("/register", async function (req, res) {
//   let { firstname, lastname, email, password, username } = req.body;

//   // We are using try and catch to prevent the server from crashing.
//   // Now it will handle the error itself and display it.
//   try {

//     let user = await userModel.create({
//         firstname,
//         lastname,
//         email,
//         password,
//         username,
//       });

      
//       const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
//       res.status(200).json({ message: "Login Successful", token });
//       res.send(user)

//   } catch (err) {
//         console.log(err.message); // Send only the error message instead of the entire error object.
//   }

// });

router.post("/register", async function (req, res) {
  let { firstname, lastname, email, password, username } = req.body;

  try {
    let user = await userModel.create({
      firstname,
      lastname,
      email,
      password,
      username,
    });

    // Generate JWT Token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d", // Token expires in 1 day
    });

    // Send response with token and user data
    res.status(200).json({
      message: "Signup Successful",
      token,
      user,
    });

  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await userModel.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid Password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.status(200).json({ message: "Login Successful", token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
});

router.put("/update", authMiddleware, async (req, res) => {
  try {
    const { username } = req.body;
    const updatedUser = await userModel.findByIdAndUpdate(
      req.user.id,
      { username },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

router.get("/profile", authMiddleware, async (req, res) => {
  try {
    const user = await userModel.findById(req.user.id).select("+password"); // password by default nahi aata isliye +password likhna padega
    // const user = await userModel.findById(req.user.id).select("firstname lastname"); // sirf firstname and lastname hi chahiye tb ye karna hota hai
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

router.put("/update-setting", authMiddleware, async (req, res) => {
  try {
    const { firstname, lastname, email, password} = req.body;
    const userId = req.user.id // Extract user ID from token

    // Step 1: Find user
    const user = await userModel.findById(userId);
    if (!user) {
      console.log("User not found for ID:", userId);
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Step 2: Check if email is being changed
    const emailChanged = email !== user.email;

    // Step 3: Update user details
    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;
    user.password = password;
    await user.save();

    console.log("User updated successfully:", user);

    // Step 4: Send success response
    return res.json({
      success: true,
      message: "User updated successfully",
      emailChanged, 
    });

  } catch (error) {
    console.error("Profile update error:", error);
    return res.status(500).json({
      success: false,
      message: "Error updating user",
      error: error.message,
    });
  }
});



export default router;
