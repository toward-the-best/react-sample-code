function TaskA(a, b) {
    return new Promise((resolve) => {
        setTimeout(
            () => { resolve(a * b); }, 2000
        );
    });
}

function TaskB(a) {
    return new Promise((resolve) => {
        setTimeout(() => { resolve(a * 2); }, 1000)

    });
}

function TaskC(a) {
    return new Promise((resolve) => {
        setTimeout(() => { resolve(-1 * a); }, 3000);
    });
}

TaskA(3, 4).then((res) => {
    console.log("result : ", res);
    return TaskB(res);
}).then((res) => {
    console.log("restul : ", res);
    return TaskC(res);
}).then((res) => { console.log("result : ", res); });