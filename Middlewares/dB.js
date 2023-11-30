const express = require('express');
const mongoose = require('mongoose');

const dbURI = process.env.dbURL;
// console.log(dbURI);
exports.connectToDB = () => {
    mongoose.connect(dbURI).then(()=>{console.log("Connection Established!")}).catch((err)=>{console.log("Error Encountered!");console.log(err)})
}