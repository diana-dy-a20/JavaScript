"use strict"

//Задача №2
// Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.

//Задаємо значення

const yearOfBirth = parseInt(prompt('Введіть свій рік народження', 1998))
const currentYear = 2025

//Обчислюємо 

let userAge = currentYear - yearOfBirth


// Виводимо результат

document.write(`На даний момент Вам ${userAge} років`)
