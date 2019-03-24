const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    title: String,
    description: String,   
    category: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Books', BookSchema);