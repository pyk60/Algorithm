const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);

const list = [];
for(i=1; i<=30; i++) {
    if(input.includes(i)) continue;
    list.push(i);
}
list.sort((a,b) => a-b);
console.log(list.join('\n'));