"use strict"

//Задача №4
// Наперед задано у скрипті масив зі списком бажань. Після завантаження сторінки випадковим чином вибираються 3 і відображаються у окремих div (їх треба створити і додати на сторінку)

if (confirm('Start?')) {
	const arrayWish = [
		'Нехай кожен день приносить радість!',
		'Бажаю міцного здоров\'я та натхнення!',
		'Хай щастя буде поруч!',
		'Успіхів у всіх починаннях!',
		'Миру та злагоди в серці!',
		'Нехай мрії збуваються!',
		'Тепла та затишку тобі!'
	]
	function createDiv(arr) {
		const div = document.createElement('div')
		const randomWish = Math.floor(Math.random() * arr.length)
		div.innerText = arr[randomWish]
		return div
	}
	function generateDivList(numDiv = 3, containerSel) {
		const container = document.querySelector(containerSel)
		for (let i = 0; i < numDiv; i++) {
			let div = createDiv(arrayWish)
			container.append(div)
		}
	}
	window.onload = function() {
		generateDivList(3, '#container')
	}
}
