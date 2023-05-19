function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  // Verifica se o número é divisível por qualquer número de 2 até a sua raiz quadrada
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
