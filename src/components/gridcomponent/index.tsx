import { ProductsType } from "../../constants/types";
import Card from "./card";
import Loader from "../loader";

export default function Page({ products }: { products: ProductsType }) {
  if (!products) return <Loader />;

  const listItems = products.map((item, i) => (
    <Card tabIndex={i + 5} key={item.id} item={item} />
  ));

  return (
    <div className='w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-[16px] pt-[16px] pb-0 relative'>
      {listItems}
    </div>
  );
}
