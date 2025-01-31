"use strict"

//Задача №7
//Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).


//Задаємо значення

const monthMin = 1
const monthMax = 12
const dayMin = 0
const dayMax = 6

//Обчислюємо 

let monthRandom = monthMin + Math.floor(Math.random() * (monthMax - monthMin + 1))
let dayRandom = dayMin + Math.floor(Math.random() * (dayMax - dayMin + 1))
let sum = monthRandom + dayRandom

// Виводимо результат

document.write(`Місяць - ${monthRandom}<br>День - ${dayRandom}<br>Їхня сума - ${sum}`)
