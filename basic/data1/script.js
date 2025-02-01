"use strict";

//cashFlowRatio
const cash = 1000;
const currentLiabilities = 500;

const cashFlowRatio = cash / currentLiabilities;

console.log(`Cash Flow Ratios is ${cashFlowRatio}`);

//netIncome
const revenues = 1000;
const expenses = 500;

const netIncome = revenues - expenses;

console.log(`Net Income is ${netIncome}`);

//Total assets
const liabilities = 1000;
const equity = 500;

const totalAssets = liabilities + equity;

console.log(`Total Assets are ${totalAssets}`);

//Net income (using profit margin and sales)
const profit = 1000;
const sales = 500;

const netIncomeProfit = profit * sales;

console.log(`Net Income is ${netIncomeProfit}`);

//Average
const num1 = 7;
const num2 = 9;
const num3 = 2;

const average = (num1 + num2 + num3) / 3;

console.log(`Average is ${average}`);

//Discount
const price = 150;
const discount = 0.3;

const priceAfterDiscount = price - price * discount;

console.log(`Price after discount is ${priceAfterDiscount}`);

//Age limit (older than 18 and less than 30)
const age = 20;
const ageLimit = age > 18 && age < 30;

if (ageLimit) {
  console.log(ageLimit);
} else {
  console.log(ageLimit);
}

//Exponential
const number1 = 2;
const number2 = 3;

console.log(number1 ** number2);

//Remainder
const number3 = 10;
const number4 = 4;

console.log(number3 % number4);
