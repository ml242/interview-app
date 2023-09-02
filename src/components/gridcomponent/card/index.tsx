import { Product } from "../../../constants/types";
import { ImageSource } from "../../../constants/globals";

const Card = ({ item }: { item: Product }) => {
  const imageIndex = item.icon.resolutions.length - 1;

  return (
    <div className='flex flex-col h-full relative'>
      <div className='flex flex-col items-center justify-center relative'>
        <div className='bg-gray-100/25 flex relative w-full p-[4px]'>
          <img
            className='w-full h-[84px] object-contain'
            alt={`${item.product.name} image`}
            src={`${ImageSource}${item.icon.id}_${item.icon.resolutions[imageIndex][0]}x${item.icon.resolutions[imageIndex][1]}.png`}
          />
        </div>
        <div className='flex-grow flex flex-col justify-between p-6 bg-white-100'>
          <div className='relative w-fit mt-[-1.00px] [font-family:var(--web-caption-font-family)] font-[number:var(--web-caption-font-weight)] text-[color:var(--color-primary-web-unifi-color-ublue-06)] text-[length:var(--web-caption-font-size)] tracking-[var(--web-caption-letter-spacing)] leading-[var(--web-caption-line-height)] whitespace-nowrap '>
            {item.product.name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
