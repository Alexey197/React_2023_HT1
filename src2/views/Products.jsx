import useApi from "../hooks/useApi";
import { observer } from "mobx-react-lite"
import ProductCard from "../components/products/ProductCard";

function Products() {
  const response = useApi("products.all");

  return <div>
    <h1>Products</h1>
    {response.done && <div className="row">
      {response.data.map(product => <div className="col m-3" key={product.id}>
        <ProductCard product={product} />
      </div>) }
    </div>}
</div>
}

const StoreProduct = observer(Products)

export default StoreProduct;
