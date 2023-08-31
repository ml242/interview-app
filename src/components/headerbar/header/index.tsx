import { useLocation } from "react-router-dom";
import Logo from "./Logo";
import SearchBar from "../searchbar";
import NavBar from "../navbar";

const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className='w-full bg-gray-100 sticky top-0'>
      <div className=''>
        <div className='flex items-center'>
          <Logo />
          <ul className='flex basis-full space-between pr-4'>
            <li className='flex flex-grow justify-end'>
              <p className='text-gray-600'>by Matt Lucas</p>
            </li>
          </ul>
        </div>
      </div>
      {location.pathname === "/" && <SearchBar />}
      {location.pathname.includes("/product") && <NavBar />}
    </div>
  );
};

export default Navbar;
