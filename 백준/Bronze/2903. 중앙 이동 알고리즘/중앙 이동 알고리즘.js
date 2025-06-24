const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const N = Number(input);
// 점의 개수 공식: (2^N + 1)^2
const result = (2 ** N + 1) ** 2;

console.log(result);