"use strict"

//Задача №10
// Дано масив цін у грн. Податок складає 20%. Сформувати масив, який буде містити величину сплаченого податку у грн.

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
	document.writeln(arrayPrices)
	let arrayTax = arrayPrices.map((element, index, arr) => {
		let array = []
		element *= 0.2
		array.push(element)
		return array
	})
	document.writeln(arrayTax)
}