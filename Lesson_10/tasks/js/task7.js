"use strict"

//Задача №7
// Визначати, чи усі ціни більше за 1000


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
	let priceBooleanValue = arrayPrices.every(el => el > 1000)
	document.write(priceBooleanValue)
}