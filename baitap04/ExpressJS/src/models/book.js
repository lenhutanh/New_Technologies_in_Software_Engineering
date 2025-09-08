const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'category', required: true },
  price: { type: Number, required: true },
  coverImage: String
}, { timestamps: true })

const Book = mongoose.model('book', bookSchema)

module.exports = Book