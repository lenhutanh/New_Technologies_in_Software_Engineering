const { getCategoriesService, createCategoryService } = require('../services/categoryService');

const getCategories = async (req, res) => {
  const data = await getCategoriesService();
  return res.status(200).json(data);
};

const createCategory = async (req, res) => {
  const { name } = req.body;
  const data = await createCategoryService(name);
  return res.status(201).json(data);
};

module.exports = { getCategories, createCategory };
