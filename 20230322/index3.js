// 쿠키, 세션, 로컬 스토리지

// 쿠키는 해당 pc에 남아있다.
// 쿠키 : 웹사이트를 방문하고 사용자의 pc에 기록할 간단한 데이터
// pc에 저장해두었다가 값을 호출해서 사용할 수 있다.
// 브라우저가 종료되어도 남아있다.

// 세션 : 브라우저가 동작되는 동안에 남아있는 데이터
// 상태같은 내용을 다룰 때 사용한다. ex) 로그인 되어있는 상태
// 브러우저가 종료될 때까지만 남아있다.

// 쿠키는 document 객체 안에 있다.
// console.log(document.cookie);

// 쿠키 구조 
// 키와 값이 있다.
// 문자열로 저장한다.

// name : 쿠키 이름, value : 값, time : 쿠키 유효 시간
function createCookie(name, value, time){    
    // 처음 필요한 것 : 쿠키의 유효 시간
    // 시간과 날짜 연도 정보를 제공해주는 객체를 만들 수 있다.

    // Date : 현재 시간 날짜 연도 정보를 제공해주는 생성자 함수
    let date = new Date();
    console.log(date);

    // 1일 후 쿠키 제거
    // let _time = 1;
    // getTime : 현재 시간에 대한 데이터
    console.log(date.getTime()+ time * 24 * 60 * 60 * 1000);
    // 현 시간에서 얼마나 쿠키를 유지할지 추가한다.
    // 쿠키가 제거될 시간을 구해서 값을 만든다. (쿠키 만료 시간)

    // set, get
    // set : 변경할 때 네이밍으로 많이 사용한다.
    // get : 정보를 호출할 때 객체를 만들어서 정보를 가져오는 경우
    date.setTime(date.getTime() + time * 24 * 60 * 60 * 1000);

    // 쿠키 추가하는 방법
    // 쿠키의 이름 = 값,expires+만료일+";path=/"
    // path=/ 페이지의 경로에 대한 설정, 쿠키를 다루는 경로.
    // toUCString : 메소드 날짜 시간 표시 방법을 변경해 준다
    console.log(date.toUTCString());
    // 날짜 형태를 변경하여 Wed, 22 Mar 2023 04:47:42 GMT로 바꿔준다.
    document.cookie = name + "=" + value + ";expires=" + date.toUTCString() + ";path=/"
}

createCookie("이벤트 팝업", "true", 1);
createCookie("이벤트 팝업2", "true", 1);
// console.log(document.cookie);

// function getCookie(name){
//     let value = document.cookie.split("=");
//     console.log(value);
//     return value[1];
// }

// console.log(getCookie());

// 쿠키 제작 
// 기본적으로 정규식이 포함되기는 하는데 지금은 무시
// 보통 간단한 정규식만 사용하고 필요한 내용이 생기면 찾아서 사용하면 된다.

function getCookie2(name){
    // match 메소드 : 매개변수로 정규식 전달
    let value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
    console.log(value);
    return value ? value[2] : null;
}

// 쿠키를 제거하는 함수 : 날짜가 넘어가게 한다
function deleteCookie(name){
    document.cookie = name + "=; expires=Thu, 01 Jan 1999 00:00:01 GMT";
}

deleteCookie("이벤트 팝업");
deleteCookie("이벤트 팝업2");

console.log(getCookie2("이벤트 팝업"));
console.log(getCookie2("이벤트 팝업2"));

// 로컬 스토리지 : 브라우저에 데이터를 저장하는 방법 중 하나
// pc에 데이터가 저장되고 쿠키, 세션과 다르게 만료 기간이 없다.

// 브라우저 기능 필요, window 객체 안에 있는 메소드 사용
// getItem 메소드 : 값을 호출할 때 사용
// 매개변수로 키값을 문자열로 넣어주면 된다.
// window.localStorage.getItem();

// setItem 값을 키와 함께 저장시켜준다.
// window.localStorage.setItem("user_id", "koo");
// let a = window.localStorage.getItem("user_id");
// console.log(a);

// 쿠키, 로컬스토리지에 민감한 정보를 저장하지 않는다. 보안에 매우 취약함.