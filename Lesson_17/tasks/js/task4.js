"use strict"

//Задача №4
// Склад. База товарів, які зберігаються на складі: назва товару, одиниця виміру, кількість, фірма виробник (назва, реєстраційний номер). Організувати реєстрацію/відвантаження товарів, фільтрація за назвою товару, фільтрація за назвою фірми

if (confirm('Start?')) {
	class Product {
		constructor(tittle, unit, count, brand) {
			this.tittle = tittle
			this.unit = unit
			this.count = count
			this.brand = brand
		}
		toString() {
			return `Товар:${this.tittle}, одиниця вимірювання - ${this.unit}, кількість на складі - ${this.count}, виробник - ${this.brand}.`
		}
	}
	class Base {
		constructor() {
			this.productList = []
		}
		addProduct(newProduct) {
			this.productList.push(newProduct)
		}
		removeProduct(removeProduct) {
			this.productList = this.productList.filter((prod) => prod.tittle !== removeProduct)
		}
		filteringByNamy(tittle) {
			return this.productList.filter((prod) => prod.tittle === tittle)
		}
		filteringByBrand(brand) {
			return this.productList.filter((prod) => prod.brand === brand)
		}
		showProduct(list = this.productList) {
			document.write('<ol>')
			list.forEach((pr) => document.write(`<li>${pr}</li>`))
			document.write('</ol>')
		}
	}
	let product1 = new Product('Чіпси', 'грами', 60, 'Lays')
	let product2 = new Product('Шоколад', 'грами', 120, 'Milka')
	let product3 = new Product('Сік', 'літри', 55, 'Садочок')
	let product4 = new Product('Печиво', 'грами', 63, 'Milka')
	const base = new Base()
	base.addProduct(product1)
	base.addProduct(product2)
	base.addProduct(product3)
	base.addProduct(product4)
	base.showProduct()
	base.removeProduct('Чіпси')
	base.showProduct()
	const filterName = base.filteringByNamy('Сік')
	base.showProduct(filterName)
	const filterBrand = base.filteringByBrand('Milka')
	base.showProduct(filterBrand)
}
