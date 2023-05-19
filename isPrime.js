export function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  // Checks if the number is divisible by any number from 2 to its square root
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
