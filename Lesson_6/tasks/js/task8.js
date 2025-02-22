"use strict"

//Задача №8
// Вивести на екран послідовність символів

if (confirm('Start?')) {
	let letterNum = parseInt(prompt('Введіть кількість символів', 82))
	// if (letterNum % 2 !== 0) {
	// 	alert('Ваше число некоректне, збільшую його на 1')
	// 	letterNum++
	// }
	for (let i = 0; i < letterNum / 2; i++) {
		document.write(`a o `)
	}
}