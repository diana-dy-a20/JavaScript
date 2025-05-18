"use strict"

//Задача №3
//Створити генератор, який би випадковим чином поступово генерував вказану кількість парних чисел.


if (confirm('Start?')) {
	function* generateEvenNumber(numCount = 6) {
		for (let i = 0; i < numCount; i++) {
			let num = 1 + Math.floor(Math.random() * 50)
			if (num % 2 !== 0) num += 1
			yield `${num}`
		}
	}
	for (const num of generateEvenNumber()) {
		document.write(num + `<br>`)
	}
}
