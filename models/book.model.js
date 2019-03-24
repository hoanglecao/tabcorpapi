const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({  
    uid: { type: mongoose.Schema.ObjectId, auto: true},
    title: String,
    description: String,   
    category: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Books', BookSchema);
