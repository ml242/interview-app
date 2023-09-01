import { useProducts } from "../../../../context/ProductsProvider";

const FilterForm = () => {
  const { tags } = useProducts();
  const checkboxes = tags?.map((item: string, i: number) => {
    return (
      <div key={i} className='flex'>
        <label className='flex basis-full justify-between'>
          <input type='checkbox' name={item} value={item} />
          <span>{item}</span>
        </label>
      </div>
    );
  });

  return (
    <form className='flex flex-col basis-full'>
      {checkboxes}
      <button className=''>reset</button>
    </form>
  );
};

export default FilterForm;
