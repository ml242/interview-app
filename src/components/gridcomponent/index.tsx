import { ProductsType } from "../../constants/types";
import Card from "./card";

export default function Page({ products }: { products: ProductsType }) {
  if (!products) return <>Loading...</>;

  const listItems = products.map((item) => <Card key={item.id} item={item} />);

  return (
    <div className='w-full grid grid-cols-6 gap-[16px] pt-[16px] pb-0 px-[32px] relative'>
      {listItems}
    </div>
  );
}
