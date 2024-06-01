const arr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// Type your code below this line!
const indexToRemove = arr.indexOf(5);
arr.splice(indexToRemove, 1);
// Type your code above this line!

arr.forEach(element => console.log(element));
