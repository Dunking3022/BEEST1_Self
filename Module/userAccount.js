const mongoose = require("mongoose");

const userAcc = mongoose.Schema({
    username : {type : String},
    password : {type : String}
})

module.exports = mongoose.model("User-Account",userAcc)