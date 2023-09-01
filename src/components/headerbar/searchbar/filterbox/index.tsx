import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FilterForm from "./filterform";

const FilterBox = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex flex-grow items-center justify-end'>
      <button
        onClick={() => navigate({ pathname: "/", search: "?display=list" })}
      >
        <img
          src='/src/assets/buttons/list.svg'
          alt='Logo'
          width={"36"}
          height={"36"}
        />
      </button>
      <button
        onClick={() => navigate({ pathname: "/", search: "?display=grid" })}
      >
        <img
          src='/src/assets/buttons/grid.svg'
          alt='Logo'
          width={"36"}
          height={"36"}
        />
      </button>
      <p className='relative text-gray-600 px-4'>
        <button
          className={isOpen ? "text-red-600" : "inherit"}
          onClick={() => setIsOpen(!isOpen)}
        >
          Filter
        </button>
        {isOpen && (
          <div className='bg-white absolute right-0 w-48 flex text-gray p-4'>
            <FilterForm />
          </div>
        )}
      </p>
    </div>
  );
};

export default FilterBox;
