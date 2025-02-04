"use strict"

//Задача №7
//З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься


//Задаємо значення

const monthNum = parseInt(prompt('Введіть номер місяця'))

//Обчислюємо 

// Виводимо результат

switch (monthNum) {
	case 1:
	case 2:
	case 12: document.write('Пора року зима')
		break
	case 3:
	case 4:
	case 5: document.write('Пора року весна')
		break
	case 6:
	case 7:
	case 8: document.write('Пора року літо')
		break
	case 9:
	case 10:
	case 11: document.write('Пора року осінь')
		break
	default: document.write('Некоректний ввід')
		break
}
