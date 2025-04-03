"use strict"

//Задача №2
// Створити об’єкт «Авто». 


if (confirm('Start?')) {
	function Car(brand, tankSize, numLitersGasoline, numSeats, countPassengers, carRefuelingLiters, addPassengersNum, disPAssengersNum) {
		this.brand = brand,
			this.tankSize = tankSize,
			this.numLitersGasoline = numLitersGasoline,
			this.numSeats = numSeats,
			this.countPassengers = countPassengers,
			this.carRefuelingLiters = carRefuelingLiters,
			this.addPassengersNum = addPassengersNum,
			this.disPAssengersNum = disPAssengersNum,
			this.carRefueling = function () {
				if (this.carRefuelingLiters + this.numLitersGasoline > this.tankSize) alert('Забагато бензину! Зменшіть кількість')
				else this.numLitersGasoline += this.carRefuelingLiters
				return this.numLitersGasoline
			},
			this.getCountPassengers = function () {
				document.write(`Кількість пасажирів у авто - ${this.countPassengers}`)
			},
			this.addingPassengers = function () {
				if (this.countPassengers + this.addPassengersNum > this.numSeats) alert('Забагато пасажирів')
				else this.countPassengers += this.addPassengersNum
				return this.countPassengers
			},
			this.disembarkationPassengers = function () {
				if (this.disPAssengersNum > this.countPassengers) alert('Виникла помилка, зменшіть кількість пасажирів')
				else this.countPassengers -= this.disPAssengersNum
				return this.countPassengers
			}
	}
	let brandUser = prompt('Введіть марку машини', 'Audi'),
		tankSizeUser = parseInt(prompt(`Введіть об'єм баку`, 40)),
		numLitersGasolineUser = parseInt(prompt(`Введіть кількість літрів бензину, що вже є в машині`, 15)),
		numSeatsUser = parseInt(prompt('Введіть кількість місць', 5)),
		countPassengersUser = parseInt(prompt('Введіть кількість пасажирів', 2)),
		carRefuelingLitersUser = parseInt(prompt('Введіть на скільки літрів хочете заправити машину', 17)),
		addPassengersNumUser = parseInt(prompt('Введіть кількість пасажирів для посадки', 2)),
		disPAssengersNumUser = parseInt(prompt('Введіть кількість пасажирів для висадки', 1))
	let car1 = new Car(brandUser, tankSizeUser, numLitersGasolineUser, numSeatsUser, countPassengersUser, carRefuelingLitersUser, addPassengersNumUser, disPAssengersNumUser)
	console.log(car1)
	document.write(car1.carRefueling())
}