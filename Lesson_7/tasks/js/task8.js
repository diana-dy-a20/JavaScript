"use strict"

//Задача №8
// Створити функцію, яка виводить банер (у функцію передаються: зображення, заголовок та посилання, куди переходимо при кліку на зображення) тег img повине знаходитись у середині тега a: <a> <img src=”шлях”> </a>

if (confirm('Start?')) {
	function getLink(tittle, link, image) {
		document.write(`<h1>${tittle}</h1><a href = "${link}"><img src = "${image}"></a>`)
	}
	const tittleUser = prompt('Введіть свій заголовок')
	const linkUser = prompt('Введіть посилання на сайт')
	const imageUser = prompt('Введіть посилання на зображення')
	getLink(tittleUser, linkUser, imageUser)
}