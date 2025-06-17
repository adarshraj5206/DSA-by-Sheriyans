// find the greatest of two numbers using if-else statements

function findGreatestOfTwoNum(num1, num2) {
  if (num1 > num2) {
    return num1 + " is greater than " + num2;
  } else if (num2 > num1) {
    return num2 + " is greater than " + num1;
  } else {
    return "Both numbers are equal";
  }
}


let number1 = 10;
let number2 = 50;
console.log(findGreatestOfTwoNum(number1, number2));