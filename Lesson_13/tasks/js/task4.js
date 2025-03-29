"use strict"

//Задача №4
// Дано масив хлопців і дівчат вивести всі можливі комбінації для танців з хлопців і дівчат.

if (confirm('Start?')) {
	let girlsArrayName = ['Olga', 'Vika', 'Anna']
	let boysArrayName = ['Ivan', 'Vlad', 'Taras']
	function coupleForDance(currPair, girls, boys) {
		if (girls.length === 0 || boys.length === 0) document.write(`${currPair}<br>`)
		else {
			for (let i = 0; i < girls.length; i++) {
				for (let j = 0; j < boys.length; j++) {
					const newPair = [...currPair, [girls[i], boys[j]]]
					const newGirls = [...girls.slice(0, i), ...girls.slice(i + 1)]
					const newBoys = [...boys.slice(0, j), ...boys.slice(j + 1)]
					coupleForDance(newPair, newGirls, newBoys)
				}
			}
		}
	}
	coupleForDance([], girlsArrayName, boysArrayName)
}