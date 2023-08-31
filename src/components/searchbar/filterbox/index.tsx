import { useNavigate } from 'react-router-dom'

const FilterBox = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-grow items-center justify-end">
      <button onClick={() => navigate({ pathname: "/", search: "?display=list" })}>
        <img
          src="/src/assets/buttons/list.svg"
          alt="Logo"
          width={"36"}
          height={"36"}
        />
      </button>
      <button onClick={() => navigate({ pathname: "/", search: "?display=grid" })}>
        <img
          src="/src/assets/buttons/grid.svg"
          alt="Logo"
          width={"36"}
          height={"36"}
        />
      </button>
      <p className="text-gray-600 px-4">Filter</p>
    </div>
  );
};

export default FilterBox;