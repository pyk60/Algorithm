const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const ascending = [1, 2, 3, 4, 5, 6, 7, 8];
const descending = [8, 7, 6, 5, 4, 3, 2, 1];

if (input.join('') === ascending.join('')) {
    console.log('ascending');
} else if (input.join('') === descending.join('')) {
    console.log('descending');
} else {
    console.log('mixed');
}