"use strict"

//Задача №5
// З використанням замикань розробити ітератор, тобто функцію, що буде поступово за окремими викликами видавати по одне значення від заданого мінімального до заданого максимального. Якщо значення досягне максимального, то наступним буде мінімальне значення. З використанням цієї функції реалізувати перебір номерів місяців. 

if (confirm('Start?')) {
	function getNumMonth(val) {
		let currMonthNum
		function setInitVal() {
			if (val >= 0 && val <= 12) currMonthNum = val
			else throw new Error("Введене значення некоректне")
		}
		setInitVal(val)
		function getCurrMonthNum() {
			return currMonthNum
		}
		function incrMonthNum() {
			if (currMonthNum < 12) currMonthNum++
		}
		function decrMonthNum() {
			if (currMonthNum > 1) currMonthNum--
		}
		return [getCurrMonthNum, incrMonthNum, decrMonthNum]
	}
	let [getMonth, incMonth, decMonth] = getNumMonth(0)
	function monthGrowth(inc, get) {
		for (let i = 1; i <= 12; i++) {
			inc()
			document.write(`${get()}<br>`)
		}
	}
	// function monthDescending(dec, get) {
	// 	for (let i = 11; i > 0; i--) {
	// 		dec()
	// 		document.write(`${get()}<br>`)
	// 	}
	// }
	monthGrowth(incMonth, getMonth)
	// monthDescending(decMonth, getMonth)
}