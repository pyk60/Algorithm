const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const remain = new Set();

input.forEach(num => {
    remain.add(num % 42);
});

console.log(remain.size);