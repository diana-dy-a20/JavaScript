"use strict"

//Задача №4
// З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).

//Задаємо значення

const userYearBirth = parseInt(prompt('Введіть рік народженнях', 1998))
const currentYear = 2025

//Обчислюємо 

let userAge = currentYear - userYearBirth

// Виводимо результат

if (userAge <= 6)
	document.write(`Ви ходите в садочок`)
else if (userAge < 18)
	document.write(`Ви ходите в школу`)
else if (userAge < 60)
	document.write(`Ви ходите на роботу`)
else if(userAge > 60)
	document.write(`Вітаю, ви на пенсії`)
else document.write(`Виникла помилка`)
