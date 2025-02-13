"use strict"

//Задача №5
// Вивести таблицю

if (confirm('Start?')) {
	document.write(`<table><tr>`)
	for (let i = 1; i < 4; i++) 
		document.write(`<td>${i}</td>`)
	document.write(`</tr><tr>`)
	for (let i = 4; i < 7; i++) 
		document.write(`<td>${i}</td>`)
		document.write(`</tr><tr>`)
	for (let i = 7; i < 10; i++)
		document.write(`<td>${i}</td>`)
	document.write(`</tr></table>`)
}