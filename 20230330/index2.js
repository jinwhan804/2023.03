// 재귀함수
// 함수가 함수 자신을 호출하는 함수

// 자주 사용되지 않지만
// 알고리즘 문제를 풀 때 가끔 사용된다.
// function add(){
//     add();
// }

// 임시로 데이터베이스에 추가할 때라던지 사용할 수 있다.

function add(n){
    // 얼마나 반복 실핼 시킬지 
    if(n < 5){
        add(n + 1);
        console.log(n);
    }
}

// add(0);

// 함수의 실행 컨택스트로 인해 콘솔에 가장 마지막에 실행된 값이 먼저 표기된다.
// 함수가 호출되면 실행 컨택스트가 생성되고 함수 안에서 또 실행 컨택스트를 생성하면서
// 가장 안쪽의 함수가 먼저 호출된다.

// 피보나치 수열을 재귀로
function fibonacci(n){
    if(n < 2) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
for (let i = 0; i < 20; i++) {
    console.log(fibonacci(i));
}