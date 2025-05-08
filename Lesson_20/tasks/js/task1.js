"use strict"

//Задача №1
//Сяючі зорі. Вказана кількість зірочок повинна з’являтися у випадковій частині екрану. Кожна зірка (це екземпляр класу Star) з певним кроком і інтервалом збільшується від мінімального до максимального розміру. Як тільки досягнути максимального розміру зірочка повинна з’являтися у іншій випадковій позиції.

if (confirm('Start?')) {
	class Star {
		constructor(image, maxStep, cssObj, width, speed) {
			this.image = image
			this.maxStep = maxStep
			this.cssObj = cssObj
			this.width = width
			this.speed = speed
		}
		getRandomStep(min, max) {
			return min + Math.floor(Math.random() * (max - min + 1))
		}
		setInitPositionCoordinates() {
			this.star.style.left = this.getRandomStep(0, 100) + '%'
			this.star.style.top = this.getRandomStep(0, 100) + '%'
		}
		setStarPosition() {
			this.star.style.top = parseInt(this.star.style.top) + this.top + '%'
			this.star.style.left = parseInt(this.star.style.left) + this.left + '%'
		}
		newPosition() {
			this.left = this.getRandomStep(-this.maxStep, this.maxStep)
			this.top = this.getRandomStep(-this.maxStep, this.maxStep)
			this.setStarPosition()
		}
		render(containerSelector) {
			const img = document.createElement('img')
			img.src = this.image
			img.className = this.cssObj.containerClass
			img.style.width = this.width + 'px'
			img.style.animationDuration = this.speed/1000 + 's'
			this.star = img
			this.setInitPositionCoordinates()
			this.interval = setInterval(() => this.newPosition(), this.speed)
			if (containerSelector) {
				document.querySelector(containerSelector).append(img)
			}
		}
	}
	const image = 'img/free-icon-sparkling-12177631.png'
	window.onload = function () {
		for (let i = 0; i < 170; i++) {
			const s1 = new Star(
				image,
				10,
				{
					containerClass: 'insect'
				},
				Math.random() * 40,
				2500 + Math.floor(Math.random() * 7000)
			)
			s1.render('.container')
		}
	}
}