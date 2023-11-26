import { useEffect, useState } from "react"
import useApi from "../hooks/useApi"

function Product() {
  let { data } = useApi('products.all')

  return <div>
    <h2>Catalod</h2>
    <div className="row">
      {data instanceof Array && data.map(pr => <div key={pr.id} className="col col-2 m3">
        <h3>{ pr.title }</h3>
      </div>)}
    </div>
  </div>
}

export default Product