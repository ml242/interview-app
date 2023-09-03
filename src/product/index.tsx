import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductsProvider";
import Navbar from "./../components/headerbar";
import ProductCard from "./productcard";
import Loader from "../components/loader";

const Product = () => {
  const { id = "" } = useParams();
  const { getProduct } = useProducts();
  const product = getProduct(id);

  if (!product) return <Loader />;

  return (
    <>
      <Navbar />
      <ProductCard product={product} />
    </>
  );
};

export default Product;
