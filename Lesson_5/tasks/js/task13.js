"use strict"

//Задача №13
//Морський бій. Комп’ютер випадково розташовує одиночний корабель на полі розміром N*M. Маючи К снарядів користувач намагається потопити корабель.

if (confirm('Start?')) {
	let positionX = parseInt(prompt('Введіть кількість клітинок по осі Х', 3))
	let positionY = parseInt(prompt('Введіть кількість клітинок по осі Y', 3))
	let shotsNum = parseInt(prompt('Введіть кількість пострілів', 3))
	let shipPositionX = 1 + Math.floor(Math.random() * positionX)
	let shipPositionY = 1 + Math.floor(Math.random() * positionY)
	for (let i = 0; i < shotsNum; i++) {
		let userTrapPositionX = parseInt(prompt('Введіть позицію Х для пострілу'))
		let userTrapPositionY = parseInt(prompt('Введіть позицію Y для пострілу'))
		if (userTrapPositionX === shipPositionX && userTrapPositionY === shipPositionY) {
			alert('Ви потопили корабель')
			break
		}
		else {
			alert('Ви не вгадали')
		}
	}
}