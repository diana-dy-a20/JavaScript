"use strict"

//Задача №13
//Знайти індекс останньої ціни, що більше за 1000

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
	let lastIndexPriceMore1000 = arrayPrices.findLastIndex((el) => el > 1000)
	document.write(lastIndexPriceMore1000)
}