const Category = require('../models/category');

const getCategoriesService = async () => {
  return await Category.find().sort({ createdAt: -1 });
};

const createCategoryService = async (name) => {
  return await Category.create({ name });
};

module.exports = { getCategoriesService, createCategoryService };
