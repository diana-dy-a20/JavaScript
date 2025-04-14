"use strict"

//Задача №1
//Розробити калькулятор

if (confirm('Start?')) {
	function getSum() {
		const num1 = parseInt(document.getElementById('first').value)
		const num2 = parseInt(document.getElementById('second').value)
		const sum = num1 + num2
		document.getElementById('result').innerText = sum
	}
	function getDifference() {
		const num1 = parseInt(document.getElementById('first').value)
		const num2 = parseInt(document.getElementById('second').value)
		const difference = num1 - num2
		document.getElementById('result').innerText = difference
	}
	function getProduct() {
		const num1 = parseInt(document.getElementById('first').value)
		const num2 = parseInt(document.getElementById('second').value)
		const product = num1 * num2
		document.getElementById('result').innerText = product
	}
	function getDivision() {
		const num1 = parseInt(document.getElementById('first').value)
		const num2 = parseInt(document.getElementById('second').value)
		const division = num1 / num2
		document.getElementById('result').innerText = division
	}
	window.onload = function () {
		document.getElementById('add').onclick = getSum
		document.getElementById('subtract').onclick = getDifference
		document.getElementById('multiply').onclick = getProduct
		document.getElementById('divide').onclick = getDivision
	}
}