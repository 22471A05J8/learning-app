





// server.js
const express = require("express");
const app = express();
const cors = require("cors");

// Middleware
app.use(cors());
app.use(express.json());

// Import Routes
const authRouter = require("./routes/auth"); // ✅ Make sure path is correct

// Use Routes
app.use("/api/auth", authRouter);

// Default Route
app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
