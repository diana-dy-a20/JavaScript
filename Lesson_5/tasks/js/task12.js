"use strict"

//Задача №12
// Ігровий автомат. Випадково вибираємо зображення у 3 позиціях. Вибір у кожній позиції вибирається як одне з чотирьох зображень.Вивести ці зображення і повідомити виграш користувача(три перших зображення 100 грн, три других – 200, три третіх – 500, три четвертих зображення – 1000грн).Використати цикли і switch (для вибору зображення за номером).

if (confirm('Start?')) {
	let result1
	let result2
	let result3
	for (let i = 0; i < 3; i++) {
		let randomNum = 1 + Math.floor(Math.random() * 4)
		let image
		switch (randomNum) {
			case 1:
				image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgeC1nKDhkjyFq9rNbDp_uXJXl896b_syzSkHYKnr7W56L-aWjmMCnoG0s1dPSnGqupok&usqp=CAU";
				break;
			case 2:
				image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsa3K1PkfEgVzc6JeayE-uGwejpsBDBbVBUw&s";
				break;
			case 3:
				image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3hf7HlrltBTfPPZoO87ztEkCpd7nj7MsTgQ&s";
				break;
			case 4:
				image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Nze1qDcpfKs11LS4Ov_Z6flZuVm6RrAg4Q&s";
				break;
		}
		if (i === 0)
			result1 = image
		else if (i === 1)
			result2 = image
		else
			result3 = image
		document.write(`<img src="${image}">`);
	}
	if (result1 === result2 && result2 === result3) {
		let win = 0;
		switch (result1) {
			case "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgeC1nKDhkjyFq9rNbDp_uXJXl896b_syzSkHYKnr7W56L-aWjmMCnoG0s1dPSnGqupok&usqp=CAU":
				win = 100;
				break;
			case "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsa3K1PkfEgVzc6JeayE-uGwejpsBDBbVBUw&s":
				win = 200;
				break;
			case "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3hf7HlrltBTfPPZoO87ztEkCpd7nj7MsTgQ&s":
				win = 500;
				break;
			case "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Nze1qDcpfKs11LS4Ov_Z6flZuVm6RrAg4Q&s":
				win = 1000;
				break;
		}
		alert(`Ви виграли ${win} грн!`);
	} else {
		alert("Ви не виграли.");
	}
}