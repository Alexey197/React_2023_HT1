import Products from "../views/Products"
import Cart from "../views/Cart"

const routes = [
  {
    path: '/',
    element: <Products />
  },
  {
    path: '/cart',
    element: <Cart />
  }
]

export default routes