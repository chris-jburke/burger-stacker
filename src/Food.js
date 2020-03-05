import React, {useState} from 'react';

export default function Food(props) {
	const [newfood, setNewfood] = useState('')
	const [newcolor, setNewcolor] = useState('')
	let tempFood = (e) => {
		setNewfood(e.target.value);
	}
	let tempColor = (e) => {
		setNewcolor(e.target.value);
	}
	return (
		<div>
			<label htmlFor="food">Name:</label>
			<input type="text" name="food" onChange={tempFood} />
			<label htmlFor="color">Color:</label>
			<input type="text" name="color" onChange={tempColor} />
			<button onClick={(e) => {
				props.addIngredient(e, newfood, newcolor);
			}}>Add</button>
		</div>
	)	
}