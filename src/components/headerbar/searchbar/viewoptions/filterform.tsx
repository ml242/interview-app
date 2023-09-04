import { useProducts } from "../../../../context/ProductsProvider";
import useConnect from "./connect";

const FilterForm = () => {
  const { filters, handleChange, resetFilters } = useConnect();
  const { tags } = useProducts();
  const checkboxes = tags?.map((item: string, i: number) => {
    return (
      <div key={i} className='flex'>
        <label className='flex basis-full justify-between'>
          <input
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
    <form
      className='flex flex-col basis-full rounded-[8px] text-bold p-4 shadow'
      onClick={(e) => e.stopPropagation()}
    >
      <p className='text-black text-opacity-75 my-4'>Product Line</p>
      {checkboxes}
      <button
        disabled={!filters || filters.length < 1}
        onClick={(e) => {
          e.preventDefault();
          resetFilters();
        }}
        className='flex flex-start'
      >
        <p
          className={`text-opacity-75 my-4 ${
            !filters || filters.length < 1 ? "text-red-300" : "text-red-600"
          }`}
        >
          Reset
        </p>
      </button>
    </form>
  );
};

export default FilterForm;
