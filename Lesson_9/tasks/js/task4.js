"use strict"

//Задача №4
//Дано масив елементів. Вивести на екран елементи, що більші за 100

if (confirm('Start?')) {
	const numElement = parseInt(prompt('Введіть кількість елементів', 13))
	function getArray(num) {
		let array = []
		for (let i = 0; i < num; i++) {
			let element = 50 + Math.floor(Math.random() * 101)
			array.push(element)
		}
		return array
	}
	let numArray = getArray(numElement)
	for (const element of numArray) {
		if (element > 100) document.write(`${element}<br>`)
	}
}