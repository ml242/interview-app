import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductsProvider";
import Navbar from "./../components/headerbar";
import ProductCard from "./productcard";

const Product = () => {
  const { id = "" } = useParams();
  const { getProduct } = useProducts();
  const product = getProduct(id);

  if (!product) return <h1>Product not found</h1>;

  return (
    <>
      <Navbar />
      <ProductCard product={product} />
    </>
  );
};

export default Product;
