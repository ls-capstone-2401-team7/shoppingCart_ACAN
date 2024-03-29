import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import AddProductForm from "./components/AddProductForm";
import data from "./mockData/data";
import { useState } from "react";

const App = () => {
  const [products, setProducts] = useState(data);
  const [isFormDisplayed, setIsFormDisplayed] = useState(false);
  const [cartState, setCartState] = useState([]);

  const handleSubmit = (newObj, callback) => {
    setProducts((prev) => prev.concat(newObj));
    if (callback) {
      callback();
    }
  };

  const handleIsFormDisplayed = () => {
    setIsFormDisplayed(!isFormDisplayed);
  };

  const handleAddToCart = (productId) => {
    setProducts((oldProducts) => {
      return oldProducts.map((product) => {
        if (product.id === productId) {
          const revisedProduct = { ...product, quantity: product.quantity - 1 };
          const itemInCart = cartState.find(
            (product) => product.id === productId,
          );

          if (itemInCart) {
            setCartState(prevCart => {
              return prevCart.map(product => {
                if (product.id === itemInCart.id) {
                  return { ... product, quantity: product.quantity + 1}
                } 
                return product
              });
            });
          } else {
            setCartState((prev) => prev.concat({ ...product, quantity: 1 }));
          }

          return revisedProduct;
        } else {
          return product;
        }
      });
    });
  };

  const handleClickUpdate = () => {

  }

  return (
    <div id="app">
      <Header cartState={cartState} />
      <main>
        <ProductList products={products} onHandleAddToCart={handleAddToCart} />
        <AddProductForm
          handleSubmit={handleSubmit}
          isFormDisplayed={isFormDisplayed}
          onIsFormDisplayed={handleIsFormDisplayed}
        />
      </main>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(React.createElement(App));

// npm intellisense
// change just the name and price, NOT the quantity. 
/*
 * make edit form 
 * with edits, change name and price in cart (if there) 
 */