// DOM 내용 추가

// 태그 = DOM 트리라 표현
// DOM 트리란 html의 구조를 형상화 했을 때 그 모양을 의미
// html 아래 head, body 태그가 존재 각각의 밑에 다른 태그가 달린 것처럼 형성

// DOM 트리의 기본 단위는 노드

// 문자를 태그사이에 넣어서 태그를 추가하는 방법
// document.querySelector(".add_class").innerHTML = "<div>태그 내용</div>";

// 노드에 추가하는 방법
// div 태그 생성
// createElement : 태그 생성해주는 메소드
// createElement("태그명")
let _div = document.createElement("div");
// 여기까지 div를 생성해서 _div 변수에 담았고
// 이 생성된 태그는 메모리 공간에 있음
console.log(_div);

_div.innerHTML = "<p>내용이 </p><div>어디니?</div>";

_div.classList.add("new_tag");

// 태그를 추가하고 싶은 위치에 추가해 줘야 트리에 추가되어 보인다.
// append() 메소드 : 태그를 추가하는 메소드
document.body.append(_div);

setTimeout(() => {
    document.querySelector(".add_class").append(_div);    
}, 2000);

// 원하는 위치에 태그를 추가할 수 있는 메소드
// 태그참조.append(생성한 태그) = 태그참조 태그의 내용으로 생성한 태그가 추가된다.

// innerHtml : 문자로 내용이 들어가 보안이 좀 취약하다.
// append : DOM 트리의 노드이기 때문에 보안이 좋다. 태그 작업을 세분화할 수 있다.

// 태그 내용 확인
// console.log(_div.innerHTML);

// 태그 내용 중 문자만 필요할 때
// innerText : 태그 사이의 문자만 가져오는 메소드

console.log(_div.innerText);

let _button = document.createElement("button");
_button.innerHTML = "눌러보세요";

// _button.onclick = function(){
//     // _div 태그 제거
//     // _div.remove();
//     // remove() : 원하는 태그를 제거할 수 있다.
//     // 태그의 자식 태그도 제거 가능 : removeChild 메소드
//     console.log(_div);
//     document.body.removeChild(_div);
//     // body 태그 내의 _div를 찾아서 제거 한다.
// }

document.body.append(_button);

// onclick을 사용해 이벤트명으로 직접 함수를 대입하여 추가 가능

// 이벤트를 구독 시킨다.
// 이벤트명은 앞의 on을 빼고 작성해준다. ex) onclick -> click
// addEventListener의 매개변수로 구독할 이벤트 이름, 실행시킬 함수를 작성해준다.
_button.addEventListener("click",function(){
    console.log("나 클릭 구독 중")
})

_button.addEventListener("click",function(){
    console.log("나도 구독 중")
})

// addEventListener는 이벤트를 누적시킬 수 있다. 내용 추가 가능
// onclick은 이벤트를 덮어쓴다.

_button.onclick = function(){
    console.log("나 onclick 이벤트");
}
console.log(_button.onclick);
_button.onclick = function(){
    console.log("나 onclick 이벤트2");
}
console.log(_button.onclick);

// 이벤트 
// load : 페이지와 기타 요소들의 로딩이 끝났을 때 작동하는 이벤트
// on이 붙으면 어트리뷰트 방식
window.onload = function(){

}

// load 이벤트 구독
window.addEventListener("load",function(){
    // load 이벤트가 실행되면 내용 실행
})

// onresize : 브라우저의 창 크기가 바뀌면 실행되는 이벤트
window.onresize = function(){
    console.log("창 사이즈 변환");
}

window.addEventListener("resize",function(){
    
})

// scroll : 사용자가 태그나 페이지에서 스크롤 했을 때. 스크롤 값이 없으면 동작하지 않는다.
// 태그의 이벤트로 원하는 이벤트를 구독하면 태그에서 그 이벤트가 발생할 때 실행된다.
_div.onscroll = function(){
    console.log("스크롤 되나");
}

// 키보드 이벤트
// onkeydown : 사용자가 키보드를 눌렀을 때 누르는 순간 발생하는 이벤트
window.onkeydown = function(){
    console.log("키보드 누름");
}

// onkeyup : 사용자가 키보드를 눌렀다 땠을 때 발생하는 이벤트
window.onkeyup = function(){
    console.log("키보드 눌렀다 땜");
}

// onkeypress : 키보드를 누르고 있을 때 발생하는 이벤트
window.onkeypress = function(){
    console.log("키보드를 누르고 있음");
}

// 마우스 이벤트
// click : 사용자가 해당 태그를 클릭했을 때 발생하는 이벤트
window.onclick = function(){
    console.log("클릭함");
}

// dblclick : 더블 클릭했을 때 실행되는 함수
window.ondblclick = function(){
    console.log("더블클릭함");
}

// mousedown : 마우스를 누르자마자 실행되는 이벤트
window.onmousedown = function(){
    console.log("마우스 누름");
}

// mouseup : 마우스를 땠을 때 실행되는 이벤트
window.onmouseup = function(){
    console.log("마우스 땜");
}

// mousedown과 mouseup은 마우스 키를 누르고 이동한 뒤 키를 땠을 때
// 좌표를 계산해서 동작케 하는 기능을 만들 때 주로 사용

// mousemove : 마우스가 태그 위에서 이동되는 동안 실행되는 이벤트
window.onmousemove = function(){
    console.log("마우스 이동 중");
}

let _box = document.querySelector(".box");
// mouseenter : 마우스를 태그 위에 올렸을 때 실행되는 이벤트
_box.onmouseenter = function(){
    console.log("마우스 들어왔음");
}

// mouseleave : 마우스가 태그 위에서 빠져 나왔을 때 실행되는 이벤트
_box.onmouseleave = function(){
    console.log("마우스 나왔음");
}

// mouseenter와 mouseleave를 활용하면 css에서의 호버와 유사한 기능 적용 가능

// 모바일 환경에서 실행되는 이벤트
// touchstart : 화면을 터치한 순간 발생하는 이벤트
window.ontouchstart = function(){
    console.log("모바일에서 터치 될 때");
}

// touchend : 화면을 터치하다가 손가락을 때면 발생하는 이벤트
window.ontouchend = function(){
    console.log("모바일에서 터치 땜");
}

// touchmove : 화면을 터치한 상태로 이동할 때 발생하는 이벤트
window.ontouchmove = function(){
    console.log("모바일에서 터치하고 이동 중");
}

// 이벤트가 실행될 때 매개변수로 해당 이벤트의 내용이 전달된다.
_box.onclick = function(i){
    // 이벤트의 내용들 이벤트가 실행되면 이벤트의 내용이 값으로 넘어온다.
    console.log(i);
    // 해당 이벤트가 일어난 타겟 : 클릭된 태그
    console.log(i.target);
}

// 마우스의 위치 추적
window.onmousemove = function(e){
    // 이벤트 타입 확인
    console.log(e.type);
    // 해당 이벤트 발생 시 마우스의 X 좌표 값
    // 단위는 픽셀
    console.log(e.pageX);
    // 해당 이벤트 발생 시 마우스의 Y 좌표 값
    console.log(e.pageY);
}

// 키보드 키 입력
window.onkeydown = function(e){
    // e.keyCode
    console.log(e.keyCode);
    // ascii 코드 : 숫자로 표현됨
    // A를 입력하면
    if(e.keyCode == 65){
        console.log("A 눌렀음");
    }
}

// 기본 동작을 취소하는 방법
let _button2 = document.querySelector(".btn_class");
_button2.onclick = function(e){
    // 기본 동작이 제거된다.
    // 브라우저 상에서 기본 동작되는 기능을 제거해 줄 수 있다.
    e.preventDefault();
}