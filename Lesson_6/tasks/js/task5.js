"use strict"

//Задача №5
// Інвестор вклав  тис. грн на 20 років під 20% річних. Визначити за допомогою циклів суму, яку він одержить (без оподаткування).

if (confirm('Start?')) {
	const money = parseFloat(prompt('Введіть суму для інвестицій', 5000))
	let profit = 0
	for (let i = 0; i < 20; i++) {
		profit += money * 0.2
	}
	document.write(`Ваша сума при виведенні складає ${profit+money}`)
}