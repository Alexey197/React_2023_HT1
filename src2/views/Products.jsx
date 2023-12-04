import useStores from "../hooks/useStores";
import useApi from "../hooks/useApi";
import If from "../components/If";
import { Link } from "react-router-dom";

function Products() {
  const [cartStore] = useStores("cart");
  const response = useApi("products.all");

  return (
    <div>
      <h1>Products</h1>
        {response.done && <div className="row">
          {response.data.map((product) => (
            <div 
              className="col m-3" 
              key={product.id}
            >
              <h2>{product.title}</h2>
              <Link to={`/catalog/:${product.id}`}>Карточка товара</Link>
              <button type="button" onClick={() => cartStore.add(product.id)}>Add</button>
            </div>
          ))}
        </div>}
    </div>
  );
}

export default Products;
