import { useState } from "react";
import EditProduct from "./EditProduct";

const Product = ({ title, quantity, price, onHandleAddToCart, id }) => {
  const handleAddToCart = () => {
    onHandleAddToCart(id);
  };

  const [editIsTrue, setEditTrue] = useState(false);

  return (
    <li className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">${price}</p>
        <p className="quantity">{quantity} left in stock</p>
        <div className="actions product-actions">
          {quantity === 0 ? (
            <button disabled className="add-to-cart">
              Add to Cart
            </button>
          ) : (
            <button onClick={handleAddToCart} className="add-to-cart">
              Add to Cart
            </button>
          )}
          <button className="edit" onClick={() => setEditTrue(!editIsTrue)}>
            Edit
          </button>
        </div>
        <button className="delete-button">
          <span>X</span>
        </button>
      </div>
      {editIsTrue && <EditProduct />}
    </li>
  );
};

export default Product;
