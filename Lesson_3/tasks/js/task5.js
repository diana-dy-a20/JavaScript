"use strict"

//Задача №5
// З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль). Вивести на екран назву транспортного засобу, яким він може керувати.

//Задаємо значення

const driverCategory = prompt('Введіть свою категорію', `A`)
const categoryA = 'A'
const categoryB = 'B'
const categoryC = 'C'

//Обчислюємо 

// Виводимо результат

switch (driverCategory) {
	case 'A':
		document.write('Ви можете керувати мотоциклом')
		break
	case 'B':
		document.write('Ви можете керувати легковим автомобілем')
		break
	case 'C':
		document.write('Ви можете керувати вантажним автомобілем')
		break
	default:
		document.write('Виникла помилка')
		break
}