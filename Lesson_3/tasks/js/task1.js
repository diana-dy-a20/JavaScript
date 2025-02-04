"use strict"

//Задача №1
// З клавіатури вводяться імена двох дітей та кількість у них цукерок. Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова.

//Задаємо значення

const firstChildName = prompt('Введіть ім\'я першої дитини','Поліна')
const firstChildCandyNum = parseInt(prompt('Введіть кількість цукерок', 7))
const secondChildName = prompt('Введіть ім\'я другої дитини', 'Сергій')
const secondChildCandyNum = parseInt(prompt('Введіть друге дійсне число з крапкою', 10))

//Обчислюємо 

// Виводимо результат

if (firstChildCandyNum > secondChildCandyNum) {
	document.write(`Більше цукерок в ${firstChildName}`)
} else if (firstChildCandyNum < secondChildCandyNum)
	document.write(`Більше цукерок в ${secondChildName}`)
else if (firstChildCandyNum === secondChildCandyNum)
	document.write(`Цукерок порівно`)
