
	// for (var i = 0; i < carArray.length; i++) {
	// 	document.getElementById("outerbox").innerHTML = '<div class=\"innerboxes\">';
	// 	document.getElementById("outerbox").innerHTML = '<img src=\"' + carArray[i].image + '\">';
	// 	document.getElementById("outerbox").innerHTML = '<p>'+ carArray[i].name + '</p>';
	// 	document.getElementById("outerbox").innerHTML = '</div>';
	// }


	for (var i = 0; i < cars.length; i++) {
		document.getElementById("outerbox").innerHTML += `<div class="innerboxes"><img src="${cars[i].image}"><p>${cars[i].name}</p><p>Production Year: ${cars[i].productionYear}</p><p>Price: ${cars[i].price}</p><button id="${i}" class = "tocart">Add to Cart</button></div>`;
	}


var allbtn = document.getElementsByClassName("tocart");

		 for (var i =0;  i< cars.length; i++) {
	allbtn[i].addEventListener("click", function(){add(this.getAttribute("id"))},false);
}



function add(i){


 document.getElementById("result").innerHTML += `<p> ${cars[i].name} </p>` ;

}

var buttonright = document.getElementById("shoppingcart");

buttonright.addEventListener("click",viewcart,false);

function viewcart(){

	if (result.style.display === "none") {

		result.style.display = "block";
		buttonright.innerHTML = "Hide Cart";
	}

	else{
		result.style.display = "none";
		buttonright.innerHTML = "View Cart";
	}
}