const dotenv = require("dotenv");
const  cors = require("cors");

dotenv.config();



const db = require("./config/db");
const app = require("./app");



const port = process.env.PORT_NUMBER || 3000;
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'frontend','dist','index.html'))
})

app.listen(port, (req, res) => {

  console.log("Server start Successfully at http://localhost:" + port);

});
