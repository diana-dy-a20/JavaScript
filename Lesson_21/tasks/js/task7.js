"use strict"

//Задача №7
//Задача 1. Відобразити падаючий сніг. Сніжинка з’являється у верхній частині екрану (top =0) і з випадковою швидкістю рухається вниз (у setInterval викликати метод, у якому додавати крок до top). Як тільки сніжинка досягає нижньої частини екрану (top>maxTop) вона знову повинна з’явитись у верхній частині екрану (top=0).


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