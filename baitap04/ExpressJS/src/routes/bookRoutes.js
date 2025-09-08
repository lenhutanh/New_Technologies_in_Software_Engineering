// routes/bookRoutes.js
const express = require('express')
const Book = require('../models/book')

const router = express.Router()

// GET /api/books?categoryId=...&page=1&limit=10
router.get('/', async (req, res) => {
  try {
    const { categoryId, page = 1, limit = 10 } = req.query

    const filter = {}
    if (categoryId) filter.categoryId = categoryId

    const books = await Book.find(filter)
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .sort({ createdAt: -1 })

    const total = await Book.countDocuments(filter)

    res.json({
      page: Number(page),
      limit: Number(limit),
      total,
      books,
      hasMore: page * limit < total
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// POST /api/books
router.post('/', async (req, res) => {
  try {
    const { title, author, categoryId, price, coverImage } = req.body

    const newBook = new Book({ title, author, categoryId, price, coverImage })
    await newBook.save()

    res.status(201).json(newBook)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// GET /api/books/:id
router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id)
    if (!book) return res.status(404).json({ message: 'Book not found' })
    res.json(book)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})


module.exports = router
