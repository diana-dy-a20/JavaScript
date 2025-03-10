"use strict"

//Задача №5
// Підрахувати кількість змін цін

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
	let numPriceChange = arrayPrices.reduce((prev, el, ind) =>
		(ind !== 0 && el !== el[ind - 1]) ? prev + 1 : prev,
		0
	)
	document.write(numPriceChange)
}