"use strict"

//Задача №6
// З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.

//Задаємо значення

const dayNumber = parseInt(prompt('Введіть номер дня тижня від 1 до 7', 6))

//Обчислюємо 

// Виводимо результат

switch (dayNumber) {
	case 1:
		document.write(`Понеділок`)
		break
	case 2:
		document.write(`Вівторок`)
		break
	case 3:
		document.write(`Середа`)
		break
	case 4:
		document.write(`Четвер`)
		break
	case 5:
		document.write(`П\'ятниця`)
		break
	case 6:
		document.write(`Субота`)
		break
	case 7:
		document.write(`Неділя`)
		break
	default: document.write(`Помилка вводу`)
		break
}
