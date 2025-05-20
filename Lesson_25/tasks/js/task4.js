"use strict"

//Задача №4
//Дано список URL адрес. Підрахувати кількість адрес, що відносяться до кожного із доменів (edu, com, org,...).

if (confirm('Start?')) {
	const urlList = [
		"https://example.com",
		"https://university.edu",
		"https://nonprofit.org",
		"https://blog.example.com",
		"https://research.university.edu",
		"https://donate.nonprofit.org"
	]
	function getDomen(list) {
		// const copyList = [...list]
		let listDomen = []
		for (const link of list) {
			let index = link.lastIndexOf('.')
			let domen = link.slice(index)
			listDomen.push(domen)
		}
		return listDomen
	}
	const newListDomen = getDomen(urlList)
	const countLinksFromDomen = new Map()
	for (const dom of newListDomen) {
		if(countLinksFromDomen.has(dom)) countLinksFromDomen.set(dom, countLinksFromDomen.get(dom) + 1)
		else countLinksFromDomen.set(dom, 1)
	}
	console.log(countLinksFromDomen);
}
