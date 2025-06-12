const input = require('fs').readFileSync('/dev/stdin').toString().trim();

let time = 0;

for (let i = 0; i < input.length; i++) {
    const ch = input[i];

    if ("ABC".includes(ch)) time += 3;
    else if ("DEF".includes(ch)) time += 4;
    else if ("GHI".includes(ch)) time += 5;
    else if ("JKL".includes(ch)) time += 6;
    else if ("MNO".includes(ch)) time += 7;
    else if ("PQRS".includes(ch)) time += 8;
    else if ("TUV".includes(ch)) time += 9;
    else if ("WXYZ".includes(ch)) time += 10;
}

console.log(time);