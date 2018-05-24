var body = document.querySelector(".gradient");
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var direction = document.querySelector(".direction");

function setLoad() {
	css.textContent = "linear-gradient(to right, red, yellow);";
}

function setGradient() {
	body.style.background = "linear-gradient("
	+"to "+ direction.value +", "
	+ color1.value +", "
	+ color2.value +")";

	css.textContent = body.style.background+";";
}

body.addEventListener("load", setLoad());

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

direction.addEventListener("change", setGradient);



// var buttonTest = document.querySelectorAll("button")[0];

// function addProduct() {
// 	var li = document.createElement("li");
// 	li.appendChild(document.createTextNode(productName.value));
// 	productList.appendChild(li);		
// 	productName.value = "";
// }

// function addProductAfterEnter(event) {
// 	if(inputLength(productName) && event.keyCode === 13) {
// 		addProduct();
// 	}	
// }

// productName.addEventListener("keypress", addProductAfterEnter);