"use strict"

//Задача №16
//Морський бій. Випадковим чином на двовимірному полі розміром 6*6 розташовується 5 кораблів. Користувач стріляє вказуючи координати. Гра продовжується поки не потоплено усі кораблі або у користувача не закінчаться снаряди.

if (confirm('Start?')) {
	const battleShip = [
		[0, 0, 1, 0, 0, 0],
		[0, 0, 0, 0, 1, 0],
		[0, 1, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 1],
		[0, 0, 1, 0, 0, 0]
	]
	let shotsNum = parseInt(prompt('Введіть кількість пострілів', 3))
	function game(arr, shot) {
		let winShot = 0
		do {
			let shipRowUser = parseInt(prompt('Введіть номер рядка (від 1 до 6)'))
			let shipColUser = parseInt(prompt('Введіть номер колонки (від 1 до 6)'))
			if (arr[shipRowUser - 1][shipColUser - 1] === 1) {
				alert('Ви потопили корабель')
				winShot += 1
			} else alert('Ви не влучили')
			shot -= 1
		} while (shot > 0)
		return winShot
	}
	document.write(`Ви потопили ${game(battleShip, shotsNum)} кораблі`)
}