const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const x = [];
const y = [];

for (let i = 0; i < 3; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  x.push(a);
  y.push(b);
}
//x좌표 중 혼자 1번만 나온 값 찾기([30, 10, 10] -> 30)
const fourthX = x[0] === x[1] ? x[2] : (x[0] === x[2] ? x[1] : x[0]);
//y좌표 중 혼자 1번만 나온 값 찾기
const fourthY = y[0] === y[1] ? y[2] : (y[0] === y[2] ? y[1] : y[0]);

console.log(fourthX, fourthY);