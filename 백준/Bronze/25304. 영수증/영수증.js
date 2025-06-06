const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const X = Number(input[0]);    //총 금액
const N = Number(input[1]);    //항목 수

let sum = 0;

for(let i=2; i<2+N; i++) {
    const [price, count] = input[i].split(' ').map(Number);
    sum += price * count;
}

if(sum == X) {
    console.log('Yes');
} else {
    console.log('No');
}