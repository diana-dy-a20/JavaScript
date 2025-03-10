"use strict"

//Задача №1
//Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.

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
	let pricesMore1000 = arrayPrices.filter(el => el > 1000)
	document.write(pricesMore1000)
}
