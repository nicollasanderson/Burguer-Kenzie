import "./style.css";

function Product({ product, addToCart }) {
  console.log();
  return (
    <div
      className={
        product.name.includes("Ovo")
          ? "productCard ovoImgFix"
          : product.category === "Bebidas"
          ? "productCard drinksImgFix"
          : "productCard"
      }
    >
      <figure>
        <img src={product.img} alt="Lanche" />
        <figcaption className="hidden">Um lanche bem dahora</figcaption>
      </figure>

      <div className="divInfosProduct">
        <h3>{product.name}</h3>
        <p className="cateforyProductP">{product.category}</p>
        <p className="priceProductP">{`R$ ${product.price}`}</p>
        <button className="buttonAddCart" onClick={() => addToCart(product)}>
          Adicionar
        </button>
      </div>
    </div>
  );
}

export default Product;
