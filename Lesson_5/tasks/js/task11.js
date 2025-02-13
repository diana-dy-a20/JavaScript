"use strict"

//Задача №11
// Знайти суму 5 непарних чисел, що знаходяться між заданими користувачем числами.

if (confirm('Start?')) {
	let minNum = parseInt(prompt(`Введіть мінімальне число`, 7))
	let maxNum = parseInt(prompt(`Введіть максимальне число`, 53))
	let sum = 0
	let count = 0
	if (minNum % 2 === 0) {
		minNum++
	}
	for (let i = minNum; i <= maxNum; i += 2) {
		document.write(`${i}<br>`)
		count++
		sum += i
		if (count === 5) break
	}
	document.write(`Сума чисел ${sum}`)
}