//n이 짝수면 분자가 1부터 시작 마지막 값은 n
//n이 홀수면 분모가 1부터 시작 마지막 값은 n
let input = require("fs").readFileSync("dev/stdin").toString().trim();

let n = 0;
let max = 0;

//n번째 줄인지, 그리고 최대값은 얼마인지 구하는 while문
while (max < Number(input)) {
  n++;
  max = max + n;
}

let numerator = 0;
let denominator = 0;

if (n % 2 === 0) { // n이 짝수일 때
  numerator = n - (max - input);
  denominator = n + 1 - numerator;
} else { // n이 홀수일 때
  denominator = n - (max - input);
  numerator = n + 1 - denominator;
}

console.log(`${numerator}/${denominator}`);