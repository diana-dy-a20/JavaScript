"use strict"

//Задача №1
//Створити клас TDate для роботи із датами у форматі “день.місяць.рік”. Дата представляється структурою із трьома полями. Реалізувати методи збільшення/зменшення дати на певну кількість днів, місяців чи років. Введення та виведення дати реалізувати за допомогою методу  toString.

if (confirm('Start?')) {
	// class TDate {
	// 	constructor(initDay, initMonth, initYear) {
	// 		this.Year = initYear
	// 		this.Month = initMonth
	// 		this.Day = initDay
	// 	}
	// 	#day
	// 	get Day() {
	// 		return this.#day
	// 	}
	// 	set Day(newInitDay) {
	// 		if (newInitDay < 0 || newInitDay > 31 || this.#month == 4 || this.#month == 6 || this.#month == 9 || this.#month == 11 && newInitDay < 30 || this.#month == 2 && newInitDay < 28) throw new Error("Значення дня некоректне")
	// 		this.#day = newInitDay
	// 	}
	// 	increaseDay(userDay) {
	// 		if (userDay < 0) throw new Error("Значення дня некоректне")
	// 		else {
	// 			const totalDay = this.#day + userDay
	// 			if (this.#month == 4 || this.#month == 6 || this.#month == 9 || this.#month == 11 && totalDay > 30) {
	// 				this.#day = totalDay % 30
	// 				this.Month += Math.floor(totalDay / 30)
	// 			} else if (this.#month == 2 && totalDay > 28) {
	// 				this.#day = totalDay % 28
	// 				this.Month += Math.floor(totalDay / 28)
	// 			} else if (totalDay > 31) {
	// 				this.#day = totalDay % 31
	// 				this.Month += Math.floor(totalDay / 31)
	// 			}
	// 			else this.#day = totalDay
	// 		}
	// 		return this.#day, this.Month
	// 	}
	// 	#month
	// 	get Month() {
	// 		return this.#month
	// 	}
	// 	set Month(newInitMonth) {
	// 		if (newInitMonth < 0 || newInitMonth > 12) throw new Error("Значення місяця некоректне")
	// 		this.#month = newInitMonth
	// 	}
	// 	increaseMonth(userMonth) {
	// 		if (userMonth < 0) throw new Error("Значення місяця некоректне")
	// 		else {
	// 			const totalMonth = this.Month + userMonth
	// 			if (totalMonth > 12) {
	// 				this.Month = (totalMonth % 12)
	// 				this.Year += Math.floor(totalMonth / 12)
	// 			} else this.Month = totalMonth
	// 		}
	// 		return this.Month, this.Year
	// 	}
	// 	#year
	// 	get Year() {
	// 		return this.#year
	// 	}
	// 	set Year(newInitYear) {
	// 		if (newInitYear < 0) throw new Error("Значення року некоректне")
	// 		this.#year = newInitYear
	// 	}
	// 	increaseYear(userYear) {
	// 		if (userYear < 0) throw new Error("Значення року некоректне")
	// 		this.#year += userYear
	// 	}
	// 	toString() {
	// 		return `${this.Day}.${this.Month}.${this.Year}`
	// 	}
	// }
	// try {
	// 	const user = confirm('Введіть бажану дату')
	// 	if (user) {
	// 		const userYear = parseInt(prompt('Введіть рік', 1998))
	// 		const userMonth = parseInt(prompt('Введіть номер місяця', 5))
	// 		const userDay = parseInt(prompt('Введіть номер дня', 2))
	// 		let date = new TDate(userDay, userMonth, userYear)
	// 		document.write(date)
	// 		date.increaseYear(20)
	// 		date.increaseMonth(8)
	// 		date.increaseDay(58)
	// 		document.write(date)

	// 	}
	// } catch (error) {
	// 	document.write(error.message)
	// }
	class TDate {
		constructor(initDay, initMonth, initYear) {
			this.#year = initYear
			this.#month = initMonth
			this.#day = initDay
			this.validateDate()
		}
		#day
		get Day() {
			return this.#day
		}
		set Day(newInitDay) {
			this.#day = newInitDay
			this.validateDate()
		}
		#month
		get Month() {
			return this.#month
		}
		set Month(newInitMonth) {
			this.#month = newInitMonth
			this.validateDate()
		}
		#year
		get Year() {
			return this.#year
		}
		set Year(newInitYear) {
			this.#year = newInitYear
			this.validateDate()
		}
		daysInMonth() {
			const year = this.#year
			const month = this.#month
			let days = 31
			if ([4, 6, 9, 11].includes(month)) {
				days = 30
			} else if (month === 2) {
				const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
				days = isLeap ? 29 : 28
			}
			return days
		}

		validateDate() {
			if (this.#year < 0) {
				throw new Error("Значення року некоректне")
			}
			if (this.#month < 1 || this.#month > 12) {
				throw new Error("Значення місяця некоректне")
			}
			const daysInCurrentMonth = this.daysInMonth()
			if (this.#day < 1 || this.#day > daysInCurrentMonth) {
				throw new Error(`Значення дня некоректне для ${this.#month} місяця ${this.#year} року. Допустимі значення: 1-${daysInCurrentMonth}`)
			}
		}
		increaseDay(days) {
			if (days < 0) {
				this.decreaseDay(-days)
			} else {
				this.#day += days
				let daysInCurrentMonth = this.daysInMonth()
				while (this.#day > daysInCurrentMonth) {
					this.#day -= daysInCurrentMonth
					this.#month++
					if (this.#month > 12) {
						this.#month = 1
						this.#year++
					}
					daysInCurrentMonth = this.daysInMonth()
				}
			}
			this.validateDate()
		}
		decreaseDay(days) {
			if (days < 0) {
				this.increaseDay(-days)
			} else {
				this.#day -= days
				while (this.#day < 1) {
					this.#month--
					if (this.#month < 1) {
						this.#month = 12
						this.#year--
						if (this.#year < 0) {
							throw new Error("Дата не може бути раніше 0 року.")
						}
					}
					this.#day += this.daysInMonth()
				}
			}
			this.validateDate()
		}
		increaseMonth(months) {
			if (months < 0) {
				this.decreaseMonth(-months)
			} else {
				this.#month += months
				this.#year += Math.floor((this.#month - 1) / 12)
				this.#month = ((this.#month - 1) % 12) + 1
			}
			this.validateDate()
		}
		decreaseMonth(months) {
			if (months < 0) {
				this.increaseMonth(-months)
			} else {
				this.#month -= months
				while (this.#month < 1) {
					this.#month += 12
					this.#year--
					if (this.#year < 0) {
						throw new Error("Дата не може бути раніше 0 року.")
					}
				}
			}
			this.validateDate()
		}
		increaseYear(years) {
			if (years < 0) {
				this.decreaseYear(-years)
			} else {
				this.#year += years
			}
			this.validateDate()
		}
		decreaseYear(years) {
			if (years < 0) {
				this.increaseYear(-years)
			} else {
				this.#year -= years
				if (this.#year < 0) {
					throw new Error("Дата не може бути раніше 0 року.")
				}
			}
			this.validateDate()
		}
		toString() {
			const dayStr = String(this.#day).padStart(2, '0')
			const monthStr = String(this.#month).padStart(2, '0')
			return `${dayStr}.${monthStr}.${this.#year}`
		}
	}
	try {
		const user = confirm('Введіть бажану дату')
		if (user) {
			const userYear = parseInt(prompt('Введіть рік', 1998))
			const userMonth = parseInt(prompt('Введіть номер місяця', 5))
			const userDay = parseInt(prompt('Введіть номер дня', 2))
			let date = new TDate(userDay, userMonth, userYear)
			document.write(`Початкова дата: ${date}<br>`)
			date.increaseYear(20)
			document.write(`Дата після збільшення на 20 років: ${date}<br>`)
			date.increaseMonth(8)
			document.write(`Дата після збільшення на 8 місяців: ${date}<br>`)
			date.increaseDay(58)
			document.write(`Дата після збільшення на 58 днів: ${date}<br>`)
			date.decreaseDay(30)
			document.write(`Дата після зменшення на 30 днів: ${date}<br>`)
			date.decreaseMonth(5)
			document.write(`Дата після зменшення на 5 місяців: ${date}<br>`)
			date.decreaseYear(10)
			document.write(`Дата після зменшення на 10 років: ${date}<br>`)
		}
	} catch (error) {
		document.write(`Помилка: ${error.message}`)
	}
}