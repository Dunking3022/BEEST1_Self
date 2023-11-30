const express = require('express');
const book = require('../Module/book');

exports.updateBook = async (req,res) => {
    try{
        const userData = req.body;
        await book.findOneAndReplace({ISBN: userData.ISBN},userData);
        res.send("The book entry was updated successfully!");

    }
    catch(err){
        res.status(406).send("No such entry found to update. Please retry!");
    }
}