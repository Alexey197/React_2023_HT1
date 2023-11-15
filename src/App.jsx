import { useState, useCallback } from "react";
import CartItem  from "./components/CartItem";

export default function App() {
	let [ items, setItems ] = useState([
		{ id: 1, title: 'Some item', min: 10, max: 30, value: 10 },
		{ id: 2, title: 'Other item', min: 1, max: 9, value: 4 },
		{ id: 5, title: 'One more item', min: 2, max: 9, value: 3 }
	]);

	let setItemValue = useCallback(function(id, newValue){
		setItems(currentItems => currentItems.map(item => item.id !== id ? item : {
			...item, value: newValue
		}));
	}, []);

	let itemsElems = items.map(item => <CartItem 
		key={item.id} 
		item={item} 
		changed={setItemValue}
	/>)

	return <div>
		<table className="table table-bordered">
			<tbody>
				{itemsElems}
			</tbody>
		</table>
	</div>;
}