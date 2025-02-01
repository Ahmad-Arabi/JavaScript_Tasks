"use strict";
//1
const sample = "Welcome to Orange";

console.log(sample.toUpperCase());
console.log(sample.toUpperCase().slice(8, 10));
console.log(sample.replace("Welcome to", "Hello from"));
console.log(sample.toLowerCase());
console.log(sample.length);
console.log(sample.replace("Orange", '"Orange"'));
console.log(sample.concat(" Jordan"));

//2
const sample2 = "cactus";

console.log(sample2.replace(sample2[0], "*"));
