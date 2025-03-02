"use strict"

//Задача №4
//Дано послідовність номерів автомобілів. Підрахувати кількість номерів, які :	починаються на букву «А»;	перша і остання літери співпадають;	складаються з більше ніш 5 символів;

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
	function getSequenceNumCars() {
		let numCars = []
		for (let i = 0; i < carNum; i++) {
			numCars.push(getNumCar())
		}
		return numCars
	}
	let sequenceNumCars = getSequenceNumCars()
	function getNumCarsA(arrayCars) {
		let num = 0
		for (let i = 0; i < arrayCars.length; i++) {
			if (arrayCars[i][0] === "A") num++
		}
		return num
	}
	document.write(`Кількість номерів, що починаються з символу "A": ${getNumCarsA(sequenceNumCars)}.<br>`)
	function getNumCarsIdenticalSymbols(arrayCars) {
		let num = 0
		for (let i = 0; i < arrayCars.length; i++) {
			if (arrayCars[i][0] === arrayCars[i][arrayCars[i].length - 1]) num++
		}
		return num
	}
	document.write(`Кількість номерів, де перша та остання літери однакові: ${getNumCarsIdenticalSymbols(sequenceNumCars)}.<br>`)
	function getNumCarsSymbolsMore5(arrayCars) {
		let num = 0
		for (let i = 0; i < arrayCars.length; i++) {
			if(arrayCars[i].length > 5) num++
		}
		return num
	}
	document.write(`Кількість номерів, що складаються з більше ніж 5 символів :${getNumCarsSymbolsMore5(sequenceNumCars)}.`)
}