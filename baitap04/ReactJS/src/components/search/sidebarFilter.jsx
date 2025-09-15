import { useEffect, useState } from "react";
import { Select, InputNumber, Button, Checkbox } from "antd";
import { getCategoriesApi } from "../../utils/categoryApi";

const SidebarFilter = ({ onFilter }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);

  // load category từ API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await getCategoriesApi();
        setCategories(res);
        console.log(res);
      } catch (err) {
        console.error("Load categories error", err);
      }
    };
    fetchCategories();
  }, []);

  const handleApplyFilter = () => {
    onFilter({
      categories: selectedCategories,
      minPrice,
      maxPrice,
    });
  };

  return (
    <div className="w-64 p-4 border-r border-gray-200">
      <h3 className="font-semibold mb-3">Filter</h3>

      {/* Category */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Category</label>
        <Checkbox.Group
          value={selectedCategories}
          onChange={(checkedValues) => setSelectedCategories(checkedValues)}
        >
          <div className="flex flex-col space-y-2">
            {categories?.map((cat) => (
              <Checkbox key={cat._id} value={cat._id}>
                {cat.name}
              </Checkbox>
            ))}
          </div>
        </Checkbox.Group>
      </div>

      {/* Price */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Price</label>
        <div className="flex gap-1.5">
          <InputNumber
            placeholder="Min"
            value={minPrice}
            onChange={setMinPrice}
            className="w-full"
            min={0}
          />
          <span>-</span>
          <InputNumber
            placeholder="Max"
            value={maxPrice}
            onChange={setMaxPrice}
            className="w-full"
            min={0}
          />
        </div>
      </div>

      {/* Button */}
      <Button type="primary" block onClick={handleApplyFilter}>
        Apply Filter
      </Button>
    </div>
  );
};

export default SidebarFilter;
