const express = require("express");
const authRoutes = require("./routes/authRoutes");
const trainerRoutes = require("./routes/trainerRoutes");
const scheduleRoutes = require("./routes/scheduleRoutes");
const  cors = require("cors");
const app = express();
// Configure CORS
app.use(cors({
    origin: "http://localhost:5173", // Allow requests from your frontend
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
   // credentials: true, // If you're using cookies or authentication
  }));
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/trainers', trainerRoutes);
app.use('/api/schedules', scheduleRoutes);
module.exports = app;
