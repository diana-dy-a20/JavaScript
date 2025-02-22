"use strict"

//Задача №6
// Інвестор вклав  тис. грн на 20 років під 20% річних, податок складає 5% від суми прибутку. Визначити за допомогою циклів суму, яку він одержить.

if (confirm('Start?')) {
	const money = parseFloat(prompt('Введіть суму для інвестицій', 5000))
	let profit = 0
	for (let i = 0; i < 20; i++) {
		profit += money * 0.2
	}
	profit -= profit * 0.05
	document.write(`Ваша сума при виведенні складає ${profit + money}`)
}