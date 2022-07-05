const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController");

router.get("/", registerUser);
router.get("/me", getMe);
router.post("/login", loginUser);

module.exports = router;
