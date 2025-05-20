"use strict"

//Задача №1
//Використовуючи один з АРІ та функцію fetch організувати завантаження та відображення даних. Намагайтесь зробити це з використанням класів. Окремо клас для побудови розмітки. Окремо клас, який буде робити запити і повертати результати.

class GetImage {
	constructor(link) {
		this.link = link
	}
	async dataLoad() {
		try {
			let response = await fetch(this.link)
			console.log(response)
			if (response.ok) {
				this.imageLink = response.url
				return this.imageLink
			}
		} catch (error) {
			console.log(error.message)
		} 
		finally {
			alert('Приємного перегляду')
		}
	}
}
class CatsImage {
	constructor(imageUrl) {
		this.imageUrl = imageUrl.link
	}
	render(containerSelector) {
		console.log(this.imageUrl)
		const img = document.createElement('img')
		img.src = this.imageUrl
		img.className = 'image'
		if (containerSelector) document.querySelector(containerSelector).append(img)
	}
}
window.onload = function () {
	const image = new GetImage('https://cataas.com/cat')
	image.dataLoad()
	const cat = new CatsImage(image)
	cat.render('body')
}