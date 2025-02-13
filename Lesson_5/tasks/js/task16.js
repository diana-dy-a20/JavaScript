"use strict"

//Задача №16
//Користувач поступово вводить прибуток магазину за кожен день протягом N тижнів.Знайти загальну величину прибутку та вивести величину прибутку протягом кожного окремого тижня.

if (confirm('Start?')) {
	const weeksNum = parseInt(prompt('Введіть кількість тижнів, за які хочете ввести свій прибуток', 3))
	let totalProfit = 0
	for (let i = 1; i <= weeksNum; i++) {
		let profitPerWeek = 0
		for (let j = 1; j <= 7; j++) {
			let profitPerDay = parseFloat(prompt(`Введіть прибуток за ${i}-й тиждень ${j}-го дня`, 1500))
			document.write(`Прибуток за ${i}-й тиждень ${j}-го дня складає ${profitPerDay}грн<br>`)
			profitPerWeek +=profitPerDay
		}
		document.write(`Прибуток за ${i}-й тиждень ${profitPerWeek}грн<br>`)
		totalProfit += profitPerWeek
	}
	document.write(`Загальний прибуток за ${weeksNum} тижні складає ${totalProfit}грн`)
}