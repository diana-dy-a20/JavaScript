"use strict"

//Задача №1
// Створити функцію, яка за номером місяця повертає його назву.

if (confirm('Start?')) {
	function getMonth(monthNum) {
		let month
		switch (monthNum) {
			case 1: month = 'Січень'
				break
			case 2: month = 'Лютий'
				break
			case 3: month = 'Березень'
				break
			case 4: month = 'Квітень'
				break
			case 5: month = 'Травень'
				break
			case 6: month = 'Червень'
				break
			case 7: month = 'Липень'
				break
			case 8: month = 'Серпень'
				break
			case 9: month = 'Вереснь'
				break
			case 10: month = 'Жовтень'
				break
			case 11: month = 'Листопад'
				break
			case 12: month = 'Грудень'
				break
		}
		return month
	}
	const monthNumUser = parseInt(prompt('Введіть номер місяця', 5))
	document.write(getMonth(monthNumUser))
}
