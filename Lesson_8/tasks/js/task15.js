"use strict"

//Задача №15
//Користувача поступово вводить показники температури протягом року. Знайти середню температуру.

if (confirm('Start?')) {
	confirm('Вводьте показники температури раз на місяць (вкажіть за цілий рік)')
	let sum = 0
	for (let i = 1; i <= 12; i++) {
		let temperatureIndicators = parseInt(prompt(`Введіть показник температури за ${i}-й місяць`, 5))
		document.write(`Показник температури за ${i}-й місяць - ${temperatureIndicators}°C<br>`)
		sum += temperatureIndicators
	}
	let averageIndicator = (sum / 12).toFixed(1)
	document.write(`Середній показник за рік - ${averageIndicator}°C`)
}