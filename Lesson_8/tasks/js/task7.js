"use strict"

//Задача №7
//  Дано послідовність платіжок протягом року. Знайти сумарну кількість грошей за:
// за весь рік;
// у першій половині року;
// у другій половині року;
// за літо;
// за ІІ квартал;
// за парні місяці(з парними номерами);
// за місяці, які є початковими у сезоні(весна, літо, осінь, зима).


if (confirm('Start?')) {
	function getArrayPayments() {
		let array = []
		for (let i = 1; i <= 12; i++) {
			let payment = parseFloat(prompt(`Введіть суму платіжки за ${i}й місяць`))
			array.push(payment)
		}
		return array
	}
	let arrayPaymentsUser = getArrayPayments()
	document.write(`Ваші платіжки за рік ${arrayPaymentsUser}<br>`)
	function getTottalSumOfYear(arrayPayments) {
		let sum = 0
		for (let i = 0; i < arrayPayments.length; i++) {
			sum += arrayPayments[i]
		}
		return sum
	}
	document.write(`Сума за весь рік ${getTottalSumOfYear(arrayPaymentsUser)}<br>`)
	function getTotalSumFirstHalfOfYear(arrayPayments) {
		let sum = 0
		for (let i = 0; i < 6; i++) {
			sum += arrayPayments[i]
		}
		return sum
	}
	document.write(`Сума за першу половину року ${getTotalSumFirstHalfOfYear(arrayPaymentsUser)}<br>`)
	function getTotalSumSecondHalfOfYear(arrayPayments) {
		let sum = 0
		for (let i = 6; i < 12; i++) {
			sum += arrayPayments[i]
		}
		return sum
	}
	document.write(`Сума за другу половину року ${getTotalSumSecondHalfOfYear(arrayPaymentsUser)}<br>`)
	function getTotalSumOfSummer(arrayPayments) {
		let sum = 0
		for (let i = 5; i < 8; i++) {
			sum += arrayPayments[i]
		}
		return sum
	}
	document.write(`Сума за літо ${getTotalSumOfSummer(arrayPaymentsUser)}<br>`)
	function getTotalSumOfSecondQuarter(arrayPayments) {
		let sum = 0
		for (let i = 3; i < 6; i++) {
			sum += arrayPayments[i]
		}
		return sum
	}
	document.write(`Сума за II квартал ${getTotalSumOfSecondQuarter(arrayPaymentsUser)}<br>`)
	function getTotalSumOfEvenNumberMonth(arrayPayments) {
		let sum = 0
		for (let i = 1; i < arrayPayments.length; i += 2) {
			sum += arrayPayments[i]
		}
		return sum
	}
	document.write(`Сума за місяці з парними числами ${getTotalSumOfEvenNumberMonth(arrayPaymentsUser)}<br>`)
	function getTotalSumFirstMonthOfSeasons(arrayPayments) {
		let sum = 0
		for (let i = 2; i < arrayPayments.length; i += 3) {
			sum += arrayPayments[i]
		}
		return sum
	}
	document.write(`Сума за місяці, які є початками сезонів ${getTotalSumFirstMonthOfSeasons(arrayPaymentsUser)}<br>`)
}