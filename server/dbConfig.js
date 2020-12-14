const mongoose = require("mongoose");
require("dotenv").config();
const db = "mongodb://localhost:27017/nameofxgamedb"; 

mongoose.connect(
  db,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.error("Error! " + err);
    } else {
      console.log("Connected to Mongodb");
    }
  }
);
