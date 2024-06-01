// index.js

const itemsContainer = document.querySelector("#list-items");

function addItem(item) {
  const colourCard = document.createElement("section");
  colourCard.className = "card w-75 mb-3";
  itemsContainer.append(colourCard);

  const colourCardBody = document.createElement("article");
  colourCardBody.className = "card-body";
  colourCard.append(colourCardBody);

  const colourCardTitle = document.createElement("h5");
  colourCardTitle.className = "card-title";
  colourCardTitle.innerText = item.name;
  colourCardBody.append(colourCardTitle);

  const colourCardText = document.createElement("p");
  colourCardText.className = "card-text";
  colourCardText.innerText = item.pantone_value;
  colourCardBody.append(colourCardText);

  const colourCardColour = document.createElement("figure");
  colourCardColour.style.backgroundColor = item.color;
  colourCardColour.innerText = item.color;
  colourCardBody.append(colourCardColour);

  const colourCardBreak = document.createElement("br");
  itemsContainer.append(colourCardBreak);
}

async function fetchColorsList() {
  try {
    const response = await fetch('https://reqres.in/api/unknown');
    const data = await response.json();
    const colors = data.data;

    // Store colors in local storage
    localStorage.setItem('colors', JSON.stringify(colors));

    // Display colors
    colors.forEach(color => addItem(color));
  } catch (error) {
    console.error('Error fetching colors:', error);
  }
}

function loadColorsFromStorage() {
  const colors = JSON.parse(localStorage.getItem('colors'));
  if (colors) {
    colors.forEach(color => addItem(color));
  }
}

function clearColors() {
  itemsContainer.innerHTML = '';
  localStorage.removeItem('colors');
}

// Event listeners
document.getElementById('loadColorsBtn').addEventListener('click', fetchColorsList);
document.getElementById('clearColorsBtn').addEventListener('click', clearColors);

// On page load, load colors from local storage
window.addEventListener('load', loadColorsFromStorage);
