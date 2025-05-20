"use strict"

//Задача №6
//Дано інформацію про відвідувачів деякого сайту (для кожного відвідувача зберігається логін). Підрахувати для кожного клієнта кількість відвідувань.

if (confirm('Start?')) {
	const usersLogin = [
		"logic_master",
		"cyber_knight",
		"user_alpha",
		"code_ninja",
		"pixel_dreamer",
		"logic_master",
		"star_seeker",
		"cyber_knight",
		"tech_wizard",
		"code_ninja",
		"data_guru",
		"cyber_knight",
		"logic_master",
		"code_ninja",
		"future_pilot",
		"logic_master",
	]
	const countUserVisits = new Map()
	for (const login of usersLogin) {
		if(countUserVisits.has(login)) countUserVisits.set(login, countUserVisits.get(login) + 1)
		else countUserVisits.set(login, 1)
	}
	console.log(countUserVisits)
}