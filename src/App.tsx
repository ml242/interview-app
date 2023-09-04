import Navbar from "./components/headerbar";
import GridComponent from "./components/gridcomponent";
import ListComponent from "./components/listcomponent";
import Loader from "./components/loader";

import { useProducts } from "./context/ProductsProvider";
import useConnect from "./connect";

import "./App.css";

function App() {
  const { filteredProducts, products } = useProducts();
  const { viewType } = useConnect();

  if (!products) return <Loader />;

  return (
    <>
      <Navbar />
      <div className='px-8 h-[calc(100vh-116px)] overflow-scroll no-scrollbar'>
        {viewType === "grid" ? (
          <GridComponent products={filteredProducts || products} />
        ) : (
          <ListComponent products={filteredProducts || products} />
        )}
      </div>
    </>
  );
}

export default App;
