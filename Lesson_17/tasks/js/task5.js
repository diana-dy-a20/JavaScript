"use strict"

//Задача №5
//Дано два класи MultChecker (клас для перевірки таблиці множення - рандомно генеруються числа, які треба перемножати), AddChecker (клас для перевірки додавання - рандомно генеруються числа у заданому діапазоні, які треба додавати). Обидва класи надсилають результати тестування об'єкту класу Hystory, який зберігає історію тестування у масиві у вигляді об'єктів  Приклад.
// testsList = [
// 	{ firstNum: 1, secondNum: 5, opration:’*’, userAnswer: 7, correctAnswer: 5},
// 	{ firstNum: 3, secondNum: 4, opration:’+’, userAnswer: 7, correctAnswer: 7},
// ]
// Можна створити окремий клас TestData, який описує один такий тест і у якому будуть ці поля. 
// Розробити клас TestManager, який використовуючи ці класи за допомогою таймера періодично генерує якісь N задач(рандомно вибираємо, що опитувати: додавання чи множення) і проводить опитування.Результати тестування додаються в об’єкт History.Зробити так, щоб об'єкт такого класу можна було створити тільки один. Коли зроблено ці N задач вивести усю історію на екран.

if (confirm('Start?')) {
	class MultChecker {
		constructor() {
			this.firstNum = this.getRandomFirstNum()
			this.secondNum = this.getRandomSecondNum()
			this.operation = this.getOperation()
			this.userAnswer = this.getUserAnswer()
			this.correctAnswer = this.getResult()
		}
		getOperation() {
			return '*'
		}
		getRandomFirstNum() {
			return 1 + Math.floor(Math.random() * 10)
		}
		getRandomSecondNum() {
			return 1 + Math.floor(Math.random() * 10)
		}
		getUserAnswer() {
			return parseInt(prompt(`Скільки буде ${this.firstNum} ${this.operation} ${this.secondNum}`))
		}
		getResult() {
			return this.firstNum * this.secondNum
		}
		toString() {
			return `Приклад ${this.firstNum} ${this.operation} ${this.secondNum}. Відповідь користувача ${this.userAnswer}. Правильна відповідь ${this.correctAnswer}.<br>`
		}
	}
	class AddChecker {
		constructor() {
			this.firstNum = this.getRandomFirstNum()
			this.secondNum = this.getRandomSecondNum()
			this.operation = this.getOperation()
			this.userAnswer = this.getUserAnswer()
			this.correctAnswer = this.getResult()
		}
		getOperation() {
			return '+'
		}
		getRandomFirstNum() {
			return 1 + Math.floor(Math.random() * 100)
		}
		getRandomSecondNum() {
			return 1 + Math.floor(Math.random() * 100)
		}
		getUserAnswer() {
			return parseInt(prompt(`Скільки буде ${this.firstNum} ${this.operation} ${this.secondNum}`))
		}
		getResult() {
			return this.firstNum + this.secondNum
		}
		toString() {
			return `Приклад ${this.firstNum} ${this.operation} ${this.secondNum}. Відповідь користувача ${this.userAnswer}. Правильна відповідь ${this.correctAnswer}.<br>`
		}
	}
	class History {
		constructor() {
			this.testList = []
		}
		addTest(newTest) {
			this.testList.push(newTest)
		}
	}
	let testing = new History()
	class TestManager {
		static testing
		constructor(interval, count, countMax) {
			if(TestManager.testing) return TestManager.testing
			this.interval = interval
			this.count = count
			this.countMax = countMax
		}
		getRandomOperation() {
			let operation
			let random = 1 + Math.floor(Math.random() * 2)
			if (random === 1) operation = new MultChecker()
			else operation = new AddChecker()
			return operation
		}
		testTimer() {
			
			TestManager.testing = setInterval(() => {
				this.count++
				let randomOperation = this.getRandomOperation()
				document.write(`${randomOperation}`)
				testing.addTest(randomOperation)
				if(this.count >= this.countMax) clearInterval(TestManager.testing)
			}, this.interval)
		}
	}
	let teast = new TestManager(5000, 0, 5)
	teast.testTimer()
	console.log(testing)
}