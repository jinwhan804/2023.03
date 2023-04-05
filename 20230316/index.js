// 콜백 함수
// 함수의 매개변수로 함수를 전달해서 
// 함수에 코드를 작성하다가 필요한 순간에 매개 변수로 받은 함수를 실행시키는 함수

function test(callback){
    console.log("1번 작업 끝");
    console.log("2번 작업 끝");
    if(true){
        callback();
    }
}

function test2(){
    console.log("나는 콜백함수");
}

test(test2);

let arr = [1,2,3,4];
arr.map(function(i, v){
    console.log(i);
    console.log(v);
})

// 배열 메소드 map을 흉내
// 우리가 만든 객체
let arr2 = {
    map : function(callback){
        // 함수의 매개 변수 갯수 확인 가능
        // 매개 변수를 안 받는 함수인데 매개 변수 전달하면 터짐.
        if(callback.length == 1){
            let a = 2;
            console.log("나는 map 함수야. 매개 변수를 1개야." + a + " 결과야");
            callback(a);
        }else if(callback.length == 2){
            let a = 2;
            let b = 3;
            console.log("나는 map 함수야. 매개 변수는 2개야");
            callback(a, b);
        }else{

        }
    }
}

arr2.map(function(a, b){
    console.log("나는 콜백 함수야 전발 받은 매개 변수는 " + a + "," + b + " 이거야");
})

function temp(callback){
    if(callback.length === 0){
        callback();
    }else if(callback.length === 1){
        let temp = "사과";
        callback(temp);
    }else if(callback.length === 2){
        let temp = "딸기";
        let temp2 = "포도";
        callback(temp, temp2);
    }else{
        console.log("매개 변수 초과야, 2개까지만 가능해");
    }
}

function temp2(i, v, c){
    console.log("나는 콜백 함수야. " + i + "를 받았어.", v + "도 받았어.");
}

temp(temp2);


let test3 = {
    a : function(callback){
        if(callback.length === 1){
            callback(2);
        }else if(callback.length === 2){
            callback(2);
            callback(3);
        }else if(callback.length === 3){
            callback(2);
            callback(3);
            callback(4);
        }else{
            console.log("매개 변수의 갯수가 적당하지 않아요. 저는 1 ~ 3개만 받을 수 있어요.");
        }
    }
}

function temp3 (a,b,c){
    for (let i = 1; i < 10; i++) {
        console.log(a + " X " + i + " = " + a * i);        
    }
}

test3.a(temp3);

// 함수가 실행되면 스택이라는 곳에 쌓인다.
// 스택 : 후입 선출
// 큐 : 선입 선출

// 콜 스택 개념
// 스택은 데이터를 사용하기 위해서 잠시 저장 해놓는 것.
// 데이터들을 쌓아놓는다.
// 후입 선출로 나중에 추가된 데이터부터 제거된다.
// 함수 실행 컨텍스트 : 함수를 실행하게 되면 스택에 추가가 되고 반환될 때 스택에서 제거된다.
// 함수가 실행될 때 마다 생성된다. 함수의 실행 정보를 가지고 있다.
// 콜 스택 : 함수가 실행되면 실행 컨텍스트 저장하는 스택의 구조.
// 콜 스택은 컴퓨터의 메모리 크기나 운영체제에 따라 크기가 다르다.
// 콜 스택이 쌓여서 크기가 초과되면 스택 오버플로우 에러 발생. (추가 실행 불가)

function fun1(){
    fun2();
}

function fun2(){
    fun3();
}

function fun3(){
    console.log("3번 함수 마지막 실행 함수");
}

fun1();
// 자바스크립트 코드 전체를 실행하고 전역 실행 컨텍스트가 실행되고
// fun1 함수 실행 구문에서 함수의 실행 컨텍스트가 생성 -> fun2 함수 실행 컨텍스트 생성
// -> fun3 함수 실행 컨텍스트 실행
// 이렇게 스택이 쌓이고 마지막에 추가된 fun3 함수의 실행 컨텍스트 제거 -> 
// fun2 함수의 실행 컨텍스트 제거 -> fun1 함수의 실행 컨텍스트 제거

// 콜 스택 확인하는 방법 
// 브라우저에서 개발자 모드 열고, 디버깅 모드 활성화(단축키 ctrl+F8)
// 확인하고자 하는 함수나 코드 왼쪽의 줄 수 표시부분을 누르면 빨간 색 점이 생성되고 
// 그 상태로 코드를 진행시키면 해당 위치에서 실행을 일시정지한다. 확인이 완료되면
// 재생 버튼을 눌러 다시 진행시킨다. 
// 디버깅할 때 유용하게 사용할 수 있다. (실행 순서를 확인하며 오류 파악에 용이)

// 화살표 함수 
// ES6에서 새로 나온 함수의 방식
// ES6 템플릿 리터럴

// => 이 모양으로 함수를 선언
// 화살표 함수 선언 방식
let temp4 = () => {
    console.log("나는 화살표 함수야");
}

// 화살표 함수 실행
temp4();

// 화살표 함수와 일반 함수간의 차이
// 일반 함수에서 값을 반환할 때 return을 사용했지만 화살표 함수에서는 return 없이도 반환 가능하다.
// 일반 함수와 같이 매개 변수는 괄호 안에 들어간다.
let temp5 = () => 5;

let ab = temp5();
console.log(ab);

// 제일 중요하고 큰 차이점 
// this 키워드 : 자바스크립트 객체를 참조하는 특별한 구문
// 일반 함수와 화살표 함수의 큰 차이는 this의 차이 this가 가르키는 대상이 다르다.
// 일반 함수에서의 this : 함수가 실행될 때 위치(스코프)에서 this를 가져온다. (다이나믹 스코프)
// 화살표 함수에서의 this : 화살표 함수를 선언한 위치에서 this를 가져온다. (렉시컬 스코프)

function b(){
    console.log("b, 일반 함수로 받아 옴" , this);
}

let d = () => {
    console.log("d, 화살표 함수로 받아 옴", this);
}

let obj = {
    a : function(){
        console.log("a, 일반 함수로 받아 옴" , this);
        b();
        let c = () =>{
            console.log("c, 화살표 함수로 받아 옴" , this);
        }
        c();
        d();
    }
}

obj.a();


// 전역 공간에서 this를 쓰면
// window 객체
// BOM(browser object model) : 브라우저를 객체 모델로 표현한 것.
// BOM은 브라우저 기능들을 접근할 수 있는 객체
// console.log(this);

// 비동기 함수와 동기 함수
// 동기 함수 : 작업 간의 순서가 있어 하나의 작업이 끝난 후 다음 작업이 진행된다.
// 비동기 함수 : 다른 코드들과는 상관 없이 각자 작업이 진행. nodejs에서 자주 사용.
// 예) 서버에서 값을 가져오는 동안 페이지가 멈춰있지 않고 다른 작업이 정상적으로 돌아가는 것.

// 비동기 함수
// setTimeout : 매개 변수 2개, 첫 번째 매개 변수는 함수, 
// 두 번째 매개 변수는 시간, 값 1을 넣으면 1ms 뒤에 실행
setTimeout(function(){
    console.log("나는 1초뒤 실행, 비동기");
}, 1000);

console.log("나는 동기");

// let var const 꼭 써야 한다.
// let var const를 사용하지 않고 변수를 선언하면 window 객체의 키 값으로 추가된다.
// 이러면 추후에 해당 값을 찾기 어렵다.