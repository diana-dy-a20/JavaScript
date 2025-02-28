"use strict"

//Задача №3
//Створити окремі функції, які для 4 чисел знаходять: 1.суму; 2.добуток; 3.середнє арифметичне; 4.мінімальне значення.

if (confirm('Start?')) {
	function getSum(num1, num2, num3, num4) {
		return num1 + num2 + num3 + num4
	}
	function getProduct(num1, num2, num3, num4) {
		return num1 * num2 * num3 * num4
	}
	function getAverage(num1, num2, num3, num4) {
		return (num1 + num2 + num3 + num4) / 4
	}
	function getMin(num1, num2, num3, num4) {
		let numMin
		if (num4 < num3) numMin = num4
		else if (num3 < num2) numMin = num3
		else if (num2 < num1) numMin = num2
		else numMin = num1
		return numMin
	}
	const userNum1 = parseInt(prompt('Введіть число №1'))
	const userNum2 = parseInt(prompt('Введіть число №2'))
	const userNum3 = parseInt(prompt('Введіть число №3'))
	const userNum4 = parseInt(prompt('Введіть число №4'))

	document.write(`Сума чисел ${getSum(userNum1, userNum2, userNum3, userNum4)}<br>Добуток чисел ${getProduct(userNum1, userNum2, userNum3, userNum4)}<br>Середнє арифметичне ${getAverage(userNum1, userNum2, userNum3, userNum4)}<br>Мінімальне значення ${getMin(userNum1, userNum2, userNum3, userNum4)}<br>`)
}
