// 정규 표현식(RegExp) 객체
// 문자의 패턴을 검색하기 위해 사용하는 문자.
// ex) 회원가입 email id 주소 같은 형식으로 입력하기 위해
// 문자의 패턴을 정의하는데 사용

// 정규 표현식 메소드
/*
    search(), replace(), 
    test() : 정규표현식과 일치하는 문자가 있으면 true 반환
*/

// 정규 표현식 선언 첫 번째 방법
let reg1 = /a/;

// 정규 표현식 선언 두 번째 방법
let reg2 = new RegExp('a');

// 위처럼 정규 표현식을 만드는 이유는 규칙을 가진 문자열을 찾기 위해서

let tempReg = /[3,6,9]/;
// [] 내부 중의 한 개 -> 3 or 6 or 9

let tempReg1 = /[0-9]/;
// 0 ~ 9 까지의 숫자

let str = "Hello JavaScript Program...";
// search() : 해당 문자열의 위치를 찾는 메소드
// 첫 문자의 인덱스를 반환
let regExp_search = str.search(/JavaScript/);
console.log(regExp_search);

// replace() : 해당 문자열을 원하는 문자열로 바꿔주는 메소드
// 첫 번째 매개변수를 찾는 문자열로, 두 번째 매개변수를 변경하려는 문자열을 전달하면 된다.
let regExp_replace = str.replace(/JavaScript/, "CSS");
console.log(regExp_replace);

// test : 정규식 패턴에 대한 문자열 검색. 반환값은 true false.
// 해당 문자열이 있으면 true 없으면 false를 반환
let reg3 = /JavaScript/;
let reg4 = /JavaScript2/;
console.log(reg3.test(str));
console.log(reg4.test(str));

// 정규식 표현할 때 플래그
// 검색에 대한 옵션 설정
// i : 대소문자를 구분안하고 비교할 수 있다.
// g : 전체 문자열을 정규식과 비교한다. 첫 번째로 일치하는 문자열이 있으면 비교를 중단한다.
// m : 줄이 다른 여러 줄의 문자열을 정규 표현식으로 비교한다.

let str2 = "The best program is \n JavaScript.."

// 플래그는 정규식 뒤에 붙힌다.
let temp1 = /javascript/i;

// 해당 문자열을 찾고 배열의 형태로 반환한다.
// 문자열을 찾지 못하면 null 반환
console.log(str2.match(temp1));

let temp2 = /JavaScript/g;
console.log(str2.match(temp2));

let temp3 = /JavaScript/m;
console.log(str2.match(temp3));

// 정규식 패턴
// [abc] : 대괄호 안에 있는 문자들을 찾는다.
// [0~9] : 대괄호 안의 숫자를 찾는다.
// [x|y] : 문자 중에서 "|"로 분리된 문자 중 하나를 찾는다.

let str3 = "The best program is JavaScript and HTML...123";

// 플래그를 여러개 주고 싶으면 같이 작성해 주면 된다.
let temp4 = /Javascript/ig;
console.log(str3.match(temp4));

// 문자열 안에 해당하는 알파벳을 전부 찾아온다.
let temp5 = /[A-K]/ig;
console.log(str3.match(temp5));

// 분리된 문자열을 가져온다.
let temp6 = /pr|x|z/ig;
console.log(str3.match(temp6));

// 정규식 메타 문자
// 메타 문자는 숫자만 또는 알파벳만 또는 숫자 제외 등의 속성을 표현한다.
/*
    ^문자 : 정규식으로 ^뒤에 있는 문자로 시작하는 문자를 찾는다.
    문자$ : 정규식으로 $앞에 있는 문자로 끝나는 문자를 찾는다.
    \w : 속하는 모든 문자를 찾는다.
    \W : 알파벳 대소문자, 숫자, _문자를 제외한 모든 문자를 찾는다.
    \d : 숫자를 찾는다
    \D : 숫자를 제외하고 모든 문자를 찾는다.
    \s : 공백 문자를 찾는다.
    \S : 공백을 제외하고 모든 문자를 찾는다.
*/

// 문자열이 T로 시작하는지 확인하고 T가 맞으면 맞는 문자열 반환
let temp7 = /^T/ig;
console.log(str3.match(temp7));

let temp8 = /\d/ig;
console.log(str3.match(temp8));

// 정규식을 사용할 때 검색해서 사용 (개발자들도 대부분 검색해서 사용)