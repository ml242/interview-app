import { ReactNode, createContext, useContext, useState, useEffect } from 'react';
import { Product, ProductsType } from '../constants/types';

export type ProductsContextType = {
    products: ProductsType | undefined,
    getProduct: (id: string) => Product | undefined
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

    const getProduct = (id: string): Product | undefined => {
      return products?.find((item: Product) => item.id === id);
    };

  useEffect(() => {
    getProducts();
  }, [])
  
  return (
    <ProductsContext.Provider value={{ products, getProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;