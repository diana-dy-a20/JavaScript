"use strict"

//Задача №13
//сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200

if (confirm('Start?')) {
	const profitTable = [
		// Понеділок, Вівторок, Середа, Четвер, П'ятниця, Субота, Неділя
		[120, 1500, 1300, 100, 1800, 200, 1900], // Магазин 1
		[900, 1100, 1000, 1200, 1400, 1600, 150],  // Магазин 2
		[1500, 180, 170, 1900, 2100, 2300, 2200], // Магазин 3
		[800, 950, 80, 1000, 110, 125, 1200]   // Магазин 4
	]
	let profitGr200 = profitTable.flat(Infinity).filter(el => el > 200)
	document.write(profitGr200)
}