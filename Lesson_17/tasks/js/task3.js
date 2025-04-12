"use strict"

//Задача №3
// Створити клас Нагадувач. Кожні вказані кількості секунд (використати setInterval) програма нагадує про якусь подію (це просто текст) і також виводиться порядковий номер скільки раз вже нагадування було. Зробити так, щоб неможна було зробити одночасно декілька об’єктів-нагадувачів. Методи зупинки таймера, метод зміни повідомлення без зупинки таймера.

if (confirm('Start?')) {
	class Reminder {
		static reminder
		static count = 1
		static timeout
		constructor(text, interval) {
			if (Reminder.reminder) return Reminder.reminder
			this.text = text
			this.interval = interval
		}
		getRemind() {
			return Reminder.timeout = setInterval(() => {
				console.log(`${Reminder.count}.${this.text}`)
				Reminder.count++
			}, this.interval)
		}
		stopTimer() {
			clearTimeout(Reminder.timeout)
		}
		messageReplacement() {
			this.text = null
		}
	}
	let msg = new Reminder('Відпочинь від задач, краще робити на свіжу голову!', 3000)
	msg.getRemind()
	// msg.messageReplacement()
	// let msg2 = new Reminder('Відпочинь!Негайно', 2000)
	// msg2.getRemind()
	// msg.stopTimer()
}
