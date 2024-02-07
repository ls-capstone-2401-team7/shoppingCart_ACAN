const Product = ({ title, quantity, price, onHandleAddToCart, id }) => {
  console.log(onHandleAddToCart)
  const handleAddToCart = () => {
    onHandleAddToCart(id)
  }
  return (
    <li className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">${price}</p>
        <p className="quantity">{quantity} left in stock</p>
        <div className="actions product-actions">
          {quantity === 0 ? <button disabled className="add-to-cart">Add to Cart</button> : <button onClick={handleAddToCart}  className="add-to-cart">Add to Cart</button>}
          <button className="edit">Edit</button>
        </div>
        <button className="delete-button">
          <span>X</span>
        </button>
      </div>
    </li>
  );
};

export default Product;
