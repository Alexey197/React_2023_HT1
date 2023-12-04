import PropTypes from "prop-types";
import { observer } from "mobx-react-lite"
import useStores from "../../hooks/useStores";
import { Link } from "react-router-dom";

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};

function ProductCard({ product }) {
  const [cartStore] = useStores('cart')
  const inCard = cartStore.has(product.id)

  return <div key={product.id}>
     <h2>{product.title}</h2>
     {
       inCard && 
       <button type="button" onClick={() => cartStore.remove(product.id)} className="btn btn-danger">
         Remove
       </button>
     }
     {
        !inCard && 
        <button type="button" onClick={() => cartStore.add(product.id)} className="btn btn-success">
          Add
        </button>
      }
    <hr />
    <Link to={`/catalog/${product.id}`}>Read more</Link>
  </div>
}

const StoredProductCard = observer(ProductCard)

export default StoredProductCard
