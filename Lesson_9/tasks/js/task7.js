"use strict"

//Задача №7
//  Дано масив цін. Змінити цей масив так, що на ціни товарів, які більші за 1000 грн. дати 30% знижки.


if (confirm('Start?')) {
	const numProducts = parseInt(prompt('Введіть кількість товарів', 5))
	function getArrayPrice(products) {
		let array = []
		for (let i = 0; i < products; i++) {
			let product = 200 + Math.floor(Math.random() * 1501)
			array.push(product)
		}
		return array
	}
	let arrayPrices = getArrayPrice(numProducts)
	// document.writeln(arrayPrices)
	arrayPrices.forEach((element, index, arr) => {
		if (element > 1000) arr[index] = element - (element * 0.3)
	})
	document.writeln(arrayPrices)
}