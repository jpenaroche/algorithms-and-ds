"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const factorial = (number, result = 1) => {
    if (number === 0) {
        return result;
    }
    result *= number;
    number = number - (number < 0 ? -1 : 1);
    return factorial(number, result);
};
const fibonacci = (number) => {
    if (number < 2)
        return number;
    return fibonacci(number - 1) + fibonacci(number - 2);
};
exports.default = {
    fibonacci,
    factorial,
};
//# sourceMappingURL=recursion.js.map