import { ProductsType } from "../../constants/types";
import Card from "./card";

export default function Page({ products }: { products: ProductsType }) {
  if (!products) return <>Loading...</>;

  const listItems = products.map((item) => (
    <Card key={item.id} icon={item.icon} name={item.line.name} />
  ));

  return (
    <div className='w-full'>
      <ul className='container w-full'>{listItems}</ul>
    </div>
  );
}
