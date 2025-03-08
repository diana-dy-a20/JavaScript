"use strict"

//Задача №9
// Дано масив імен. Сформувати масив з перших літер цих імен.

if (confirm('Start?')) {
	const numName = parseInt(prompt('Введіть кількість імен', 4))
	function getName() {
		let name = []
		const numSymbol = parseInt(prompt('Введіть кількість символів імені'))
		for (let i = 0; i < numSymbol; i++) {
			let symbol = prompt(`Введіть ${i + 1}й символ імені`)
			name.push(symbol.toUpperCase())
		}
		return name
	}
	function getArrayNames(num) {
		let arrayNames = []
		for (let i = 0; i < num; i++) {
			arrayNames.push(getName())
		}
		return arrayNames
	}
	let arrayNames = getArrayNames(numName)
	// document.writeln(arrayNames)
	let newArray = arrayNames.map((element, index, arr) => {
		let array = []
		array.push(arr[index][0])
		return array
	})
	document.writeln(newArray)
}