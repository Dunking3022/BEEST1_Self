const express = require('express');
const mongoose = require('mongoose');
const createUser = require('./Controller/userCreation');
const searchUser = require('./Controller/userSearch');
const book = require('./Routes/home');
require('dotenv').config();
app = express();
app.use(express.json());

app.use("/book",book);

const db = require('./Middlewares/dB');
db.connectToDB();

app.get("/",(req,res)=>{
  res.send("Welcome the BookDB API.");
  console.log("Get function called on path /")
})

app.listen(3001, () => {
    console.log(`Server running on port 3001`);
  }
);