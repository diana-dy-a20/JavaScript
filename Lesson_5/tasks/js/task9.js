"use strict"

//Задача №9
// Користувач загадує число. Комп’ютер задає питання поки не вгадає число користувача (використати confirm).

if (confirm('Start?')) {
	let consent = confirm(`Загадайте число від 1 до 100`)
	let userAnswer
	if (consent === true) {
		do {
			let randomNum = 1 + Math.floor(Math.random() * 100)
			userAnswer = confirm(`Ваше число ${randomNum}?`)
		} while (userAnswer === false)
	}
}