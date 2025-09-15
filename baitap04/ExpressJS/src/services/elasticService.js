const esClient = require('../config/elastic');

async function indexBook(book) {
  await esClient.index({
    index: 'books',
    id: book._id.toString(),
    document: {
      title: book.title,
      author: book.author,
      price: book.price,
      categoryId: book.categoryId.toString(),
      coverImage: book.coverImage
    }
  });
}

async function indexCategory(category) {
  await esClient.index({
    index: 'categories',
    id: category._id.toString(),
    document: {
      name: category.name
    }
  });
}


module.exports = { indexBook, indexCategory };