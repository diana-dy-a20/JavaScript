"use strict"

//Задача №4
// Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального

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
	const maxPrice = Math.max(...arrayPrices)
	let pricesPrecent = arrayPrices.map(el => el = (el / maxPrice) * 100)
	document.write(pricesPrecent)
}