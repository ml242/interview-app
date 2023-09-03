import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../../context/ProductsProvider";

const NavBar = () => {
  const navigate = useNavigate();
  const params = useParams();

  if (!params.id) return;

  const { getNext, getPrevious } = useProducts();
  const nextItem = getNext(params.id);
  const previousItem = getPrevious(params.id);

  return (
    <div className='flex w-full bg-white px-8 h-12'>
      <div className='flex max-w-full items-center basis-full space-between'>
        <button onClick={() => navigate(-1)} className='flex flex-grow'>
          Back
        </button>
        <div className='flex flex-end'>
          {previousItem && (
            <button onClick={() => navigate(`/product/${previousItem}`)}>
              Prev
            </button>
          )}
          {nextItem && (
            <button
              className='pl-4'
              onClick={() => navigate(`/product/${nextItem}`)}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
