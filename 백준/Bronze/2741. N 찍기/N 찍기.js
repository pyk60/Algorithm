const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const num = Number(input);

for(let i = 1; i <= num; i++){
    console.log(i);
}