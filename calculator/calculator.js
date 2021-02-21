function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function sum(arrayToSum = []) {
  let sum = 0;
  arrayToSum.forEach((number) => {
    sum += number;
  });
  return sum;
}

function multiply(arrayToMultiply = []) {
  let multiply = 1;
  arrayToMultiply.forEach((number) => {
    multiply *= number;
  });
  return multiply;
}

function power(x, y) {
  return x ** y;
}
// 2 <= 1
function factorial(number) {
  if (number === 0) return 1;

  let product = 1;
  for (let i = 2; i <= number; i++) {
    product *= i;
  }
  return product;
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
