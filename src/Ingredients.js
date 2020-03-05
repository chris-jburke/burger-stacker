import React from 'react';

export default function Ingredients(props) {

	return (
		<ul>
			{props.ingredients.map((ingredient, i) => (
				<li key={`ingredient-${i}`} onClick={(e) => (
					props.addLayer(e, ingredient)
				)
				}>{ingredient.name}</li>
			))}
		</ul>
	)
};