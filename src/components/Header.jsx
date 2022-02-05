import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context';

export const Header = () => {
	const { cartItems } = useContext(AppContext);
	return (
		<header>
			<div className="header_container container">
				<Link to="/"><div className="logo">LOGOS</div></Link>
				<div className="input">
					<img src="/img/header/Location.svg" alt="geo" className="geo" />
					<input type="text" placeholder="Введите адрес доставки" />
					<img src="/img/header/Search.svg" alt="search" className="search" />
				</div>
				<div className="phone">
					<img src="/img/header/Contacts.svg" alt="phone" />
					<div className="info">
						<div className="title">Контакты:</div>
						<div className="number">+7 (917) 510-57-59</div>
					</div>
				</div>
				<Link to="/cart">
					<div className="button">
						<div className="title">
							Корзина
						</div>
						{cartItems.length > 0
							? <div className="button_count">
								<div className="count_inside">{cartItems.length}</div>
							</div>
							: <img className='buy' src="/img/header/Buy.svg" alt="buy" />
						}

					</div>
				</Link>
			</div>
		</header>
	);
};
