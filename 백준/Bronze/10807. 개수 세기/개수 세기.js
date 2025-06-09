const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const numbers = input[1].split(' ').map(Number);
const v = Number(input[2]);

const count = numbers.filter(num => num === v).length;

console.log(count);