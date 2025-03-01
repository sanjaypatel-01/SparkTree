import express from "express";
const router = express.Router();
import userModel from "../models/user-model.js";
import authMiddleware from "../middleware/Auth.middleware.js";
import jwt from "jsonwebtoken";


router.get("/", (req, res) => {
  res.send("Hey, it's working");
});

router.post("/register", async function (req, res) {
  let { firstname, lastname, email, password, username } = req.body;

  // We are using try and catch to prevent the server from crashing.
  // Now it will handle the error itself and display it.
  try {

    let user = await userModel.create({
        firstname,
        lastname,
        email,
        password,
        username,
      });

      res.send(user)

  } catch (err) {
        console.log(err.message); // Send only the error message instead of the entire error object.
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

// Update user details (PUT request)
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



export default router;
