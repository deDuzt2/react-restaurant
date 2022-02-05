import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from "./../components/Navbar";

export const Main = ({ isLoading, menuItems }) => {
	return (
		<>
			<div className="banner">
				<div className="title"></div>
			</div>
			<Navbar items={menuItems} isLoading={isLoading} />
			<div className="about_us">
				<div className="background">
					<div className="info">
						<div className="title">НАШ РЕСТОРАН</div>
						<div className="text">Мы расположены в одном из самых живописных мест города — на берегу реки, это ваш оазис в черте города, куда можно сбежать от шумного и пыльного мегаполиса. Мы, действительно уникальные, ведь все продумано до мелочей: проект построен из дикого закарпатского сруба, камин в основном зале ресторана и панорамные окна с видом на реку, уютные беседки на берегу реки и лучшая видовая террасса, шатер с посадкой на 200 человек, сказочный детский домик и бассейн.</div>
					</div>
					<div className="cards">
						<div className="card">
							<img src="img/about_us/1.svg" alt="" />
							<div className="text">Свежайшие продукты</div>
						</div>
						<div className="card">
							<img src="img/about_us/2.svg" alt="" />
							<div className="text">Быстрая доставка</div>
						</div>
						<div className="card">
							<img src="img/about_us/3.svg" alt="" />
							<div className="text">Лучшие повора</div>
						</div>
						<div className="card">
							<img src="img/about_us/4.svg" alt="" />
							<div className="text">Уютная атмосфера</div>
						</div>
					</div>
				</div>
			</div>
			<div className="contacts">
				<img src="img/contacts/mark.svg" alt="mark" className="mark" />
				<div className="contacts_container">
					<div className="title">КОНТАКТЫ</div>
					<hr className="top_line" />
					<div className="items">
						<div className="item">
							<div className="first_icon"><img src="/img/contacts/Location.svg" alt="geo" /></div>
							<div className="text">
								<div className="title_text">Наш адрес:</div>
								<div className="main_text">МО, городской округ Красногорск, село Ильинкое,
									Экспериментальная улица, 10</div>
							</div>
						</div>
						<div className="item">
							<div className="icon"><img src="/img/contacts/Message.svg" alt="email" /></div>
							<div className="text">
								<div className="title_text">Наша почта:</div>
								<div className="main_text">auto.wash@gmail.com</div>
							</div>
						</div>
					</div>
					<hr className="top_line" />
					<div className="links">
						<Link to="/plug"><div className="button">ЗАБРОНИРОВАТЬ СТОЛ</div></Link>
						<div className="call">
							<div className="number">+7 (917) 510-57-59</div>
							<div className="subtext">Звоните или оставляйте заявку</div>
						</div>
					</div>
					<div className="social">
						<div className="text">Мы в соц сетях:</div>
						<img src="/img/contacts/facebook.svg" alt="facebook" />
						<img src="/img/contacts/vkontakte.svg" alt="vkontakte" />
						<img src="/img/contacts/youtube.svg" alt="youtube" />
						<img src="/img/contacts/instagram.svg" alt="instagram" />
					</div>
				</div>
			</div>
		</>
	);
};

