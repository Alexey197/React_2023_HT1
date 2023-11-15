import { Component } from "react";
import CartItem  from "./components/CartItem";

export default class App extends Component{
	state = { 
		items: [
			{ id: 1, title: 'Some item', min: 1, max: 10, value: 5 },
			{ id: 2, title: 'Other item', min: 1, max: 9, value: 4 },
			{ id: 5, title: 'One more item', min: 2, max: 9, value: 3 }
		]
	};

	setItemValue = (id, newValue) => {
		let items = this.state.items.map(item => item.id !== id ? item : {
			...item, value: newValue
		});

		this.setState({ items });
	}

	render(){
		let itemsElems = this.state.items.map(item => <CartItem 
			key={item.id} 
			item={item} 
			changed={this.setItemValue}
		/>)
	
		return <div>
			<table className="table table-bordered">
				<tbody>
					{itemsElems}
				</tbody>
			</table>
		</div>;
	}
}