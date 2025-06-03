const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const result = [];

for (let i = 97; i <= 122; i++) { // ASCII 코드 -> a=97, z=122
    const letter = String.fromCharCode(i); // 문자로 변환
    result.push(input.indexOf(letter)); // 처음 등장하는 위치
}

console.log(result.join(' '));