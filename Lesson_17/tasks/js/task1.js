"use strict"

//Задача №1
//Створити клас, що дозволяє виконувати такі операції над масивами: знаходження кількості додатних, кількості від’ємних, кількість входжень деякого числа (статичні методи)

if (confirm('Start?')) {
	class MathOperations {
		static getCountPositiveNum(arr) {
			let count = 0
			for (const num of arr) {
				if (num > 0) count++
			}
			return count
		}
		static getCountNegativeNum(arr) {
			let count = 0
			for (const num of arr) {
				if (num < 0) count++
			}
			return count
		}
		static getCountSomeeNum(arr, someNum) {
			let count = 0
			for (const num of arr) {
				if (num === someNum) count++
			}
			return count
		}
	}
	const array = [5, 8, 12, -5, 9, -11, 5, -32]
	const someNumUser = parseInt(prompt('Вкажіть яке число вас цікавить', 12))

	document.write(`В масиві додатніх чисел - ${MathOperations.getCountPositiveNum(array)}<br>`)
	document.write(`В масиві від'ємних чисел - ${MathOperations.getCountNegativeNum(array)}<br>`)
	document.write(`Чисел, які вас цікавлять, в масиві - ${MathOperations.getCountSomeeNum(array, someNumUser)}<br>`)
}