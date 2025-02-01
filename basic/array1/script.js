"use strict";
//1
let arraySample = ["Coding", "Academy", "By", "Orange"];

arraySample.push("Jordan");
console.log(arraySample);

arraySample = ["Coding", "Academy", "By", "Orange"];
console.log(arraySample.slice(0, 2));

console.log(["Welcome", "To"].concat(arraySample));
console.log(arraySample.slice(1, 4));
console.log(arraySample.toString().replace(/,/g, " "));
console.log(arraySample);

arraySample.splice(1, 2);
console.log(arraySample);
