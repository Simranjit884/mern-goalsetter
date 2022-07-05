const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
  res.status(200);
  res.json({ message: "register user" });
});

const loginUser = asyncHandler(async (req, res) => {
  res.status(200);
  res.json({ message: "login user" });
});

const getMe = asyncHandler(async (req, res) => {
  res.status(200);
  res.json({ message: "user data display" });
});

module.exports = { registerUser, loginUser, getMe };
