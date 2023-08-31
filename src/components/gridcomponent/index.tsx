import { ProductsType } from '../../constants/types';
import Card from './card';

export default function Page({ products }: { products: ProductsType }) {

  if (!products) return <h5>Api error</h5>;
  
  return (
    <div className="w-full mt-40">
      <ul className="container w-full">
          {products.map((item) => 
            <Card           
              key={item.id}                         
              icon={item.icon} 
              name={item.line.name} 
            />
          )}
      </ul>
    </div>
  );
}