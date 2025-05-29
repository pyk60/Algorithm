const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
    const [H, W, N] = input[i].split(' ').map(Number);

    let floor = N % H;
    let room = Math.ceil(N / H);

    if (floor === 0) floor = H;
    
    console.log(floor * 100 + room);
}