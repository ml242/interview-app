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
        tabIndex={1}
        className='outline-[#016fff] hover:bg-gray-300/25'
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
        tabIndex={2}
        className='outline-[#016fff] hover:bg-gray-300/25'
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
      <div
        tabIndex={3}
        className='hidden h-[36px] ml-auto md:block md:visible md:ml-4 outline-[#016fff] hover:bg-gray-300/25'
      >
        <button
          tabIndex={-1}
          ref={ref}
          className='text-gray-600 h-full'
          onClick={() => setIsOpen(!isOpen)}
        >
          <p tabIndex={-1} className={isOpen ? "text-[#006fff]" : ""}>
            Filter
          </p>
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
