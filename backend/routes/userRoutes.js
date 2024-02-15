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


router.get(
    "/facebook",
    passport.authenticate("facebook", { scope:[ 'public_profile','email'] })
    //'user_posts','email','user_photos','user_location','user_videos','user_link','user_gender',
  );
  
  router.get(
    "/facebook/callback",
    passport.authenticate("facebook", {
      failureRedirect: "https://richpanel-ruby.vercel.app/connect-facebook",
      successRedirect: "https://richpanel-ruby.vercel.app/connect-facebook/connected",
    })
  );
  


module.exports = router;