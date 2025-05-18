"use strict"

//Задача №7
//Дано масив студентів (піб, курс, факультет). Підрахувати кількість різних факультетів, та кількість студентів кожного з курсів.


if (confirm('Start?')) {
	const studentsList = [
		{ name: 'Петренко Петро Петрович', course: 2, faculty: 'Психології' },
		{ name: 'Соловенко Ірина Петрівна', course: 3, faculty: 'Мистецтвознавства' },
		{ name: 'Юрій Іван Сергійович', course: 3, faculty: 'Інформатики' },
		{ name: 'Шевченко Олександр Іванович', course: 1, faculty: 'Психології' },
		{ name: 'Коробко Вікторія Василівна', course: 2, faculty: 'Мистецтвознавства' },
		{ name: 'Війтюк Світлана Пилипівна', course: 2, faculty: 'Психології' },
	]
	const countFaculty = new Map()
	for (const student of studentsList) {
		if (countFaculty.has(student.faculty)) countFaculty.set(student.faculty, countFaculty.get(student.faculty) + 1)
		else countFaculty.set(student.faculty, 1)
	}
	console.log(countFaculty)
	const countStudents = new Map()
	for (const student of studentsList) {
		if (countStudents.has(student.course)) countStudents.set(student.course, countStudents.get(student.course) + 1)
		else countStudents.set(student.course, 1)
	}
	console.log(countStudents)
}