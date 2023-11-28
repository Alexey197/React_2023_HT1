import Products from "../views/Products"
import Cart from "../views/Cart"

const routs = [
  {
    path: '/',
    element: <Products />
  },
  {
    path: '/cart',
    element: <Cart />
  }
]

export default routs