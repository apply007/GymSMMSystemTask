const dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");
const authRoutes = require("./routes/authRoutes");
const trainerRoutes = require("./routes/trainerRoutes");
const scheduleRoutes = require("./routes/scheduleRoutes");
const  path = require("path");

dotenv.config();

const db = require("./config/db");
//  const __dirname=path.resolve()
const app = express();





// Configure CORS
app.use(cors({
    origin: ["http://localhost:5173","https://gymsmmsystemtask.onrender.com"], // Allow requests from your frontend
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
   // credentials: true, // If you're using cookies or authentication
  }));
const port = process.env.PORT || 5000;

app.listen(port, (req, res) => {
  console.log("Server now start Successfully at http://localhost:" + port);
});

/////


app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/trainers', trainerRoutes);
app.use('/api/schedules', scheduleRoutes);


app.use(express.static(path.join(__dirname,'../frontend/dist')))

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'../frontend/dist/index.html'))
})
