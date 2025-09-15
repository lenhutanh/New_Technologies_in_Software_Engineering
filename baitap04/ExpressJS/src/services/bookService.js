const esClient = require('../config/elastic');
const Book = require('../models/book');

// Lấy danh sách sách (có phân trang, filter)
const getBooksService = async (categoryId, page = 1, limit = 10) => {
  const filter = {};
  if (categoryId) filter.categoryId = categoryId;

  const books = await Book.find(filter)
    .skip((page - 1) * limit)
    .limit(Number(limit))
    .sort({ createdAt: -1 });

  const total = await Book.countDocuments(filter);

  return {
    page: Number(page),
    limit: Number(limit),
    total,
    books,
    hasMore: page * limit < total,
  };
};

// Tạo sách mới
const createBookService = async (title, author, categoryId, price, coverImage) => {
  return await Book.create({ title, author, categoryId, price, coverImage });
};

const searchBooksService = async ({ q, categories = [], minPrice, maxPrice, page = 1, limit = 10 }) => {
  const must = [];

  if (q) {
    must.push({
      match: {
        title: {
          query: q,
          fuzziness: 'AUTO',
        },
      },
    });
  }

  if (categories && categories.length > 0) {
    const catArray = Array.isArray(categories) ? categories : categories.split(',');
    must.push({
      terms: { categoryId: catArray.map(c => c.toString()) }
    });
  }

  if (minPrice || maxPrice) {
    must.push({
      range: {
        price: {
          gte: minPrice || 0,
          lte: maxPrice || 9999999,
        },
      },
    });
  }

  const query = must.length > 0 ? { bool: { must } } : { match_all: {} };

  const { hits } = await esClient.search({
    index: 'books',
    from: (page - 1) * limit, // skip bao nhiêu record
    size: limit,              // lấy bao nhiêu record
    query,
  });

  return {
    total: hits.total.value, // tổng số kết quả
    books: hits.hits.map((h) => ({ id: h._id, ...h._source })),
  };
};


module.exports = {
  getBooksService,
  createBookService,
  searchBooksService,
};
