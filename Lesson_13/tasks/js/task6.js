"use strict"

//Задача №6
// З використанням замикань розробити ітератор, тобто функцію, що буде поступово за окремими викликами видавати по одну букву наперед заданого слова. З використанням нього розробити гру «Прекладач». Виводимо для користувача опис цього слова і по одну букву користувач вводить переклад цього слова. Підрахувати кількість вгаданих букв.

if (confirm('Start?')) {
	let word = 'cat'
	function printWord(arr, index) {
		let currInd = index
		function setInitVal() {
			if (index >= 0 && index <= arr.length - 1) currInd = index
			else throw new Error("Введене значення некоректне")
		}
		setInitVal()
		function getLetter() {
			if (currInd < arr.length) return arr[currInd++]
		}
		return getLetter
	}
	let saveFunc = printWord(word, 0)
	function getWord(arr) {
		for (let i = 0; i < arr.length; i++) {
			console.log(saveFunc())
		}
	}
	getWord(word)
	function translate(arr) {
		let start = confirm('Домашня тварина, яка любить мурчати. Введіть переклад')
		let res
		if (start) {
			let wordUser = ''
			for (let i = 0; i < arr.length; i++) {
				let letter = prompt(`Введіть букву №${i + 1}`)
				wordUser += letter.toLowerCase()
			}

			if (wordUser === arr) res = true
			else res = false
		}
		return res
	}
	let result = translate(word)
	function getRes(res) {
		if (res) alert('Ви вгадали слово')
		else alert('Ви не вгадали слово')
	}
	getRes(result)
}