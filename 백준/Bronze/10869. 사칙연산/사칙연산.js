const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const fs = require("fs");

const A = Number(input[0]);
const B = Number(input[1]);

console.log(A+B);
console.log(A-B);
console.log(A*B);
console.log(Math.floor(A/B));
console.log(A%B);