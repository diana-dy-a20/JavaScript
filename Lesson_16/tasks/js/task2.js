"use strict"

//Задача №2
// Створити клас TMoney для роботи з грошовими сумами. Сума повинна зберігатися у вигляді доларового еквіваленту. Реалізувати методи додавання/вилучення грошової маси, вказуючи необхідну суму у гривнях, та визначення курсу долара, при якому сума у гривнях збільшиться на 100. Курс долара зберігати в окремому полі. 


if (confirm('Start?')) {
	//Це мій код
	class TMoney {
		constructor(sumUAH, exchUSD) {
			this.ExchangeUSD = exchUSD
			this.SumMoneyUSD = sumUAH / exchUSD
		}
		#exchangeUSD
		get ExchangeUSD() {
			return this.#exchangeUSD
		}
		set ExchangeUSD(USD) {
			if (USD < 0) throw new Error("Курс долара не може бути менше 0")
			this.#exchangeUSD = USD
		}
		#sumMoneyUSD
		get SumMoneyUSD() {
			return this.#sumMoneyUSD
		}
		set SumMoneyUSD(sumUSD) {
			if (sumUSD < 0) throw new Error("Вказана сума не може бути менше 0")
			this.#sumMoneyUSD = sumUSD
		}
		exchange() {
			return this.#sumMoneyUSD 
		}
		addingMoney(sumForAdding) {
			if (sumForAdding < 0) throw new Error("Вказана сума не може бути менше 0")
			this.SumMoneyUSD += sumForAdding / this.ExchangeUSD
		}
		removalMoney(sumForRemoval) {
			if (sumForRemoval < 0 || sumForRemoval / this.ExchangeUSD > this.SumMoneyUSD) throw new Error("Вказана сума не може бути менше 0")
			this.SumMoneyUSD -= sumForRemoval / this.ExchangeUSD
		}
		possibleDollarExchangeRate() {
			let sum = this.SumMoneyUSD * this.ExchangeUSD
			let newSum = sum + 100
			return newSum / this.SumMoneyUSD
		}
	}
	try {
		const userMoney = parseFloat(prompt('Введіть суму в гривнях', 30000))
		const exchangeRate = parseFloat(prompt('Введіть поточний курс долара', 41))
		let money = new TMoney(userMoney, exchangeRate)

		document.write(`Ваша сума в доларовому еквіваленті - ${money.exchange().toFixed(2)}<br>`)
		money.addingMoney(20000)
		document.write(`Ваша сума після поповнення рахунку на 20000грн - ${money.exchange().toFixed(2) }<br>`)
		money.removalMoney(35000)
		document.write(`Ваша сума після зняття з рахунку 35000грн - ${money.exchange().toFixed(2) }<br>`)	
		document.write(`Якби курс долара був ${money.possibleDollarExchangeRate().toFixed(2) }, то ваша сума збільшилася б на 100грн<br>`)
	} catch (error) {
		document.write(`Помилка: ${error.message}`)
	}
	//=================================================================
	//Це я просила чат згенерувати мені тести до мого коду
	//=================================================================
	// // Функція для запуску тестів та виведення результатів
	// function runTests() {
	// 	let testResults = [];

	// 	// Тест 1: Створення об'єкту з валідними значеннями
	// 	try {
	// 		const money = new TMoney(30000, 40);
	// 		testResults.push({ name: "Створення об'єкту (валідно)", passed: true });
	// 	} catch (error) {
	// 		testResults.push({ name: "Створення об'єкту (валідно)", passed: false, error: error.message });
	// 	}

	// 	// Тест 2: Створення об'єкту з невалідним курсом долара
	// 	try {
	// 		new TMoney(30000, -5);
	// 		testResults.push({ name: "Створення об'єкту (невалідний курс)", passed: false, error: "Помилка не викинута" });
	// 	} catch (error) {
	// 		testResults.push({ name: "Створення об'єкту (невалідний курс)", passed: error.message === "Курс долара не може бути менше 0" });
	// 	}

	// 	// Тест 3: Створення об'єкту з невалідною сумою
	// 	try {
	// 		new TMoney(-100, 40);
	// 		testResults.push({ name: "Створення об'єкту (невалідна сума)", passed: false, error: "Помилка не викинута" });
	// 	} catch (error) {
	// 		testResults.push({ name: "Створення об'єкту (невалідна сума)", passed: error.message === "Вказана сума не може бути менше 0" });
	// 	}

	// 	// Тест 4: Перевірка методу exchange()
	// 	const money4 = new TMoney(40000, 40);
	// 	testResults.push({ name: "Метод exchange()", passed: money4.exchange() === 1000 });

	// 	// Тест 5: Перевірка методу addingMoney() з валідним значенням
	// 	const money5 = new TMoney(50000, 40);
	// 	money5.addingMoney(10000);
	// 	testResults.push({ name: "Метод addingMoney() (валідно)", passed: money5.SumMoneyUAH === 60000 });

	// 	// Тест 6: Перевірка методу addingMoney() з невалідним значенням
	// 	const money6 = new TMoney(60000, 40);
	// 	try {
	// 		money6.addingMoney(-500);
	// 		testResults.push({ name: "Метод addingMoney() (невалідно)", passed: false, error: "Помилка не викинута" });
	// 	} catch (error) {
	// 		testResults.push({ name: "Метод addingMoney() (невалідно)", passed: error.message === "Вказана сума не може бути менше 0" });
	// 	}

	// 	// Тест 7: Перевірка методу removalMoney() з валідним значенням
	// 	const money7 = new TMoney(70000, 40);
	// 	money7.removalMoney(20000);
	// 	testResults.push({ name: "Метод removalMoney() (валідно)", passed: money7.SumMoneyUAH === 50000 });

	// 	// Тест 8: Перевірка методу removalMoney() з невалідним від'ємним значенням
	// 	const money8 = new TMoney(80000, 40);
	// 	try {
	// 		money8.removalMoney(-1000);
	// 		testResults.push({ name: "Метод removalMoney() (невалідне від'ємне)", passed: false, error: "Помилка не викинута" });
	// 	} catch (error) {
	// 		testResults.push({ name: "Метод removalMoney() (невалідне від'ємне)", passed: error.message === "Вказана сума не може бути менше 0" });
	// 	}

	// 	// Тест 9: Перевірка методу removalMoney() зі значенням, більшим за поточну суму
	// 	const money9 = new TMoney(90000, 40);
	// 	try {
	// 		money9.removalMoney(100000);
	// 		testResults.push({ name: "Метод removalMoney() (більше за суму)", passed: false, error: "Помилка не викинута" });
	// 	} catch (error) {
	// 		testResults.push({ name: "Метод removalMoney() (більше за суму)", passed: error.message === "Вказана сума не може бути менше 0" });
	// 	}

	// 	// Тест 10: Перевірка методу possibleDollarExchangeRate()
	// 	const money10 = new TMoney(100000, 40);
	// 	const expectedRate = (100000 + 100) / (100000 / 40);
	// 	testResults.push({ name: "Метод possibleDollarExchangeRate()", passed: Math.abs(money10.possibleDollarExchangeRate() - expectedRate) < 1e-6 }); // Порівняння з малою похибкою для чисел з плаваючою комою

	// 	// Виведення результатів тестів
	// 	document.write("<h2>Результати тестів класу TMoney:</h2>");
	// 	testResults.forEach(test => {
	// 		document.write(`<p>Тест "${test.name}": ${test.passed ? '<span style="color: green;">Пройдено</span>' : '<span style="color: red;">Не пройдено</span>'}`);
	// 		if (test.error) {
	// 			document.write(`<br>Помилка: ${test.error}`);
	// 		}
	// 		document.write("</p>");
	// 	});
	// }

	// // Виклик функції для запуску тестів
	// runTests();

	// try {
	// 	const userMoney = parseFloat(prompt('Введіть суму в гривнях', 30000));
	// 	const exchangeRate = parseFloat(prompt('Введіть поточний курс долара', 41));
	// 	let money = new TMoney(userMoney, exchangeRate);

	// 	document.write(`<h2>Робота з введеними даними:</h2>`);
	// 	document.write(`Ваша сума в доларовому еквіваленті - ${money.exchange().toFixed(2)}<br>`);
	// 	money.addingMoney(20000);
	// 	document.write(`Ваша сума після поповнення рахунку на 20000грн - ${money.exchange().toFixed(2)}<br>`);
	// 	money.removalMoney(35000);
	// 	document.write(`Ваша сума після зняття з рахунку 35000грн - ${money.exchange().toFixed(2)}<br>`);
	// 	document.write(`Якби курс долара був ${money.possibleDollarExchangeRate().toFixed(2)}, то ваша сума збільшилася б на 100грн<br>`);
	// } catch (error) {
	// 	document.write("<h2>Помилка при роботі з введеними даними:</h2>");
	// 	document.write("Помилка: " + error.message);
	// }
}