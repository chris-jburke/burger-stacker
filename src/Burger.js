import React from 'react';

export default function Burger(props) {
	return (
		<ul className="burger">
			{props.burger.map((layer, i) => (
				<li key={`layer-${i}`}>{layer.name}</li>
			))}
		</ul>

	)

}