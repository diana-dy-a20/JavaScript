"use strict"

//Задача №3
// Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів та порівнянь чисел під час сортування включеннями.

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
	function getSortNum(arr) {
		let changedNum = 0, comparing = 0
		for (let k = 0; k < arr.length; k++) {
			const currentEl = arr[k]
			let i = k - 1
			while (i >= 0 && arr[i] > currentEl) {
				arr[i + 1] = arr[i]
				i = i - 1
				changedNum++
			}
			arr[i + 1] = currentEl
			comparing++
		}
		return [arr, changedNum, comparing]
	}
	const [arrayRandomNumSort, changedNum, comparing] = getSortNum(arrayRandomNum)
	console.log([arrayRandomNumSort, changedNum, comparing])
}
