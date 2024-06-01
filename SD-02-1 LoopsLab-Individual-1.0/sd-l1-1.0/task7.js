const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the number of lines to generate: ', (answer) => {
    const numLines = parseInt(answer);
    const outputArray = [];
    for (let i = 1; i <= numLines; i++) {
        if (isPrime(i) && i % 2 !== 0) {
            outputArray.push("PrimeWord");
        } else if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
            outputArray.push("FizzBuzzWoof");
        } else if (i % 3 === 0 && i % 5 === 0) {
            outputArray.push("FizzBuzz");
        } else if (i % 3 === 0 && i % 7 === 0) {
            outputArray.push("FizzWoof");
        } else if (i % 5 === 0 && i % 7 === 0) {
            outputArray.push("BuzzWoof");
        } else if (i % 3 === 0) {
            outputArray.push("Fizz");
        } else if (i % 5 === 0) {
            outputArray.push("Buzz");
        } else if (i % 7 === 0) {
            outputArray.push("Woof");
        } else {
            outputArray.push(i.toString());
        }
    }
    console.log(outputArray);
    rl.close();
});

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}
