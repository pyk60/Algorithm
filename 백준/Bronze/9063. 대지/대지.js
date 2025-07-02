const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);

let minX = 10000;
let maxX = -10000;
let minY = 10000;
let maxY = -10000;

for (let i = 1; i <= N; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  
  if (x < minX) minX = x;
  if (x > maxX) maxX = x;
  if (y < minY) minY = y;
  if (y > maxY) maxY = y;
}

const width = maxX - minX;
const height = maxY - minY;

console.log(width * height);