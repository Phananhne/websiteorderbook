const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    year:{
        type: Number,
        required: true
    },
    books:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book",
        },
    ],
});

const bookSchema = new mongoose.Schema({
    name:{
        //ten sach
        type:String,
        require: true
    },
    publishedDate:{
        //ngay xuat ban
        type:String,
    },
    genres:{
        //the loai sach
        type:[String]
    },
    author:{
        //ten tac gia
        type: mongoose.Schema.Types.ObjectId,
        ref:"Author",
    },
});

let Book = mongoose.model("Book", bookSchema);
let Author = mongoose.model("Author", authorSchema);

module.exports = {Book,Author };