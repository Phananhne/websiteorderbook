const{Book, Author}= require("../model/model");


const bookController = {

    //add a book
    addABook: async(req, res) => {
        try{
            const newBook = new Book(req.body);
            const savedBook = await newBook.save();
            if(req.body.author){
                // const author = Author.find({_id: req.body.author})
                const author = Author.findById(req.body.author);
                await author.updateOne({$push: {books:savedBook._id}});
            }
            res.status(200).json(savedBook);
        }catch(err){
            res.status(500).json(err);
        }
    },

    //get all book
    getAllBooks: async(req, res) => {
        try{
            const allBooks = await Book.find();
            res.status(200).json(allBooks);
        }catch(err){
            res.status(500).json(err);
        }
    },
    //get a book
    getABook: async(req, res) => {
        try{
            const book = await Book.findById(req.params.id).populate("author");
            res.status(200).json(book);
        }catch(err){
            res.status(500).json(err);
        }
    },

};

module.exports = bookController;