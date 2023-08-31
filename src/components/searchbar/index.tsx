import FilterBox from "./filterbox";
import SearchBox from "./searchbox";
import useConnect from '../../connect';

const Navigation = () => {

  const { 
    pathname,
    createQueryString 
  } = useConnect();

  return (
    <div className="w-full h-20 top-10 fixed">
        <div className="px-16 h-full">
            <div className="flex items-center h-full flex basis-full space-between">
                <SearchBox />
                <FilterBox
                  pathname={pathname}
                  createQueryString={createQueryString}
                />
            </div>
        </div>
    </div>
  );
};

export default Navigation;