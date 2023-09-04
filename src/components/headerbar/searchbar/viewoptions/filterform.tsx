import { useProducts } from "../../../../context/ProductsProvider";
import useConnect from "./connect";

const FilterForm = () => {
  const { filters, handleChange, resetFilters } = useConnect();
  const { tags } = useProducts();
  const checkboxes = tags?.map((item: string, i: number) => {
    return (
      <div tabIndex={i} key={i} className='flex outline-[#016fff]'>
        <label className='flex basis-full justify-between py-1'>
          <input
            tabIndex={-1}
            className=''
            type='checkbox'
            name={item}
            value={item}
            onChange={() => handleChange(item)}
            checked={filters?.includes(item) ? true : false}
          />
          <span>{item}</span>
        </label>
      </div>
    );
  });

  return (
    <div className='flex flex-col basis-full rounded-[8px] shadow h-[400px]'>
      <form
        className='text-bold p-4 overflow-y-scroll'
        onClick={(e) => e.stopPropagation()}
      >
        <p className='text-black text-opacity-75 mb-4'>Product Line</p>
        {checkboxes}
      </form>
      <button
        disabled={!filters || filters.length < 1}
        onClick={(e) => {
          e.preventDefault();
          resetFilters();
        }}
        className='flex flex-start'
      >
        <p
          className={`text-opacity-75 p-4 ${
            !filters || filters.length < 1 ? "text-red-300" : "text-red-600"
          }`}
        >
          Reset
        </p>
      </button>
    </div>
  );
};

export default FilterForm;
