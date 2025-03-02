"use strict"

//Задача №1
// Дано масив, який містить оцінки з К предметів. Знайти середній бал і з’ясувати до якої категорії він відноситься (відмінник, двійочник (має хоча би одну двійку), хорошист (оцінки добре і відмінно), трійочник(є хоча би одна трійка)).

if (confirm('Start?')) {
	const subjectsNum = parseInt(prompt('Введіть кількість предметів', 5))
	function arrayMarks() {
		let marks = []
		for (let i = 0; i < subjectsNum; i++) {
			let mark = parseInt(prompt('Введіть оцінку від 1 до 5'))
			marks.push(mark)
		}
		return marks
	}
	let marks = arrayMarks()
	function getAverageMark(mark) {
		let average
		let sum = 0
		for (let i = 0; i < mark.length; i++) {
			sum += mark[i]
		}
		average = sum / mark.length
		return average
	}
	function getMarkLevel(mark) {
		let markLevel
		const minMark = Math.min(...mark)
		switch (minMark) {
			case 5:
				markLevel = 'Ви відмінник'
				break
			case 4:
				markLevel = 'Ви хорошист'
				break
			case 3:
				markLevel = 'Ви трійочник'
				break
			case 2:
				markLevel = 'Ви двійочник'
				break
			default:
				throw new Error("Виникла помилка");
		}
		return markLevel
	}
	document.write(`Ваш середній бал - ${getAverageMark(marks)}<br>`)
	try {
		document.write(getMarkLevel(marks))
	} catch (error) {
		document.write(error.message)
	}
}
