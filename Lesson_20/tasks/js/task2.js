"use strict"

//Задача №2
//Дано 5 елементів input. При введенні значення у якийсь із них необхідно автоматично заповнювати інші (усі попередні у спадному порядку(кожен попередній має значення на 1 менше за наступний), усі наступні на 1 більше (кожен наступне на 1 більше за попереднього)


if (confirm('Start?')) {
	function onInputClick(event) {
		const currentEl = event.target
		let num = parseInt(currentEl.value)
		let inputEl = currentEl.nextElementSibling
		if (num) {
			while (inputEl) {
				inputEl.value = num +1
				num++
				inputEl = inputEl.nextElementSibling
			}
		}
		num = parseInt(currentEl.value)		
		inputEl = currentEl.previousElementSibling
		if (num) {
			while (inputEl) {
				inputEl.value = num - 1
				num--
				inputEl = inputEl.previousElementSibling
			}
		}
	}
	window.onload = function () {
		document.querySelector('body').addEventListener('input', onInputClick)
	}
}