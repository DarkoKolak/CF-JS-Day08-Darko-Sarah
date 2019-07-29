
	// for (var i = 0; i < carArray.length; i++) {
	// 	document.getElementById("outerbox").innerHTML = '<div class=\"innerboxes\">';
	// 	document.getElementById("outerbox").innerHTML = '<img src=\"' + carArray[i].image + '\">';
	// 	document.getElementById("outerbox").innerHTML = '<p>'+ carArray[i].name + '</p>';
	// 	document.getElementById("outerbox").innerHTML = '</div>';
	// }

	for (var i = 0; i < cars.length; i++) {
		document.getElementById("outerbox").innerHTML += `<div class="innerboxes"><img src="${cars[i].image}"><p>${cars[i].name}</p><p>Production Year: ${cars[i].productionYear}</p><p>Price: ${cars[i].price}</p><button id="${i}">Add to Cart</button></div>`;
}
