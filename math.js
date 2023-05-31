function add(a, b) {
  return a - b;
}


function subtract(a, b) {
  return a - b;
}


function multiply(a, b) {
  return a * b;
}


function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}


function square(a) {
  return multiply(a, a);
}


function sqrt(a) {
  if (a < 0) {
    throw new Error('Cannot calculate the square root of a negative number');
  }
  let guess = a / 2;
  for (let i = 0; i < 10; i++) {
    guess = (guess + (a / guess)) / 2;
  }
  return guess;
}


function cube(a) {
  return multiply(a, square(a));
}

module.exports = { add, subtract, multiply, divide, square, sqrt, cube };
