const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const A = Number(input[0]);
const B = Number(input[1]);
const C = Number(input[2]);

console.log(A + B - C);
console.log(Number(String(A) + String(B)) - C);