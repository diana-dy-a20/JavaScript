"use strict"

//Задача №4
// Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.

//Задаємо значення

const lengthCM = parseFloat(prompt('Введіть довжину в сантиметрах', 680)).toFixed(2)

//Обчислюємо 

let lengthM = lengthCM / 100
let lengthKM = lengthM / 1000


// Виводимо результат

document.write(`Ваш результат в метрах - ${lengthM}м, а в кілометрах - ${lengthKM}км.`)
