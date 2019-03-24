module.exports = (app) => {
    const books = require('./book.controller');

    // Create a new Book
    app.post('/books', books.create);

    // Retrieve all Books
    app.get('/books', books.findAll);
   
    // Delete a Book with bookId
    app.delete('/books/:bookId', books.delete);
}