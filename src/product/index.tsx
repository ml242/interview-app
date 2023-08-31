import { useParams } from 'react-router-dom';
import { useProducts } from '../context/ProductsProvider';

const Product = () => {
    const { id } = useParams();
    const { getProduct } = useProducts();
    const product = getProduct(id || ''); 
    
    if (!product) return <h1>Product not found</h1>;

    return (
      <h1>Hello the id is 
        {product.id}
      </h1>
    );
  }

  export default Product;