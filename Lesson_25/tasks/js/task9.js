"use strict"

//Задача №9
//Дано два списки прізвищ студентів, що відвідують гуртки з математики і історії. Підрахувати скільки студентів з гуртка з історії також відвідують гурток з математики. Також підрахувати скільки всього студентів відвідують хоча б один гурток. 

if (confirm('Start?')) {
	const mathClub = [
		'Соловенко Катерина', 
		'Петренко Іван',
		'Залишевський Петро',
		'Шевченко Ольга',
		'Скуратовська Ірина'
	]
	const historyClub = [
		'Соловенко Катерина', 
		'Веритович Оксана',
		'Кориневич Сергій',
		'Шевченко Ольга',
		'Добрик Світлана',
		'Скуратовська Ірина'
	]
	const math = new Set(mathClub)
	const history = new Set(historyClub)
	const countStudFromHistoryAndMath = history.intersection(math)
	console.log(countStudFromHistoryAndMath)
	const countOllStudFromClubs = math.union(history)
	console.log(countOllStudFromClubs)
}