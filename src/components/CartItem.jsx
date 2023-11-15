import PropTypes from 'prop-types';
import Circle from './Circle'
import { memo } from 'react'

CartItem.propTypes = {
	item: PropTypes.object.isRequired,
	changed: PropTypes.func.isRequired
}

function CartItem({ item, changed }) {
	console.log('here');
	return <tr>
		<td>{ item.title }</td>
		<td>
			<Circle 
				min={item.min} 
				max={item.max} 
				value={item.value}
				changed={newVal => changed(item.id, newVal)} 
			/>
		</td>
	</tr>;
}

/* export default CartItem; */

const memoCartItem = memo(CartItem);

export default memoCartItem;