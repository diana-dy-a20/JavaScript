"use strict"

//Задача №5
// Дано масив елементів. Знайти добуток додатних елементів

if (confirm('Start?')) {
	const numElement = parseInt(prompt('Введіть кількість елементів', 13))
	function getArray(num) {
		let array = []
		for (let i = 0; i < num; i++) {
			let element = -25 + Math.floor(Math.random() * 51)
			array.push(element)
		}
		return array
	}
	let numArray = getArray(numElement)
	function getProduct(array) {
		let product = 1
		for (const element of array) {
			if (element > 0) product *= element
		}
		return product
	}
	document.write(`Product ${getProduct(numArray)}`)
}