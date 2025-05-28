const fs = require("fs");
const input = Number(fs.readFileSync('/dev/stdin').toString().trim());

let star = '';

for (let i = 1; i <= input; i++) {
    star += ' '.repeat(input - i);  // 공백 추가
    star += '*'.repeat(i);          // 별 추가
    star += '\n';                   // 줄바꿈
}

console.log(star);
