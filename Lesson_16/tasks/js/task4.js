"use strict"

//Задача №4
//  Створити клас TBankomat, який моделює роботу банкомата. Клас повинен містити поля для зберігання кількості купюр кожного із номіналів від 5 до 200 гривень. Реалізувати методи знаходження максимальної та мінімальної сум, які може видати банкомат, та метод зняття деякої суми.

if (confirm('Start?')) {
	class TBankomat {
		constructor(arrBanknotes) {
			this.banknotes = arrBanknotes
		}
		findMaxSum() {
			let maxSum = 0
			for (const banknote of this.banknotes) {
				maxSum += banknote.Nominal * banknote.Banknote
			}
			return maxSum
		}
		findMinSum() {
			let minSum = Infinity
			for (const banknote of this.banknotes) {
				if (banknote.Banknote > 0 && banknote.Nominal < minSum) minSum = banknote.Nominal
			}
			return minSum === Infinity ? 0 : minSum
		}
		withdravalSum(sum) {
			if (sum < this.findMinSum()) throw new Error("Занадто мала сума, введіть більшу")
			if (sum > this.findMaxSum()) throw new Error("Занадто велика сума, введіть меншу")
			let remainingAmount = sum
			const dispensedBanknotes = {}
			const nominalOrder = [200, 100, 50, 20, 10, 5]
			for (const nominal of nominalOrder) {
				const banknoteType = this.banknotes.find(b => b.Nominal === nominal)
				if (banknoteType) {
					while (remainingAmount >= nominal && banknoteType.Banknote > 0) {
						remainingAmount -= nominal
						banknoteType.Banknote--
						dispensedBanknotes[nominal] = (dispensedBanknotes[nominal] || 0) + 1
					}
				}
			}
			if (remainingAmount === 0) {
				return dispensedBanknotes
			} else {
				for (const nominalStr in dispensedBanknotes) {
					const nominal = parseInt(nominalStr)
					const banknoteType = this.banknotes.find(b => b.Nominal === nominal)
					if (banknoteType) {
						banknoteType.Banknote += dispensedBanknotes[nominal]
					}
				}
				throw new Error(`Неможливо видати суму ${sum} наявними купюрами.`)
			}
		}
	}
	class Banknotes {
		constructor(nominal, count) {
			this.Banknote = count
			this.Nominal = nominal
		}
		#banknotesCount
		get Banknote() {
			return this.#banknotesCount
		}
		set Banknote(count) {
			if (count < 0) throw new Error("Кількість купюр не може бути менше 0")
			this.#banknotesCount = count
		}
		#nominal
		get Nominal() {
			return this.#nominal
		}
		set Nominal(nom) {
			const arrNominal = [5, 10, 20, 50, 100, 200]
			if (arrNominal.includes(nom) === false) throw new Error("Такої купюри не існує")
			this.#nominal = nom
		}
	}
	const count5UAH = 30
	const count10UAH = 25
	const count20UAH = 25
	const count50UAH = 20
	const count100UAH = 15
	const count200UAH = 15
	let banknotes5UAH = new Banknotes(5, count5UAH)
	let banknotes10UAH = new Banknotes(10, count10UAH)
	let banknotes20UAH = new Banknotes(20, count20UAH)
	let banknotes50UAH = new Banknotes(50, count50UAH)
	let banknotes100UAH = new Banknotes(100, count100UAH)
	let banknotes200UAH = new Banknotes(200, count200UAH)
	const banknotes = [
		banknotes5UAH,
		banknotes10UAH,
		banknotes20UAH,
		banknotes50UAH,
		banknotes100UAH,
		banknotes200UAH
	]
	console.log(banknotes)
	try {
		let bankomat = new TBankomat(banknotes)
		document.write(`Максимальна сума для зняття - ${bankomat.findMaxSum()}<br>`)
		document.write(`Мінімальна сума для зняття - ${bankomat.findMinSum()}<br>`)
		bankomat.withdravalSum(360)
		document.write(`Максимальна сума для зняття після зняття 360грн - ${bankomat.findMaxSum()}<br>`)
	} catch (error) {
		document.write(`Помилка: ${error.message}`)
	}
	//======================================================================
	// Це код тестів ШІ
	// try {
	// 	let bankomat = new TBankomat(banknotesArr);
	// 	document.write(`Початкова максимальна сума: ${bankomat.findMaxSum()}<br>`);
	// 	document.write(`Початкова мінімальна сума: ${bankomat.findMinSum()}<br><br>`);

	// 	// Тест 1: Успішне зняття суми, яку можна видати різними номіналами
	// 	const withdrawal1 = 175;
	// 	document.write(`Спроба зняти ${withdrawal1} грн... `);
	// 	const result1 = bankomat.withdraw(withdrawal1);
	// 	document.write(`Видано: ${JSON.stringify(result1)}<br>`);
	// 	document.write(`Максимальна сума після зняття ${withdrawal1} грн: ${bankomat.findMaxSum()}<br><br>`);

	// 	// Тест 2: Спроба зняти суму, якої немає в банкоматі
	// 	const withdrawal2 = 10000;
	// 	document.write(`Спроба зняти ${withdrawal2} грн... `);
	// 	try {
	// 		bankomat.withdraw(withdrawal2);
	// 	} catch (error) {
	// 		document.write(`Помилка: ${error.message}<br><br>`);
	// 	}

	// 	// Тест 3: Спроба зняти суму, меншу за мінімальний номінал
	// 	const withdrawal3 = 3;
	// 	document.write(`Спроба зняти ${withdrawal3} грн... `);
	// 	try {
	// 		bankomat.withdraw(withdrawal3);
	// 	} catch (error) {
	// 		document.write(`Помилка: ${error.message}<br><br>`);
	// 	}

	// 	// Тест 4: Спроба зняти суму, яку неможливо видати наявними купюрами (залишок після жадібного алгоритму)
	// 	const initialBankomat4 = new TBankomat([
	// 		new Banknotes(5, 1),
	// 		new Banknotes(10, 0),
	// 		new Banknotes(20, 0),
	// 		new Banknotes(50, 0),
	// 		new Banknotes(100, 0),
	// 		new Banknotes(200, 1)
	// 	]);
	// 	document.write(`Банкомат для тесту 4 - Максимальна сума: ${initialBankomat4.findMaxSum()}, Мінімальна сума: ${initialBankomat4.findMinSum()}<br>`);
	// 	const withdrawal4 = 203;
	// 	document.write(`Спроба зняти ${withdrawal4} грн... `);
	// 	try {
	// 		initialBankomat4.withdraw(withdrawal4);
	// 	} catch (error) {
	// 		document.write(`Помилка: ${error.message}<br><br>`);
	// 	}

	// 	// Тест 5: Зняття всієї суми з банкомата
	// 	const initialBankomat5 = new TBankomat([...banknotesArr.map(b => new Banknotes(b.Nominal, b.Banknote))]); // Створюємо копію
	// 	const withdrawal5 = initialBankomat5.findMaxSum();
	// 	document.write(`Банкомат для тесту 5 - Максимальна сума: ${withdrawal5}, Мінімальна сума: ${initialBankomat5.findMinSum()}<br>`);
	// 	document.write(`Спроба зняти ${withdrawal5} грн... `);
	// 	const result5 = initialBankomat5.withdraw(withdrawal5);
	// 	document.write(`Видано: ${JSON.stringify(result5)}, Залишок: ${initialBankomat5.findMaxSum()}<br><br>`);

	// 	// Тест 6: Спроба зняти 0 або від'ємну суму
	// 	const initialBankomat6 = new TBankomat([...banknotesArr.map(b => new Banknotes(b.Nominal, b.Banknote))]);
	// 	document.write(`Банкомат для тесту 6 - Максимальна сума: ${initialBankomat6.findMaxSum()}, Мінімальна сума: ${initialBankomat6.findMinSum()}<br>`);
	// 	const withdrawal6 = 0;
	// 	document.write(`Спроба зняти ${withdrawal6} грн... `);
	// 	try {
	// 		initialBankomat6.withdraw(withdrawal6);
	// 	} catch (error) {
	// 		document.write(`Помилка: ${error.message}<br>`);
	// 	}
	// 	const withdrawal7 = -10;
	// 	document.write(`Спроба зняти ${withdrawal7} грн... `);
	// 	try {
	// 		initialBankomat6.withdraw(withdrawal7);
	// 	} catch (error) {
	// 		document.write(`Помилка: ${error.message}<br>`);
	// 	}

	// } catch (error) {
	// 	document.write("Глобальна помилка: " + error.message);
	// }
}
