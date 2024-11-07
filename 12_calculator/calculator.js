const add = function (n1, n2) {
  return n1 + n2;
};

const subtract = function (n1, n2) {
  return n1 - n2
};

const sum = function (arr) {
  return arr.reduce((sum, num) => {
    return sum + num
  }, 0)
};

const multiply = function (arr) {
  return arr.reduce((product, num) => {
    return product * num
  }, 1)
};

const power = function (base, pow) {
  result = 1

  for (let i = 0; i < pow; i++) {
    result *= base;
  }

  return result;
};

const factorial = function (num) {
  result = 1

  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
