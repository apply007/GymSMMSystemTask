const dotenv = require("dotenv");

dotenv.config();

const db = require("./config/db");
const app = require("./app");

const port = process.env.PORT_NUMBER || 3000;

app.listen(port, (req, res) => {

  console.log("Server start Successfully at http://localhost:" + port);

});
