"use strict"

//Задача №5
// Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.

//Задаємо значення

const seconds = parseInt(prompt('Введіть кількість секунд', 7085))

//Обчислюємо 

let hours = Math.floor(seconds / 3600)
let minutes = Math.floor(seconds % 3600 / 60)

// Виводимо результат

document.write(`${hours} - годин, ${minutes} - хвилин.`)