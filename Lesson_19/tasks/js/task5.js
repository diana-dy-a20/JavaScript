"use strict"

//Задача №5
//Відображаємо картки товарів, які користувач може вибирати. Вибраний товар має зелену рамку (при кліку робити toogle з класом вибраного елемента)

if (confirm('Start?')) {
	function click(event) {
		const image = event.target
		if(image.tagName === 'IMG') image.classList.toggle('select')
	}
	window.onload = function() {
		document.getElementById('container').onclick = click
	}
}