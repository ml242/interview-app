// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from './components/navigation';
import SearchBar from './components/searchbar';
import GridComponent from './components/gridcomponent';
import ListComponent from './components/listcomponent';

import { useProducts } from './context/ProductsProvider';
import useConnect from './connect';

import './App.css'

function App() {
  const { products } = useProducts();
  const { viewType } = useConnect();
  console.log(viewType);

  if (!products) return <>Loading</>

  return (
    <>
      <Navbar />
      <SearchBar />
      {viewType=== 'grid' 
        ? <GridComponent products={products} /> 
        : <ListComponent products={products} />
      }
    </>
  )
}

export default App
