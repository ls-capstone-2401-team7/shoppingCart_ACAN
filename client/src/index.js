import React from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import ProductList from './components/ProductList'
import AddProductForm from './components/AddProductForm'
import data from './mockData/data'
import { useState } from 'react'
const App = () => {
  const [products, setProducts] = useState(data);
  
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   setProducts(data.concat(newObj));
  // }

  return (
    <div id="app">
    <Header />
    <main>
      <ProductList products={products}/>
      <AddProductForm setProducts={setProducts}/>
    </main>
    </div>
  )
};

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(React.createElement(App));

// npm intellisense 