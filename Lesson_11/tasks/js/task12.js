"use strict"

//Задача №12
//  максимальний прибуток за середу

if (confirm('Start?')) {
	const profitTable = [
		// Понеділок, Вівторок, Середа, Четвер, П'ятниця, Субота, Неділя
		[1200, 1500, 1300, 1600, 1800, 2000, 1900], // Магазин 1
		[900, 1100, 1000, 1200, 1400, 1600, 1500],  // Магазин 2
		[1500, 1800, 1700, 1900, 2100, 2300, 2200], // Магазин 3
		[800, 950, 850, 1000, 1100, 1250, 1200]   // Магазин 4
	]
	let profitatWednesday = []
	for (const shop of profitTable) {
		profitatWednesday.push(shop[2])
	}
	const maxProfit = Math.max(...profitatWednesday)
	document.write(maxProfit)
}
