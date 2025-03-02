"use strict"

//Задача №8
// Дано одновимірний масив, у якому зберігається певна виграшна сума (елементи заповнюються випадковим чином значеннями від -500 до 500). Надаючи користувачу можливість вибирати номери елементів  (поки він не відмовиться). Знаходити сумарний виграш.

if (confirm('Start?')) {
	function getArrayNum(min = -500, max = 500) {
		let numbers = []
		for (let i = 0; i < 8; i++) {
			let randomNum = min + Math.floor(Math.random() * (max - min + 1))
			numbers.push(randomNum)
		}
		return numbers
	}
	let arrayNum = getArrayNum(-500, 500)
	function getSumWinner(array) {
		let sumWin = 0
		let numElement
		do {
			numElement = parseInt(prompt('Виберіть комірку (від 1 до 8)'))
			if(numElement) sumWin += array[numElement - 1]
		} while (numElement)
		return sumWin
	}
	document.write(`Ваш виграш ${getSumWinner(arrayNum)}`)
}