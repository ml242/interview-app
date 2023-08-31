import Navbar from "./components/headerbar";
import GridComponent from "./components/gridcomponent";
import ListComponent from "./components/listcomponent";

import { useProducts } from "./context/ProductsProvider";
import useConnect from "./connect";

import "./App.css";

function App() {
  const { products } = useProducts();
  const { viewType } = useConnect();

  if (!products) return <>Loading</>;

  return (
    <>
      <Navbar />
      {viewType === "grid" ? (
        <GridComponent products={products} />
      ) : (
        <ListComponent products={products} />
      )}
    </>
  );
}

export default App;
