"use strict"

//Задача №3
//Дано вартість одиниці товару і кількість.
//Знайти загальну вартість та ПДВ (5% від загальної вартості).

//Задаємо значення

const productPrice = parseFloat(prompt('Введіть ціну товару', 56.99)).toFixed(2)
const quantityProduct = parseInt(prompt('Введіть кількість товару', 3))

//Обчислюємо 

let totalCost = productPrice * quantityProduct
let tax = ((totalCost / 100) * 5).toFixed(2)

// Виводимо результат

document.write(`Загальна вартість товару становить - ${totalCost} грн<br>ПДВ 5% - ${tax} грн`)