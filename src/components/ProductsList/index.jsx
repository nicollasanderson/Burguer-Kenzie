import Product from "../Product";
import "./style.css";

function ProductsList({ products, addToCart }) {
  if (products.length === 0) {
    return <></>;
  } else {
    return (
      <div className="divProductList">
        <ul>
          {products.map((element) => (
            <li key={element.id}>
              <Product product={element} addToCart={addToCart} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ProductsList;
