"use strict"

//Задача №6
// Користувач задає кількість оцінок і натискає на кнопку «get table». В результаті формується таблиця з input, куди користувач вводить оцінки. Після цього натискає на кнопку “get sum” і знаходить середнє значення.

if (confirm('Start?')) {
	function getTable() {
		const countGrades = parseInt(document.getElementById('count').value)
		const column = 2
		const row = Math.ceil(countGrades / 2)
		const table = document.createElement('table')
		for (let i = 0; i < row; i++) {
			const rowEl = document.createElement('tr')
			for (let j = 0; j < column; j++) {
				const columnEl = document.createElement('td')
				const inputEl = document.createElement('input')
				inputEl.id = 'grade'
				columnEl.append(inputEl)
				rowEl.append(columnEl)
			}
			table.append(rowEl)
		}
		document.getElementById('container').append(table)
	}
	function getAverageScore() {
		const inputEl = document.querySelectorAll('#grade')
		const scores = Array.from(inputEl).map(input => parseInt(input.value))
		const sum = scores.reduce((prevSum, el) => prevSum += el)
		const avrScore= sum / scores.length
		document.getElementById('result').innerText = avrScore
	}
	window.onload = function () {
		document.getElementById('getTable').onclick = getTable
		document.getElementById('getSum').onclick = getAverageScore
	}
}