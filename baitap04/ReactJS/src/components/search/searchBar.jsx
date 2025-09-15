import { Input } from "antd";
import { useState } from "react";

const { Search } = Input;

const SearchBar = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    onSearch(keyword);
  };

  return (
    <div className="flex mb-6">
      <Search
        placeholder="Search by title or author..."
        enterButton
        size="large"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onSearch={handleSearch}
        style={{ maxWidth: 500 }}
      />
    </div>
  );
};

export default SearchBar;
