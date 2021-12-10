// =================================
// Functions
// =================================

// Define functions to sum up two numbers
// Method 1
function sumFunction1(a, b) { return a + b }

// Method 2
let sumFunction2 = (a, b) => a+b

// Test
console.log(sumFunction1(1, 2));
console.log(sumFunction2(1, 2));

// Define a funciton that return the sign of a number
let isPositive = a => a >= 0 

// Test
console.log(isPositive(-1));
