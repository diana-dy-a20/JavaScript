"use strict"

//Задача №2
// Дано масив імен спортсменів. Розробити програму для виведення усіх можливих результатів змагань (списки імен у відповідності до місць, які вони займуть).


if (confirm('Start?')) {
	function resultCompetition(step, resArr, usedNames) {
		if (step === 3) {
			document.write(`${resArr}<br>`)
		} else {
			const names = ['Olga', 'Ivan', 'Peter']
			for (let name of names) {
				if (!usedNames.includes(name)) {
					const newUsedNames = [...usedNames, name]
					resultCompetition(step + 1, [...resArr, name], newUsedNames)
				}
			}
		}
	}
	resultCompetition(0, [], [])
}