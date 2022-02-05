import React from 'react';
import { Link } from 'react-router-dom';

export const Plug = () => {
	return (
		<div className="plug">
			<Link to="/"><div className='back_button' ><img src='/img/cart/Arrow.svg' alt="back" />к выбору блюда</div></Link>
			<div className='text'>Это просто страница - "заглушка".</div>
		</div>
	);
};