"use strict"

//Задача №4
//  Для розглянутих методів сортування спробувати вивести етапи сортування шляхом виведення відповідних таблиць за зразком .

if (confirm('Start?')) {
	let arrayNum = [3, 5, 1, 4, 2]
	let arrayNum2 = arrayNum.slice()
	let arrayNum3 = arrayNum.slice()
	let endIndex = arrayNum.length
	document.write(`[${arrayNum}] Сортування бульбашкою<br>`)
	function bubbleSort(arr, end) {
		let changed
		do {
			changed = false
			for (let i = 1; i < end; i++) {
				if (arr[i - 1] > arr[i]) {
					let tmp = arr[i - 1]
					arr[i - 1] = arr[i]
					arr[i] = tmp
					changed = true
					document.write(`[${arr}]<br>`)
				}
			}
			end--
			
		} while (changed)
		return arr
	}
	bubbleSort(arrayNum, endIndex)
	document.write(`[${arrayNum2}] Сортування змішуванням<br>`)
	let leftIndex = 0
	let rightIndex = arrayNum2.length - 1
	function cocktailSort(arr, leftInd, rightInd) {
		while (leftInd < rightInd) {
			for (let i = leftInd; i < rightInd; i++) {
				if (arr[i] > arr[i + 1]) {
					let tmp = arr[i + 1]
					arr[i + 1] = arr[i]
					arr[i] = tmp
					document.write(`[${arr}]<br>`)
				}
			}
			rightInd--
			for (let i = rightInd; i > leftInd; i--) {
				if (arr[i] < arr[i - 1]) {
					let tmp = arr[i - 1]
					arr[i - 1] = arr[i]
					arr[i] = tmp
					document.write(`[${arr}]<br>`)
				}
			}
			leftInd++
		}
		return arr
	}
	cocktailSort(arrayNum2, leftIndex, rightIndex)
	document.write(`[${arrayNum3}] Сортування включенням<br>`)
	function insertSort(arr) {
		for (let k = 0; k < arr.length; k++) {
			const currentEl = arr[k]
			let i = k - 1
			while (i >= 0 && arr[i] > currentEl) {
				arr[i + 1] = arr[i]
				i = i - 1
				document.write(`[${arr}]<br>`)
			}
			arr[i + 1] = currentEl
			
		}
		document.write(`[${arr}]`)
		return arr
	}
	insertSort(arrayNum3)
}