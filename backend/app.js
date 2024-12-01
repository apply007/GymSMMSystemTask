const express = require("express");
const authRoutes = require("./routes/authRoutes");
const trainerRoutes = require("./routes/trainerRoutes");
const scheduleRoutes = require("./routes/scheduleRoutes");
const  path = require("path");
const  cors = require("cors");
const app = express();
// Configure CORS
app.use(cors({
    origin: ["http://localhost:5173","https://gymsmmsystemtask.onrender.com/"], // Allow requests from your frontend
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
   // credentials: true, // If you're using cookies or authentication
  }));
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/trainers', trainerRoutes);
app.use('/api/schedules', scheduleRoutes);

const __dirname=path.resolve()
app.use(express.static(path.join(__dirname,'../frontend/dist')))

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'../frontend/dist/index.html'))
})

module.exports = app;
