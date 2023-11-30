const express = require('express');
const book = require('../Module/book');


exports.searchBook = async(req,res) => {
    try{
        const query = req.params["q"];
        console.log(query);
        book.find({ $text: { $search: query, $caseSensitive: false } })
        .then((books)=>{
            res.send(books);
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