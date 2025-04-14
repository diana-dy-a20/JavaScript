"use strict"

//Задача №5
//Відобразити таблицю 3*4 з випадковими числами (її треба динамічно створити і вставити на сторінку)

if (confirm('Start?')) {
	function getRandomNum() {
		return 1 + Math.floor(Math.random() * 50)
	}
	function createTable(rowNum, colNum) {
		const table = document.createElement('table')
		for (let i = 0; i < rowNum; i++) {
			const row = document.createElement('tr')
			for (let j = 0; j < colNum; j++) {
				const column = document.createElement('td')
				column.innerText = getRandomNum()
				row.append(column)
			}
			table.append(row)
		}
		return table
	}
	window.onload = function() {
		document.getElementById('container').append(createTable(3, 4))
	}
}