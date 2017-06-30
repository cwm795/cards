console.log("Hi");



//Initial DOM Elements

let inputField = document.getElementById("inputField");
let createButton = document.getElementById("create");



createButton.addEventListener("click", function() {
    createCard(inputField.value);
});


function createCard(userInput) {
    let output = document.getElementById("output");
    // let deleteButton = document.createElement("button");
    // deleteButton.innerHTML = "Delete!";

    output.innerHTML += `<p>${userInput}<button class='delete'>Delete!</button></p>`;
    let emptyArray = document.getElementsByClassName("delete");
    for (let i = 0; i < emptyArray.length; i++) {
        emptyArray[i].addEventListener("click", function() {
            event.target.parentNode.remove()
        })
    }


}