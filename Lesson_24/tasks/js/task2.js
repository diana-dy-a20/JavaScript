"use strict"

//Задача №2
//Дано Shop  -- клас, що містить список товарів (масив об’єктів класу Product (назва, ціна, кількість одиниць). Додати можливість ітератора до класу Shop, щоб при ітеруванні для кожного елемента виводився рядок «товар-загальна вартість»



if (confirm('Start?')) {
	class Product {
		constructor(tittle, price, count) {
			this.tittle = tittle
			this.price = price
			this.count = count
		}
		[Symbol.toPrimitive] (hint){
			let res
			switch (hint) {
				case 'string': res = `${this.tittle}, загальна вартість всіх одиниць товару - ${this.price * this.count} грн. <br>`
					break
				default: res = null
					break
			}
			return res
		}
	}
	const products = [
		new Product('Чай "Lovare"', 50, 6),
		new Product('Хліб "Кулиничі"', 20, 15),
		new Product('Морозиво "Рудь"', 35, 7), 
		new Product('Йогурт "Activia"', 32, 12)
	]
	console.log(products)
	class Shop {
		constructor(productList) {
			this.productList = productList
		}
		[Symbol.iterator] () {
			this.currentId = 0
			return this
		}
		next() {
			if(this.currentId < this.productList.length) {
				return {done: false, value: this.productList[this.currentId++]}
			} else {
				return {done: true}
			}
		}
	}
	const shop = new Shop(products)
	for (const product of shop) {
		document.write(product)
	}
}