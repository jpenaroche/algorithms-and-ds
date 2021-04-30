const factorial = (number: number, result = 1): number => {
  if (number === 0) {
    return result;
  }
  result *= number;
  number = number - (number < 0 ? -1 : 1);
  return factorial(number, result);
};

const fibonacci = (number: number): number => {
  if (number < 2) return number;
  return fibonacci(number - 1) + fibonacci(number - 2);
};

const fibonacciDP = () => {
  const memo: {
    [k: number]: number;
  } = {};
  function calc(n: number): number {
    if (n < 2) {
      return n;
    }
    if (n in memo) return memo[n];
    else {
      memo[n] = calc(n - 1) + calc(n - 2);
      return memo[n];
    }
  }
  return calc;
};
export default {
  fibonacciDP,
  fibonacci,
  factorial,
};
