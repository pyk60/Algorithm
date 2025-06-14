const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const reversed = input.split('').reverse().join('');

if (input === reversed) {
    console.log(1);
} else {
    console.log(0);
}