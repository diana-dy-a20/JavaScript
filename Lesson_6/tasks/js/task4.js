"use strict"

//Задача №4
//Побудувати ялинку

if (confirm('Start?')) {
	const row = parseInt(prompt('Введіть кількість рядків', 7))
	document.write(`<div style = "text-align: center;">`)
	for (let k = 0; k < 3; k++) {
	for (let i = 1; i <= row; i++) {
		for (let j = 0; j < i; j++) {
			document.write(`o`)
		}
		document.write(`<br>`)
	}
	}
	document.write(`</div>`)
}