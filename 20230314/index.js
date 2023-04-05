// 함수

// 함수는 실행할 코드들의 이름을 지어준다. (반복 사용하는 기능들을 묶어서 관리한다.)
// function 함수이름() { 실행시킬 코드들 }
function fun() {
    console.log("fun 함수 실행됨");
    console.log("fun 함수 실행됨");
    console.log("fun 함수 실행됨");
    console.log("fun 함수 실행됨");
}
// fun이라는 함수를 선언했다.

// 변수를 배웠는데 변수들 원시 타입
// 객체 배열 함수 레퍼런스 타입
// 함수도 값의 일종

// 함수 실행
fun(); // 함수 실행. ()를 붙여야지 함수가 실행된다.
// 함수를 실행시키면 스택이라는 곳에 함수 실행이 쌓이고 순서대로 실행이 된다.

// 변수는 스코프 개념을 보유하고 있다.
// 전역 스코프와 지역 스코프가 존재
// 전역 스코프는 말 그대로 모든 영역에서 접근이 가능한 범위
// 지역 스코프는 특정 영역에서만 접근이 가능한 범위
// 전역 스코프에 너무 많은 변수를 선언하면 관리하기가 너무 힘들어진다.
// 특히 협업할 때 변수가 너무 많으면 관리가 힘들다.


// 아래의 temp가 전역 변수
let temp = "나는 전역 변수야";
function con() {
    let temp = "나는 지역 변수야";
    // 함수의 실행이 끝나면 해제된다.
}

function con2(){
    let temp2 = "나 접근됨?"
    console.log(temp2);
}
con2();

// 호이스팅이라는 것이 있는데
// 호이스팅은 변수가 선언 되기 전에 호출했을 때 발생하는 에러.
function temp2(){
    console.log(x);
    // 지역 변수 선언
    let x = 5; // var를 사용하면 호이스팅이 일어나도 오류가 나오지 않는다.
    // 호이스팅이 발생하기 때문에 예상치 못한 문제가 일어날 수도 있다.
    // 변수는 코드를 작성할 때 최상단에 작성해준다.
}
// temp2();


// 함수 연습
// 함수에는 매개변수가 존재
function fun2(v){
    // 전달받은 매개변수를 사용
    console.log(v);
}
// 전달받은 매개변수에 따라서 작업을 다르게 하고 싶을 때

function fun3(num){
    console.log(`전달받은 매개변수는 : ${num}`);
}

let a = 1;
let b = 2;

fun3(a);
fun3(b);
fun3(3);

// cup 이라는 함수를 만들고 매개변수로 drink를 따라줘보자.
function cup(drink){
    // drink라는 매개변수에 아래에 작성한 값이 들어왔다.
    console.log(`컵에 ${drink}를 따랐다.`);
    console.log(`${drink}를 이 컵에 따라서 마시니 맛있다.`);
}

let c = "오렌지 주스";
cup("홍차");
cup("자허블");
cup("포도주스");
cup(c);

// 전달되는 매개변수에 따라 다른 결과물을 보여줄 수 있다.

// 거스름톤 자판기라는 기능 만들기
// 자주 사용하는 기능들을 모아서 함수로 작성해 재사용.

// 매개변수는 여러개 전달 가능
function vending(money, unit){
    // 거스름돈 자판기
    console.log(`${unit} 짜리 ${money/unit} 개`);
}

vending(1000, 500);
vending(1000, 100);

let e = vending;
console.log(e);
// e라는 변수에 vending함수라는 값이 들어있기 때문에 함수 실행식처럼 사용이 가능하다.
e(1000, 200);
let f = vending(); // ()는 함수를 실행시키는 것이기 때문에 적용이 제대로 되지 않는다.
console.log(f);

// 변수에 함수를 대입할 때는 함수의 이름만 전달한다.

// 우리가 함수를 사용할 때 함수 안에서 필요한 값을 내보낼 수 있게 도와주는 식이 존재
// return이라는 식.

function ab(){
    // 함수의 실행 도중에 return 식에 도달하면 
    // return 뒤에 작성한 값을 반환하면서 함수는 종료가 된다.
    return "나는 반환값이야";
    console.log("이건 반환 안 됨. 위에서 return해서 안 나옴");
}

let g = ab();
console.log(g);

// 함수 심화 

function sum(num1, num2) {
    return num1 + num2;
}

console.log(sum(1, 2));

function gg(num) {
    for(let i = 1; i < 10; i++){
        console.log(`${num}단 ${num} X ${i} = ${num * i}`);
    }
}
// 코드의 재사용성을 높히자.
gg(3);


// 성격 유형 검사지 함수 간단 버전
function type(value) {
    switch (value) {
        case 1:
            return "분노조절 잘해"
        case 2:
            return "과묵하지만 상냥해"
        case 3:
            return "조용하지만 술 마시면 각오해"
    }
}

type(1);
console.log(type(1));