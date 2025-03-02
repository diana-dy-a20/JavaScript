"use strict"

//Задача №3
//Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я «Іван».

if (confirm('Start?')) {
	const numStudents = parseInt(prompt('Введіть кількість учнів', 6))
	function arrayNamesStudents() {
		let names = []
		for (let i = 0; i < numStudents; i++) {
			let name = prompt('Введіть ім\'я учня')
			names.push(name)
		}
		return names
	}
	let namesStudentsUser = arrayNamesStudents()
	document.write(`${namesStudentsUser}.<br>`)
	function getNumIvan(namesStudents) {
		let num = 0
		for (let i = 0; i < namesStudents.length; i++) {
			if(namesStudents[i] === "Іван") num++
		}
		return num
	}
	document.write(`Іванів у класі: ${getNumIvan(namesStudentsUser)}.`)
}
