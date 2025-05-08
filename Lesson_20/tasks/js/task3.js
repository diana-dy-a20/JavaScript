"use strict"

//Задача №3
//Дано 5 випадковим чином згенерованих нумерованих списків з рандомними числами (кількість елементів у списку випадкова від 1 до 10, елементи випадкові – від 1 до 100). При натисненні на кнопку нумеровані списки з парною кількістю елементів зафарбувати у зелений колір, інші у червоний.

if (confirm('Start?')) {
	function getRandomNumList() {
		return 1 + Math.floor(Math.random() * 10)
	}
	function getListRandom() {
		const container = document.getElementById('container')
		const button = document.createElement('button')
		button.id = 'color'
		button.innerText = 'Зафарбувати'
		container.append(button)
		for (let i = 0; i < 5; i++) {
			const list = document.createElement('ol')
			const num = getRandomNumList()
			for (let i = 0; i < num; i++) {
				const item = document.createElement('li')
				item.innerText = 1 + Math.floor(Math.random() * 100)
				list.append(item)
			}
			container.append(list)
		}
	}
	function color() {
		const lists = document.getElementsByTagName('ol')
		for (const list of lists) {
			if (list.children.length % 2 === 0) list.style.color = 'green'
			else list.style.color = 'red'
		}
	}
	window.onload = function () {
		getListRandom()
		document.getElementById('color').onclick = color
	}
}
