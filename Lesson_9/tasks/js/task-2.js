"use strict"

//Задача №-2

// Поступово генерувати 100 випадкових чисел від 1 до 1000. Підрахувати яких чисел більше: парних чи непарних.
if (confirm('Почати тестування?')) {
	let evenNumbers = 0
	let oddNumbers = 0

	for (let i = 0; i < 100; i++) {
		let randomNum = 1 + Math.floor(Math.random() * 1000)
		if (randomNum % 2 === 0)
			evenNumbers++
		else
			oddNumbers++
	}
	document.write(`Кількість парних чисел ${evenNumbers}, кількість непарних ${oddNumbers}.`)
}
