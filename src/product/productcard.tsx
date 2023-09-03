import { Product } from "../constants/types";
import { ImageSource } from "../constants/globals";
import OpenJson from "../components/openjson";

const ProductCard = ({ product }: { product: Product }) => {
  const imageIndex = product.icon.resolutions.length - 1;

  const maxSpeed =
    product?.unifi?.network?.radios?.na?.maxSpeedMegabitsPerSecond ||
    product?.unifi?.network?.radios?.ng?.maxSpeedMegabitsPerSecond ||
    product?.unifi?.network?.ethernetMaxSpeedMegabitsPerSecond;

  const numPorts = product?.unifi?.network?.numberOfPorts;

  return (
    <>
      <div className='flex pt-4 w-4/6 mx-auto gap-x-8 min-h-full h-72'>
        <div className='p-4 min-h-max bg-gray-100/25 rounded-[8px]'>
          <div
            className='w-[260px] h-[260px]'
            style={{
              backgroundImage: `url(${ImageSource}${product.icon.id}_${product.icon.resolutions[imageIndex][0]}x${product.icon.resolutions[imageIndex][1]}.png)`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              height: "100%",
              minWidth: "100%",
              backgroundPosition: "center",
            }}
          />
        </div>
        <div className='flex grow basis-full'>
          <div className='flex flex-col basis-full mb-4'>
            <p className='h-[28px] text-[20px] font-bold text-[#000000d9] text-[20px] tracking-[0] leading-[28px] whitespace-nowrap'>
              {product.product.name}
            </p>
            <p className='text-[14px] font-normal text-[#00000073] text-[14px] mb-4'>
              {product.product.abbrev}
            </p>
            <ul className='flex flex-col'>
              {product?.line?.name && (
                <li className='flex flex-row space-between h-[20px] my-[6px]'>
                  <span className='flex grow text-[#000000d9] text-[14px]'>
                    Product Line
                  </span>
                  <span className='flex text-gray-600 text-opacity-50'>
                    {product.line.name}
                  </span>
                </li>
              )}
              {product?.line?.id && (
                <li className='flex flex-row space-between h-[20px] my-[6px]'>
                  <span className='flex grow text-[#000000d9] text-[14px]'>
                    ID
                  </span>
                  <span className='flex text-gray-600 text-opacity-50'>
                    {product.line.id}
                  </span>
                </li>
              )}
              {product?.product?.name && (
                <li className='flex flex-row space-between h-[20px] my-[6px]'>
                  <span className='flex grow text-[#000000d9] text-[14px]'>
                    Name
                  </span>
                  <span className='flex text-gray-600 text-opacity-50'>
                    {product.product.name}
                  </span>
                </li>
              )}
              {product?.shortnames.length > 0 && (
                <li className='flex flex-row space-between h-[20px] my-[6px]'>
                  <span className='flex grow text-[#000000d9] text-[14px]'>
                    Short Name
                  </span>
                  <span className='flex text-gray-600 text-opacity-50'>
                    {product?.shortnames[0]}
                  </span>
                </li>
              )}
              {maxSpeed && (
                <li className='flex flex-row space-between h-[20px] my-[6px]'>
                  <span className='flex grow text-[#000000d9] text-[14px]'>
                    Speed
                  </span>
                  <span className='flex text-gray-600 text-opacity-50'>
                    {maxSpeed}
                  </span>
                </li>
              )}
              {numPorts && (
                <li className='flex flex-row space-between h-[20px] my-[6px]'>
                  <span className='flex grow text-[#000000d9] text-[14px]'>
                    Number of Ports
                  </span>
                  <span className='flex text-gray-600 text-opacity-50'>
                    {numPorts}
                  </span>
                </li>
              )}
              <li className='my-4'>
                <span className='text-[#006fff] text-[14px] py-2'>
                  <OpenJson data={product} />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
