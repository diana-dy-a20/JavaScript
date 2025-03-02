"use strict"

//Задача №6
// Дано послідовність цін товарів та назв (у окремих масивах). Вивести на екран ті, які може собі дозволити користувач (кількість грошей задається).

if (confirm('Start?')) {
	const numProducts = parseInt(prompt('Введіть кількість товарів', 3))
	function getArrayProductsTittles() {
		let tittles = []
		for (let i = 0; i < numProducts; i++) {
			let tittle = prompt(`Введіть назву товaру #${i+1}`)
			tittles.push(tittle)
		}
		return tittles
	}
	function getArrayProductsPrices() {
		let prices = []
		for (let i = 0; i < numProducts; i++) {
			let price = parseFloat(prompt(`Введіть ціну товару #${i+1}`))
			prices.push(price)
		}
		return prices
	}
	let productsPrices = getArrayProductsPrices()
	let productsTitles = getArrayProductsTittles()
	const moneyUser = parseFloat(prompt('Введіть кількість грошей, яку плануєте витратити', 500))
	function getArrayProductsUserCan(prices, tittles) {
		let userCan = []
		for (let i = 0; i < 3; i++) {
			if (moneyUser >= prices[i]) userCan.push(tittles[i])
		}
		return userCan
	}
	document.write(`Ці товари ви можете купити: ${getArrayProductsUserCan(productsPrices, productsTitles)}.`)
}