import { CrownOutlined } from "@ant-design/icons";
import { Result, Pagination, Spin } from "antd";
import { useEffect, useState } from "react";
import BookList from "../components/book/bookList";
import { getBooksApi } from "../utils/bookApi";

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(6);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchBooks = async (page) => {
    setLoading(true);
    const res = await getBooksApi(page, limit);
    if (res) {
      setBooks(res.books);
      setTotal(res.total);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBooks(page);
  }, [page]);

  return (
    <div className="p-6 justify-center">
      <Result
        icon={<CrownOutlined />}
        title="JSON Web Token (React/Node.JS) - iotstar.vn"
      />

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
  );
};

export default HomePage;