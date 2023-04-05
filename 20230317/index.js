// 생성자 함수
// 객체를 함수로 만들 때 많이 사용하는 함수
// 객체를 생성할 때 사용하는 함수

// 생성자 함수의 기본 형태
function createObj(_name, _atk, _def, _speed){
    this.name = _name;
    this.atk = _atk;
    this.def = _def;
    this.speed = _speed;
}

// 생성자 함수를 위 처럼 만들어 주고
// 이 함수를 가지고 객체를 생성하는 방법
// 키워드 new 사용
// (동적할당) 메모리 공간을 동적으로 사용할 수 있게 해준다.
// 새로운 객체를 생성하기 위한 메모리 공간을
// new 키워드를 사용하면 빈 객체를 만들어주고 생성자 함수를 실행시켜서
// 위에서는 this 객체가 빈 객체가 되는 것
// 키 값을 추가해주고 객체를 만들어준다.
// 하나의 객체를 사람이라고 표현했을 때 한 사람에 대한 정보를 키와 값으로 만들어서 오브젝트화 하는 것.

let obj = new createObj("고블린", 100, 100, 10);
console.log(obj);
let obj2 = new createObj("트롤", 200, 200, 10);
console.log(obj2);

// 생성자 함수를 사용하는 이유 : 전역 변수만으로 프로그램을 관리하기에는 너무 어렵기 때문에
// 오브젝트화 (객체화) 시킨다. 객체를 잘 다뤄야 한다.

// obj.name 객체 값에 접근하는 방법
// obj["name"] 객체 값에 접근하는 방법
console.log(obj.name);

let arr = [1,2,3,4];
arr.forEach((i) => {
    console.log(i);
})
for (let i = 0; i < arr.length; i++) {
    console.log(arr);    
}

// for in
// 자동 완성 했을 때 object라고 적혀있는 변수에 우리가 보고 싶은 
// 객체를 넣어준다.
for (const key in obj) {
    // 작성해준 키 값의 순서대로 나온다
    // console.log(key);

    // obj.key 라고 작성하면 안된다. 이 의미는 obj 안에 key라는 키 값을 찾는 것이기 때문.
    console.log(obj[key]);
}

// 자바 스크립트를 이용해서 페이지에 동적인 기능 적용.

// BOM : 브라우저 객체, 브라우저의 기능들을 객체로 사용할 수 있게 해준 것.
console.log(window);

// onload 메소드 : 브라우저의 랜딩이 끝나고 보여줄 준비가 되었을 때
// 실행되는 함수. 문서 랜더링을 끝내고 실행되는 함수. window onload라는 키 값에 함수 값을 전달.
window.onload = function(){
    console.log("나 다 그렸어. 보여줄 준비 끝");
}

// DOM(문서 객체 모델) : 문서를 객체의 모양으로 만든 것.
// 문서의 접근을 가능하게 해준다.
// DOM은 페이지에 있는 태그들을 객체로 표현한 것.
// document 객체에서 태그를 선택하는 방법
// 객체를 이용해서 찾고 싶은 태그를 자바스크립트로 가져와서
// 사용할 수 있다.
console.log(document)

// 태그 선택자

// ID 선택자
// getElementById 메소드로 태그의 아이디를 찾아서 태그를 가져올 수 있다.
let div1 = document.getElementById("div1");

// 아이디 값이 있는 태그는 그냥 변수처럼 사용해도 된다.
let div2 = div1;

// querySelector 제일 자주 사용되는 선택자
// #을 붙여서 아이디라고 알려준다.
let div3 = document.querySelector('#div1');

console.log(div1);
console.log(div2);
console.log(div3);

// class 선택자
// class는 ID와 다르게 변수처럼 사용 불가
// class는 중복이 되기 때문에 안 된다.
// console.log(class_div2);
let div4 = document.querySelector(".class_div2");
// querySelector는 문서를 읽다가 첫 번째로 발견된 태그를 하나만 가져온다.
console.log(div4);

// querySelectorAll 해당하는 모든 태그들을 가져온다.
let divArr = document.querySelectorAll('.class_div2');
console.log(divArr[2]);
// 배열의 형태로 가져온다.

// 태그 이름 선택자
// querySelector 변수의 내용은 CSS 선택자를 넣어준다.
// 문자열로만 작성하면 된다.
let div5 = document.querySelector('div');

// 텍스트를 태그에 넣는 방법
div1.innerHTML = 'ㅎㅎ';
// <div>이 사이에 내용을 추가할 수 있다.</div>
// 그 안에 태그를 넣어서 작성을 해도 인식된다.

let div6 = document.querySelector('.class_div2');
div6.innerHTML = "나 class_div2 중 1번";

let div7 = document.querySelectorAll('.class_div2');
div7[3].innerHTML = "나 class_div2 중 4번";

// 버튼에 기능 적용

// 버튼을 누르면 함수를 실행시켜보자.
function btnFn(){
    let class_div = document.querySelectorAll('.class_div2');
    class_div.forEach(function(i){
        i.innerHTML = "이 문자로 통일";
    })
}

// html에서 함수를 가져가서 사용하자.