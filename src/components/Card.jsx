import React, { useContext } from 'react';
import AppContext from '../context';

export const Card = ({ name, src, price, contain, weight, id }) => {
	const { cartItems, addItemToCart, removeItemFromCart, isItemAdded } = useContext(AppContext);
	let obj = cartItems.find(x => x.id === id)
	const onClickPlus = () => {
		addItemToCart({ name, src, price, contain, weight, id });
	};
	const onClickMinus = () => {
		removeItemFromCart(obj);
	}

	return (
		<div className="item">
			<div className="top_item">
				<img src={src} alt="menu" />
				<div className="info">
					<div className="name">{name}</div>
					<div className="weight">Вес: {weight} г</div>
				</div>
				<div className="contain">{contain}</div>
			</div>
			{isItemAdded(id) ?
				<div className="bottom_item">
					<div onClick={onClickMinus} className="minus">-</div>
					<div className="price"> {obj.price * obj.count} ₽</div>
					<div onClick={onClickPlus} className="plus">+</div>
				</div>
				:
				<div className="bottom_item">
					<div className="price">{price} ₽</div>
					<div onClick={onClickPlus} className="button">
						<div className="button_title">В корзину </div>
						<img src="/img/menu/Buy.svg" alt="buy" />
					</div>
				</div>
			}

		</div>
	);
};
