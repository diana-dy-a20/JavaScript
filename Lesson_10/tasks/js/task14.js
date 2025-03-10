"use strict"

//Задача №14
//Каса. Користувачу повідомляють суму, яку йому треба сплатити. Користувач поступово вводить суму грошей до тих пір, поки суми не буде достатньо для оплати товарів(кожного разу користувачу повідомляють, яку ще суму потрібно ввести).

if (confirm('Start?')) {
	let sumProduct = 3000
	do {
		let userMoney = parseInt(prompt(`Ваша сума ${sumProduct} грн.\nВведіть вашу кількість грошей`))
		if (userMoney <= sumProduct){
			sumProduct -= userMoney
		} 
	} while (sumProduct > 0)
	document.write(`Ви повністю оплатили товар`)
}