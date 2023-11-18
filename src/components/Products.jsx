import { useContext, useEffect, useState } from "react"
import ApiContext from "../context/api"
function Product() {
  let api = useContext(ApiContext)
  const [ products, setProducts ] = useState([])

  useEffect(() => {
    api.products.all().then(products => setProducts(products))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  return <div>
    <h2>Catalod</h2>
    <div className="row">
      {products.map(pr => <div key={pr.id} className="col col-2 m3">
        <h3>{ pr.title }</h3>
      </div>)}
    </div>
  </div>
}

export default Product