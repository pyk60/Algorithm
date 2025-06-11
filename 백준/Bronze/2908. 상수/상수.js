const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const A = input[0].split('').reverse().join('');
const B = input[1].split('').reverse().join('');

console.log(Math.max(Number(A), Number(B)));