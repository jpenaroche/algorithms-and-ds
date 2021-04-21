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

export default {
  fibonacci,
  factorial,
};
