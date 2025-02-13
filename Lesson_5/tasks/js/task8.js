"use strict"

//Задача №8
// Користувач загадує число. За 3 спроби комп’ютер намагається вгадати число користувача (використати confirm).

if (confirm('Start?')) {
	let consent = confirm(`Загадайте число від 1 до 100`)
	let userAnswer
	if (consent === true) {
		for (let i = 0; i < 3; i++) {
			let randomNum = 1 + Math.floor(Math.random() * 100)
			userAnswer = confirm(`Ваше число ${randomNum}?`)
			if (userAnswer === false) {
				continue
			} else break
		}
	}
}