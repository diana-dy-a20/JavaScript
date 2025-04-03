"use strict"

//Задача №4
//  Розробити клас Baner

if (confirm('Start?')) {
	class Baner {
		constructor(arr) {
			this.array = arr
		}
		getRandomObject() {
			return 0 + Math.floor(Math.random() * (this.array.length - 1 - 0 + 1))
		}
		getBanner() {
			return this.array[this.getRandomObject()].banner
		}
	}
	let arrayObject = [{
		// image: "https://content2.rozetka.com.ua/mb_logo/image_site_mini_logo/original/349608608.svg",
		// siteLink: "https://rozetka.com.ua/ua/promo/springsale/?gad_source=1&gclid=CjwKCAjw47i_BhBTEiwAaJfPpvYr-06i01obAj5vznVS3qOWKkkPqns7UggD60ZzSb4fkI9idXYalRoCKB0QAvD_BwE",
		banner: `<a href = "https://rozetka.com.ua/ua/promo/springsale/?gad_source=1&gclid=CjwKCAjw47i_BhBTEiwAaJfPpvYr-06i01obAj5vznVS3qOWKkkPqns7UggD60ZzSb4fkI9idXYalRoCKB0QAvD_BwE"><img src = "https://content2.rozetka.com.ua/mb_logo/image_site_mini_logo/original/349608608.svg"></a>`
	},
	{
		// image: "https://skin.comfy.ua/skin/frontend/enterprise/comfy_3/modules/common/img/logo_main.svg",
		// siteLink: "https://comfy.ua/ua/",
		banner: `<a href = "https://comfy.ua/ua/"><img src = "https://skin.comfy.ua/skin/frontend/enterprise/comfy_3/modules/common/img/logo_main.svg"></a>`
	},
	{
		// image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Mascot_Foxy.png",
		// siteLink: "https://www.foxtrot.com.ua/",
		banner: `<a href = "https://www.foxtrot.com.ua/"><img src = "https://upload.wikimedia.org/wikipedia/commons/2/23/Mascot_Foxy.png"></a>`
	}
	]
	let baner = new Baner(arrayObject)

	document.write(baner.getBanner())
}