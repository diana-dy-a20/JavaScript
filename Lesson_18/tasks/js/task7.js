"use strict"

//Задача №7
// Подорож складається з 3 етапів. На кожному етапі користувач може вибрати один з видів транспорту (авто, автобус, літак - випадаючий список), харчування (сніданок, обід, вечеря – checkbоx) та одного з 3-х гідів(використати  - radio buttons). Ціни визначте самі. Підрахувати загальну вартість


if (confirm('Start?')) {
	function getTotalSum() {
		const inpList = document.querySelectorAll('input')
		const transport = parseInt(document.getElementById('transport').value)
		let sum = 0
		for (const inp of inpList) {
			if(inp.checked)
				sum +=parseInt(inp.value)
		}
		const totalSum = sum + transport
		document.getElementById('result').innerText = totalSum
	}
	window.onload = function() {
		document.querySelector('button').onclick = getTotalSum
	}
}