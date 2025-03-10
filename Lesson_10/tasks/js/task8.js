"use strict"

//Задача №8
// Підрахувати кількість цін, що більше за 1000

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
	let numPriceMore1000 = arrayPrices.reduce((prev, el) => el > 1000 ? prev + 1 : prev,
		0
	)
	document.write(numPriceMore1000)
}