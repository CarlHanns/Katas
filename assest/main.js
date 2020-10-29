function add(number1, number2) {
  let sum = number1 + number2;
  return sum;
}

// const sum = add(20, 30);
// console.log(sum);

// let sum = add(2, 4);
// console.log(sum);

function multiply(number1, number2) {
  let product = 0;
  let counter = number2;
  while (counter > 0) {
    product = add(product, number1);
    counter = add(counter, -1);
  }

  return product;
}

// const product = multiply(5, 4);
// console.log(product);

function power(num1, num2) {
  var sum = 1;
  for (let i = 0; i < num2; i++) {
    sum = multiply(sum, num1);
  }
  return sum;
}

console.log(power(2, 6));

function factorial(num) {
  for (let i = num - 1; i >= 1; i--) {
    num = multiply(num, i);
  }
  return num;
}

factorial(5);
