import axios from "./axios.customize";

const getCategoriesApi = () => {
  let URL_API = `/v1/api/categories`;
  return axios.get(URL_API);
}
export { getCategoriesApi };
