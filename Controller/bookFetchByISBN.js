const express = require('express');
const book = require('../Module/book');


exports.searchBook = async(req,res) => {
    try{
        const query = req.params["q"];
        console.log(query);
        book.findOne({ ISBN : query})
        .then((book)=>{
            res.send(book);
        }
        )
        .catch((err)=>{
            res.send("ISBN not found!");
        })

    }
    catch{
        console.log("Error encountered!");
        res.send("Error!");
    }
}