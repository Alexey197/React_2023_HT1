import E404 from "../components/errors/E404";
import useApi from "../hooks/useApi";
import { useParams } from "react-router-dom"


function Product() {
  const id = useParams()
  const { done, data, error } = useApi('products.one', id)
  console.log(data);

  if(!done) {
    return <div>Loading...</div>
  }

  if(error !== null) {
    return <E404 title="Product cant be loaded"/>
  }

  return <div>
  <h1>Product item</h1>
</div>
}

export default Product