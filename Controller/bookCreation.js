const express = require('express');
const book = require('../Module/book');

exports.createBook = async (req,res) => {
    try{
        const userData = req.body;
        await book.create(userData);
        res.send("The book entry was created successfully!");

    }
    catch(err){
        res.status(406).send("A book with this ISBN already exists. Please retry!");
    }
}