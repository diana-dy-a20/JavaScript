"use strict"

//Задача №6
// З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. 
// Обчислити вартість кожного товару окремо та загальну вартість.
// Вивести чек(як у супермаркеті) використовуючи елементи розмітки.

//Задаємо значення

const priceProduct1 = parseFloat(prompt('Введіть ціну першого товару', 10)).toFixed(2)
const quantityProduct1 = parseInt(prompt('Введіть кількість першого товару', 1))
const priceProduct2 = parseFloat(prompt('Введіть ціну другого товару', 10)).toFixed(2)
const quantityProduct2 = parseInt(prompt('Введіть кількість другого товару', 1))
const priceProduct3 = parseFloat(prompt('Введіть ціну третього товару', 10))
const quantityProduct3 = parseInt(prompt('Введіть кількість третього товару', 1)).toFixed(2)

//Обчислюємо 

let totalProduct1 = priceProduct1 * quantityProduct1
let totalProduct2 = priceProduct2 * quantityProduct2
let totalProduct3 = priceProduct3 * quantityProduct3
let totalCost = totalProduct1 + totalProduct2 + totalProduct3

// Виводимо результат

document.write(`Ваш чек<br>Товар №1 ---------- ${totalProduct1}<br>
	Товар №2 ---------- ${totalProduct2}<br>
	Товар №3 ---------- ${totalProduct3}<br>
	Загальна вартість ${totalCost}`)
