/**
 * Checks if a given number is a prime number.
 *
 * @param {number} number - The number to be checked for primality.
 * @returns {boolean} True if the number is prime, false otherwise.
 */
export function isPrime(number) {
  // Base case: Numbers less than or equal to 1 are not prime.
  if (number <= 1) {
    return false;
  }

  // Iterate from 2 up to the square root of the number.
  for (let i = 2; i <= Math.sqrt(number); i++) {
    // If the number is divisible by 'i', it's not prime.
    if (number % i === 0) {
      return false;
    }
  }

  // If no divisors were found, the number is prime.
  return true;
}
