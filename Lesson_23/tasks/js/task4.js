"use strict"

//Задача №4
//Зберігати у пам’яті список справ, які користувачу треба виконати (зберігати у localStorage). Періодично випадковим чином вибирати якусь з справ і виводити користувачу (з використанням confirm). Якщо користувач натискає на «Ок», то видаляти цю задачу.

if (confirm('Start?')) {
	class ToDoList {
		constructor(list = []) {
			this.list = list
			this.setTask()
		}
		setTask() {
			localStorage.setItem('tasks', JSON.stringify(this.list))
		}
		getRandomId() {
			if (this.list.length === 0) {
				return null
			}
			const randomTnd = Math.floor(Math.random() * this.list.length)
			return this.list[randomTnd].id.toString()
		}
		savedTasks() {
			const tasks = localStorage.getItem('tasks')
			if (tasks) this.list = JSON.parse(tasks)
			else[]
		}
		showTask() {
			this.savedTasks()
			const randomId = this.getRandomId()
			if (randomId) {
				const task = this.list.find(task => task.id.toString() === randomId)
				if (task) {
					let res = confirm(task.task)
					if (res) {
						this.removeTask(randomId)
					}
				}
			}
			else {
				document.write('Ви виконали всі завдання')
				clearInterval(this.intervalId)
			}
		}
		intervalShow() {
			this.savedTasks()
			if (this.list.length) {
				this.intervalId = setInterval(() => this.showTask(), 2000)
			} else document.write('Список порожній')
		}
		removeTask(id) {
			this.list = this.list.filter(task => task.id.toString() !== id)
			this.setTask()
		}
	}
	const todoList = [
		{ id: 1, task: "Зробити дз з JavaScript" },
		{ id: 2, task: "Не зійти з розуму" },
		{ id: 3, task: "Записатись на курс React" },
		{ id: 4, task: "Здати фінальний тест" },
		{ id: 5, task: "Не зійти з розуму.2" },
		{ id: 6, task: "Піти на роботу" },
		{ id: 7, task: "Грати в Roblox з дочкою" },
		{ id: 8, task: "Подивитись заново Надприродне" },
		{ id: 9, task: "Навчитись керувати часом, щоб все встигати" }
	];
	let d = new ToDoList(todoList)
	d.intervalShow()

}
