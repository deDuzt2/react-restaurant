import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Counter } from '../components/Counter';
import AppContext from '../context';

export const Order = () => {
	const { setCartItems, cartItems } = useContext(AppContext);
	const [isDeliver, setIsDeliver] = useState('');
	const [restaurant, setRestaurant] = useState('');
	const [pay, setPay] = useState('');
	const [time, setTime] = useState('');

	const order = () => {
		setIsDeliver('');
		setRestaurant('');
		setPay('');
		setTime('');
		for (let i = 0; i < cartItems.length; i++) {
			let obj = cartItems[i];
			(async function clear() {
				await axios.delete(`https://restaurant-json-server11.herokuapp.com/cart/${obj.id}`);
			})()
		}
		setCartItems([]);
	}

	return (
		<div className='order'>
			<Link to="/cart"><div className='back_button' ><img src='/img/cart/Arrow.svg' alt="back" />в корзину</div></Link>
			<div className='title'>ОФОРМЛЕНИЕ ЗАКАЗА</div>
			<div className="contact_info block">
				<div className="block_title">1. Контактная информация</div>
				<div className="inputs">
					<div className='input_order'><input type="text" placeholder='Имя*' /></div>
					<div className='input_order'><input type="phone" placeholder='Телефон*' /></div>
				</div>
			</div>
			<div className="deliver block">
				<div className="block_title">2. Доставка</div>
				<div className='buttons'>
					<div onClick={() => setIsDeliver('delive')} className={`button_delive order_button ${isDeliver === "delive" ? 'active_order' : ''}`}>Доставка</div>
					<div onClick={() => setIsDeliver('pickup')} className={`button_pickup order_button ${isDeliver === "pickup" ? 'active_order' : ''}`}>Самовывоз</div>
					{isDeliver === 'pickup' ? null
						: <div className="text"><img src='img/order/clock 1.svg' alt='clock' />Доставим через 1 час 30 минут</div>
					}
				</div>
				{isDeliver === "pickup" ?
					<>
						<div className="subtitle">Выберите ресторан</div>
						<div className="rest_list">
							<div onClick={() => setRestaurant('1')} className={`item_button ${restaurant === '1' ? 'active_order' : ''}`}>ресторан 1</div>
							<div onClick={() => setRestaurant('2')} className={`item_button ${restaurant === '2' ? 'active_order' : ''}`}>ресторан 2</div>
							<div onClick={() => setRestaurant('3')} className={`item_button ${restaurant === '3' ? 'active_order' : ''}`}>ресторан 3</div>
							<div onClick={() => setRestaurant('4')} className={`item_button ${restaurant === '4' ? 'active_order' : ''}`}>ресторан 4</div>
						</div>
					</>
					: null}
				{isDeliver === "delive" ?
					<>
						<div className="subtitle">Адрес доставки</div>
						<div className="street">
							<div className='input_order'><input className='street_name' type="text" placeholder='Укажите улицу*' /></div>
							<div className='input_order'><input className='house' type="text" placeholder='Номер дома*' /></div>
						</div>
						<div className="apartment">
							<div className='input_order'><input className='number' type="text" placeholder='№ квартиры/офиса' /></div>
							<div className='input_order'><input className='entrance' type="text" placeholder='Подъезд' /></div>
							<div className='input_order'><input className='floor' type="text" placeholder='Этаж' /></div>
						</div>
						<div className="comment">
							<div className='input_order'><input className='comment_input' type="text" placeholder='Комментарий' /></div>
						</div>
					</>
					: null
				}

			</div>
			<div className="payment block">
				<div className="block_title">3. Оплата</div>
				<div className='buttons'>
					<div onClick={() => setPay('online')} className={`button_online order_button ${pay === 'online' ? 'active_order' : ''}`}>Онлайн</div>
					<div onClick={() => setPay('card')} className={`button_card order_button ${pay === 'card' ? 'active_order' : ''}`}>Картой</div>
					<div onClick={() => setPay('cash')} className={`button_cash order_button ${pay === 'cash' ? 'active_order' : ''}`}>Наличными</div>
				</div>
			</div>
			<div className="deliver_time block">
				<div className="block_title">4. Когда доставить</div>
				<div className='buttons'>
					<div onClick={() => setTime('near')} className={`button_near order_button ${time === 'near' ? 'active_order' : ''}`}>В ближайшее время</div>
					<div onClick={() => setTime('intime')} className={`button_intime order_button ${time === 'intime' ? 'active_order' : ''}`}>Ко времени</div>
					{time === 'intime' ?
						<div className='input_order'><input className='street_name' type="text" placeholder='Укажите время*' /></div>
						: null
					}

				</div>
				<Counter />
				<Link onClick={order} to='/plug'><div className="order_button perform">Оформить заказ</div></Link>
			</div>
		</div>
	);
};
