"use strict"

//Задача №1
// Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці

//Задаємо значення

const a = parseFloat(prompt('Введіть дійсне число з крапкою', 3.54))
const b = parseFloat(prompt('Введіть друге дійсне число з крапкою', 5.67))

//Обчислюємо 

let sum = (a + b).toFixed(3)
let product = (a * b).toFixed(3)
let division = (a / b).toFixed(3)

// Виводимо результат

document.write(`Обчислюємо задачу №1<br>a + b = ${sum}<br>a * b = ${product}<br>a / b = ${division}`)
