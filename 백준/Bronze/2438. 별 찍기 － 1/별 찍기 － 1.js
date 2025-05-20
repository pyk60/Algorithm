const fs = require("fs");
const input = Number(fs.readFileSync('/dev/stdin').toString().trim());

let star = '';

for (let i = 1; i <= input; i++) {
    for (let j = 0; j < i; j++) {
        star += '*';
    }
    star += '\n';
}

console.log(star);