"use strict"

//Задача №1
//Дано клас PhoneNumber. Створити функцію перетворення до string, при якому на основі номера виводиться оператор (050….  à MTC, 096… à Kyivstar, ….)

if (confirm('Start?')) {
	class PhoneNumber {
		constructor(number) {
			this.number = number
			this.operator = this.whichMobileOperator()
		}
		whichMobileOperator() {
			let operator
			if (/(\+38)?(?:050|066|095|099|075)(\d{7})/.test(this.number)) operator = 'Vodafone'
			else if (/(\+38)?(?:096|067|068|097|098)(\d{7})/.test(this.number)) operator = 'Kyivstar'
			else if (/(\+38)?(?:093|063|073)(\d{7})/.test(this.number)) operator = 'Lifecell'
			else operator = 'Код оператора невідомий'
			return operator
		}
		[Symbol.toPrimitive](hint) {
			let res
			switch (hint) {
				case 'string': res = this.operator
					break
				default:
					res = null
					break
			}
			return res
		}
	}
	const num = new PhoneNumber('+380639433542')
	document.write(num)
}