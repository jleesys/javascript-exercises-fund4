const ftoc = function (input) {
  let output = (input - 32) * (5 / 9);
  output = output.toFixed(1);

  return Number(output);
};

const ctof = function (input) {
  let output = input * (9/5) + 32;
  output = output.toFixed(1);

  return Number(output);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
