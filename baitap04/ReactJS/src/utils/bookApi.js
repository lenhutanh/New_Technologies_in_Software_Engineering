import axios from "./axios.customize";

// Lấy danh sách sách (có phân trang + lọc theo category)
const getBooksApi = (page = 1, limit = 10, categoryId = null) => {
  let URL_API = `/v1/api/books?page=${page}&limit=${limit}`;
  if (categoryId) {
    URL_API += `&categoryId=${categoryId}`;
  }
  return axios.get(URL_API);
};

export { getBooksApi };
