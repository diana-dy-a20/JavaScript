"use strict"

//Задача №4
//Дано 3 таблиці розмірності 3*3 з випадковими числами. Якщо відбувається клік на якійсь із клітинок, то до відповідної таблиці додається червона рамка (спробуйте додати можливість відображення кількості кліків біля назви таблиці з використанням відповідно доданого для цього атрибута).

if (confirm('Start?')) {
	function getTable() {
		const container = document.getElementById('container')
		for (let k = 0; k < 3; k++) {
			const head = document.createElement('h2')
			head.innerText = `Таблиця №${k + 1}`
			container.append(head)
			const p = document.createElement('p')
			p.innerText = 'Кількість кліків '
			container.append(p)
			const counter = document.createElement('span')
			counter.id = 'counter'
			counter.innerText = '0'
			p.append(counter)
			const table = document.createElement('table')

			for (let i = 0; i < 3; i++) {
				const tr = document.createElement('tr')
				for (let j = 0; j < 3; j++) {
					const td = document.createElement('td')
					td.innerText = 1 + Math.floor(Math.random() * 50)
					tr.append(td)
				}
				table.append(tr)
			}
			container.append(table)
		}
	}
	function onClick(event) {
		const clickerElement = event.target
		const parent = clickerElement.closest('table')
		let pElement = parent.previousElementSibling
		let counter = pElement.querySelector('span')
		if (clickerElement.tagName === 'TD') {
			clickerElement.closest('table').style.border = '1px solid red'
			let numCount = parseInt(counter.innerText)
			numCount++
			counter.innerText = numCount
		}
	}
	window.onload = function () {
		getTable()
		document.getElementById('container').onclick = onClick

	}
}
