import React from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import ProductList from './components/ProductList'
import AddProductForm from './components/AddProductForm'
import data from './mockData/data'
import { useState } from 'react'
const App = () => {
  const [products, setProducts] = useState(data);
  const [isFormDisplayed, setIsFormDisplayed] = useState(false)
  const [cartState, setCartState] = useState([])
  
  
  const handleSubmit = (newObj, callback) => {
    setProducts(prev => prev.concat(newObj))
    if (callback) {
      callback()
    }    
  }

  const handleIsFormDisplayed = () => {
    setIsFormDisplayed(!isFormDisplayed)
  }

  const handleAddToCart = (productId) => {
    const newProdcuts = products.map(product => {
      if (product.id === productId) {
        const revisedProduct = {...product, quantity: product.quantity - 1 }
        const itemInCart = cartState.find(product => product.id === productId)

        if (itemInCart) {
          itemInCart.quantity = itemInCart.quantity + 1
        } else {
          setCartState(prev => prev.concat({...product, quantity: 1}))
        }
    
        return revisedProduct
      } else {
        return product
      }
    })
    setProducts(newProdcuts)
  }

  return (
    <div id="app">
    <Header cartState={cartState}/>
    <main>
      <ProductList products={products} onHandleAddToCart={handleAddToCart}/>
      <AddProductForm handleSubmit={handleSubmit} isFormDisplayed={isFormDisplayed} onIsFormDisplayed={handleIsFormDisplayed}/>
    </main>
    </div>
  )
};

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(React.createElement(App));

// npm intellisense 