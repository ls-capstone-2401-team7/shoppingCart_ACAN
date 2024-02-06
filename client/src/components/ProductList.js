import Product from "./Product";

const ProductList = ({ products }) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </ul>
    </div>
  );
};

export default ProductList;
