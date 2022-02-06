import "./style.css";
import img from "../../img/hamburgui.png";

function Cart({ currentSale, handleClick }) {
  return (
    <div className="divContainerCart">
      <div className="headerCart">
        <h2>Carrinho de compras</h2>
      </div>
      <div className="cartProductList">
        {currentSale.length === 0 ? (
          <div className="emptyCart">
            <h3>Sua sacola está vazia</h3>
            <p>Adicione itens</p>
          </div>
        ) : (
          currentSale.map((element) => (
            <div key={element.id} className="cartProduct">
              <div className="cartContainerInfos">
                <figure>
                  <img src={img} alt="" />
                </figure>
                <div className="cartProductInfo">
                  <h1>{element.name}</h1>
                  <p>{element.category}</p>
                </div>
              </div>

              <button onClick={() => handleClick(element)}>Remover</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Cart;
