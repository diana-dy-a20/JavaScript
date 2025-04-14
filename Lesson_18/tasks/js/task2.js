"use strict"

//Задача №2
// Зробити конвертер валют (курси валют – константи у скрипті)


if (confirm('Start?')) {
	function convert() {
		const courseEUR = 45
		const courseUSD = 40
		const UAH = parseInt(document.getElementById('UAH').value)
		const euroAmount = (UAH / courseEUR).toFixed(2)
		const dollarAmount = (UAH / courseUSD).toFixed(2)
		document.getElementById('resultEUR').innerText = euroAmount
		document.getElementById('resultUSD').innerText = dollarAmount
	}
	window.onload = function() {
		document.getElementById('converted').onclick = convert
	}
}