const Header = ({ cartState }) => {
  console.log(cartState)
  return (
    <header>
      <h1>The Shop!</h1>
      <div className="cart">
        <h2>Your Cart</h2>
        {cartState.length === 0 && <p>Your cart is empty</p>}
        {cartState.length === 0 && <p>Total: $0</p>}
        {cartState.length === 0 && <button className="checkout" disabled>
          Checkout
        </button>}
      </div>
    </header>
  );
};

export default Header;
