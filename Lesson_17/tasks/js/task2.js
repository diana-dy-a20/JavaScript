"use strict"

//Задача №2
// Створити службове авто (водій, марка, номер). Створити клас таким чином, щоб можна було створити тільки один екземпляр цього класу. 


if (confirm('Start?')) {
	class CompanyCar {
		static car
		constructor(driver, brand, number) {
			if(CompanyCar.car) return CompanyCar.car
			this.driver = driver
			this.brand = brand
			this.number = number
			CompanyCar.car = this
		}
		toString() {
			return `Ваш водій ${this.driver} буде на авто ${this.brand} з номером ${this.number}`
		}
	}
	const trip = new CompanyCar('Станіслав', 'Shkoda', 'АН1286КІ')
	//Спроба перезаписати(знаю що нічого не вийде)
	const trip2 = new CompanyCar('Валентина', 'Audi', 'ВН9596НП')
	document.write(trip)
}