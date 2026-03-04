const express = require("express");
const router = express.Router();

const { registerUser, loginUser } = require("../controllers/User.Controllers.js");
const authMiddleware = require("../middleware/User.middleware.js");

// Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);

// Protected Route
router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Protected route working",
    user: req.user,
  });
});

module.exports = router;