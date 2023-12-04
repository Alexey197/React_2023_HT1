import { useRoutes, Link } from "react-router-dom";
import routes from "./routes";
import Cart from "./components/Cart";
import E404 from "./components/errors/E404";

export default function App() {
  const element = useRoutes(routes);

  return (
    <div>
      <header>
        <div className="container">
					<Cart />
					Logo Cart
				</div>
      </header>
      <div>
        <div className="container">
          <div className="row">
            <div className="col col-3">
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="/">Catalog</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/cart">Cart</Link>
                </li>
              </ul>
            </div>
            <div className="col col-9"></div>
          </div>
          {element ?? <E404 />}
        </div>
      </div>
      <footer>
        <div className="container">footer Cart</div>
      </footer>
    </div>
  );
}
