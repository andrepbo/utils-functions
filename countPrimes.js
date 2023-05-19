import { isPrime } from "./isPrime.js";

function countPrimes(numbers) {
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (isPrime(numbers[i])) {
      count++;
    }
  }

  return count;
}
