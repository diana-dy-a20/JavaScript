"use strict"

//Задача №0

//Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей.

if (confirm('Start?')) {
	class Cockroach {
		constructor(imagesObj, maxStep, maxSpeed, cssObj) {
			this.imagesObj = imagesObj
			this.maxStep = maxStep
			this.maxSpeed = maxSpeed
			this.cssObj = cssObj
		}
		getRandomValue(minValue, maxValue) {
			return (minValue + Math.floor(Math.random() * (maxValue - minValue + 1)))
		}
		setInitDirection() {
			this.vx = this.getRandomValue(-this.maxStep, this.maxStep)
			this.vy = this.getRandomValue(-this.maxStep, this.maxStep)
		}
		updateCoordinates() {
			this.left += this.vx
			if(this.left < 0 || this.left > 100) this.vx = -this.vx
			this.top += this.vy
			if(this.top < 0 || this.top > 100) this.vy = -this.vy
		}
		move() {
			this.updateCoordinates()
			this.setCockroachPosition()
		}
		setInitPositionCoordinates() {
			this.left = this.getRandomValue(0, 100)
			this.top = this.getRandomValue(0, 100)
		}
		setCockroachPosition() {
			this.cockroach.style.top = this.top + '%'
			this.cockroach.style.left = this.left + '%'
		}
		setInitCockroachPosition() {
			this.setInitPositionCoordinates()
			this.setCockroachPosition()
		}
		onTap() {
			clearInterval(this.interval)
			this.cockroach.src = this.imagesObj.sleep
		}
		render(containerSelector) {
			const img = document.createElement('img')
			img.src = this.imagesObj.alive
			img.className = this.cssObj.containerClass
			this.cockroach = img
			this.cockroach.onclick = this.onTap.bind(this)
			this.setInitCockroachPosition()
			this.setInitDirection()
			this.interval = setInterval(() => this.move(), this.maxSpeed)

			if (containerSelector) {
				document.querySelector(containerSelector).append(img)
			}
		}
	}
	const imagesObj = {
		alive: 'https://www.landcareresearch.co.nz/assets/Tools-And-Resources/Identification/What-is-this-bug/Periplaneta-americana__FitMaxWzg3Miw1NDVd.jpg',
		sleep: 'https://media.istockphoto.com/id/640144854/uk/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%96-%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F/id-%D1%87%D0%BE%D1%80%D0%BD%D0%B8%D0%BB%D1%8C%D0%BD%D0%B0-%D0%BF%D0%BB%D1%8F%D0%BC%D0%B0-%D0%BF%D0%BB%D1%8F%D0%BC%D0%B0-%D1%81%D0%BF%D0%BB%D0%B5%D1%81%D0%BA-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B8%D0%B9-%D1%81%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB-%D1%81%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%D1%83-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B0.jpg?s=1024x1024&w=is&k=20&c=NRSi9YuDvBCqOHL8MXa8xBJEnvJ0aIXezwh6NdgOFnc=',
	}
	window.onload = function () {
		for (let i = 0; i < 10; i++) {
			const c1 = new Cockroach(
				imagesObj,
				Math.random() * 3,
				Math.random() * 1000,
				{
					containerClass: 'insect',
				}
			)
			c1.render('body')
		}
	}
}
