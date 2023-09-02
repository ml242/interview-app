import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDetectClickOutside } from "react-detect-click-outside";
import FilterForm from "./filterform";
import { replaceParam } from "../../../../constants/globals";

const FilterBox = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  const ref = useDetectClickOutside({ onTriggered: () => setIsOpen(false) });

  return (
    <div className='flex flex-grow items-center justify-end'>
      <button
        onClick={() =>
          setSearchParams(() => {
            return new URLSearchParams({
              ...replaceParam("display", searchParams),
              ...{ display: "list" },
            });
          })
        }
      >
        <img src='/buttons/list.svg' alt='Logo' width={"36"} height={"36"} />
      </button>
      <button
        onClick={() =>
          setSearchParams(() => {
            return new URLSearchParams({
              ...replaceParam("display", searchParams),
              ...{ display: "grid" },
            });
          })
        }
      >
        <img src='/buttons/grid.svg' alt='Logo' width={"36"} height={"36"} />
      </button>
      <div className='relative pl-4'>
        <button
          ref={ref}
          className='text-gray-600'
          onClick={() => setIsOpen(!isOpen)}
        >
          Filter
        </button>

        <div
          className={`bg-white absolute right-0 w-48 flex text-gray p-4 ${
            isOpen ? "" : "hidden"
          }`}
        >
          <FilterForm />
        </div>
      </div>
    </div>
  );
};

export default FilterBox;
