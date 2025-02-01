"use strict";
//2
var fruit = ["banana", "apple", "orange", "watermelon"];
4;
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

console.log(vegetables.pop());
console.log(fruit.shift());
console.log(fruit.indexOf("orange"));
console.log(fruit.concat("2"));
console.log(vegetables.length);
console.log(vegetables.concat("3"));

const food = fruit.concat(vegetables);
console.log(food);

food.splice(4);
console.log(food);
console.log(food.reverse());
console.log(food.toString());
