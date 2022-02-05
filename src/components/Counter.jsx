import React, { useState } from 'react'

export const Counter = () => {
	const [count, setcount] = useState(0);

	function increment() {
		setcount(count + 1);
	}

	function decrement() {
		if (count > 0) {
			setcount(count - 1);
		}
	}

	return (
		<div className='counter'>
			<div className="subtitle">Кол-во персон</div>
			<div className='minus' onClick={decrement} ><img src="img/order/minus.svg" alt="minus" /></div>
			<h1>{count}</h1>
			<div className='plus' onClick={increment}><img src="img/order/plus.svg" alt="plus" /></div>
		</div>
	)
}
