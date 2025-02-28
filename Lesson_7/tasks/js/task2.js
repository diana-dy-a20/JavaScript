"use strict"

//Задача №2
// Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим.

if (confirm('Start?')) {
	function getWorkingDay(dayNum) {
		let day
		switch (dayNum) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5: day = 'Робочий день'
				break
			case 6:
			case 7: day = 'Вихідний'
				break
		}
		return day
	}
	const dayNumUser = parseInt(prompt('Введіть номер дня тижня', 3))
	document.write(getWorkingDay(dayNumUser))
}