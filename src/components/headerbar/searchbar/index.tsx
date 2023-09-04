import ViewOptions from "./viewoptions";
import SearchBox from "./searchbox";
import { useProducts } from "../../../context/ProductsProvider";

const SearchBar = () => {
  const { products, filteredProducts } = useProducts();
  return (
    <div className='w-full flex h-16 bg-white px-8'>
      <div className='flex items-center flex basis-full space-between'>
        <div className='flex items-center'>
          <SearchBox />
          <div className='flex pl-4 text-gray-400'>
            <span>Devices {filteredProducts?.length || products?.length}</span>
          </div>
        </div>
        <ViewOptions />
      </div>
    </div>
  );
};

export default SearchBar;
