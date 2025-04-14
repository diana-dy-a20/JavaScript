"use strict"

//Задача №3
// Користувач задає рік народження. Визначити кількість років користувача.

if (confirm('Start?')) {
	function ageUser() {
		const currentYear = 2025
		const userYearBirth = parseInt(document.getElementById('yearBirth').value)
		if (userYearBirth) {
			const age = currentYear - userYearBirth
			document.getElementById('result').innerText = age
		} else document.getElementById('result').innerText = ''
	}
	window.onload = function() {
		document.getElementById('yearBirth').onchange = ageUser
	}
}
