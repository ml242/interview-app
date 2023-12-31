import { useNavigate } from "react-router-dom";
import { Product } from "../../../constants/types";
import { ImageSource } from "../../../constants/globals";

const Card = ({ item, tabIndex }: { tabIndex: number; item: Product }) => {
  const navigate = useNavigate();
  const imageIndex = item.icon.resolutions.length - 1;

  return (
    <div
      tabIndex={tabIndex}
      className='flex flex-col h-full relative shadow-sm rounded hover:brightness-95 hover:bg-gray-100/25 outline-[#016fff]'
    >
      <div className='flex flex-col items-center justify-center relative'>
        <div className='bg-gray-100/25 flex relative w-full p-[8px]'>
          <a
            className='w-full h-[100px] object-contain cursor-pointer'
            onClick={() => navigate(`/product/${item.id}`)}
          >
            <div className='absolute text-[12px] h-[16px] right-1 bg-white px-2 text-[#006fff]'>
              {item.line.name}
            </div>
            <img
              className='w-full h-[100px] object-contain'
              alt={`${item.product.name} image`}
              src={`${ImageSource}${item.icon.id}_${item.icon.resolutions[imageIndex][0]}x${item.icon.resolutions[imageIndex][1]}.png`}
            />
          </a>
        </div>
        <div className='w-full flex-grow flex flex-col p-2 bg-white-100'>
          <div className='relative mt-[-1.00px] h-[40px] whitespace-nowrap overflow-hidden'>
            <p className='text-black text-opacity-75 text-xl'>
              {item.product.name}
            </p>
          </div>
          {item.shortnames[0] && (
            <div className='relative mt-[-1.00px] whitespace-nowrap overflow-hidden'>
              <p className='text-gray-600 text-opacity-50 text-sm'>
                {item.shortnames[0]}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
