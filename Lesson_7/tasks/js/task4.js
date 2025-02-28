"use strict"

//Задача №4
//Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів: кількість парних, кількість додатних, кількість більших за 100.

if (confirm('Start?')) {

	function getResult(num1, num2, num3) {
		let evenNum = 0
		if (num1 % 2 === 0) evenNum++
		if (num2 % 2 === 0) evenNum++
		if (num3 % 2 === 0) evenNum++
		let positiveNum = 0
		if (num1 > 0) positiveNum++
		if (num2 > 0) positiveNum++
		if (num3 > 0) positiveNum++
		let numMoreThan100 = 0
		if (num1 > 100) numMoreThan100++
		if (num2 > 100) numMoreThan100++
		if (num3 > 100) numMoreThan100++
		return `Кількість парних ${evenNum}, кількість додатних ${positiveNum}, кількість більших за 100 ${numMoreThan100}.`
	}
	const userNum1 = parseInt(prompt('Введіть число №1'))
	const userNum2 = parseInt(prompt('Введіть число №2'))
	const userNum3 = parseInt(prompt('Введіть число №3'))
	document.write(getResult(userNum1, userNum2, userNum3))
}