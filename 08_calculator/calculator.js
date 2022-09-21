const add = function (...args) {
  /*
  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  return sum;
  */
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
};

const subtract = function (...args) {
  let output = args[0];
  for (let i = 1; i < args.length; i++) {
    output -= args[i];
  }
  return output;
};

const sum = function (array) {
  let output = 0;
  for (let i of array) {
    output += i;
  }
  return output;
};

const multiply = function (array) {
  let output = 1;
  for (let i = 0; i < array.length; i++) {
    output *= array[i];
  }
  return output;
};

const power = function (a,b) {
  let output = Math.pow(a,b);
  return output;
};

const factorial = function (arg) {
  if (arg <= 0) return 1;
  let output = arg;
  for (let i = arg-1; i > 0; i--) {
    output *= i; 
  }
  return output;
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
