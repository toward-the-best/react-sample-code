const add = (a, b) => a + b;
const sub = (a, b) => a - b;

// nodejs의 commonjs 모듈 시스템으로 객체 단위로 모듈 내보내기
module.exports = {
    moduleName: "calc modlue",
    add: add,
    sub: sub,
}