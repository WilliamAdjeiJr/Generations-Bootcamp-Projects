const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the number of lines to generate: ', (answer) => {
    const numLines = parseInt(answer);
    for (let i = 1; i <= numLines; i++) {
        if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
            console.log("FizzBuzzWoof");
        } else if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0 && i % 7 === 0) {
            console.log("FizzWoof");
        } else if (i % 5 === 0 && i % 7 === 0) {
            console.log("BuzzWoof");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else if (i % 7 === 0) {
            console.log("Woof");
        } else {
            console.log(i);
        }
    }
    rl.close();
});
