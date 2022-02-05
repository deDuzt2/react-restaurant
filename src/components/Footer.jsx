import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
	function goUp() {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	}

	return (
		<div className="footer">
			<div onClick={goUp} className="button"><img src="img/footer/button.svg" alt="uppper" /></div>
			<div className="footer_info">
				<div className="logo">LOGOS</div>
				<div className="copyright">© ООО СК «АПШЕРОН»</div>
				<div className="copyright">Все права защищены. 2010-2020</div>
			</div>
			<div className="footer_nav">
				<Link to='/plug'><div className="item">О ресторане</div></Link>
				<Link to='/plug'><div className="item">Условия доставки</div></Link>
				<Link to='/plug'><div className="item">Возврат товара</div></Link>
				<Link to='/plug'><div className="item">Акции</div></Link>
			</div >
		</div >
	);
};
