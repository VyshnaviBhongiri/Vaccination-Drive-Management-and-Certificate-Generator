const express = require("express");
const cors = require("cors");

const app = express();

// ✅ ENABLE CORS PROPERLY
app.use(cors({
  origin: "http://localhost:3000"
}));

app.use(express.json());

// ROUTES
const verifyRoutes = require("./routes/verify");
const registerRoutes = require("./routes/register");
const administerRoutes = require("./routes/administer");
const dashboardRoutes = require("./routes/dashboard");
const authRoutes = require("./routes/auth");

app.use("/verify", verifyRoutes);
app.use("/register", registerRoutes);
app.use("/administer", administerRoutes);
app.use("/dashboard", dashboardRoutes);
app.use("/auth", authRoutes);

app.listen(5000, "0.0.0.0", () => {
  console.log("Server running on network");
});