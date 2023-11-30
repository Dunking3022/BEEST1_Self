const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String
    },
    ISBN: {
        type: String,
        unique: true
    },
    publishedDate: {
        type: Date
    },
    description: {
        type: String
    },
    quantity: {
        type: Number,
        default: 1
    },
    available: {
        type: Boolean,
        default: true
    }
});

bookSchema.index(
    { title: 'text',
    author: 'text'       
}
    );

module.exports = mongoose.model("Books",bookSchema)