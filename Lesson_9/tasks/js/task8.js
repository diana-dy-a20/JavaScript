"use strict"

//Задача №8
// Дано масив номерів авто. Сформувати новий масив тих, які починаються на «А»

if (confirm('Start?')) {
	const carNum = parseInt(prompt('Введіть кількість автомобілів', 2))
	function getNumCar() {
		let num = []
		const numSymbol = parseInt(prompt('Введіть кількість символів номеру машини'))
		for (let i = 0; i < numSymbol; i++) {
			let symbol = prompt(`Введіть ${i + 1}й символ номеру машини`)
			num.push(symbol.toUpperCase())
		}
		return num
	}
	function getSequenceNumCars(num) {
		let numCars = []
		for (let i = 0; i < num; i++) {
			numCars.push(getNumCar())
		}
		return numCars
	}
	let sequenceNumCars = getSequenceNumCars(carNum)
	// document.writeln(sequenceNumCars)
	let newArray = sequenceNumCars.map((element, index, arr) => {
		let array = []
		if(arr[index][0] === 'A') array.push(element)
			return array
	})
	document.writeln(newArray)
}