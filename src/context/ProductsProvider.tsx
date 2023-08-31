import { ReactNode, createContext, useContext, useState, useEffect } from 'react';
import { ProductsType } from '../constants/types';

export type ProductsContextType = {
    products: ProductsType | undefined
};

const ProductsContext = createContext<ProductsContextType>({} as ProductsContextType);

type Props = {
    children: ReactNode;
};

export const useProducts = () => useContext(ProductsContext);

const ProductsProvider = ({ children }: Props) => {
  const [ products, setProducts ] = useState<ProductsType>();

  const getProducts = async () => {
    try {
        const res = await fetch('https://static.ui.com/fingerprint/ui/public.json', { cache: 'no-store' })
        const data = await res.json();
        setProducts(data.devices);
    } catch (error) {
      console.log('error fetching products', error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [])
  
  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;