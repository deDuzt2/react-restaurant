import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context';

export const Cart = () => {
	const { cartItems, addItemToCart, removeItemFromCart, fullRemoveItemFromCart } = useContext(AppContext);
	const clickPlus = (obj) => {
		addItemToCart(obj);
	}

	const clickMinus = (obj) => {
		removeItemFromCart(obj);
	}

	const clickCross = (obj) => {
		fullRemoveItemFromCart(obj);
	}

	return (
		<div className='cart'>
			<Link to="/"><div className='back_button' ><img src='/img/cart/Arrow.svg' alt="back" />к выбору блюда</div></Link>
			<div className='title'>КОРЗИНА<span>(в корзине {cartItems.length} {cartItems.length > 1 ?
				<>товара</> : <>товар</>})</span></div>
			<div className="cart_items">
				{cartItems.length ?
					cartItems.map((item, index) => {
						return (
							<div key={index} className="cart_item">
								<div className="food">
									<img src={item.src} alt="food" />
									<div className="info">
										<div className="name">{item.name}</div>
										<div className="contain">{item.contain}</div>
									</div>
								</div>
								<div className="btn_add_rem">
									<div onClick={() => clickMinus(item)} className="minus"><img src="img/cart/rem.svg" alt="rem" /></div>
									<div className="count">{item.count}</div>
									<div onClick={() => clickPlus(item)} className="plus"><img src="img/cart/add.svg" alt="add" /></div>
								</div>
								<div className="price">{item.price * item.count} ₽</div>
								<div onClick={() => clickCross(item)} className="btn_remove"><img src="img/cart/remove.svg" alt="remove" /></div>
							</div>
						)
					})
					: <div className='empty_cart'>Корзина пуста!</div>
				}


			</div>
			{cartItems.length ?
				<div className="total">
					<div className="info">
						<div className="total_price">Итого:<span>{cartItems.reduce((sum, obj) => (obj.price * obj.count) + sum, 0)} ₽</span></div>
						{cartItems.reduce((total, obj) => total - (obj.price * obj.count), 5000) > 0 ?
							<div className="total_count">До бесплатной доставки не хватет: <span>{cartItems.reduce((total, obj) => total - (obj.price * obj.count), 5000)} ₽</span></div>
							: <div className="total_count">Бесплатная доставка!</div>
						}

						<div className="total_max">Минимальная сумма заказа 1500 ₽</div>
					</div>
					{cartItems.reduce((sum, obj) => (obj.price * obj.count) + sum, 0) > 1500 ?
						<Link to="/order"><div className="button">Оформить заказ</div></Link>
						: <div onClick={() => alert('Минимальная сумма заказа 1500 ₽. Пожалуйста, добавте ещё товар в корзину!')} className="button">Оформить заказ</div>
					}

				</div>
				: null
			}

		</div>
	);
};
