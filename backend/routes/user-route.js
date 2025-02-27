import express from "express";
const router = express.Router();
import userModel from "../models/user-model.js";

router.get("/", (req, res) => {
  res.send("Hey, it's working");
});

router.post("/register", async function (req, res) {
  let { firstname, lastname, email, password } = req.body;

  // We are using try and catch to prevent the server from crashing.
  // Now it will handle the error itself and display it.
  try {

    let user = await userModel.create({
        firstname,
        lastname,
        email,
        password,
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

    res.status(200).json({ message: "Login Successful" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
});

export default router;
