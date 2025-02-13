"use strict"

//Задача №4
//Вивести таблицю з 3 рядків і 7 стовпців

if (confirm('Start?')) {
	document.write(`<table><tr>`)
	for (let i = 1; i <= 7; i++) {
		document.write(`<td>${i}</td>`)
	}
	document.write(`</tr></table>`)
	document.write(`<table><tr>`)
	for (let i = 1; i <= 7; i++) {
		document.write(`<td>${i}</td>`)
	}
	document.write(`</tr></table>`)
	document.write(`<table><tr>`)
	for (let i = 1; i <= 7; i++) {
		document.write(`<td>${i}</td>`)
	}
	document.write(`</tr></table>`)
}