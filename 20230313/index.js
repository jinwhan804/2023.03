
for(let i = 0; i < 10; i++){
    if(i % 3 == 0){
        console.log(i);
        console.log("주말 잘 쉬었니? 공부는 하셨나요?");
    }
}

// 컴파일 언어와 인터프리터 언어
// 개념

// 컴파일러 언어 : 프로그램 코드를 컴파일해서 컴퓨터가 알아 들을 수 있는
// 기계어로 번역해준다. 소스코드 전체를 한 번에 번역하고 
// 실행 파일을 만들어서 실행해준다.
// 장점 : 파일의 크기가 큰데 실행 속도가 빠르다.
// 실행하기 전에 전체 코드를 번역해서 오류를 미리 알 수 있다.
// 대신 번역 과정 시간이 조금 걸린다.
// C, C++, Java, Python 등등

// 인터프리터 언어 : 프로그램 코드를 한 줄씩 읽으면서 번역과 실행을 한다.
// 장점 : 프로그램 실행 도중에 동적으로 소스코드를 수정이 가능하다.
// 실행하는 크기가 작고 소스 코드의 수정이 용이하다. 그래서 디버깅하기 편하다.
// 소스코드가 실행될 때마다 번역과 실행을 반복해서 속도는 조금 느리다.
// 오류를 실행 중에 발견할 수 있다.
// JavaScript 등등 있다.

// 논리 연산자 ||, &&
/*
    || 논리 합(OR)
    a || b --> a나 b 둘 중에 하나라도 참이면 참
    0    0 --> false
    1    0 --> true
    0    1 --> true
    1    1 --> true

    && 논리 곱(AND)
    a && b --> 둘 다 참이여야 참
    0    0 --> false
    1    0 --> false
    0    1 --> false
    1    1 --> true
*/

let a = false;
let b = true;

console.log(a || b);
console.log(false || false); // false
console.log(true || false);  // true
console.log(false || true);  // true
console.log(true || true);   // true

let c = true;
let d = true;

console.log(c && d);

let text = "집에 가고 싶다";
let age = 21;
// true && false
if(text === "집에 가고 싶다" || age === 20){
    console.log("집에도 가고 나이도 20이야")
}

// 삼항 연산자
// 한줄로 코드들을 표현할 수 있다. 잘 쓰면 편한데
// 가독성이 많이 떨어져서 본인도 읽기가 힘들 수 있다.

// 조건 ? (앞의 조건이 참일 때) : (앞의 조건이 거짓일 때)
console.log(1 > 2 ? "이건 참이야" : "이건 거짓이야");
// 3번만 들어가도 가독성이 너무 떨어지기 때문에 최대 2번만 사용할 것.

// 조건문 if, 반복문 for
// switch 조건문

// switch ("값을 여기에 넣으세요") {
//     case 1: // if 부분        
//         break;
//     case 2: // else if
//         break;
//     case 3: // else if
//         break;
//     case 4: // else if
//         break;
//     default: // else
//         break;
// }

let month = 10;
let monthName = "";
switch (month) {
    case 1:        
        break;
    case 2:        
        break;
    case 3:        
        break;
    case 4:        
        break;
    case 5:        
        break;
    case 6:        
        break;
    case 7:        
        break;
    case 8:        
        break;
    case 9:        
        break;
    case 10:        
        // 여기가 동작되는 이유는 10 case부터 실행시키는데
        // break문이 있기 때문에 여기만 실행한 것.
        // break문이 없으면 10 case에 들어와서 밑으로 break문이 있을 때 까지 실행
        break; // break문 
    case 11: 
        // 값이 11이니까 여기가 실행됨
        monthName = "November";       
        break;
    case 12:        
        break;

    default:
        break;
}

console.log(monthName);


switch (2) {
    case 1:
        console.log("첫 번째 case 문");
        // break;
    case 2:
        console.log("두 번째 case 문");
        // break;
    case 3:
        console.log("세 번째 case 문");
        // break;

    default:
        console.log("여기까지가 끝이야");
        break;
}

// while 반복문 무한으로 돌아간다.
// while("값이 true면 무한으로 돌아간다. false가 되어야 반복문이 멈춘다.")
// break문으로 반복을 종료 시켜줄 수 있다.
// while (true) {
//     if("멈추는 조건"){
//         break;  // 조건이 맞을 때 반복을 끝내준다.
//     }
// }

// let num = 1;
// while (num !== 5) {
//     console.log(num);
//     num++
// }

// let num2 = 1;
// while (true) {
//     console.log(num2);
//     num2++
//     if(num2 === 5){
//         break;
//     }
// }

// 사용자가 브라우저에 값을 간단히 입력 받을 수 있는 상태창을 띄워준다.
// prompt 간단한 입력값을 받아올 수 있다.
// let value = prompt("값을 입력하시오");
// console.log("value ; ", value);

// let inputNum = prompt("첫 번째 숫자 입력");
// let inputNum2 = prompt("두 번째 숫자 입력");

// prompt에서 입력 받는건 문자열 타입.
// 숫자가 필요할 경우 숫자열로 형태를 변환시켜주는 작업이 필요하다.
// 형태를 변환시켜주는 함수를 사용해야 한다.
// 이런 걸 형변환이라고 한다.
// parseInt("숫자, 정수로 변경할 변수나 값")
// Number("parseInt와 같이 숫자, 정수로 변경할 변수나 값")
// 다른 형태의 type을 number type으로 형변환 시켜준다.

// let result = parseInt(inputNum) + Number(inputNum2);
// console.log("결과는 : ", result);

// let value = prompt("숫자를 입력하시오 (1~5 사이의 숫자)");
// let play = true;

// while(play){
//     switch (value) {
//         case "1":
//             console.log("1번 선택");
//             play = false;
//             break;
//         case "2":
//             console.log("2번 선택");
//             play = false;
//             break;
//         case "3":
//             console.log("3번 선택");
//             play = false;
//             break;
//         case "4":
//             console.log("4번 선택");
//             play = false;
//             break;
//         case "5":
//             console.log("5번 선택");
//             play = false;
//             break;
    
//         default:
//             console.log("1~5 중 선택하시오")
//             value = prompt("1~5 사이의 숫자를 누르시오");
//             break;
//     }
// }

// 가위 바위 보 제작
// 컴퓨터가 자동 선택을 할 수 있도록 설정하는 방법
// 자바스크립트에서 랜덤값을 구할 수 있는 친구
Math.random(); // 0~1까지의 랜덤 수
// parseInt()를 사용해서 정수로 변환을 하고 값이 너무 작아 곱해줘야 한다.
console.log(parseInt(Math.random() * 3));