"use strict"

//Задача №1
//Генерація всіх підмножин: Реалізуйте рекурсивну функцію, яка генерує всі можливі підмножини заданого масиву. Наприклад, для масиву [1, 2, 3] можливі підмножини: [], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3].

if (confirm('Start?')) {
	const arr = [1, 2, 3]
	function getSubsets(arr) {
		const res = []
		function recursion(step, ressArr) {
			if (step === arr.length) {
				res.push([...ressArr])
				return
			}
			recursion(step + 1, ressArr)
			ressArr.push(arr[step])
			recursion(step + 1, ressArr)
			ressArr.pop()
		}
		recursion(0, [])
		return res
	}
	const subsets = getSubsets(arr)
	console.log(subsets)
}