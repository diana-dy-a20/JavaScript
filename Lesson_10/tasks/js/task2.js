"use strict"

//Задача №2
// Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.


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
	let pricesMore1000Num = arrayPrices.reduce((arr, el, ind) => {
		if (el > 1000) arr.push(ind)
		else arr
		return arr
	},
		[])
	document.write(pricesMore1000Num)
}