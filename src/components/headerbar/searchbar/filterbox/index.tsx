import { useState } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { useDetectClickOutside } from "react-detect-click-outside";
import FilterForm from "./filterform";
import { replaceParam } from "../../../../constants/globals";

const FilterBox = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { search } = useLocation();
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
        <img
          src='/buttons/list.svg'
          alt='Logo'
          width={"36"}
          height={"36"}
          className={!search.includes("grid") ? "blueSvg" : ""}
        />
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
        <img
          src='/buttons/grid.svg'
          alt='Logo'
          width={"36"}
          height={"36"}
          className={search.includes("grid") ? "blueSvg" : ""}
        />
      </button>
      <div className='relative pl-4'>
        <button
          ref={ref}
          className='text-gray-600'
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className={isOpen ? "text-[#006fff]" : ""}>Filter</p>
        </button>

        <div
          className={`bg-white absolute right-0 w-48 flex text-gray ${
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
