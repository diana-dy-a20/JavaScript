"use strict"

//Задача №1
//Дано 10 рядків тексту «Hello!» у окремих div. При кліку на якийсь із них усі наступні повинні бути зафарбовані у червоний колір.

if (confirm('Start?')) {
	function onDivClick(event) {
		const currentDiv = event.target
		let divEl = currentDiv.nextElementSibling
		while (divEl) {
			divEl.style.color = 'red'
			divEl = divEl.nextElementSibling
		}
	}
	window.onload = function() {
		document.querySelector('body').onclick = onDivClick
	}
}