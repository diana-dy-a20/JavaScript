"use strict"

//Задача №2
// Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. Вивести на екран:
// номери днів, протягом яких кількість відвідувачів була меншою за 20;
// номери днів, коли кількість відвідувачів була мінімальною;
// номери днів, коли кількість відвідувачів була мінімальною;
// загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.


if (confirm('Start?')) {
	function arrayVisitors() {
		let visitors = []
		for (let i = 1; i <= 7; i++) {
			let visitorNum = parseInt(prompt(`Введіть кількість відвідувачів за ${i}й день`))
			visitors.push(visitorNum)
		}
		return visitors
	}
	let visitorsUser = arrayVisitors()
	function getNumDayVisitorsLessThan20(less, visitors) {
		let numDay = []
		for (let i = 0; i < visitors.length; i++) {
			if (visitors[i] < less) numDay.push(i + 1)
		}
		return numDay
	}
	document.write(`Дні, коли кількість відвідувачів була менше 20: ${getNumDayVisitorsLessThan20(20, visitorsUser)}.<br>`)
	function getNumDayVisitorsMin(visitors) {
		let numDay = []
		const minNumVisitors = Math.min(...visitors)
		for (let i = 0; i < visitors.length; i++) {
			if (visitors[i] === minNumVisitors) numDay.push(i + 1)
		}
		return numDay
	}
	document.write(`Дні, коли кількість відвідувачів була мінімальною: ${getNumDayVisitorsMin(visitorsUser)}.<br>`)
	function getNumDayVisitorsMax(visitors) {
		let numDay = []
		const maxNumVisitors = Math.max(...visitors)
		for (let i = 0; i < visitors.length; i++) {
			if (visitors[i] === maxNumVisitors) numDay.push(i + 1)
		}
		return numDay
	}
	document.write(`Дні, коли кількість відвідувачів була максимальною: ${getNumDayVisitorsMax(visitorsUser)}.<br>`)
	function getTotalNumberVisitorsOnWorkingDay(visitors) {
		let sum = 0
		for (let i = 0; i < 5; i++) {
			sum += visitors[i]
		}
		return sum
	}
	document.write(`Загальна кількість відвідувачів за робочі дні: ${getTotalNumberVisitorsOnWorkingDay(visitorsUser)}.<br>`)
	function getTotalNumberVisitorsOnWeekends(visitors) {
		let sum = 0
		for (let i = 5; i < visitors.length; i++) {
			sum += visitors[i]
		}
		return sum
	}
	document.write(`Загальна кількість відвідувачів за вихідні: ${getTotalNumberVisitorsOnWeekends(visitorsUser)}.`)
}