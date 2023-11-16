import PropTypes from 'prop-types';
import { useContext } from 'react';
import SettingContext from './context/settings';
import dictionary from './constants/dictionary';

Circle.propTypes = {
	min: PropTypes.number.isRequired,
	max: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
	changed: PropTypes.func.isRequired
}

export default function Circle({ min, max, value, changed }) {
	let size = value * 20 + "px";
	let circleStyles = { width: size, height: size };
	let canDec = value > min;
	let canInc = value < max;
	let lang = useContext(SettingContext)

	function increase(){
		if(canInc){
			changed(value + 1);
		}
	}

	function decrease(){
		if(canDec){
			changed(value - 1);
		}
	}

	function onUserInput(e){
		let nv = Math.max(Math.min(parseInt(e.target.value), max), min);
		changed(nv);
	}

	return <div className="container my-2">
		<div>
			<button onClick={decrease} className="btn btn-danger app-decrease" disabled={!canDec}>-</button>
			<strong className="app-value mx-2">{ value }</strong> 
			{ false && <input type="text" value={value} onChange={onUserInput} />}
			<button onClick={increase} className="btn btn-success app-increase" disabled={!canInc}>+</button>
		</div>
		<hr />
		<div className="app-circle my-3" style={circleStyles}></div>
		{
			( !canDec || !canInc ) &&
			<div className="alert alert-danger mt-3">
				{ !canDec && dictionary.isMinimum[lang] }
				{ !canInc && dictionary.isMaximum[lang] }
			</div>
		}
	</div>;
}