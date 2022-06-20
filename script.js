// 1
function sumOne() {
  let num1 = 5;
  let num2 = 6;
  return console.log(num1 + num2);
}
sumOne();

//2
function sumTwo() {
  let numOne = 10;
  let numTwo = 21;
  console.log(typeof numOne);
  console.log(typeof numTwo);
  typeof numOne === "number" && typeof numTwo === "number"
    ? console.log(numOne + numTwo)
    : console.error("I valori non sono due numeri");
}
sumTwo();

// 3

function multipy() {
  let numThree = 79;
  let numFour = 3;
  console.log(typeof numThree);
  console.log(typeof numFour);
  typeof numThree === "number" && typeof numFour === "number"
    ? console.log(numThree * numFour)
    : console.error("I valori non sono due numeri");
}
multipy();

function subtract() {
  let numFive = 9;
  let numSix = 22;
  console.log(typeof numFive);
  console.log(typeof numSix);
  typeof numFive === "number" && typeof numSix === "number"
    ? console.log(numFive - numSix)
    : console.error("I valori non sono due numeri");
}
subtract();

function divide() {
  let numSeven = 9;
  let numEight = 0;
  console.log(typeof numSeven);
  console.log(typeof numEight);

  if (numEight === 0) {
    console.error("Non puoi dividere per 0");
  } else if (typeof numSeven !== "number" || typeof numEight !== "number") {
    console.error("I valori non sono due numeri");
  } else {
    console.log(numSeven / numEight);
  }
}
divide();

// 4
function operations() {
  let num_1 = 3;
  let num_2 = 2;
  let oper = "/"; // +-*/

  switch (oper) {
    case "+":
      console.log(num_1 + num_2);
      break;
    case "-":
      console.log(num_1 - num_2);
      break;
    case "*":
      console.log(num_1 * num_2);
      break;
    case "/":
      if (num_2 === 0) {
        console.error("Non puoi dividere per 0");
      } else if (typeof num_1 !== "number" || typeof num_2 !== "number") {
        console.error("I valori non sono due numeri");
      } else {
        console.log(num_1 / num_2);
      }
      break;
  }
}
operations();
