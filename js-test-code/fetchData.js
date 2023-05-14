async function getData() {
    // fetch 내장 함수를 사용하여 API 정보를 가져올수 있다.
    // return 값은 promise 형식 입니다.
    let rawResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
    let jsonResponse = await rawResponse.json();
    console.log(jsonResponse);
}

getData();