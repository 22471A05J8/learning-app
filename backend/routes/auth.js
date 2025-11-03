
// routers/auth.js
const express = require("express");
const router = express.Router();

// Dummy user database
const users = [
  { id: 1, email: "test@example.com", password: "123456" },
  { id: 2, email: "harini@gmail.com", password: "harini@123" },
];

// Route: POST /api/auth/reset-password
router.post("/reset-password", (req, res) => {
  const { email } = req.body;

  // Validation
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  const user = users.find((u) => u.email === email);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  console.log(`✅ Reset email sent to ${email}`);
  res.status(200).json({ message: "Reset link sent to your email" });
});

module.exports = router;
