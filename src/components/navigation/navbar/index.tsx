import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="w-full h-10 bg-gray-100 fixed top-0">
      <div className="h-full">
        <div className="flex items-center h-full">
          <Logo />
          <ul className="flex basis-full space-between pr-4">
            <li className="flex flex-grow justify-end">
              <p className="text-gray-600">Programmed by Matt Lucas</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
