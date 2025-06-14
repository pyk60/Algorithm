const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const piece = [1, 1, 2, 2, 2, 8];

const result = piece.map((num, idx) => num - input[idx]);

console.log(result.join(' '));