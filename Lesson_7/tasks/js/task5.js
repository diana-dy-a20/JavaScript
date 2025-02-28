"use strict"

//Задача №5
// Створити окремі функції, які переводять: Сантиметри у дюйми; Кілограми у фунти; Кілометри у милі.

if (confirm('Start?')) {
	function getInches(centimeters) {
		return centimeters * 0.394
	}
	function getPounds(kilograms) {
		return kilograms * 2.2
	}
	function getMiles(kilometers) {
		return kilometers * 0.621
	}
	const centimetersUser = parseFloat(prompt('Введіть сантиметри для переводу в дюйми', 129))
	const kilogramsUser = parseFloat(prompt('Введіть кілограми для переводу в фунти', 45))
	const kilometersUser = parseFloat(prompt('Введіть кілометри для переводу в милі', 238))
	document.write(`${centimetersUser} см - ${getInches(centimetersUser).toFixed(2)} дюймів.<br>${kilogramsUser} кг - ${getPounds(kilogramsUser).toFixed(2)} фунтів.<br>${kilometersUser} км - ${getPounds(kilometersUser).toFixed(2)} миль.`)
}