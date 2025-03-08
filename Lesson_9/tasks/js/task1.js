"use strict"

//Задача №1
//  Користувач вводить кількість елементів. Створити масив, що складається з вказаної кількості елементів заповнених нулями.

if (confirm('Start?')) {
	const numElement = parseInt(prompt('Введіть кількість елементів', 5))
	let array = (num) => new Array(num).fill(0)
	document.write(array(numElement))
}
