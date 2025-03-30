"use strict"

//Задача №2
// Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців.


if (confirm('Start?')) {
	const data = {
		day: 30,
		month: 3,
		year: 2025
	}
	data.day = parseInt(prompt('Введіть поточний день', 2))
	data.month = parseInt(prompt('Введіть поточний місяць', 5))
	data.year = parseInt(prompt('Введіть поточний рік', 1998))
	function getYear(obj, numMonth) {
		return Math.floor((numMonth + obj.month) / 12) + obj.year
	}
	const monthUserNum = parseInt(prompt('Введіть кількість місяців', 8))
	document.write(`Через ${monthUserNum} місяців буде ${getYear(data, monthUserNum)}`)
}