document.addEventListener("DOMContentLoaded", function() {
    const counterLbl = document.getElementById('counterLbl');
    const incrementBtn = document.getElementById('incrementBtn');
    const decrementBtn = document.getElementById('decrementBtn');
    const resetBtn = document.getElementById('resetBtn');

    let counter = 0;

    function updateCounter() {
        counterLbl.textContent = counter;
        if (counter < 0) {
            counterLbl.style.color = 'red'; // Change color to red for negative numbers
        } else {
            counterLbl.style.color = 'black'; // Reset color to black for non-negative numbers
        }
    }

    incrementBtn.addEventListener('click', function() {
        counter++;
        updateCounter();
    });

    decrementBtn.addEventListener('click', function() {
        counter--;
        updateCounter();
    });

    resetBtn.addEventListener('click', function() {
        counter = 0;
        updateCounter();
    });

    updateCounter(); // Initial counter update
});
