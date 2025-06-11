const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);

// 바구니 배열
let baskets = [];
for (let i = 1; i <= N; i++) {
    baskets.push(i);
}

for (let k = 1; k <= M; k++) {
    const [i, j] = input[k].split(' ').map(Number);

    const reversed = baskets.slice(i - 1, j).reverse();

    for (let x = 0; x < reversed.length; x++) {
        baskets[i - 1 + x] = reversed[x];
    }
}

console.log(baskets.join(' '));