"use strict"

//Задача №3
//Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.

//Задаємо значення

const minRandomNum = 1
const maxRandomNum = 5
const firstRandomNum = parseInt(prompt('Спробуйте вгадати число від 1 до 5'))
const secondRandomNum = parseInt(prompt('У вас є ще одна спроба'))

//Обчислюємо 

let randomNumber = minRandomNum + Math.floor(Math.random() * (maxRandomNum - minRandomNum + 1))

// Виводимо результат

if (firstRandomNum === randomNumber)
	document.write(`Ви вгадали, рандомне число ${randomNumber}`)
else if (firstRandomNum !== randomNumber && secondRandomNum === randomNumber)
	document.write(`Ви вгадали, рандомне число ${randomNumber}`)
else document.write(`Ваші спроби вичерпано, спробуйте пізніше`)
