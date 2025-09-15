import axios from "./axios.customize";

// Lấy danh sách sách (có phân trang + lọc theo category)
const getBooksApi = (page = 1, limit = 10, categoryId = null) => {
  let URL_API = `/v1/api/books?page=${page}&limit=${limit}`;
  if (categoryId) {
    URL_API += `&categoryId=${categoryId}`;
  }
  return axios.get(URL_API);
};

const searchBooksApi = ({ keyword = "", categories = [], minPrice, maxPrice, page = 1, limit = 10}) => {
  let URL_API = `/v1/api/books/search?page=${page}&limit=${limit}`;
  if (keyword) URL_API += `&q=${keyword}`;
  if (categories.length) URL_API += `&categories=${categories.join(",")}`;
  if (minPrice != null) URL_API += `&minPrice=${minPrice}`;
  if (maxPrice != null) URL_API += `&maxPrice=${maxPrice}`;
  return axios.get(URL_API);
}
export { getBooksApi, searchBooksApi };
