"use strict"

//Задача №0

//Вивести на екран.
if (confirm('Start?')) {
	let startLine = 'A'
	let charCode = startLine.charCodeAt(0)
	const row = parseInt(prompt('Введіть кількість рядків', 5))
	const letter = parseInt(prompt('Введіть кількість символів у рядку', 5))
	for (let i = 0; i < row; i++) {
		for (let j = i; j < i + letter; j++) {
			document.write(`${String.fromCharCode(charCode + j)}`)
		}
		document.write(`<br>`)
	}
}