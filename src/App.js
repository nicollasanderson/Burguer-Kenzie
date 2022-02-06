import logo from "./img/BurguerKenzieLogo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    async function getData() {
      const request = fetch(
        "https://hamburgueria-kenzie-json-serve.herokuapp.com/products"
      );
      const reponse = await request;
      const data = await reponse.json();

      setProducts(data);
    }
    getData();
  }, []);

  function addToCart(item) {
    const find = currentSale.find((element) => element === item);
    if (find === undefined) {
      setCurrentSale([...currentSale, item]);
    }
  }

  function handleClick(item) {
    const filtered = currentSale.filter((element) => element !== item);
    setCurrentSale(filtered);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="containerHeader">
          <img src={logo} alt="Logo" />
          <div className="divSearch">
            <input
              type="text"
              placeholder="Digite sua pesquisa"
              id="searchInput"
              onChange={(e) => setFilteredProducts(e.target.value)}
            />
            <button>Pesquisar</button>
          </div>
        </div>
      </header>

      <main>
        <ProductsList products={products} addToCart={addToCart} />
        <Cart currentSale={currentSale} handleClick={handleClick} />
      </main>
    </div>
  );
}

export default App;
