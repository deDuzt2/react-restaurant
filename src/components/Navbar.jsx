import React from 'react';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { ListItems } from './ListItems'



export const Navbar = ({ items, isLoading }) => {


	const MenuItems = [
		{ title: "Холодные закуски", href: '#', link: '/csnacks', active: true },
		{ title: "Горячие закуски", href: '#', link: '/hsnacks', active: false },
		{ title: "Мясные блюда", href: '#', link: '/meat', active: false },
		{ title: "Рыбные блюда", href: '#', link: '/fish', active: false },
		{ title: "Супы", href: '#', link: '/soups', active: false },
		{ title: "Гриль меню", href: '#', link: '/grill', active: false },
		{ title: "Десерты", href: '#', link: '/dessert', active: false },
		{ title: "Напитки", href: '#', link: '/drinks', active: false }
	]

	return (
		<>
			<div className="navbar">
				<div className="navbar_container container">
					<ul>
						{MenuItems.map((item, index) => {
							return (
								<NavLink className='link' key={index} to={item.link}>{item.title}</NavLink>
							)
						})}

					</ul>
				</div>
			</div>
			<Routes>
				<Route path='/csnacks' element={<ListItems items={items.cSnacks} isLoading={isLoading} title='Холодные закуски' />} />
				<Route path='/hsnacks' element={<ListItems items={items.hSnacks} isLoading={isLoading} title='Горячие закуски' />} />
				<Route path='/meat' element={<ListItems items={items.meat} isLoading={isLoading} title='Мясные блюда' />} />
				<Route path='/fish' element={<ListItems items={items.fish} isLoading={isLoading} title='Рыбные блюда' />} />
				<Route path='/soups' element={<ListItems items={items.soups} isLoading={isLoading} title='Супы' />} />
				<Route path='/grill' element={<ListItems items={items.grill} isLoading={isLoading} title='Гриль меню' />} />
				<Route path='/dessert' element={<ListItems items={items.dessert} isLoading={isLoading} title='Дессерт' />} />
				<Route path='/drinks' element={<ListItems items={items.drinks} isLoading={isLoading} title='Напитки' />} />
				<Route path="*" element={<Navigate replace to='/csnacks' />} />
			</Routes>

		</>
	);
};









