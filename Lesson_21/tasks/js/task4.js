"use strict"

//Задача №4
//Користувач задає місяць навчання учня (перевіряти чи є числом, чи від 1 до 12, чи не канікули) та оцінку (перевіряти чи є числом, чи від 1 до 100). Вивести чи зможе він виправити оцінку (якщо оцінка погана і це не останній місяць у семестрі) . Обробку усіх помилок зробити з використанням відповідних класів.

if (confirm('Start?')) {
	class IsNotNumberError extends Error {
		constructor() {
			super()
			this.message = 'Введені значення мають бути числом'
			this.name = 'IsNotNumberError'
		}
	}
	class IsCorrectMonthNumberError extends Error {
		constructor() {
			super()
			this.message = 'Номер місяця має бути від 1 до 12'
			this.name = 'IsCorrectMonthNumberError'
		}
	}
	class IsMonthVacationError extends Error {
		constructor() {
			super()
			this.message = 'Цей місяць відноситься до канікулярного періоду'
			this.name = 'IsMonthVacationError'
		}
	}
	class IscorrectMarkError extends Error {
		constructor() {
			super()
			this.message = 'Оцінка має бути від 1 до 12'
			this.name = 'IscorrectMarkError'
		}
	}
	try {
		const month = parseInt(prompt('Введіть номер місяця', 10))
		const mark = parseInt(prompt('Введіть оцінку', 80))
		if(isNaN(month) || isNaN(mark)) throw new IsNotNumberError()
		if(month < 1 || month > 12) throw new IsCorrectMonthNumberError()
		if(month < 9 && month > 5) throw new IsMonthVacationError()
		if(mark < 1 || mark > 100) throw new IscorrectMarkError()
		if(mark < 50 && (month !== 12 && month !== 5)) document.write(`Твоя оцінка ${mark}, в тебе є можливість її виправити`)
		else document.write(`Твоя оцінка ${mark}, тобі не потрібно її виправляти`)
	} catch (error) {
		if(error instanceof IsNotNumberError) document.write(error.message)
		if(error instanceof IsCorrectMonthNumberError) document.write(error.message)
		if(error instanceof IsMonthVacationError) document.write(error.message)
		if(error instanceof IscorrectMarkError) document.write(error.message)
	}
}
