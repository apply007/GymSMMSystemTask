const mongoose=require( 'mongoose');

mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connected DB successfully");
});
db.on("err", () => {
  console.log("Something Wrong!!");
});


module.exports =  db;
