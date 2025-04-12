"use strict"

//Задача №11
// Знайти загальний прибуток за вихідні дні

if (confirm('Start?')) {
	const profitTable = [
		// Понеділок, Вівторок, Середа, Четвер, П'ятниця, Субота, Неділя
		[1200, 1500, 1300, 1600, 1800, 2000, 1900], // Магазин 1
		[900, 1100, 1000, 1200, 1400, 1600, 1500],  // Магазин 2
		[1500, 1800, 1700, 1900, 2100, 2300, 2200], // Магазин 3
		[800, 950, 850, 1000, 1100, 1250, 1200]   // Магазин 4
	]
	function getTotalSum(arr, start) {
		let sum = 0
		for (const shop of arr) {
			for (let dayIndex = start; dayIndex < shop.length; dayIndex++) {
				sum += shop[dayIndex]
			}
		}
		return sum
	}
	document.write(`Загальний прибуток за вихідні дні ${getTotalSum(profitTable, 5)}`)
}