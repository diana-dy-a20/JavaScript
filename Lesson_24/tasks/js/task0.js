"use strict"

//Задача №0

// Розробити клас Person(поля: ім'я, вік, адреса; методи: toString, визначення року народження). На основі класу Person  розробити клас Worker (додати поля: посада, розмір заробітної плати, кількість відсотів оподаткування; методи:визначення кількості виплачених коштів за рік, та визначення розміру податків)

if (confirm('Start?')) {
	class Person {
		constructor(name, age, adress) {
			this.name = name
			this.age = age
			this.adress = adress
		}
		getYearOfBirth(currentYear = 2025) {
			return currentYear - this.age
		}
		toString() {
			return `Користувач ${this.name}, вік - ${this.age}, адреса - ${this.adress}. `
		}
	}
	class Worker extends Person {
		constructor(name, age, adress, position, salary, percentOfTax) {
			super(name, age, adress)
			this.position = position
			this.salary = salary
			this.percentOfTax = percentOfTax
		}
		getSumSalaryOfYear(numMonth = 12) {
			return this.salary * numMonth
		}
		getAmountOfTax() {
			return (this.getSumSalaryOfYear() / 100) * this.percentOfTax
		}
		toString() {
			return super.toString() + `Заробітня плата за рік - ${this.getSumSalaryOfYear()}, податок - ${this.getAmountOfTax()}.`
		}
	}
	const p1 = new Worker('Ольга Василівенко', 58, 'Україна, Черкаська обл., Умань', 'Вчитель', 8000, 23)
	document.write(p1)
}
