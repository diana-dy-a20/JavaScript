"use strict"

//Задача №2
// Користувач вводить кількість елементів. Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-ками.


if (confirm('Start?')) {
	const numElement = parseInt(prompt('Введіть кількість елементів', 6))
	let numHalf = Math.floor(numElement / 2)
	function getArray(num, half) {
		let array = new Array(num).fill(1, 0, half)
		array.fill(7, half)
		return array
	}
	document.write(getArray(numElement, numHalf))
}