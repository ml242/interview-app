import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { API_URL } from "../constants/globals";
import { Product, ProductsType } from "../constants/types";

export type ProductsContextType = {
  products: ProductsType | undefined;
  getProduct: (id: string) => Product | undefined;
  getNext: (id: string) => string | undefined;
  getPrevious: (id: string) => string | undefined;
  tags: string[] | undefined;
  handleFilters: (items: string[] | undefined) => void;
  filteredProducts: ProductsType | undefined;
  handleSearch: (item: string) => void;
  options: {
    value: string;
    label: string;
  }[];
};

const ProductsContext = createContext<ProductsContextType>(
  {} as ProductsContextType
);

type Props = {
  children: ReactNode;
};

export const useProducts = () => useContext(ProductsContext);

const ProductsProvider = ({ children }: Props) => {
  const [products, setProducts] = useState<ProductsType>();
  const [filteredProducts, setFilteredProducts] = useState<ProductsType>();
  const [tags, setTags] = useState<string[]>();
  const [options, setOptions] = useState<{ value: string; label: string }[]>(
    []
  );

  const getProducts = async () => {
    try {
      const res = await fetch(API_URL, { cache: "no-store" });
      const data = await res.json();
      setProducts(data.devices);
    } catch (error) {
      console.log("error fetching products", error);
    }
  };

  const getProduct = (id: string): Product | undefined => {
    return products?.find((item: Product) => item.id === id);
  };

  const getIndex = (id: string) => products?.findIndex((obj) => obj.id === id);

  const getNext = (id: string) => {
    const currentIndex = getIndex(id);
    const hasProducts = products && typeof currentIndex !== "undefined";

    if (!hasProducts) return;

    if (products.length > currentIndex + 1) {
      return products[currentIndex + 1].id;
    }

    return products[0].id;
  };

  const getPrevious = (id: string) => {
    const currentIndex = getIndex(id);
    const hasProducts = products && typeof currentIndex !== "undefined";

    if (!hasProducts) return;

    if (currentIndex - 1 > 0) {
      return products[currentIndex - 1].id;
    }

    return products[products.length - 1].id;
  };

  const getTags = () => {
    if (!products) return false;
    const allTags = products?.reduce((acc: string[], curr: Product) => {
      if (!acc.includes(curr.line.name)) {
        return acc.concat(curr.line.name);
      }
      return acc;
    }, []);
    setTags(allTags);
  };

  const handleFilters = useCallback(
    (items?: string[]) => {
      if (typeof items === "undefined" || typeof products === "undefined")
        return setFilteredProducts(undefined);

      const filteredItems = products.filter((product) =>
        items.includes(product.line.name)
      );

      setFilteredProducts(filteredItems);
    },
    [products]
  );

  const handleSearch = useCallback(
    (input?: string) => {
      if (products && input && input.length > 2) {
        const filteredNames = products.filter((product) => {
          return product.product.name
            .toLocaleLowerCase()
            .includes(input.toLocaleLowerCase());
        });
        const filteredTags = products.filter((product) => {
          return product.product.abbrev
            .toLocaleLowerCase()
            .includes(input.toLocaleLowerCase());
        });

        const results = new Set([...filteredNames, ...filteredTags]);
        const arr: {
          label: string;
          value: string;
        }[] = [];

        results.forEach((item) => {
          arr.push({
            // label: { name: item.product.name, abbrev: item.product.abbrev }, i need an autocomplete that can do this

            label: item.product.name,
            value: item.id,
          });
        });
        setOptions(arr);
      }
    },
    [products]
  );

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getTags();
  }, [products]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        getProduct,
        getNext,
        getPrevious,
        tags,
        handleFilters,
        filteredProducts,
        handleSearch,
        options,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
