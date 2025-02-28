"use strict"

//Задача №7
// Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень (шляхи до зображень передаються у функцію)

if (confirm('Start?')) {
	function getImage() {
		let numImage = 1 + Math.floor(Math.random() * 4)
		let image
		switch (numImage) {
			case 1: image = `<img src="https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk=">`
				break
			case 2: image = `<img src="https://images.squarespace-cdn.com/content/v1/61c4da8eb1b30a201b9669f2/e2e0e62f-0064-4f86-b9d8-5a55cb7110ca/Korembi-January-2024.jpg?format=750w">`
				break
			case 3: image = `<img src="https://images.squarespace-cdn.com/content/v1/660df569e0ab3607a84acd6e/1714583613282-2W3D58IJVHZHSSBLP4SU/image-asset.jpeg">`
				break
			case 4: image = `<img src="https://images.squarespace-cdn.com/content/v1/5d777de8109c315fd22faf3a/1693407136044-G90XQURX1GABMYGAS8K1/shutterstock_1288634614.jpg?format=2500w">`
				break
		}
		return image
	}
	document.write(getImage())
}