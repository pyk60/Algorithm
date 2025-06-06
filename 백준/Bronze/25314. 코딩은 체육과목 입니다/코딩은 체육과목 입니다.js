const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);

let result = '';

for (let i=0; i<N/4; i++) {
    result += 'long ';
}

result += 'int';

console.log(result);