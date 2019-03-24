const Book = require('./models/book.model');

//Create new Book
exports.create = (req, res) => {
    // Request validation
    if(!req.body) {
        return res.status(400).send({
            message: "Book content can not be empty"
        });
    }

    // Create a Book
    const book = new Book({
        title: req.body.title, 
        category: req.body.category,
        description: req.body.description               
    });

    // Save Book in the database
    book.save()
    .then(data => {
        res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something wrong while creating the book."
            });
    });
};

// Retrieve all products from the database.
exports.findAll = (req, res) => {
    Book.find()
    .then(books => {
        res.send(books);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving products."
        });
    });
};

// Delete a book with the specified bookId in the request
exports.delete = (req, res) => {
    Book.findByIdAndRemove(req.params.bookId)
    .then(book => {
        if(!book) {
            return res.status(404).send({
                message: "Book not found with id " + req.params.bookId
            });
        }
        res.send({message: "Book deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Book not found with id " + req.params.bookId
            });                
        }
        return res.status(500).send({
            message: "Could not delete book with id " + req.params.bookId
        });
    });
};