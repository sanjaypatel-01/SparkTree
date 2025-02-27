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

export default router;
