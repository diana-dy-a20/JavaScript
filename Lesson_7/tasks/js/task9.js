"use strict"

//Задача №9
// Вивести на екран 

if (confirm('Start?')) {
	const num = parseInt(prompt('Введіть число', 23))
	for (let i = 1; i <= num; i++) {
		document.write(`${i}`)
		for (let j = 1; j <= i; j++) {
			document.write(`${j}`)
		}
		document.write(`<br>`)
	}
}