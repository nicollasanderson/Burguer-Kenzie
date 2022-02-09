import Product from "../Product";
import "./style.css";

function ProductsList({ products, addToCart, filteredProducts, search }) {
  if (products.length === 0) {
    return <></>;
  } else {
    return (
      <div className="divProductList">
        {filteredProducts.length > 0 && (
          <h1 className="searchResult">
            Resultados para: <p className="pSearch">{search}</p>{" "}
          </h1>
        )}

        {!filteredProducts ? (
          <>
            <h1 className="searchResult">
              Resultados para: <p className="pSearch">{search}</p>{" "}
            </h1>
            <div>nada encontrado</div>
          </>
        ) : (
          <ul>
            {products.map((element) => (
              <li key={element.id}>
                <Product product={element} addToCart={addToCart} />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default ProductsList;
