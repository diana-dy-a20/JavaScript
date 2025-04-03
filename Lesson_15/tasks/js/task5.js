"use strict"

//Задача №5
// Розробити клас «Керівник танців» 

if (confirm('Start?')) {
	class Dance {
		constructor(girlsName, boysName) {
			this.girls = girlsName,
				this.boys = boysName,
				this.count = 0, 
				this.interval = null
		}
		getRandomBoy(min = 0, max = this.boys.length - 1) {
			let random = min + Math.floor(Math.random() * max)
			return this.boys[random]
		}
		getRandomGirl(min = 0, max = this.girls.length - 1) {
			let random = min + Math.floor(Math.random() * max)
			return this.girls[random]
		}
		getCoupleForDancing(girl, boy) {
			return `Танцює ${girl} та ${boy}<br>`
		}
		run() {
			return this.interval = setInterval(() => {
				this.count++
				document.write(this.getCoupleForDancing(this.getRandomGirl(), this.getRandomBoy()))
				if(this.count >=10) this.stop()
			}, 5000)
		}
		stop() {
			if(this.interval) {
				clearInterval(this.interval)
				this.interval = null
			}
		}
	}
	const girls = ['Тетяна', 'Анна', 'Олександра', 'Ольга']
	const boys = ['Владислав', 'Данило', 'Євген', 'Тарас']
	let dancing = new Dance(girls, boys)
	dancing.run()
}