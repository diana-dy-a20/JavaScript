"use strict"

//Задача №8
//Дано масив показів температур. Підрахувати кількість входжень кожного із показів. Заокруглити вверх значення та підрахувати кількість різних показів.

if (confirm('Start?')) {
	let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]
	const countTempReadings = new Map()
	for (const temp of temperatures) {
		if (countTempReadings.has(temp)) countTempReadings.set(temp, countTempReadings.get(temp) + 1)
		else countTempReadings.set(Math.ceil(temp), 1)
	}
	console.log(countTempReadings)
	const count = new Set(countTempReadings).size
	console.log(count)
}