"use strict"

//Задача №3
//Розробити Класи: House, Dog, Bird

if (confirm('Start?')) {
	class Subject {
		constructor(coordinateX, coordinateY, imageSrc, interval) {
			this.coordinateX = coordinateX
			this.coordinateY = coordinateY
			this.imageSrc = imageSrc
			this.interval = interval
		}
		render(containerSelector) {
			const img = document.createElement('img')
			img.src = this.imageSrc
			img.className = 'image'
			img.style.top = this.coordinateY + '%'
			img.style.left = this.coordinateX + '%'
			this.image = img
			if (containerSelector) {
				document.querySelector(containerSelector).append(img)
			}
		}
	}
	class House extends Subject {
		constructor(coordinateX, coordinateY, imageSrc, interval) {
			super(coordinateX, coordinateY, imageSrc, interval)
		}
		move() {
			setInterval(() => this.image.style.scale = (Math.random() * 5), this.interval)
		}
	}
	class Dog extends Subject {
		constructor(coordinateX, coordinateY, imageSrc, interval) {
			super(coordinateX, coordinateY, imageSrc, interval)
		}
		move() {
			setInterval(() => this.image.style.left = (Math.random() * 50) + '%', this.interval)
		}
	}
	class Bird extends Subject {
		constructor(coordinateX, coordinateY, imageSrc, interval) {
			super(coordinateX, coordinateY, imageSrc, interval)
		}
		newPosition() {
			this.image.style.left = (Math.random() * 50) + '%'
			this.image.style.top = (Math.random() * 50) + '%'
		}
		move() {
			setInterval(() => this.newPosition(), this.interval)
		}
	}
	window.onload = function () {
		const house = new House(36, 78, 'https://img.freepik.com/free-vector/charming-house-with-tree-illustration_1308-176337.jpg?semt=ais_hybrid&w=740', 3000)
		house.render('#container')
		house.move()
		const dog = new Dog(50, 78, 'https://images.squarespace-cdn.com/content/v1/66a915244ca56a48947821db/6126b544-5e1b-4ac9-a8eb-3f51b334d913/scooby-doo.jpg', 2000)
		dog.render('#container')
		dog.move()
		const bird = new Bird(50, 15, 'https://img.freepik.com/premium-photo/cute-blue-bird-cartoon-flying_1029469-243204.jpg?w=360', 1000)
		bird.render('#container')
		bird.move()
	}
}
