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
    <div className='w-full bg-white px-16'>
      <div className='flex max-w-full items-center basis-full space-between'>
        <button onClick={() => navigate("/")} className='flex flex-grow'>
          Back
        </button>
        <div className='flex flex-end'>
          {previousItem && (
            <button onClick={() => navigate(`/product/${previousItem}`)}>
              Prev
            </button>
          )}
          {nextItem && (
            <button onClick={() => navigate(`/product/${nextItem}`)}>
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
