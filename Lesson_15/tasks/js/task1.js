"use strict"

//Задача №1
//Створити об’єкт «Тир». У масиві зберігаються 1, якщо у цьому квадраті є заєць і 0 в іншому випадку.

if (confirm('Start?')) {
	function shootingGame(array, numShoot) {
		return {
			arr: array,
			numShoot: numShoot,
			shooting() {
				for (let i = 0; i < numShoot; i++) {
					let userPositionShoot = parseInt(prompt('Введіть позицію для пострілу від 1 до 5')) - 1
					if (array[userPositionShoot] === 1) alert('Ви влучили')
					else alert('Промах')
				}
			},
			getGame() {
				document.write(this.arr)
			}
		}
	}
	let arr = [0, 1, 0, 0, 1]
	let game = shootingGame(arr, 2)
	game.shooting()
	game.getGame()
}