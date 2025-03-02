"use strict"

//Задача №5
// Дано послідовність оцінок учня. Підрахувати кількість:
// 1. двійок
// 2. кількість хороших оцінок(добре, відмінно);
// 3. кількість оцінок, які нижче середнього.

if (confirm('Start?')) {
	const numMark = parseInt(prompt('Введіть кількість оцінок для вводу', 4))
	function getArrayMarks() {
		let marks = []
		for (let i = 0; i < numMark; i++) {
			let mark = parseInt(prompt(`Введіть оцінку №${i+1} (від 1 до 5)`))
			marks.push(mark)
		}
		return marks
	}
	let arrayMarksUser = getArrayMarks()
	document.write(`Ваші оцінки: ${arrayMarksUser}.<br>`)
	function getNum2(arrayMarks) {
		let num = 0
		for (let i = 0; i < arrayMarks.length; i++) {
			if(arrayMarks[i] === 2) num++
		}
		return num
	}
	document.write(`Кількість двійок: ${getNum2(arrayMarksUser)}.<br>`)
	function getNumGoodMarks(arrayMarks) {
		let num = 0
		for (let i = 0; i < arrayMarks.length; i++) {
			if(arrayMarks[i] >= 4) num++
		}
		return num
	}
	document.write(`Кількість хороших оцінок: ${getNumGoodMarks(arrayMarksUser)}.<br>`)
	function getAverageMark(arrayMarks) {
		let sum = 0
		for (let i = 0; i < arrayMarks.length; i++) {
			sum += arrayMarks[i]
		}
		return sum / arrayMarks.length
	}
	let averageMark = getAverageMark(arrayMarksUser)
	function getNumMarksBelowAverage(arrayMarks) {
		let num = 0
		for (let i = 0; i < arrayMarks.length; i++) {
			if(arrayMarks[i] > averageMark) num++
		}
		return num
	}
	document.write(`Кількість оцінок нижчих за середній показник (${averageMark}): ${getNumMarksBelowAverage(arrayMarksUser)}.<br>`)
}