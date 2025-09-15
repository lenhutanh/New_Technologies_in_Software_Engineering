require("dotenv").config()
const mongoose = require('mongoose')
const Book = require('../models/book')
const Category = require('../models/category')
const { indexBook, indexCategory } = require("../services/elasticService")

// Kết nối MongoDB
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

async function seed() {
  try {
    await Category.deleteMany({})
    await Book.deleteMany({})

    // Tạo categories
    const categories = await Category.insertMany([
      { name: 'Công nghệ' },
      { name: 'Kinh doanh' },
      { name: 'Văn học' },
      { name: 'Khoa học' }
    ])

    // Index categories vào Elasticsearch
    for (const category of categories) {
      await indexCategory(category)
    }

    // Tạo books
    const books = [
    // --- Công nghệ ---
    {
      title: 'Học Node.js Cơ Bản',
      author: 'Nguyễn Văn A',
      price: 120000,
      categoryId: categories[0]._id,
      coverImage: 'https://picsum.photos/200/300?random=1'
    },
    {
      title: 'Trí Tuệ Nhân Tạo',
      author: 'Lê Văn B',
      price: 200000,
      categoryId: categories[0]._id,
      coverImage: 'https://picsum.photos/200/300?random=2'
    },
    {
      title: 'Clean Code',
      author: 'Robert C. Martin',
      price: 250000,
      categoryId: categories[0]._id,
      coverImage: 'https://picsum.photos/200/300?random=7'
    },
    {
      title: 'Design Patterns',
      author: 'Erich Gamma',
      price: 270000,
      categoryId: categories[0]._id,
      coverImage: 'https://picsum.photos/200/300?random=11'
    },
    {
      title: 'You Don’t Know JS',
      author: 'Kyle Simpson',
      price: 180000,
      categoryId: categories[0]._id,
      coverImage: 'https://picsum.photos/200/300?random=12'
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      price: 260000,
      categoryId: categories[0]._id,
      coverImage: 'https://picsum.photos/200/300?random=13'
    },

    // --- Kinh doanh ---
    {
      title: 'Khởi Nghiệp 4.0',
      author: 'Trần Văn C',
      price: 180000,
      categoryId: categories[1]._id,
      coverImage: 'https://picsum.photos/200/300?random=3'
    },
    {
      title: 'Dám Nghĩ Lớn',
      author: 'David J. Schwartz',
      price: 150000,
      categoryId: categories[1]._id,
      coverImage: 'https://picsum.photos/200/300?random=4'
    },
    {
      title: 'Tư Duy Nhanh và Chậm',
      author: 'Daniel Kahneman',
      price: 190000,
      categoryId: categories[1]._id,
      coverImage: 'https://picsum.photos/200/300?random=8'
    },
    {
      title: 'Bí Mật Tư Duy Triệu Phú',
      author: 'T. Harv Eker',
      price: 170000,
      categoryId: categories[1]._id,
      coverImage: 'https://picsum.photos/200/300?random=14'
    },
    {
      title: '7 Thói Quen Hiệu Quả',
      author: 'Stephen R. Covey',
      price: 200000,
      categoryId: categories[1]._id,
      coverImage: 'https://picsum.photos/200/300?random=15'
    },
    {
      title: 'Cha Giàu Cha Nghèo',
      author: 'Robert Kiyosaki',
      price: 180000,
      categoryId: categories[1]._id,
      coverImage: 'https://picsum.photos/200/300?random=16'
    },

    // --- Văn học ---
    {
      title: 'Tắt Đèn',
      author: 'Ngô Tất Tố',
      price: 80000,
      categoryId: categories[2]._id,
      coverImage: 'https://picsum.photos/200/300?random=5'
    },
    {
      title: 'Chiến Quốc Diễn Nghĩa',
      author: 'La Quán Trung',
      price: 140000,
      categoryId: categories[2]._id,
      coverImage: 'https://picsum.photos/200/300?random=9'
    },
    {
      title: 'Lão Hạc',
      author: 'Nam Cao',
      price: 75000,
      categoryId: categories[2]._id,
      coverImage: 'https://picsum.photos/200/300?random=17'
    },
    {
      title: 'Số Đỏ',
      author: 'Vũ Trọng Phụng',
      price: 95000,
      categoryId: categories[2]._id,
      coverImage: 'https://picsum.photos/200/300?random=18'
    },
    {
      title: 'Những Người Khốn Khổ',
      author: 'Victor Hugo',
      price: 210000,
      categoryId: categories[2]._id,
      coverImage: 'https://picsum.photos/200/300?random=19'
    },
    {
      title: 'Đắc Nhân Tâm',
      author: 'Dale Carnegie',
      price: 130000,
      categoryId: categories[2]._id,
      coverImage: 'https://picsum.photos/200/300?random=20'
    },

    // --- Khoa học ---
    {
      title: 'Vũ Trụ Trong Vỏ Hạt Dẻ',
      author: 'Stephen Hawking',
      price: 220000,
      categoryId: categories[3]._id,
      coverImage: 'https://picsum.photos/200/300?random=6'
    },
    {
      title: 'Vũ Trụ Từ Hư Không',
      author: 'Lawrence M. Krauss',
      price: 210000,
      categoryId: categories[3]._id,
      coverImage: 'https://picsum.photos/200/300?random=10'
    },
    {
      title: 'Nguồn Gốc Các Loài',
      author: 'Charles Darwin',
      price: 230000,
      categoryId: categories[3]._id,
      coverImage: 'https://picsum.photos/200/300?random=21'
    },
    {
      title: 'Lược Sử Thời Gian',
      author: 'Stephen Hawking',
      price: 240000,
      categoryId: categories[3]._id,
      coverImage: 'https://picsum.photos/200/300?random=22'
    }
  ]
    const insertedBooks = await Book.insertMany(books);
    for (const book of insertedBooks) {
      await indexBook(book)
    }
    console.log('✅ Seed data thành công!')
  } catch (err) {
    console.error(err)
  } finally {
    await mongoose.connection.close()
  }
}

seed()
