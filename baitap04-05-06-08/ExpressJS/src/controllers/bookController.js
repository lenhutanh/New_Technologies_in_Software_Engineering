const {
  getBooksService,
  createBookService,
  getBookByIdService,
  searchBooksService,
} = require("../services/bookService");
const { indexBook } = require("../services/elasticService");

const getBooks = async (req, res) => {
  try {
    const { categoryId, page, limit } = req.query;
    const data = await getBooksService(categoryId, page, limit);
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const createBook = async (req, res) => {
  try {
    const { title, author, categoryId, price, coverImage } = req.body;
    const newBook = await createBookService(title, author, categoryId, price, coverImage);
    await indexBook(newBook)
    return res.status(201).json(newBook);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

const getBookById = async (req, res) => {
  try {
    const book = await getBookByIdService(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    return res.json(book);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const searchBooks = async (req, res) => {
  try {
    const data = await searchBooksService(req.query);
    return res.json(data);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Search error" });
  }
};

module.exports = {
  getBooks,
  createBook,
  getBookById,
  searchBooks,
};
