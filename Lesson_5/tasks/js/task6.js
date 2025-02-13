"use strict"

//Задача №6
// Вивести 3 таблиці (по 3 рядки і 3 стовпці у кожній) за зразком

// if (confirm('Start?')) {
// 	document.write(`<table><tr>`)
// 	for (let i = 1; i < 4; i++)
// 		document.write(`<td>${i}</td>`)
// 	document.write(`</tr><tr>`)
// 	for (let i = 4; i < 7; i++)
// 		document.write(`<td>${i}</td>`)
// 	document.write(`</tr><tr>`)
// 	for (let i = 7; i < 10; i++)
// 		document.write(`<td>${i}</td>`)
// 	document.write(`</tr></table>`)

// 	document.write(`<table><tr>`)
// 	for (let i = 10; i < 13; i++)
// 		document.write(`<td>${i}</td>`)
// 	document.write(`</tr><tr>`)
// 	for (let i = 13; i < 16; i++)
// 		document.write(`<td>${i}</td>`)
// 	document.write(`</tr><tr>`)
// 	for (let i = 16; i < 19; i++)
// 		document.write(`<td>${i}</td>`)
// 	document.write(`</tr></table>`)

// 	document.write(`<table><tr>`)
// 	for (let i = 19; i < 22; i++)
// 		document.write(`<td>${i}</td>`)
// 	document.write(`</tr><tr>`)
// 	for (let i = 22; i < 25; i++)
// 		document.write(`<td>${i}</td>`)
// 	document.write(`</tr><tr>`)
// 	for (let i = 25; i < 28; i++)
// 		document.write(`<td>${i}</td>`)
// 	document.write(`</tr></table>`)
// }
let number = 1
for (let t = 0; t < 3; t++) {
	document.write(`<table>`)
	for (let i = 0; i < 3; i++) {
		document.write(`<tr>`)
		for (let j = 0; j < 3; j++) {
			document.write(`<td>${number++}</td>`)
		}
		document.write(`</tr>`)
	}
	document.write(`</table>`)
}