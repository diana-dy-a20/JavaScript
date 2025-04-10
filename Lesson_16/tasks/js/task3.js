"use strict"

//Задача №3
// Об’єкт “Фірма” (використати члени-класи)

if (confirm('Start?')) {
	class Firm {
		constructor(nameFirm, dateFoundation, services, branches) {
			this.CompanyName = nameFirm
			this.dateFoundation = dateFoundation
			this.services = services
			this.branches = branches
		}
		#companyName
		get CompanyName() {
			return this.#companyName
		}
		set CompanyName(name) {
			if (name.length === 0) throw new Error("Це поле не може бути пустим")
			this.#companyName = name
		}

	}
	class DateFoundation {
		constructor(month, year) {
			this.Month = month
			this.Year = year
		}
		#month
		get Month() {
			return this.#month
		}
		set Month(monthFoundation) {
			if (monthFoundation < 0 || monthFoundation > 12) throw new Error("Некоректно вказаний номер місяця")
			this.#month = monthFoundation
		}
		#year
		get Year() {
			return this.#year
		}
		set Year(yearFoundation) {
			if (yearFoundation < 0) throw new Error("Некоректно вказаний рік")
			this.#year = yearFoundation
		}
		yearsOfCompanyExistence(currentYear = 2025) {
			return currentYear - this.Year
		}
	}
	let dateFoundation = new DateFoundation(5, 1986)
	class Services {
		constructor(nameService, cost, deadline) {
			this.ServiceName = nameService
			this.CostOfService = cost
			this.Deadline = deadline
		}
		#serviceName
		get ServiceName() {
			return this.#serviceName
		}
		set ServiceName(name) {
			if (name.length === 0) throw new Error("Це поле не може бути пустим")
			this.#serviceName = name
		}
		#costOfService
		get CostOfService() {
			return this.#costOfService
		}
		set CostOfService(cost) {
			if (cost < 0) throw new Error("Невірно вказана сума")
			this.#costOfService = cost
		}
		#deadline
		get Deadline() {
			return this.#deadline
		}
		set Deadline(deadline) {
			if (deadline < 0) throw new Error("Невірно вказаний термін виконання")
			this.#deadline = deadline
		}
	}
	let service1 = new Services('Service1', 800, 10)
	let service2 = new Services('Service2', 600, 7)
	let service3 = new Services('Service3', 1200, 15)
	let services = [
		service1,
		service2,
		service3
	]
	class BranchAddress {
		constructor(country, city, street, numHouse) {
			this.Country = country
			this.City = city
			this.Street = street
			this.NumHouse = numHouse
		}
		#country
		get Country() {
			return this.#country
		}
		set Country(country) {
			if (country.length === 0) throw new Error("Це поле не може бути пустим")
			this.#country = country
		}
		#city
		get City() {
			return this.#city
		}
		set City(city) {
			if (city.length === 0) throw new Error("Це поле не може бути пустим")
			this.#city = city
		}
		#street
		get Street() {
			return this.#street
		}
		set Street(street) {
			if (street.length === 0) throw new Error("Це поле не може бути пустим")
			this.#street = street
		}
		#numHouse
		get NumHouse() {
			return this.#numHouse
		}
		set NumHouse(num) {
			if (num < 0) throw new Error("Номер будинку не може бути менше 0")
			this.#numHouse = num
		}
	}
	let branch1 = new BranchAddress('Ukraine', 'Odesa', 'Shevchenka', 35)
	let branch2 = new BranchAddress('Ukraine', 'Odesa', 'Deribasovskaya', 47)
	let branch3 = new BranchAddress('Ukraine', 'Kyiv', 'Antonovycha', 14)
	let branches = [
		branch1,
		branch2,
		branch3
	]
	try {
		let firm = new Firm('Firm', dateFoundation, services, branches)
		console.log(firm)
		document.write(`Фірма існує ${dateFoundation.yearsOfCompanyExistence()} років.<br>`)
		function filterBranches(branches, city) {
			return branches.filter((el) => el.City === city)
		}
		const userCity = 'Odesa'
		console.log(filterBranches(branches, userCity))
		function filterServices(services, cost, deadline) {
			return services.filter((el) => el.CostOfService <= cost && el.Deadline <= deadline)
		}
		console.log(filterServices(services, 700, 10))
	} catch (error) {
		document.write(`Помилка: ${error.message}`)
	}

	//=========================================================================
	//Це код ШІ, просила зробити тести до мого коду
	//===========================================================================
	// class Firm {
	// 	constructor(nameFirm, dateFoundation, services, branches) {
	// 		this.CompanyName = nameFirm;
	// 		this.dateFoundation = dateFoundation;
	// 		this.services = services;
	// 		this.branches = branches;
	// 	}
	// 	#companyName;
	// 	get CompanyName() {
	// 		return this.#companyName;
	// 	}
	// 	set CompanyName(name) {
	// 		if (name.length === 0) throw new Error("Це поле не може бути пустим");
	// 		this.#companyName = name;
	// 	}
	// }

	// class DateFoundation {
	// 	constructor(month, year) {
	// 		this.Month = month;
	// 		this.Year = year;
	// 	}
	// 	#month;
	// 	get Month() {
	// 		return this.#month;
	// 	}
	// 	set Month(monthFoundation) {
	// 		if (monthFoundation < 1 || monthFoundation > 12) throw new Error("Некоректно вказаний номер місяця");
	// 		this.#month = monthFoundation;
	// 	}
	// 	#year;
	// 	get Year() {
	// 		return this.#year;
	// 	}
	// 	set Year(yearFoundation) {
	// 		if (yearFoundation < 0) throw new Error("Некоректно вказаний рік");
	// 		this.#year = yearFoundation;
	// 	}
	// 	yearsOfCompanyExistence(currentYear = 2025) {
	// 		return currentYear - this.Year;
	// 	}
	// }

	// class Services {
	// 	constructor(nameService, cost, deadline) {
	// 		this.ServiceName = nameService;
	// 		this.CostOfService = cost;
	// 		this.Deadline = deadline;
	// 	}
	// 	#serviceName;
	// 	get ServiceName() {
	// 		return this.#serviceName;
	// 	}
	// 	set ServiceName(name) {
	// 		if (name.length === 0) throw new Error("Це поле не може бути пустим");
	// 		this.#serviceName = name;
	// 	}
	// 	#costOfService;
	// 	get CostOfService() {
	// 		return this.#costOfService;
	// 	}
	// 	set CostOfService(cost) {
	// 		if (cost < 0) throw new Error("Невірно вказана сума");
	// 		this.#costOfService = cost;
	// 	}
	// 	#deadline;
	// 	get Deadline() {
	// 		return this.#deadline;
	// 	}
	// 	set Deadline(deadline) {
	// 		if (deadline < 0) throw new Error("Невірно вказаний термін виконання");
	// 		this.#deadline = deadline;
	// 	}
	// }

	// class BranchAddress {
	// 	constructor(country, city, street, numHouse) {
	// 		this.Country = country;
	// 		this.City = city;
	// 		this.Street = street;
	// 		this.NumHouse = numHouse;
	// 	}
	// 	#country;
	// 	get Country() {
	// 		return this.#country;
	// 	}
	// 	set Country(country) {
	// 		if (country.length === 0) throw new Error("Це поле не може бути пустим");
	// 		this.#country = country;
	// 	}
	// 	#city;
	// 	get City() {
	// 		return this.#city;
	// 	}
	// 	set City(city) {
	// 		if (city.length === 0) throw new Error("Це поле не може бути пустим");
	// 		this.#city = city;
	// 	}
	// 	#street;
	// 	get Street() {
	// 		return this.#street;
	// 	}
	// 	set Street(street) {
	// 		if (street.length === 0) throw new Error("Це поле не може бути пустим");
	// 		this.#street = street;
	// 	}
	// 	#numHouse;
	// 	get NumHouse() {
	// 		return this.#numHouse;
	// 	}
	// 	set NumHouse(num) {
	// 		if (num < 0) throw new Error("Номер будинку не може бути менше 0");
	// 		this.#numHouse = num;
	// 	}
	// }

	// function runFirmTests() {
	// 	let testResults = [];

	// 	// --- Тести для класу Firm ---
	// 	testResults.push({
	// 		name: "Firm: Створення об'єкту (валідно)",
	// 		passed: () => {
	// 			try {
	// 				new Firm("Test Firm", new DateFoundation(1, 2000), [], []);
	// 				return true;
	// 			} catch (error) {
	// 				return false;
	// 			}
	// 		}
	// 	});

	// 	testResults.push({
	// 		name: "Firm: Встановлення CompanyName (валідно)",
	// 		passed: () => {
	// 			try {
	// 				const firm = new Firm("Initial Name", new DateFoundation(1, 2000), [], []);
	// 				firm.CompanyName = "New Name";
	// 				return firm.CompanyName === "New Name";
	// 			} catch (error) {
	// 				return false;
	// 			}
	// 		}
	// 	});

	// 	testResults.push({
	// 		name: "Firm: Встановлення CompanyName (невалідно - пустий рядок)",
	// 		passed: () => {
	// 			try {
	// 				const firm = new Firm("Initial Name", new DateFoundation(1, 2000), [], []);
	// 				firm.CompanyName = "";
	// 				return false;
	// 			} catch (error) {
	// 				return error.message === "Це поле не може бути пустим";
	// 			}
	// 		}
	// 	});

	// 	// --- Тести для класу DateFoundation ---
	// 	testResults.push({
	// 		name: "DateFoundation: Створення об'єкту (валідно)",
	// 		passed: () => {
	// 			try {
	// 				new DateFoundation(5, 1990);
	// 				return true;
	// 			} catch (error) {
	// 				return false;
	// 			}
	// 		}
	// 	});

	// 	testResults.push({
	// 		name: "DateFoundation: Встановлення Month (валідно)",
	// 		passed: () => {
	// 			try {
	// 				const date = new DateFoundation(1, 2000);
	// 				date.Month = 10;
	// 				return date.Month === 10;
	// 			} catch (error) {
	// 				return false;
	// 			}
	// 		}
	// 	});

	// 	testResults.push({
	// 		name: "DateFoundation: Встановлення Month (невалідно - менше 1)",
	// 		passed: () => {
	// 			try {
	// 				const date = new DateFoundation(1, 2000);
	// 				date.Month = 0;
	// 				return false;
	// 			} catch (error) {
	// 				return error.message === "Некоректно вказаний номер місяця";
	// 			}
	// 		}
	// 	});

	// 	testResults.push({
	// 		name: "DateFoundation: Встановлення Month (невалідно - більше 12)",
	// 		passed: () => {
	// 			try {
	// 				const date = new DateFoundation(1, 2000);
	// 				date.Month = 13;
	// 				return false;
	// 			} catch (error) {
	// 				return error.message === "Некоректно вказаний номер місяця";
	// 			}
	// 		}
	// 	});

	// 	testResults.push({
	// 		name: "DateFoundation: Встановлення Year (валідно)",
	// 		passed: () => {
	// 			try {
	// 				const date = new DateFoundation(1, 2000);
	// 				date.Year = 2023;
	// 				return date.Year === 2023;
	// 			} catch (error) {
	// 				return false;
	// 			}
	// 		}
	// 	});

	// 	testResults.push({
	// 		name: "DateFoundation: Встановлення Year (невалідно - менше 0)",
	// 		passed: () => {
	// 			try {
	// 				const date = new DateFoundation(1, 2000);
	// 				date.Year = -1;
	// 				return false;
	// 			} catch (error) {
	// 				return error.message === "Некоректно вказаний рік";
	// 			}
	// 		}
	// 	});

	// 	testResults.push({
	// 		name: "DateFoundation: yearsOfCompanyExistence()",
	// 		passed: () => {
	// 			const date = new DateFoundation(5, 1986);
	// 			return date.yearsOfCompanyExistence() === (2025 - 1986);
	// 		}
	// 	});

	// 	// --- Тести для класу Services ---
	// 	testResults.push({
	// 		name: "Services: Створення об'єкту (валідно)",
	// 		passed: () => {
	// 			try {
	// 				new Services("Cleaning", 500, 3);
	// 				return true;
	// 			} catch (error) {
	// 				return false;
	// 			}
	// 		}
	// 	});

	// 	testResults.push({
	// 		name: "Services: Встановлення ServiceName (невалідно - пустий рядок)",
	// 		passed: () => {
	// 			try {
	// 				const service = new Services("Initial", 100, 1);
	// 				service.ServiceName = "";
	// 				return false;
	// 			} catch (error) {
	// 				return error.message === "Це поле не може бути пустим";
	// 			}
	// 		}
	// 	});

	// 	testResults.push({
	// 		name: "Services: Встановлення CostOfService (невалідно - менше 0)",
	// 		passed: () => {
	// 			try {
	// 				const service = new Services("Test", 100, 1);
	// 				service.CostOfService = -50;
	// 				return false;
	// 			} catch (error) {
	// 				return error.message === "Невірно вказана сума";
	// 			}
	// 		}
	// 	});

	// 	testResults.push({
	// 		name: "Services: Встановлення Deadline (невалідно - менше 0)",
	// 		passed: () => {
	// 			try {
	// 				const service = new Services("Test", 100, 1);
	// 				service.Deadline = -2;
	// 				return false;
	// 			} catch (error) {
	// 				return error.message === "Невірно вказаний термін виконання";
	// 			}
	// 		}
	// 	});

	// 	// --- Тести для класу BranchAddress ---
	// 	testResults.push({
	// 		name: "BranchAddress: Створення об'єкту (валідно)",
	// 		passed: () => {
	// 			try {
	// 				new BranchAddress("Ukraine", "Kyiv", "Khreschatyk", 1);
	// 				return true;
	// 			} catch (error) {
	// 				return false;
	// 			}
	// 		}
	// 	});

	// 	testResults.push({
	// 		name: "BranchAddress: Встановлення Country (невалідно - пустий рядок)",
	// 		passed: () => {
	// 			try {
	// 				const branch = new BranchAddress("Initial", "City", "Street", 1);
	// 				branch.Country = "";
	// 				return false;
	// 			} catch (error) {
	// 				return error.message === "Це поле не може бути пустим";
	// 			}
	// 		}
	// 	});

	// 	testResults.push({
	// 		name: "BranchAddress: Встановлення City (невалідно - пустий рядок)",
	// 		passed: () => {
	// 			try {
	// 				const branch = new BranchAddress("Country", "Initial", "Street", 1);
	// 				branch.City = "";
	// 				return false;
	// 			} catch (error) {
	// 				return error.message === "Це поле не може бути пустим";
	// 			}
	// 		}
	// 	});

	// 	testResults.push({
	// 		name: "BranchAddress: Встановлення Street (невалідно - пустий рядок)",
	// 		passed: () => {
	// 			try {
	// 				const branch = new BranchAddress("Country", "City", "Initial", 1);
	// 				branch.Street = "";
	// 				return false;
	// 			} catch (error) {
	// 				return error.message === "Це поле не може бути пустим";
	// 			}
	// 		}
	// 	});

	// 	testResults.push({
	// 		name: "BranchAddress: Встановлення NumHouse (невалідно - менше 0)",
	// 		passed: () => {
	// 			try {
	// 				const branch = new BranchAddress("Country", "City", "Street", 1);
	// 				branch.NumHouse = -5;
	// 				return false;
	// 			} catch (error) {
	// 				return error.message === "Номер будинку не може бути менше 0";
	// 			}
	// 		}
	// 	});

	// 	// Виведення результатів тестів
	// 	document.write("<h2>Результати тестів класів Firm, DateFoundation, Services, BranchAddress:</h2>");
	// 	testResults.forEach(test => {
	// 		const result = test.passed instanceof Function ? test.passed() : test.passed;
	// 		document.write(`<p>Тест "${test.name}": ${result ? '<span style="color: green;">Пройдено</span>' : '<span style="color: red;">Не пройдено</span>'}`);
	// 		document.write("</p>");
	// 	});
	// }

	// // Виклик функції для запуску тестів
	// runFirmTests();

	// // Твій оригінальний код для демонстрації роботи класів
	// let dateFoundation = new DateFoundation(5, 1986);
	// let service1 = new Services('Service1', 800, 10);
	// let service2 = new Services('Service2', 600, 7);
	// let service3 = new Services('Service3', 1200, 15);
	// let services = [service1, service2, service3];
	// let branch1 = new BranchAddress('Ukraine', 'Odesa', 'Shevchenka', 35);
	// let branch2 = new BranchAddress('Ukraine', 'Odesa', 'Deribasovskaya', 47);
	// let branch3 = new BranchAddress('Ukraine', 'Kyiv', 'Antonovycha', 14);
	// let branches = [branch1, branch2, branch3];
	// let firm = new Firm('Firm', dateFoundation, services, branches);

	// document.write("<hr>");
	// document.write(`<h2>Демонстрація роботи класів:</h2>`);
	// document.write(`Фірма "${firm.CompanyName}" існує ${dateFoundation.yearsOfCompanyExistence()} років.<br>`);

	// function filterBranches(branches, city) {
	// 	return branches.filter((el) => el.City === city);
	// }
	// const userCity = 'Odesa';
	// const odesaBranches = filterBranches(branches, userCity);
	// document.write(`Філіали в місті ${userCity}:<br>`);
	// odesaBranches.forEach(branch => {
	// 	document.write(`- ${branch.Country}, ${branch.City}, вул. ${branch.Street}, буд. ${branch.NumHouse}<br>`);
	// });

	// function filterServices(services, cost, deadline) {
	// 	return services.filter((el) => el.CostOfService <= cost && el.Deadline <= deadline);
	// }
	// const affordableServices = filterServices(services, 700, 10);
	// document.write(`Послуги вартістю до 700 та терміном до 10 днів:<br>`);
	// affordableServices.forEach(service => {
	// 	document.write(`- ${service.ServiceName} (вартість: ${service.CostOfService}, термін: ${service.Deadline} днів)<br>`);
	// });
}
