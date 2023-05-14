// promise 테스트

function isPositiveP(number) {
    let executor = (resolve, reject) => {
        setTimeout(() => {
            if (typeof number === "number") {
                console.log(number)
                resolve(number >= 0 ? "양수" : "음수");
            } else {
                reject("숫자형 객체가 아닙니다.");
            }
        }, 2000);
    }

    const asyncTask = new Promise(executor);

    return asyncTask;
}
const res = isPositiveP(10);

res
    .then((res) => { console.log("작업 성공 : ", res) })
    .catch((err) => {
        console.log("작업 실패 : ", err)
    });