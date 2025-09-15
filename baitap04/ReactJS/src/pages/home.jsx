import { CrownOutlined } from "@ant-design/icons";
import { Result, Pagination, Spin } from "antd";
import { useEffect, useState } from "react";
import BookList from "../components/book/bookList";
import { getBooksApi, searchBooksApi } from "../utils/bookApi";
import SearchBar from "../components/search/searchBar";
import SidebarFilter from "../components/search/sidebarFilter";

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    keyword: "",
    categories: [],
    minPrice: null, 
    maxPrice: null
  })

  const fetchBooks = async (page, filters) => {
    setLoading(true);
    let res;
    if ( filters.keyword || filters.categories.length > 0 || filters.minPrice || filters.maxPrice) {
      res = await searchBooksApi(filters);
    } else {
      res = await getBooksApi(page, limit);
    }
    if (res) {
      setBooks(res.books);
      setTotal(res.total);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBooks(page, filters);
  }, [page, filters]);


  return (
    <div className="p-12 justify-center">
      <Result
        icon={<CrownOutlined />}
        title="JSON Web Token (React/Node.JS) - iotstar.vn"
      />
      <div className="flex">
        <SidebarFilter onFilter={(filterData) => {
          setFilters((prev) => ({ ...prev, ...filterData }));
          setPage(1);
        }} />
        <div>
          <SearchBar onSearch={(value) => {
            setFilters((prev) => ({ ...prev, keyword: value }));
            setPage(1);
          }} />

          {loading ? (
            <div className="flex justify-center my-10">
              <Spin size="large" />
            </div>
          ) : (
            <BookList books={books} />
          )}

          <div className="flex justify-center mt-6">
            <Pagination
              current={page}
              pageSize={limit}
              total={total}
              onChange={(p) => setPage(p)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;