"use strict"

//Задача №1
//Описати масив об’єктів – сайтів розроблених компанією з такими властивостями

if (confirm('Start?')) {
	let siteList = [
		{
			companyName: 'TechGiant',
			owner: 'Ivan Petrenko',
			sponsor: {
				lastName: 'Sydorenko',
				firstName: 'Oleg',
				investmentAmount: 100000
			},
			releaseYear: 2002,
			siteCost: 250000
		},
		{
			companyName: 'InfoNetwork',
			owner: 'Maria Ivanova',
			sponsor: {
				lastName: 'Petrov',
				firstName: 'Andriy',
				investmentAmount: 75000
			},
			releaseYear: 2023,
			siteCost: 300000
		},
		{
			companyName: 'WebSpace',
			owner: 'Olena Semenko',
			sponsor: {
				lastName: 'Tkachenko',
				firstName: 'Dmytro',
				investmentAmount: 120000
			},
			releaseYear: 2021,
			siteCost: 8000
		},
		{
			companyName: 'OnlineService',
			owner: 'Sergiy Bondarenko',
			sponsor: {
				lastName: 'Pavlenko',
				firstName: 'Natalia',
				investmentAmount: 60000
			},
			releaseYear: 2024,
			siteCost: 350000
		}
	]
	console.log(siteList)

	// 1) загальну вартість усіх сайтів

	function getSumSiteCost(arr) {
		let sum = 0
		for (const site of arr) {
			sum += site.siteCost
		}
		return sum
	}
	document.write(`Загальна вартість усіх сайтів складає - ${getSumSiteCost(siteList)}.<br>`)

	// 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.

	function getCountSiteMadeBetween2000And2009(arr) {
		let countSite = arr.reduce((prevCount, site) => site.releaseYear > 2000 && site.releaseYear < 2009 ? prevCount + 1 : prevCount, 0)
		return countSite
	}
	document.write(`Кількість сайтів, що було зроблено між 2000 та 2009 рр. - ${getCountSiteMadeBetween2000And2009(siteList)}.<br>`)

	// 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000

	function getCountSiteInvestmentAmountGr100000(arr) {
		let countSite = 0
		for (const site of arr) {
			if(site.sponsor.investmentAmount > 100000) countSite++
		}
		return countSite
	}
	document.write(`Кількість сайтів, де сума спонсорських вкладень була більшою за 100000 - ${getCountSiteInvestmentAmountGr100000(siteList)}.<br>`)
	
	// 4) створити загальний список усіх спонсорів(поки можуть повторюватись, просто зібрати усі у масив)

	function getSponsorList(arr) {
		return arr.reduce((prevList, site) => {
			prevList.push(site.sponsor)
			return prevList
		}, [])
	}
	console.log(getSponsorList(siteList))

	// 5) знайти рік, коли прибуток був найбільшим

	function getYearBiggestProfit(arr) {
		let year 
		let maxProfit = -Infinity
		for (const site of arr) {
			if(site.siteCost > maxProfit) {
				maxProfit = site.siteCost
				year = site.releaseYear
			}
		}
		return year
	}
	document.write(`Рік, коли прибуток був найбільшим - ${getYearBiggestProfit(siteList)}.<br>`)

	//6) упорядкувати список за спаданням прибутку

	function getSortList(arr) {
		return arr.sort((site1, site2) => site2.siteCost - site1.siteCost)
	}
	console.log(getSortList(siteList))
	
	// 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000

	function getTwoList(arr) {
		let listCostUpTo10000 = []
		let listCostMoreThan10000 = []
		for (const site of arr) {
			if(site.siteCost < 10000) listCostUpTo10000.push(JSON.parse(JSON.stringify(site)))
			else listCostMoreThan10000.push(JSON.parse(JSON.stringify(site)))
		}
		return [listCostUpTo10000, listCostMoreThan10000]
	}
	let [list1, list2] = getTwoList(siteList)
	console.log([list1, list2])
	
}