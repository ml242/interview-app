import { ProductsType } from "../../constants/types";
import { ImageSource } from "../../constants/globals";
export default function Page({ products }: { products: ProductsType }) {
  if (!products) return <h5>Api error</h5>;
  const listItems = products.map((item) => {
    return (
      <a href={`/product/${item.id}`} key={item.id}>
        <li className='flex flex-row gap-4 border-[0] border-b border-solid border-coolgray-200 items-center'>
          <img
            className='basis-2/10'
            src={`${ImageSource}${item.icon.id}_${item.icon.resolutions[0][0]}x${item.icon.resolutions[0][1]}.png`}
          />
          <div className='basis-1/2'>{item.line.name}</div>
          <div className='basis-1/2'>{item.product.name}</div>
        </li>
      </a>
    );
  });

  return (
    <div className='w-full'>
      <ul className='container w-full'>{listItems}</ul>
    </div>
  );
}
