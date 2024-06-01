const arr = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
];

// Type your code below this line!
// Adding a single number (30) to an existing row (the last row)
arr[2].push(30);

// Adding a whole new row of numbers (31 to 40)
arr.push([31, 32, 33, 34, 35, 36, 37, 38, 39, 40]);

// Removing a single number (30) from the last row
arr[3].pop();

// Reversing one of the rows (the second row)
arr[1].reverse();

// Type your code above this line!

// Print the modified array to the console
arr.forEach(row => console.log(row));
