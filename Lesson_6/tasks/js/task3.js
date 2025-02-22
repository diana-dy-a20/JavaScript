"use strict"

//Задача №3(3.1)
//Відобразити трикутник за допомогою символів «о»

if (confirm('Start?')) {
	const row = parseInt(prompt('Введіть кількість рядків', 7))
	document.write(`<div style = "text-align: center;">`)
	for (let i = 1; i <= row; i++) {
		for (let j = i; j <= row; j++) {
			document.write(`o`)
		}
		document.write(`<br>`)
	}
	document.write(`</div>`)
}
