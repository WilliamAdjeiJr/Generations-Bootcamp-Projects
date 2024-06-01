// Select the section with a container id
var containerSection = document.getElementById("container");

// Select all the items list with a class of "second"
var secondItems = document.getElementsByClassName("second");

// Select a list item with a class of third, but only the list item inside of the ol tag
var thirdItemInOl = document.querySelector("ol .third");

// Give the text "Hello!" to the section with a container id
containerSection.textContent = "Hello!";

// Add the main class to the div with a footer class
var footerDiv = document.querySelector("div.footer");
footerDiv.classList.add("main");

// Remove the main class from the div with a footer class
footerDiv.classList.remove("main");

// Create a new li element
var newLi = document.createElement("li");

// Give the li the text "four"
newLi.textContent = "four";

// Append the li to the ul element
var ulElement = containerSection.querySelector("ul");
ulElement.appendChild(newLi);
