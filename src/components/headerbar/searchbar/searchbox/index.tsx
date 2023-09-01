import { AutoComplete } from "antd";

const SearchBox = () => {
  return (
    <AutoComplete
      allowClear
      style={{ width: 200 }}
      // onSearch={handleSearch}
      placeholder='input here'
      // options={options}
    />
  );
  return <div className='flex flex-grow'>search box</div>;
};

export default SearchBox;
