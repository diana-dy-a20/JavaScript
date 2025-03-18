"use strict"

//Задача №2
// Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів та порівнянь чисел під час сортування змішуванням.


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
	let leftIndex = 0
	let rightIndex = arrayRandomNum.length - 1
	function sortNum(arr, leftInd, rightInd) {
		let changedNum = 0, comparing = 0
		while (leftInd < rightInd) {
			for (let i = leftInd; i < rightInd; i++) {
				if (arr[i] > arr[i + 1]) {
					let tmp = arr[i + 1]
					arr[i + 1] = arr[i]
					arr[i] = tmp
					changedNum++
				}
				comparing++
			}
			rightInd--
			for (let i = rightInd; i > leftInd; i--) {
				if (arr[i] < arr[i - 1]) {
					let tmp = arr[i - 1]
					arr[i - 1] = arr[i]
					arr[i] = tmp
					changedNum++
				}
				comparing++
			}
			leftInd++
		}
		return [arr, changedNum, comparing]
	}
	const [arrayRandomNumSort, changedNum, comparing] = sortNum(arrayRandomNum, leftIndex, rightIndex)
	console.log([arrayRandomNumSort, changedNum, comparing])
}