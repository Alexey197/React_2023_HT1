import { useState, useCallback } from "react";
import CartItem  from "./components/CartItem";
import SettingContext from "./components/context/settings";

export default function App() {
	let [ items, setItems ] = useState([
		{ id: 1, title: 'Some item', min: 10, max: 30, value: 10 },
		{ id: 2, title: 'Other item', min: 1, max: 9, value: 4 },
		{ id: 5, title: 'One more item', min: 2, max: 9, value: 3 }
	]);

	const [ lang, setLang ] = useState('ru')

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

	return <SettingContext.Provider value={lang}>
		<div>
		<table className="table table-bordered">
			<tbody>
				{itemsElems}
			</tbody>
		</table>
		<footer>
      <button onClick={() => setLang('ru')} disabled={lang == 'ru'}>ru</button>
      <button onClick={() => setLang('en')} disabled={lang == 'en'}>en</button>
    </footer>
	</div>;
	</SettingContext.Provider>
}