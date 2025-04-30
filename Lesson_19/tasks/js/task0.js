"use strict"

//Задача №0

//Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей.

if (confirm('Start?')) {
	function getSeason(monthNum) {
		let season
		switch (monthNum) {
			case 1:
			case 2:
			case 12: season = 'Зима'
				break
			case 3:
			case 4:
			case 5: season = 'Весна'
				break
			case 6:
			case 7:
			case 8: season = 'Літо'
				break
			case 9:
			case 10:
			case 11: season = 'Осінь'
				break
		}
		return season
	}
	const monthNumUser = parseInt(prompt('Введіть номер місяця', 6))
	document.write(getSeason(monthNumUser))
}
