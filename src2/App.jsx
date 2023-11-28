import { useRoutes } from "react-router-dom"
import routes from "./routes"

export default function App() {
	const element = useRoutes(routes)

	return <div>
		<header>
			<div className="container">
				Logo
				Cart
			</div>
		</header>
		<div>
			<div className="container">
				{ element }
			</div>
		</div>
		<footer>
			<div className="container">
				footer
				Cart
			</div>
		</footer>
	</div>
	
}