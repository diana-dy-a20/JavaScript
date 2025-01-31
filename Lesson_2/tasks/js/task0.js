"use strict"

//Задача №0

//Задаємо значення

const a = parseInt(prompt('Перше число', 7))
const b = parseInt(prompt('Друге число', 8))
const c = parseInt(prompt('Третє число', 9))

//Обчислюємо 

let S1 = a + 12 + b
let S2 = Math.sqrt((a + b) / (2 * a)).toFixed(2)
let S4 = Math.sin(a / -b).toFixed(2)

// Виводимо результат

document.write(`S1 = ${S1} <br> S2 = ${S2} <br> S4 = ${S4}`)

