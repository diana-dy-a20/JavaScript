"use strict"

//Задача №10
// Знайти суму всіх непарних чисел, що знаходяться між заданими користувачем числами.

if (confirm('Start?')) {
	const num = parseInt(prompt('Введіть число', 23))
	for (let i = 1; i <= num; i++) {
		document.write(`${i}`)
		
		for (let j = 1; j <= i * i; j++) {
			document.write(`${j}`)
		}
		document.write(`<br>`)
	}
}