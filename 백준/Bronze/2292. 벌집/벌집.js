const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const N = Number(input);

let layer = 1;    //현재(1부터 시작)
let count = 1;    //도달 가능한 최대 방 번호

while (N>count) {
    count += 6 * layer;
    layer++;
}
console.log(layer);