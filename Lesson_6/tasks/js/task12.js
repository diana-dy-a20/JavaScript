"use strict"

//Задача №12
// Написати програму виведення на екран кожного символу латинського алфавіту та поруч з кожним з них символу, що передує йому та що слідує за ним.

if (confirm('Start?')) {
	const start = "A".charCodeAt(0)
	const end = "Z".charCodeAt(0)
	for (let letter = start; letter <= end; letter++) {
		let prew = String.fromCharCode(letter - 1)
		let next = String.fromCharCode(letter + 1)
		if (letter > start && letter < end) document.write(`${prew}${String.fromCharCode(letter)}${next}<br>`)
		else document.write(`${String.fromCharCode(letter)}${next}<br>`)
		// else if (letter = end) document.write(`${prew}${letter}<br>`)
	}
}
