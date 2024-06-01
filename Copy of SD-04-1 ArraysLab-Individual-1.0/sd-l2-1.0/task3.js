const arr = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12];

// Type your code below this line!
const missingNumber = 8;
const indexToInsert = arr.findIndex(num => num > missingNumber);
arr.splice(indexToInsert, 0, missingNumber);
// Type your code above this line!

arr.forEach(element => console.log(element));
