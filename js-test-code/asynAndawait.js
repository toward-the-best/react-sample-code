function hello() {
    return "hello";
}

// async가 function 앞에 붙으면 return 형식은 promise입니다.
async function helloAsync() {
    return "hello async";
}

console.log(hello());
console.log(helloAsync());


// delay 시키는 방법
// setTimeout을 promise로 return 한다.
function delay(ms) {
    return new Promise((resolve) => {
        // setTimeout 함수에서 resolve 말고 할께 없으면 resolve만 써도 된다.
        setTimeout(resolve, ms);
    });
}

// 대기 방법 1 (promise사용)
// async가 function 앞에 붙으면 return 형식은 promise입니다.
// 3초 대기 방법 delay가 return 하는 promise 객체를 then으로 실행합니다.
async function helloAsyncDelay() {
    return delay(3000).then(() => { return "hello async delay 1"; });
}

// 대기 방법 2 (await 사용)
// await 키워드는 비동기 함수를 동기 처리 함수로 만듭니다. 
// await 키워드는 async 함수내에서만 사용이 가능 합니다.
// 3초 대기 방법 await 키워드를 사용하여 delay가 끝날때까지 기다립니다. 
async function helloAsyncDelay2() {
    await delay(3000);
    return "hello async delay 2";
}

// promise 사용하여 delay 시키는 방법
helloAsyncDelay().then((res) => {
    console.log(res);
});

// promise 사용하여 delay 시키는 방법
helloAsyncDelay2().then((res) => {
    console.log(res);
});