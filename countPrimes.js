// Import the 'isPrime' function from the 'isPrime.js' module.
import { isPrime } from "./isPrime.js";

/**
 * Counts the number of prime numbers in an array of numbers.
 *
 * @param {number[]} numbers - An array of numbers to be checked for prime numbers.
 * @returns {number} The count of prime numbers in the array.
 */
export function countPrimes(numbers) {
  // Initialize a counter to keep track of prime numbers.
  let count = 0;

  // Iterate through each number in the array.
  for (let i = 0; i < numbers.length; i++) {
    // Check if the current number is prime using the 'isPrime' function.
    if (isPrime(numbers[i])) {
      // If it's prime, increment the counter.
      count++;
    }
  }

  // Return the final count of prime numbers in the array.
  return count;
}
