import React from 'react';
import { Card } from './Card';

export const ListItems = ({ items, isLoading, title }) => {
	if (isLoading) {
		return <div>Идёт загрузка...</div>
	}
	return (
		<div className="menu">
			<div className="menu_container">
				<div className="title">{title}</div>
				<div className="items">
					{items.map((item, index) => {
						return (
							<Card
								key={index}
								id={item.id}
								weight={item.weight}
								contain={item.contain}
								price={item.price}
								name={item.name}
								src={item.src}
							/>
						)
					})}
				</div>
			</div>
		</div>
	);
};
