"use strict"

//Задача №10
// Знайти першу ціну, що більше за 1000

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
	let firstPriceMore1000 = arrayPrices.find(el => el > 1000)
	document.write(firstPriceMore1000)
}