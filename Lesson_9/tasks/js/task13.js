"use strict"

//Задача №13
//Зобразити рівнобедрений трикутник із символів ^. Висоту задає користувач. Наприклад, на екрані висота =5.

if (confirm('Start?')) {
	const row = parseInt(prompt('Введіть кількість рядків', 5))
	document.write(`<div style = "text-align: center;">`)
	for (let i = 1; i <= row; i++) {
		for (let j = 0; j < 2 * i - 1; j++) {
			document.write(`^`)
		}
		document.write(`<br>`)
	}
	document.write(`</div>`)
}