const express = require('express');
const userAcc = require('../Module/userAccount');

exports.createUser = async (req,res) => {
    try{
        const userData = req.body;
        console.log("We tried!");
        const user = userAcc.create(userData);
        // console.log(userData);
        res.send("User Creation was succesful!");

    }
    catch{
        console.log("WE failed!");
        res.send("Error Encountered!");

    }
}