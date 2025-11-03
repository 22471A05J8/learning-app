// server.js

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// ✅ Middlewares
app.use(cors());
app.use(express.json()); // to parse JSON bodies

// ✅ Import routes
const authRoutes = require("./routers/auth"); // <--- this is the line you're asking about

// ✅ Mount routes
app.use("/api/auth", authRoutes); // routes like /api/auth/reset-password

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
