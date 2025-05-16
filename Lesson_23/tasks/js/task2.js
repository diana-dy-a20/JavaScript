"use strict"

//Задача №2
//Регулярні вирази



if (confirm('Start?')) {
	// Дано масив рядків. Вивести ті, у яких є цифри (використати метод test та регулярні вирази).

	function isHaveNum(arr) {
		let newArr = []
		for (const el of arr) {
			if (/\d/.test(el)) newArr.push(el)
		}
		return newArr
	}

	//Дано масив рядків. Вивести ті, у яких немає цифр.

	function isDontHaveNum(arr) {
		let newArr = []
		for (const el of arr) {
			if (!(/\d/.test(el))) newArr.push(el)
		}
		return newArr
	}

	//Дано масив рядків. Вивести ті, у яких є голосні літери.

	function isHaveVowels(arr) {
		let newArr = []
		for (const el of arr) {
			if (/а|о|е|і|у|и/.test(el)) newArr.push(el)
		}
		return newArr
	}

	//Дано масив рядків. Вивести ті, у яких немає голосних літер.

	function isDontHaveVowels(arr) {
		let newArr = []
		for (const el of arr) {
			if (!(/а|о|е|і|у|и/.test(el))) newArr.push(el)
		}
		return newArr
	}

	// Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.

	function isHave1Or3Num(arr) {
		let newArr = []
		for (const el of arr) {
			if (/1|3/.test(el)) newArr.push(el)
		}
		return newArr
	}

	const mixedArray = [
		'Привіт123',
		'Сонце',
		'456',
		'бдж',
		'іао',
		'рядок без нічого',
		'їй',
		'трн'
	]
	document.write(isHaveNum(mixedArray), `<br>` + isDontHaveNum(mixedArray), `<br>` + isHaveVowels(mixedArray), `<br>` + isDontHaveVowels(mixedArray), `<br>` + isHave1Or3Num(mixedArray))

	//Дано рядок тексту, вивести усі числа, які є у тексті.

	function getAllNum(str) {
		return str.match(/\d+/g)
	}

	//Дано рядок тексту. Знайти усі знаки пунктуації, які були використано.

	function getPunctMarks(str) {
		return str.match(/\.|\,|\!|\?|\-|\:/g)
	}

	//Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками.

	function getAllParticles(str) {
		// return str.match(/(?<=\.|\,|\!|\?|\-|\:)(.*?)(?=\.|\,|\!|\?|\-|\:)/g)
		return str.split(/\.|\,|\!|\?|\-|\: /)
	}

	//Дано рядок тексту. Перевірити, чи містить він дату у форматі dd.mm.yyyy (dd- день, mm- місяць, yyyy- рік).

	function isHaveDate(str) {
		return /(\d{1,2})\.(\d{1,2})\.(\d{4})/.test(str)
	}

	// Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку.

	function getCountTwoDigitNum(str) {
		const newString = str.match(/\d{2}/g)
		return newString.length
	}

	const string = 'Сьогодні 16.05.2025, чудова п\'ятниця! На вулиці +25°C.Ми зустрінемось о 14: 30, щоб обговорити питання №7 та №8.  Звіт за 01-01 - 2024 вже готовий.Кількість учасників: 32.  До зустрічі!'
	
	document.write(`<br>` + getAllNum(string), `<br>` + getPunctMarks(string), `<br>` + getAllParticles(string), `<br>` + isHaveDate(string), `<br>` + getCountTwoDigitNum(string))

	//Визначити чи може бути рядок тексту номером банківської картки (приклад: «4142-3433-2323-3434»). Знайти усі такі номери.

	function isBankCardNum(str) {
		return /(\d{4})\-?(\d{4})\-?(\d{4})\-?(\d{4})/.test(str)
	}
	document.write(`<br>` + isBankCardNum('33334444-5555-6666'))

	//Дано адресу сайту. Визначити, чи є він урядовим (містить домен “gov”)

	function isSiteGov(str) {
		return /\.gov$/.test(str)
	}
	document.write(`<br>` + isSiteGov('qwerty.gov'))

	//Вибрати усі роки після 2021 року з отриманого повідомлення

	function getYearsAfter2021(str) {
		return str.match(/(202[2-9])|(20[3-9][0-9])/g)
	}
	document.write(`<br>` + getYearsAfter2021('2021, 2023, 2020, 2035'))

	//Дано номер телефону.Перевірити, чи є цей телефон телефоном з України(починаєтсья на «+38»)

	function isUkrainianNum(str) {
		return /^\+38/.test(str)
	}
	document.write(`<br>` + isUkrainianNum('+38097777777'))

	//Користувач вводить прізвище та ім’я в одному рядку через пробіл.  Замінити пробіл на дефіс.

	function signReplace(str) {
		return str.replace(/\s/, '-')
	}
	document.write(`<br>` + signReplace('Дишлева Діана'))

	//Користувач вводить дату у форматі «день.місяць.рік». Отримати рядкове представлення дати у форматі «день/місяць/рік»

	function getReplaceSignDate(str) {
		return str.replace(/\./g, '/')
	}
	document.write(`<br>` + getReplaceSignDate('12.06.2026'))

	//Користувач вводить день (номер дня (0-6) або «sun,mon,tue,wed,thu,fri,sat»). Визначити, чи  є це день вихідним

	function isDayOff(day) {
		let res
		if(/[1-5]|mon|tue|wed|thu|fri/.test(day)) res = 'Робочий день'
		else if(/0|6|sat|sun/.test(day)) res = 'Вихідний'
		else res = 'Невірно введений день'
		return res
	}
	document.write(`<br>` + isDayOff('mon'))
}