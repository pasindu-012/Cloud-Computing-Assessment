// 1. Import prompt-sync for synchronous user input
const prompt = require('prompt-sync')(); 

// 2. Calculates the sum of two numbers
/**
 * @param {number} a – The first number
 * @param {number} b – The second number
 * @returns {number} The sum of a and b
 */
function sum(a, b) {
  return a + b;
} 

// 3. Prompt user for inputs and parse them as integers
const a = parseInt(prompt("Enter the first number: "));
const b = parseInt(prompt("Enter the second number: "));

// 4. Compute and display the result
console.log("Sum is:", sum(a, b));
