"use strict"

//Задача №6
// Дано список спортсменів. Потрібно сформувати список тих, які будуть брати участь у змаганні. При цьому є два стовпці. В одному відображені всі спортсмени, в іншому – список тих, хто був вибраний. При натисканні на зелену стрілку спортсмен переміщається у список для змагань. При натисканні на червону стрілку спортсмен переміщається у загальний список.

if (confirm('Start?')) {
	class CompetitionManager {
		constructor(nameList) {
			this.nameList = nameList
		}
		renderMemberItem(memberName) {
			const itemContainerDiv = document.createElement('div')
			itemContainerDiv.className = 'member-item'
			const nameDiv = document.createElement('div')
			nameDiv.innerText = memberName
			itemContainerDiv.append(nameDiv)
			const btnAdd = document.createElement('button')
			btnAdd.innerText = 'Додати'
			btnAdd.addEventListener('click', this.handleAddMember.bind(this))
			itemContainerDiv.append(btnAdd)
			return itemContainerDiv
		}
		renderAddingMemberItem(memberName) {
			const itemContainerDiv = document.createElement('div')
			itemContainerDiv.className = 'member-item'
			const nameDiv = document.createElement('div')
			nameDiv.innerText = memberName
			itemContainerDiv.append(nameDiv)
			const btnRemove = document.createElement('button')
			btnRemove.innerText = 'Вилучити'
			btnRemove.addEventListener('click', this.handleRemoveMember.bind(this))
			itemContainerDiv.append(btnRemove)
			return itemContainerDiv
		}
		renderMembersList() {
			const itemsContainer = document.createElement('div')
			const tittle = document.createElement('h1')
			tittle.innerText = 'Загальний список'
			itemsContainer.append(tittle)
			for (const memberName of this.nameList) {
				const memberEl = this.renderMemberItem(memberName)
				itemsContainer.append(memberEl)
			}
			return itemsContainer
		}
		renderAddingMembersList() {
			const itemsContainer = document.createElement('div')
			const tittle = document.createElement('h1')
			tittle.innerText = 'Обрані для змагання'
			itemsContainer.append(tittle)
			return itemsContainer
		}
		render(containerSelector) {
			if(containerSelector) { 
				const membersListEl = this.renderMembersList()
				const addingMembersListEl = this.renderAddingMembersList()
				document.querySelector(containerSelector).append(membersListEl)
				document.querySelector(containerSelector).append(addingMembersListEl)
				this.membersListContainer = membersListEl
				this.addingMembersListContainer = addingMembersListEl
			}
			
		}
		handleAddMember(event) {
			const button = event.target
			const memberItem = button.closest('.member-item')
			const memberNameEl = memberItem.querySelector('div')
			if(memberNameEl) {
				const memberName = memberNameEl.innerText
				
				this.addingMembersListContainer.append(this.renderAddingMemberItem(memberName))
				memberItem.remove()
			}
		}
		handleRemoveMember(event) {
			const button = event.target
			const memberItem = button.closest('.member-item')
			const memberNameEl = memberItem.querySelector('div')
			if(memberNameEl) {
				const memberName = memberNameEl.innerText
				this.membersListContainer.append(this.renderMemberItem(memberName))
				const newAddBtn = 
				memberItem.remove()
			}
		}
	}
	const membersList = ['Ivan', 'Olga', 'Petro', 'Oksana']
	window.onload = function () {
		const manager = new CompetitionManager(membersList)
		manager.render('.container')
	}
}