"use strict"

//Задача №3
// Розробити клас MultChecker для перевірки таблиці множення

if (confirm('Start?')) {
	class MultChecker {
		constructor(number) {
			this.num1 = number,
				this.countCorrectAnswer = 0,
				this.countWrongAnswer = 0
		}
		getRandomNum() {
			return 1 + Math.floor(Math.random() * 10)
		}
		getExample(num2) {
			let exam = this.num1 * num2
			let userAnswer = parseInt(prompt(`Скільки буде ${this.num1} * ${num2}`))
			let res = false
			if (userAnswer === exam) res = true
			return res
		}
		getResult(numAtt) {
			for (let i = 0; i < numAtt; i++) {
				if (this.getExample(this.getRandomNum())) this.countCorrectAnswer++
				else this.countWrongAnswer++
			}
			return `Правильних відповідей - ${this.countCorrectAnswer}, помилок - ${this.countWrongAnswer}.`
		}
	}
	let userNum1 = parseInt(prompt('Введіть цифру для перевірки таблиці множення', 6))
	let numAttempts = parseInt(prompt('Введіть кількість спроб', 3))
	let check = new MultChecker(userNum1)
	document.write(check.getResult(numAttempts))
}