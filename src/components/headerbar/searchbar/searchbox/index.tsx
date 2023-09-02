import { AutoComplete } from "antd";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../../../context/ProductsProvider";

// replace with this https://github.com/downshift-js/downshift
const SearchBox = () => {
  const { handleSearch, options } = useProducts();
  const navigate = useNavigate();

  return (
    <AutoComplete
      allowClear
      style={{ width: 200 }}
      onSearch={handleSearch}
      placeholder='Search'
      options={options}
      onSelect={(value) => navigate(`/product/${value}`)}
    />
  );
};

export default SearchBox;
