import Navbar from "./components/headerbar";
import GridComponent from "./components/gridcomponent";
import ListComponent from "./components/listcomponent";

import { useProducts } from "./context/ProductsProvider";
import useConnect from "./connect";

import "./App.css";

function App() {
  const { filteredProducts, products } = useProducts();
  const { viewType } = useConnect();

  if (!products) return <>Loading</>;

  return (
    <>
      <Navbar />
      {viewType === "grid" ? (
        <GridComponent products={filteredProducts || products} />
      ) : (
        <ListComponent products={filteredProducts || products} />
      )}
    </>
  );
}

export default App;
