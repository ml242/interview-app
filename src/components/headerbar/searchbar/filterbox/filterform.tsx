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
      className='flex flex-col basis-full rounded-[8px]'
      onClick={(e) => e.stopPropagation()}
    >
      {checkboxes}
      <button
        disabled={!filters || filters.length < 1}
        onClick={(e) => {
          e.preventDefault();
          resetFilters();
        }}
        className='flex flex-start'
      >
        reset
      </button>
    </form>
  );
};

export default FilterForm;
