import FilterBox from "./filterbox";
import SearchBox from "./searchbox";

const SearchBar = () => {
  return (
    <div className='w-full bg-white'>
      <div className='px-16'>
        <div className='flex items-center flex basis-full space-between'>
          <SearchBox />
          <FilterBox />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
