"use strict"

//Задача №5
//Дано масив книг (назва, рік видання, автор, ціна). Підрахувати загальну вартість книг для кожного із авторів.

if (confirm('Start?')) {
	const booksList = [
		{ title: 'Book1', yearPublication: 2018, author: 'Ivan', price: 200, },
		{ title: 'Book2', yearPublication: 2016, author: 'Olga', price: 205, },
		{ title: 'Book3', yearPublication: 2018, author: 'Ivan', price: 237, },
		{ title: 'Book4', yearPublication: 2020, author: 'Peter', price: 166, },
		{ title: 'Book5', yearPublication: 2024, author: 'Olga', price: 255, },
		{ title: 'Book6', yearPublication: 2009, author: 'Ivan', price: 208, },
		{ title: 'Book7', yearPublication: 2011, author: 'Alex', price: 198, },
		{ title: 'Book8', yearPublication: 2016, author: 'Peter', price: 307, },
	]
	const costBooks = new Map()
	for (const el of booksList) {
		if (costBooks.has(el.author)) costBooks.set(el.author, costBooks.get(el.author) + el.price)
		else costBooks.set(el.author, el.price)
	}
	console.log(costBooks)
}