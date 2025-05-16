"use strict"

//Задача №1
//Date

if (confirm('Start?')) {
	//Виводити на екран скільки хвилин користувач вже на сайті

	function showMinutesUserOnSite() {
		const loadingTime = new Date()
		const div = document.createElement('div')
		document.querySelector('body').append(div)
		function updatedTime() {
			const currentTime = new Date()
			const difference = currentTime.getTime() - loadingTime.getTime()
			const minutes = Math.floor(difference / 60000)
			const seconds = Math.floor((difference % 60000) / 1000)
			div.innerText = `Ви на сайті вже ${minutes} хвилин ${seconds} секунд.`
		}
		updatedTime()
		setInterval(() => updatedTime(), 1000)
	}
	// window.onload = function () {
	// }

	//Вводимо час початку процедури (процедура триває 30хв). Визначити, чи процедура ще триває.

	function isProcedureStill(duration = 30) {
		const dateStart = new Date()
		const startHours = 14
		dateStart.setHours(startHours, 0, 0, 0)
		const endDate = new Date()
		const endMinutes = dateStart.getMinutes() + duration
		endDate.setHours(14)
		endDate.setMinutes(endMinutes, 0, 0)
		const currentDate = new Date()
		const start = dateStart.getTime()
		const end = endDate.getTime()
		const current = currentDate.getTime()
		if (current >= start && current <= end) document.write('Процедура триває')
		else if (current < start) document.write('Процедура ще не почалась')
		else document.write('Процедура закінчилась')
	}
	isProcedureStill()

	//Визначити скільки залишилось до кінця робочого дня (до 17.00)

	function getTimeUntilEndWorkday() {
		const startWorkDay = new Date()
		startWorkDay.setHours(8, 0, 0, 0)
		const endWorkDay = new Date()
		endWorkDay.setHours(17, 0, 0, 0)
		const start = startWorkDay.getTime()
		const end = endWorkDay.getTime()
		const currentTime = new Date().getTime()
		if (currentTime >= start && currentTime <= end) {
			const difference = end - currentTime
			const hours = Math.floor(difference / 3600000)
			const minutes = Math.floor((difference % 3600000) / 60000)
			document.write(`<br>До кінця робочого дня залишилось ${hours} годин ${minutes} хвилин`)
		}
		else document.write(`<br>Зараз неробочі години`)
	}
	getTimeUntilEndWorkday()

	//Створити функцію, яка дозволяє визначити, чи знаходиться вказана дата і час у межах поточного тижня (від понеділка 0 год, 0хв, до неділі 23год.59хв)

	function isWithinCurrentWeek(date) {
		const currentDay = new Date()
		const currentDayOfWeek = currentDay.getDay()
		const dif = currentDayOfWeek === 0 ? 6 : currentDayOfWeek - 1
		const starWeek = new Date()
		starWeek.setDate(currentDay.getDate() - dif)
		starWeek.setHours(0, 0, 0, 0)
		const endWeek = new Date()
		endWeek.setDate(starWeek.getDate() + 6)
		endWeek.setHours(23, 59, 59, 999)
		if (date >= starWeek && date <= endWeek) document.write(`<br>Вказана дата знаходиться в межах поточного тижня<br>`)
		else document.write(`<br>Вказана дата знаходиться за межами поточного тижня<br>`)
	}
	isWithinCurrentWeek(new Date(2025, 5, 27))

	// При заході на сайт вітати користувача або відображати повідомлення про те,  скільки хвилин залишилось до початку робочого дня (початок о 8.00).

	function greetUser(params) {
		const startWorkDay = new Date()
		startWorkDay.setHours(8, 0, 0, 0)
		const endWorkDay = new Date()
		endWorkDay.setHours(17, 0, 0, 0)
		const start = startWorkDay.getTime()
		const end = endWorkDay.getTime()
		const currentTime = new Date()
		if (currentTime.getTime() >= start && currentTime.getTime() <= end) {
			document.write(`Вітаємо Вас на нашому сайті!<br>`)
		}
		else {
			if (currentTime.getHours() < startWorkDay.getHours()) {
				const dif = startWorkDay - currentTime.getTime()
				const hours = Math.floor(dif / 3600000)
				const minutes = Math.floor((dif % 3600000) / 60000)
				document.write(`Сайт почне працювати через ${hours} годин ${minutes} хвилин.<br>`)
			}
			else document.write(`Робочий день закінчився, чекаємо на Вас завтра.<br>`)
		}
	}
	greetUser()

	//Вивести скільки зараз годин у Лондоні, Парижі, Сіднеї.

	function getTime() {
		const currentTime = new Date()
		const hoursLondon = currentTime.getHours() - 2
		const timeLondon = new Date()
		timeLondon.setHours(hoursLondon)
		const hoursParis = currentTime.getHours() - 1
		const timeParis = new Date()
		timeParis.setHours(hoursParis)
		const hoursSydney = currentTime.getHours() + 7
		const timeSydney = new Date()
		timeSydney.setHours(hoursSydney)
		document.write(`Час у Лондоні ${timeLondon.toTimeString()}, час у Парижі ${timeParis.toTimeString()}, час у Сіднеї ${timeSydney.toTimeString()}.<br>`)
	}
	getTime()

	//Дано список студентів (ім’я і дата народження: у формі тексту (день.місяць.рік). Знайти найстаршого студента

	function getOlderStudent(listStudents) {
		let olderStudent, maxAge = Infinity
		for (const student of listStudents) {
			let date = new Date(student.birthDate).getTime()
			if (date < maxAge) {
				maxAge = date
				olderStudent = student
			}
		}
		return `Найстарший студент - ${olderStudent.name}`
	}
	const list = [
		{
			name: 'Петренко Микола',
			birthDate: '3.06.2003'
		},
		{
			name: 'Іванцова Злата',
			birthDate: '13.11.2004'
		},
		{
			name: 'Стецюк Іван',
			birthDate: '27.09.2003'
		},
		{
			name: 'Кириченко Софія',
			birthDate: '9.12.2002'
		}
	]
	document.write(getOlderStudent(list))

	//Визначити скільки пройшло секунд після заходу на сайт перш ніж користувач зробив рух мишкою.

	function getSecondsBetweenMovingMouse() {
		const loadingTime = new Date()
		const div = document.createElement('div')
		div.innerHTML = `Після заходу на сайт та на момент руху мишкою пройшло <span id='sec'></span> секунд.`
		document.querySelector('body').append(div)
		const span = document.getElementById('sec')
		let mouseMove = false
		function getSec() {
			if (!mouseMove) {
				mouseMove = true
				const currentTime = new Date()
				const difference = currentTime.getTime() - loadingTime.getTime()
				const seconds = Math.floor(difference / 1000)
				span.innerText = seconds
			}
		}
		document.addEventListener('mousemove', getSec)
	}
	window.onload = function () {
		showMinutesUserOnSite()
		getSecondsBetweenMovingMouse()
	}

	//Користувачка планувала оформила дектретну відпустку на 200 днів (дата початку відпустки вводиться). Визначити чи відпустка вже триває і чи не закінчилась.

	function isVacationStillGoingOn(date) {
		const dateStartVacation = new Date(date)
		const dateEndVacation = new Date()
		dateEndVacation.setDate(dateStartVacation.getDate() + 200)
		const currentDate = new Date()
		if (currentDate >= dateStartVacation && currentDate <= dateEndVacation) document.write(`<br>Декретна відпустка ще триває.`)
		else if (currentDate < dateStartVacation) document.write(`<br> Декретна відпустка ще не почалась.`)
		else document.write(`<br>Декретна відпустка закінчилась.`)
	}
	isVacationStillGoingOn('2025.04.13')

	//Дано дата виробництва йогурта(вводимо рік, місяць, день) та кількість днів придатності.Визначити чи є він придатним на даний момент.

	function isYogurtSafeToEat(manufactureDate, expirationDate) {
		const manDate = new Date(manufactureDate)
		const endExpDate = new Date().setDate(manDate.getDate() + expirationDate)
		const currentDate = new Date()
		if (currentDate < endExpDate) document.write(`<br>Йогурт придатний до вживання.`)
		else document.write(`<br>Термін придатності йогурту вийшов. Не рекомендовано до вживання.`)
	}
	isYogurtSafeToEat('2025.04.23', 27)

	//Сформувати масив з 1000 елементів від 1 до 800. Порівняти час сортування бульбашкою і  вставкою.

	function compareSortingTime() {
		function getArray() {
			let arr = []
			for (let i = 0; i < 1000; i++) {
				let num = 1 + Math.floor(Math.random() * 800)
				arr.push(num)
			}
			return arr
		}
		const array = getArray()
		const endIndex = array.length
		function bubbleSort(arr, end) {
			const startSort = new Date()
			const newArr = arr.concat()
			let changed
			do {
				changed = false
				for (let i = 1; i < end; i++) {
					if (newArr[i - 1] > newArr[i]) {
						let tmp = newArr[i - 1]
						newArr[i - 1] = newArr[i]
						newArr[i] = tmp
						changed = true
					}
				}
			} while (changed)
			const endSort = new Date()
			return endSort - startSort
		}
		function inclusionSort(arr) {
			const startSort = new Date()
			const newArr = arr.concat()
			for (let k = 0; k < newArr.length; k++) {
				const currentEl = newArr[k]
				let i = k - 1
				while (i >= 0 && newArr[i] > currentEl) {
					newArr[i + 1] = newArr[i]
					i = i - 1
				}
				newArr[i + 1] = currentEl
			}
			const endSort = new Date()
			return endSort - startSort
		}
		const bubbleSortTime = bubbleSort(array, endIndex)
		const inclusionSortTime = inclusionSort(array)
		if(bubbleSortTime > inclusionSortTime) document.write(`<br> Сортування включенням швидше ніж бульбашкою.`)
		else document.write(`<br> Сортування бульбашкою швидше ніж включенням.`)
	}
	compareSortingTime()
}