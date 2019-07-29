
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

var sum = 0;
var count = 1;
 var a = document.getElementById("amount");

 var shipping = 0;

 var discound = 0;

function add(i){


 document.getElementById("result").innerHTML += `<p> ${cars[i].name + ", production year:  " + cars[i].productionYear + ", Price:  " + cars[i].price+ " Diamonds"}  </p>`;
 sum += cars[i].price + (0.2 * cars[i].price);

 if (sum > 40) {
 	discound = (sum * 0.07);
 	if (sum > 100) {
 		discound = (sum * 0.12);
 		if (sum > 200) {
 			discound = (sum * 0.2);
 		}
 	}
 }

 shipping = sum >80 ? 6 : 9; 
 document.getElementById("carsum").innerHTML = "The amount you have to pay is " +  sum + " Diamonds inclusive 20% tax <br>  The shipping costs "+ shipping + " Diamonds" + "<br>" + "And the discound you get is "+ discound + " Diamonds";
 a.innerHTML = count++;


}

var buttonright = document.getElementById("shoppingcart");

buttonright.addEventListener("click",viewcart,false);

function viewcart(){

	if (result.style.display === "none") {

		result.style.display = "block";
		carsum.style.display = "block";
		buttonright.innerHTML = "Hide Cart" + "<br>" + a.innerHTML;
	}

	else{
		result.style.display = "none";
		carsum.style.display = "none";
		buttonright.innerHTML = "View Cart" + "<br>" + a.innerHTML;
	}
}