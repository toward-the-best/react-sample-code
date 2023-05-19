// nodejs의 commonjs 모듈 시스템의 내장함수 require로 module 불러 오기
const calc = require("./calc");

console.log(calc);
console.log(calc.add(1, 2));
console.log(calc.sub(3, 1));