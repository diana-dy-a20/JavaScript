"use strict"

//Задача №1
// Вивести з використанням циклів маркований список з випадковими числами (1-100). Кількість випадкових чисел вводиться користувачем.

if (confirm('Start?')) {
	const numbers = parseInt(prompt('Введіть кількість випадкових чисел', 10))
	for (let i = 0; i < numbers; i++) {
		let randomNum = 1 + Math.floor(Math.random()*100)
		document.write(`<ul><li>${randomNum}</li></ul>`)
	}
}
