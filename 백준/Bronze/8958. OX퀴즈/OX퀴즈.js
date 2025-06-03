const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const Count = Number(input[0]);

for (let i = 1; i <= Count; i++) {
    const quiz = input[i];
    let score = 0;
    let streak = 0;

    for (let j = 0; j < quiz.length; j++) {
        if (quiz[j] === 'O') {
            streak++;
            score += streak;
        } else {
            streak = 0;
        }
    }

    console.log(score);
}