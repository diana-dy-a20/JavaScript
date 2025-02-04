"use strict"

//Задача №2
// З клавіатури вводиться ціна товару і кількість грошей. Якщо грошей не вистачає то відмовляємо у покупці, інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.

//Задаємо значення

const priceProduct = parseFloat(prompt('Введіть ціну товару', 700))
const moneyNum = parseFloat(prompt('Введіть вашу суму', 800))

//Обчислюємо 

let rest = moneyNum - priceProduct

// Виводимо результат

if (moneyNum < priceProduct)  
	document.write(`У покупці відмовлено`)
else if (rest >= 4) 
	document.write(`Чи не бажаєте купити лотерею?`)
else document.write(`Дякуємо за покупку`)
