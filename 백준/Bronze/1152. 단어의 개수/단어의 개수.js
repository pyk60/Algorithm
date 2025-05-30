const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const word = input.split(' ').filter(word => word !== '');

console.log(word.length);