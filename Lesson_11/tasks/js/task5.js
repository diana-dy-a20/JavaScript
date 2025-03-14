"use strict"

//Задача №5
// Суму парних рядків

if (confirm('Start?')) {
	let array = [
		[87, 23, 56, 12, 98, 45, 71, 34],
		[19, 67, 28, 93, 51, 60, 15, 82],
		[78, 41, 63, 36, 25, 73, 48, 90],
		[54, 89, 96, 21, 39, 84, 17, 68],
		[65, 31, 43, 80, 76, 27, 92, 59],
		[46, 74, 33, 99, 62, 50, 85, 20],
		[91, 58, 79, 26, 42, 70, 37, 88],
		[38, 95, 83, 53, 49, 18, 66, 72]
	]
	let sum = 0
	for (let row = 0; row < array.length; row += 2) {
		for (let element = 0; element < array[row].length; element++) {
			sum += array[row][element]
		}
	}
	document.write(sum)
}