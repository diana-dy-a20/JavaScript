"use strict"

//Задача №2
// Створити 10 елементів для введення цін продуктів

if (confirm('Start?')) {
	for (let i = 1; i <= 10; i++) {
		document.write(`Продукт №${i} <input><br>`)
	}
}