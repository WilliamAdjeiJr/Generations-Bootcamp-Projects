// script.js

// Modify the first "Hello World!" to say "GoodBye"
document.getElementById('red').innerText = 'GoodBye';

// Change the font color of the first header to orange
document.querySelector('h1').style.color = 'orange';

// Add a clickable header that changes the font color to brown
const clickableHeader = document.createElement('h1');
clickableHeader.innerText = 'Click me to change color';
document.body.appendChild(clickableHeader);

clickableHeader.addEventListener('click', () => {
    clickableHeader.style.color = 'brown';
});
