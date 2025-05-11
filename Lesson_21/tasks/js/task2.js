"use strict"

//Задача №2
//Створити клас Bank, у якому зберігається масив клієнтів. Виконати такі операції
//Вивести всіх простих клієнтів;
//Вивести всіх клієнтів GoldenClient;
//Знайти сумарну кількість грошей на рахунку;



if (confirm('Start?')) {
	class WrongDataTypeError extends Error {
		constructor(message) {
			super(message)
			this.name = 'WrongDataTypeError'
		}
	}
	class IsNegativeNumberError extends Error {
		constructor() {
			super()
			this.message = 'Число не може бути від\'ємним'
			this.name = 'IsNegativeNumberError'
		}
	}
	class TooShortNameError extends Error {
		constructor() {
			super()
			this.message = 'Ім\'я має містити більше 2 знаків'
			this.name = 'TooShortNameError'
		}
	}
	class IsBalanceNegativeError extends Error {
		constructor() {
			super()
			this.message = 'Cума для зняття більша ніж ваш поточний баланс'
			this.name = IsBalanceNegativeError
		}
	}
	class Client {
		constructor(id, name, accountBalance) {
			this.IdClient = id
			this.NameClient = name
			this.AccountBalanceClient = accountBalance
		}
		#idClient
		get IdClient() {
			return this.#idClient
		}
		set IdClient(id) {
			if (id < 0) throw new IsNegativeNumberError()
			if (isNaN(id)) throw new WrongDataTypeError('Має бути число')
			this.#idClient = id
		}
		#nameClient
		get NameClient() {
			return this.#nameClient
		}
		set NameClient(name) {
			if (typeof name !== 'string') throw new WrongDataTypeError('Використовуйте літери')
			if (name.length <= 2) throw new TooShortNameError()
			this.#nameClient = name
		}
		#accountBalanceClient
		get AccountBalanceClient() {
			return this.#accountBalanceClient
		}
		set AccountBalanceClient(balance) {
			// if (balance < 0) throw new IsNegativeNumberError()
			if (isNaN(balance)) throw new WrongDataTypeError('Має бути число')
			this.#accountBalanceClient = balance
		}
		addingMoney(num) {
			if (num < 0) throw new IsNegativeNumberError()
			if (isNaN(num)) throw new WrongDataTypeError('Має бути число')
			this.AccountBalanceClient += num
		}
		removalMoney(num) {
			if (num < 0) throw new IsNegativeNumberError()
			if (isNaN(num)) throw new WrongDataTypeError('Має бути число')
			if (this.AccountBalanceClient < num) throw new IsBalanceNegativeError()
			this.AccountBalanceClient -= num
		}
		toString() {
			return `${this.NameClient}, ваш поточний баланс ${this.AccountBalanceClient} грн.<br>`
		}
	}
	class GoldenClient extends Client {
		constructor(id, name, accountBalance, creditLimit, percentOnUseCreditFunds) {
			super(id, name, accountBalance)
			this.CreditLimit = creditLimit
			this.PercentOnUseCreditFunds = percentOnUseCreditFunds
			// this.penalty = this.penaltyForUsingCreditFunds()
		}
		#creditLimit
		get CreditLimit() {
			return this.#creditLimit
		}
		set CreditLimit(num) {
			if (num < 0) throw new IsNegativeNumberError()
			if (isNaN(num)) throw new WrongDataTypeError('Має бути число')
			this.#creditLimit = num
		}
		#percentOnUseCreditFunds
		get PercentOnUseCreditFunds() {
			return this.#percentOnUseCreditFunds
		}
		set PercentOnUseCreditFunds(num) {
			if (num < 0) throw new IsNegativeNumberError()
			if (isNaN(num)) throw new WrongDataTypeError('Має бути число')
			this.#percentOnUseCreditFunds = num
		}
		removalMoney(num) {
			if (num < 0) throw new IsNegativeNumberError()
			if (isNaN(num)) throw new WrongDataTypeError('Має бути число')
			if (num > this.AccountBalanceClient + this.CreditLimit) throw new IsBalanceNegativeError()
			// else this.AccountBalanceClient = (this.AccountBalanceClient + this.CreditLimit) - num
			this.AccountBalanceClient -= num
			if (this.AccountBalanceClient < 0) this.CreditLimit += this.AccountBalanceClient
		}
		penaltyForUsingCreditFunds() {
			let penalty = 0
			if (this.AccountBalanceClient < 0) penalty = (this.AccountBalanceClient / 100) * this.PercentOnUseCreditFunds
			return penalty
		}
		toString() {
			return `${this.NameClient}, ваш баланс - ${this.AccountBalanceClient} грн, розмір пені за використання кредитних коштів ${this.penaltyForUsingCreditFunds()} грн.`
		}
	}
	const clients = [
		new Client(3892, 'Іван', 3400),
		new Client(3382, 'Вікторія', 70400),
		new Client(9892, 'Дмитро', 300),
		new GoldenClient(49837, 'Дмитро', 6700, 2000, 10),
		new GoldenClient(82137, 'Ольга', 383000, 15000, 10),
		new GoldenClient(28737, 'Дмитро', 29400, 4000, 10),
	]
	class Bank {
		constructor(clientList) {
			this.clientList = clientList
		}
		getClient() {
			return this.clientList.filter(cl => cl instanceof Client && !(cl instanceof GoldenClient))
		}
		getGoldenClient() {
			return this.clientList.filter(cl => cl instanceof GoldenClient)
		}
		getSumMoney() {
			return this.clientList.reduce((prevSum, cl) => prevSum += cl.AccountBalanceClient, 0)
		}
	}
	try {
		const bank = new Bank(clients)
		console.log(bank)
		console.log(bank.getClient())
		console.log(bank.getGoldenClient())
		console.log(bank.getSumMoney())
	} catch (error) {
		if (error instanceof IsNegativeNumberError) console.log(error)
		if (error instanceof WrongDataTypeError) console.log(error)
		if (error instanceof TooShortNameError) console.log(error)
		if (error instanceof IsBalanceNegativeError) console.log(error)
	}
}