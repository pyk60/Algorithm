const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const numbers = input[1].split(' ').map(Number);

const min = Math.min(...numbers);
const max = Math.max(...numbers);

console.log(min, max);