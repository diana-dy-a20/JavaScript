"use strict"

//Задача №3
// Користувач вводить кількість елементів. Створити масив, у якому перші 5 елементів заповнені 1-цями, а інші до кінця масиву заповнені 7-ками.

if (confirm('Start?')) {
	const numElement = parseInt(prompt('Введіть кількість елементів', 13))
	function getArray(num) {
		let array = new Array(num).fill(1, 0, 5)
		array.fill(7, 5)
		return array
	}
	document.write(getArray(numElement))
}
