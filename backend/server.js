const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const db = require("./config/db");
const app = require("./app");

const port = process.env.PORT || 5000;

app.listen(port, (req, res) => {
  console.log("Server now start Successfully at http://localhost:" + port);
});
