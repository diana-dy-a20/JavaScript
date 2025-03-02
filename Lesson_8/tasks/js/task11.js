"use strict"

//Задача №11
// Вивести на екран усі двоцифрові числа, у яких перша цифра є більшою або рівною за другу.

// if (confirm('Start?')) {
// 	// for (let num = 10; num <= 99; num++) {
// 	// 	const c2 = num % 10
// 	// 	const c1 = Math.floor(num / 10) % 10
// 	// 	if (c1 >= c2) document.write(`${num}<br>`)
// 	// }
// 	for (let c1 = 1; c1 <= 9; c1++) {
// 		for (let c2 = 0; c2 <= 9; c2++) {
// 			if (c1 >= c2) document.write(`${c1}${c2}<br>`)
// 		}
// 	}
// }
if (confirm('Start?')) {
	for (let c1 = 1; c1 <= 9; c1++) {
		for (let c2 = 0; c2 <= 9; c2++) {
			for (let c3 = 0; c3 <= 9; c3++) {
				if (c1 >= c2 + c3) document.write(`${c1}${c2}${c3}<br>`)
			}
			
		}
	}
}