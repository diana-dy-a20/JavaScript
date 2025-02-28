"use strict"

//Задача №6
// Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців (таблиця заповнюється заданим фіксованим повідомленням).

if (confirm('Start?')) {
	function getTable(num1, num2) {
		document.write(`<table>`)
		for (let i = 0; i < num1; i++) {
			document.write(`<tr>`)
			for (let j = 0; j < num2; j++) {
				document.write(`<td>hi</td>`)
			}
			document.write(`</tr>`)
		}
		document.write(`</table>`)
	}
	const row = parseInt(prompt('Введіть кількість рядків', 5))
	const column = parseInt(prompt('Введіть кількість стовпців', 5))
	getTable(row, column)
}