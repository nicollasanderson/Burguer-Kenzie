import logo from "./img/BurguerKenzieLogo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [search, setSearch] = useState("");
  const [searchFinal, setSearchFinal] = useState("");

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

  function filterItens(search) {
    const filtered = products.filter((element) =>
      element.name
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .includes(
          search
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
        )
    );

    const filteredCategory = products.filter((element) =>
      element.category
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .includes(
          search
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
        )
    );

    if (filtered.length === 0) {
      setFilteredProducts(filteredCategory);
    } else {
      setFilteredProducts(filtered);
    }

    if (filtered.length === 0 && filteredCategory.length === 0) {
      setFilteredProducts(false);
    }
    setSearchFinal(search);

    if (search === "") {
      setFilteredProducts([]);
    }
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
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={() => filterItens(search)}>Pesquisar</button>
          </div>
        </div>
      </header>

      <main className="mainContainer">
        <ProductsList
          products={filteredProducts.length > 0 ? filteredProducts : products}
          addToCart={addToCart}
          filteredProducts={filteredProducts}
          search={searchFinal}
          setFilteredProducts={setFilteredProducts}
        />
        <Cart
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          handleClick={handleClick}
        />
      </main>
    </div>
  );
}

export default App;
