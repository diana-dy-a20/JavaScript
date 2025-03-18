"use strict"

//Задача №5
// Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я «Olga» і під яким індексом.

if (confirm('Start?')) {
	let arrayNames = ['Peter', 'Olga', 'Diana', 'Ivan', 'Polly', 'Anna']
	function sortArrayNames(arr) {
		return arr.sort()
	}
	const searchElement = 'Olga'
	function binarySearch(arr, searchEl) {
		let start = 0, end = arr.length - 1
		let middle
		while (start <= end) {
			middle = Math.floor((start + end) / 2)
			if (arr[middle] === searchEl) return middle
			if (arr[middle] < searchEl) start = middle + 1
			if (arr[middle] > searchEl) end = middle - 1
		}
		return middle
	}
	document.write(`${sortArrayNames(arrayNames)}<br> Ім'я Olga знаходиться під індексом - ${binarySearch(arrayNames, searchElement)}`)
}