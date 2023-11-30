import Products from "../views/Products"
import Product from "../views/Product"
import Cart from "../views/Cart"

const routes = [
  {
    path: '/',
    element: <Products />
  },
  {
    path: '/catalog/:id',
    element: <Product />
  },
  {
    path: '/cart',
    element: <Cart />
  }
]

export default routes