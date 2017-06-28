console.log("Hi");



//Initial DOM Elements

let inputField = document.getElementId("inputField");
let createButton = document.getElementId("create");



createButton.addEventListener("click", function(){
	 createCard(inputField.value);
});


function createCard(userInput)  {
	let cardDiv = document.createElement("div");
	// let deleteButton = document.createElement("button");
	// deleteButton.innerHTML = "Delete!";

	cardDiv.innerHTML = `<p>${userInput}</p><button class='delete'>Delete!</button>`;
	output.appendChild(cardDiv);

}



