"use strict"

//Задача №7
// Інвестор вклав  тис. грн на 20 років під 20% річних, а потім на 17 років під 27% річних. Визначити за допомогою циклів суму, яку він одержить.

if (confirm('Start?')) {
	const money = parseFloat(prompt('Введіть суму для інвестицій', 5000))
	let profit = 0
	// for (let i = 0; i < 20; i++) {
	// 	profit += money * 0.2
	// }
	// for (let i = 0; i < 17; i++) {
	// 	profit += money * 0.27
	// }
	for (let i = 0; i < 37; i++) {
		if (i < 20) profit += money * 0.2
		else profit += money * 0.27
	}
	document.write(`Ваша сума при виведенні складає ${parseFloat(profit.toFixed(2)) + money}`)
}