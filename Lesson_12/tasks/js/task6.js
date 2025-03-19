"use strict"

//Задача №6
// Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я довжиною 5 символів і під яким індексом.

if (confirm('Start?')) {
	let arrayNames = ['Petryk', 'Olga', 'Diana', 'Polina', 'Anna']
	function sortArrayNames(arr) {
		return arr.sort((a, b) => a.length - b.length)
	}
	const searchElement = 5
	function binarySearch(arr, searchEl) {
		let start = 0, end = arr.length - 1
		let middle
		while (start <= end) {
			middle = Math.floor((start + end) / 2)
			if (arr[middle].length === searchEl) return middle
			if (arr[middle].length < searchEl) start = middle + 1
			if (arr[middle].length > searchEl) end = middle - 1
		} 
		return -1
	}
	let resultSearch = binarySearch(arrayNames, searchElement)
	console.log(resultSearch);
	
	if (resultSearch === -1) alert('Такого імені немає')
	else document.write(`${sortArrayNames(arrayNames)}<br> Ім'я довжино 5 символів знаходиться під індексом - ${resultSearch}`)
}