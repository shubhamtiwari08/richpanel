const express = require("express");
const cors = require("cors");
const app = express();
const router = express.Router();

const {
  signup,
  login,
} = require("../controllers/userController");

router.post("/signup", async (req, res) => {
  console.log("signup");
  const signUpData = req.body;
  console.log(signUpData);
  try {
    console.log("wor");
    const savedData = await signup(signUpData);
    res
      .status(201)
      .json({ message: "succesfully created acount", user: savedData });
  } catch (error) {
    res.status(500).json({ error: "Failed to create user account" });
  }
});

 

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await login(email, password);
    res.status(201).json({ user, message: "login succesfull" });
  } catch (error) {
    res.status(401).json({ error: "Invalid credentials" });
  }
});


module.exports = router;