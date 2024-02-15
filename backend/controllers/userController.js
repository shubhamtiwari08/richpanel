const { User } = require("../models/User.model");

async function signup(userData) {
  try {
    const newUser = await User(userData);
    const savedUser = await newUser.save();
    return savedUser;
    console.log("user saved successfully", savedUser);
  } catch (error) {
    throw error;
  }
}

async function login(email, password) {
  try {
    const user = await User.findOne({ email });

    if (user && user.password === password) {
      console.log("logged in user ", user);
      return user;
    } else {
      throw new Error("User not found");
    }
  } catch (e) {
    throw e;
  }
}

module.exports = {
  signup,
  login,
};
