"use strict"

//Задача №3
//Користувач може змінювати колір фону, що вибирає користувач з використанням
//< input type = "color" >.
//Зберігати цей колір і відновлювати при наступному відкритті.Також зберігати і відображати кількість змін протягом одного сеансу.


if (confirm('Start?')) {
	function changeBackgroundColor(color) {
		document.querySelector('body').style.backgroundColor = color
		localStorage.setItem('bgc', color)
	}
	function setValues() {
		const input = document.querySelector('input')
		let color = input.value
		changeBackgroundColor(color)
		let changeNum = parseInt(sessionStorage.getItem('numChange')) || 0
		changeNum++
		sessionStorage.setItem('numChange', changeNum)
		document.getElementById('count').innerText = changeNum
	}
	window.onload = function () {
		document.querySelector('input').oninput = setValues
		let color = localStorage.getItem('bgc')
		if (color) changeBackgroundColor(color)
		let initNum = parseInt(sessionStorage.getItem('numChange')) || 0
		document.getElementById('count').innerText = initNum
	}
}
