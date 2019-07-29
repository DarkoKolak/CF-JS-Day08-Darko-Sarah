class Car {
	constructor(name,productionYear,image,price){
		this.name = name;
		this.productionYear = productionYear;
		this.image = image;
		this.price = price;
	}
}

	var car1 = new Car("Jaguar Roadster XK","1956", "jaguar.jpg", 50);

	var car2 = new Car("Tesla Roadster","2020", "tesla.jpg", 60);

	var car3 = new Car("Corvette C1","1955", "corvette.jpg", 70);

	var car4 = new Car("Rolls Royce Silver Dawn","1954", "royce.jpg", 89);

	var car5 = new Car("VW Beetle","1938", "vw.jpg", 81);

	var car6 = new Car("DeLorean DMC-12", "1981", "delorean.jpg", 73);

	var car7 = new Car("Audi E-Tron GT", "2020", "audi.jpg", 90);

	var car8 = new Car("Ford Shelby GT", "1967", "ford.jpg", 74);

	var car9 = new Car("Millennium Falcon", "1977", "falcon.jpg", 109);

	var carArray = [car1, car2, car3, car4, car5, car6, car7, car8, car9];


	// for (var i = 0; i < carArray.length; i++) {
	// 	document.getElementById("outerbox").innerHTML = '<div class=\"innerboxes\">';
	// 	document.getElementById("outerbox").innerHTML = '<img src=\"' + carArray[i].image + '\">';
	// 	document.getElementById("outerbox").innerHTML = '<p>'+ carArray[i].name + '</p>';
	// 	document.getElementById("outerbox").innerHTML = '</div>';
	// }

	for (var i = 0; i < carArray.length; i++) {
		document.getElementById("outerbox").innerHTML += `<div class="innerboxes"><img src="` + carArray[i].image + '\"><p>'+ carArray[i].name + '</p></div>';
}
