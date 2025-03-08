"use strict"

//Задача №6
// Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2

if (confirm('Start?')) {
	const numElement = parseInt(prompt('Введіть кількість елементів', 7))
	function getArray(elements) {
		let array = []
		for (let i = 0; i < elements; i++) {
			let element = 1 + Math.floor(Math.random() * 30)
			array.push(element)
		}
		return array
	}
	let array = getArray(numElement)
	// document.writeln(array)
	array.forEach((element,index, arr) => { 
		if (element > arr[0]) arr[index] = element*2
	})
	document.writeln(array)
}