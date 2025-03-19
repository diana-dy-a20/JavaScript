"use strict"

//Задача №1
//Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів та порівнянь чисел під час сортування бульбашкою

if (confirm('Start?')) {
	function getRandomNum() {
		let array = []
		for (let i = 0; i < 30; i++) {
			let randomNum = 1 + Math.floor(Math.random() * 100)
			array.push(randomNum)
		}
		return array
	}
	let arrayRandomNum = getRandomNum()
	console.log(arrayRandomNum)
	let endIndex = arrayRandomNum.length
	function sortNum(arr, end) {
		let changed
		let changedNum = 0
		let comparing = 0
		do {
			changed = false
			for (let i = 1; i < end; i++) {
				if (arr[i - 1] > arr[i]) {
					let tmp = arr[i - 1]
					arr[i - 1] = arr[i]
					arr[i] = tmp
					changed = true
					changedNum++
				}
				comparing++
			}
			end--
		} while (changed)
		return [arr, changedNum, comparing]
	}
	const [arrayRandomNumSort, changedNum, comparing] = sortNum(arrayRandomNum, endIndex)
	console.log([arrayRandomNumSort, changedNum, comparing])
}
