const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const N = Number(input);

//위쪽
for (let i=1; i<=N; i++) {
    const space = ' '.repeat(N-i);
    const star = '*'.repeat(2*i-1);
    console.log(space+star);
}

//아래쪽
for (let i=N-1; i>=1; i--) {
    const space = ' '.repeat(N-i);
    const star = '*'.repeat(2*i-1);
    console.log(space+star)
}