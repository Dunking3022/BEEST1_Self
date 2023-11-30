const express = require('express');
const router = express.Router();
const createBook = require('../Controller/bookCreation');
const searchBook = require('../Controller/bookSearch');
const searchBookISBN = require('../Controller/bookFetchByISBN');
const deleteBook = require('../Controller/bookDelete');
const updateBook = require('../Controller/bookUpdate');

router.get("/",(req,res)=>{res.send("Welcome to LibraryDB")});

router.post("/add",createBook.createBook);
router.get("/get/:q",searchBook.searchBook);
router.get("/getByISBN/:q",searchBookISBN.searchBook);
router.get("/delete/:q",deleteBook.deleteBook);
router.post("/update",updateBook.updateBook);

module.exports = (router);