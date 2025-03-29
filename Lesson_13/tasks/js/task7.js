"use strict"

//Задача №7
//  Тренажер додавання. Кожні 10 секунд користувачу задають випадковий приклад з додавання двох цифр і робиться перевірка.


if (confirm('Start?')) {
	let simulator = setInterval(() => {
		let res
		let a = 1 + Math.floor(Math.random() * 20)
		let b = 1 + Math.floor(Math.random() * 20)
		let sum = a + b
		let userAnswer = prompt(`Скільки буде ${a}+${b}`)
		if (userAnswer == sum) res = alert('Відповідь правильна')
		else res = alert('Відповідь не правильна')
		return res
	}, 10000)
	setTimeout(() => clearInterval(simulator), 50000)
}