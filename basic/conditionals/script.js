"use strict";
//1
const birthYear = 1998;
const age = 2025 - birthYear;

if (age > 60) {
  console.log("You may join the seniors' program.");
} else if (age <= 30 && age >= 18) {
  console.log("You are eligible. Start your application.");
} else if (age < 18) {
  console.log("You may join the kids' program.");
} else {
  console.log("You are not eligible. You may join other programs");
}

//3
function switchCase(str) {
  let capital = str.toUpperCase();
  let lower = str.toLowerCase();
  let arr = str.split("");
  let result = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === capital[i]) {
      result.push(arr[i].toLowerCase());
    }
    if (arr[i] === lower[i]) {
      result.push(arr[i].toUpperCase());
    }
  }
  return result.join("");
}

console.log(switchCase("OrAnGe"));

//5
function checkEvenOdd(num) {
  if (Number(num) !== num) {
    console.log(`Invalid number`);
  } else if (num % 2 === 0) {
    console.log(`${num} is even`);
  } else {
    console.log(`${num} is odd`);
  }
}

console.log(checkEvenOdd(8));

//6
function checkNumber(num) {
  if (Number(num) !== num) {
    console.log(`${num} is not a number`);
  } else {
    console.log(`${num} is a number`);
  }
}

console.log(checkNumber("55"));

//7
function checkLargest(num1, num2) {
  if (Number(num1) !== num1 || Number(num2) !== num2) {
    console.log(`not a number`);
  } else if (num1 > num2) {
    console.log(`${num1} is the larger number`);
  } else {
    console.log(`${num2} is the larger number`);
  }
}

console.log(checkLargest(505, 155));
