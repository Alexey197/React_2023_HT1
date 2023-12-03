import useStores from "../hooks/useStores";
import { observer } from "mobx-react-lite";

function Cart() {
  const [ cartStore ] = useStores('cart')

  return <div className="alert alert-success">
      <div><strong>In Cart:</strong> {cartStore.cnt}</div>
      <div><strong>Total:</strong> {cartStore.total}</div>
  </div>
}

const StoredCart = observer(Cart)
export default StoredCart