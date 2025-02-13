"use strict"

//Задача №7
// Вивести на екран N абзаців (N вводиться користувачем) за зразком:

if (confirm('Start?')) {
	let paragraphs = parseInt(prompt('Введіть кількість абзаців', 8))
	for (let i = 1; i <= paragraphs; i++) {
		document.write(`<h1>Заголовок ${i}</h1>`)
		for (let j = 1; j <= i; j++) {
			document.write(`<p>Розділ ${i}, параграф ${j}</p>`)
		}
	}
}