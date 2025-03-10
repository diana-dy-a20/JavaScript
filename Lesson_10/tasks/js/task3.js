"use strict"

//Задача №3
// Сформувати список з тих цін, які більші за попереднє значення

if (confirm('Start?')) {
	const numPrice = parseInt(prompt('Введіть кількість цін', 12))
	function getArrayPrices(num) {
		let prices = []
		for (let i = 0; i < num; i++) {
			let price = 1 + Math.floor(Math.random() * 10000)
			prices.push(price)
		}
		return prices
	}
	let arrayPrices = getArrayPrices(numPrice)
	document.write(`${arrayPrices}<br>`)
	let pricesMorePrev = arrayPrices.reduce((prevArr, el, ind, arr) => {
		if (el > arr[ind - 1] && ind > 0) prevArr.push(el)
		else prevArr
		return prevArr
	},
		[])
	document.write(pricesMorePrev)
}
