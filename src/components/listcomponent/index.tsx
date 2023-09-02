import { ProductsType } from "../../constants/types";
import { ImageSource } from "../../constants/globals";
export default function Page({ products }: { products: ProductsType }) {
  if (!products) return <h5>Api error</h5>;
  const listItems = products.map((item) => {
    return (
      <a className='flex flex-col' href={`/product/${item.id}`} key={item.id}>
        <li className='h-8 flex flex-row gap-4 border-[0] border-b border-solid text-[#00000073] text-[14px] border-coolgray-200 items-center'>
          <img
            className='basis-2/10'
            src={`${ImageSource}${item.icon.id}_${item.icon.resolutions[0][0]}x${item.icon.resolutions[0][1]}.png`}
          />
          <div className='flex basis-1/2'>{item.line.name}</div>
          <div className='flex h-[20px] lg:basis-1/2'>
            <p className='sm:overflow-hidden '>{item.product.name}</p>
          </div>
        </li>
      </a>
    );
  });

  return <ul className='w-full px-8'>{listItems}</ul>;
}
