const express = require('express');
const user = require('../Module/userAccount');


exports.searchUsers = async(req,res) => {
    try{
        user.find()
        .then((users)=>{
            console.log(users);
            res.send(users);
        }
            
        )
        .catch((err)=>{
            console.log("ERORORORORO");
        })

    }
    catch{
        console.log("Error encountered!");
        res.send("Error!");
    }
}