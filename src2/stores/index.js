import CartStore from "./cart"
import UserStore from "./user"

const stores = {
  cart: new CartStore,
  user: new UserStore
}

export default stores