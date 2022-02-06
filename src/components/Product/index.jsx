import img from "../../img/hamburgui.png";
import "./style.css";

function Product({ product, addToCart }) {
  return (
    <div className="productCard">
      <figure>
        <img src={img} alt="Lanche" />
        <figcaption className="hidden">Um hamburgão bem dahora</figcaption>
      </figure>

      <div className="divInfosProduct">
        <h3>{product.name}</h3>
        <p className="cateforyProductP">{product.category}</p>
        <p className="priceProductP">{`R$ ${product.price}`}</p>
        <button onClick={() => addToCart(product)}>Adicionar</button>
      </div>
    </div>
  );
}

export default Product;
