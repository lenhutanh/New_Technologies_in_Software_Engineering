// routes/bookRoutes.js
const express = require('express');
const router = express.Router();
const { getBooks, createBook, getBookById, searchBooks } = require('../controllers/bookController');

router.get('/search', searchBooks); 
router.get('/', getBooks);
router.post('/', createBook);
router.get('/:id', getBookById);

module.exports = router
