import "./style.css";
import { useState, useEffect } from "react";

function Cart({ currentSale, handleClick, setCurrentSale }) {
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    if (currentSale.length > 0) {
      const fitleredPrice = currentSale.map((e) => e.price);
      setCartTotal(fitleredPrice.reduce((a, b) => a + b).toFixed(2));
    }
  }, [currentSale]);

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
          <div className="containerCarList">
            {currentSale.map((element) => (
              <div key={element.id} className="cartProduct">
                <div className="cartContainerInfos">
                  <figure>
                    <img src={element.img} alt="" />
                  </figure>
                  <div className="cartProductInfo">
                    <h1>{element.name}</h1>
                    <p>{element.category}</p>
                  </div>
                </div>
                <button
                  className="buttonRemove"
                  onClick={() => handleClick(element)}
                >
                  Remover
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      {currentSale.length > 0 && (
        <div className="divTotalCart">
          <div className="divTotalCartText">
            <p>Total</p>
            <p className="pPrice">R$ {cartTotal}</p>
          </div>
          <button
            className="buttonRemoveAll"
            onClick={() => setCurrentSale([])}
          >
            Remover todos
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
