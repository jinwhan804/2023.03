// 배열 심화
// 배열 [1, 2, 3, 4] 레퍼런스 타입
// 리스트 형태
// 인덱스의 순서로 해당 값의 접근할 수 있다.
// 배열의 인덱스 순서는 0부터 시작

// 다른 언어에서 C, C++, C#
// 배열 중 list타입이 존재
// 자바스크립트에서는 Arr타입이 있는데
// 사용자의 편한 접근을 위해 설정하다보니 조금 허술한 부분이 존재한다.
// 자바스크립트의 배열은 객체 키 값이  0 1 2 3
// 자바스크립트의 배열 안의 배열은 객체 배열이다.
// 다른 언어에서 배열안의 배열 예시 ) int a = [0] [1]

// 자바스크립트
let a = [[1,2,3],[4,5,6],[7,8,9]];

// 배열 안에 배열이 존재하는 것을 이중 배열이라고 한다.
// console.log(a[0]); --> [1,2,3]
// console.log(a[1][1]); --> 5
// console.log(a[2][0]); --> 7

// a[0] === [1,2,3]
// a[0][0] === [1,2,3]안의 0번 인덱스인 1이 반환된다.
// 삼중 이상의 배열 작성도 가능하지만 너무 복잡해지기 때문에
// 보통 이중 배열까지만 사용한다.

// 배열에는 length라는 키 값이 있다.
// 배열의 총 길이를 알려주는 명령어

// console.log(a.length);
// 배열의 인덱스를 접근할 때 0 ~ 배열의 길이 - 1

// 반복문을 숫자로 설정하게 되면 반복 횟수를 동적으로 변경하기 힘들다.
let b = [1,2,3,4,5,6,7];
// 길이가 변경되는 상황이 발생했는데 
// 반복문은 정해진 숫자만큼 반복되기 때문에 
// 그 이상으로 길이가 변경되면 이 후 값을 반환하지 못한다.
// 그래서 length를 사용해서 배열의 길이에 따라 반복문이 돌 수 있도록 한다.
b.push(8);
b.push(9);
// push()는 함수 --> 배열 메소드
// 배열 타입의 함수
// 함수도 값
for (let i = 0; i < b.length; i++){
    // 0 1 2 3 4 5 6
    console.log(b[i]);
    
}


// 객체 

// const 한번 선언하면 값을 변경할 수 없다. 재선언도 불가능
// 상수의 값
// 객체는 키와 값이 존재

const obj = {
    a : "나는 객체",
    // 익명함수 : 이름이 없는 함수
    push : function(num){
        console.log("나는 obj 객체 안에 push라는 키값에 있는 함수");
        console.log(num + "를 매개 변수로 받았음");
    }
}

console.log(obj.a);
obj.push(2);

let d = [1,2,3,4,5];

// return은 변수명으로 사용 불가

// 배열 메소드 indexOf()
// 배열 내에서 해당 값을 찾아 인덱스를 반환하는 함수
let return2 = d.indexOf(3);
console.log(return2);

let arr = ["사과", "딸기", "포도"];

let return3 = arr.indexOf("딸기");
console.log(return3);

// 배열 메소드 find
// 검색할 때 사용하는 함수
// 함수 반환 값이 true가 나오는 함수를 넣어준다.

// find 함수는 매개변수로 함수를 전달 받는다.
let return4 = arr.find(function(item){
    // 배열의 값이 item 매개변수에 순서대로 들어온다.    
    console.log("item"+item);
    // return의 값이 true인 값이 반환되면 해당 아이템을 find 함수에서 반환해준다.
    return item === "딸기";
});
// true가 나온 첫 번째 값을 반환 한다.
// 값을 내보내면 함수가 종료된다.
console.log(return4);


// 배열 메소드 findIndex
let return5 = arr.findIndex(function(item){
    return item === "딸기";
});
// 해당 배열을 반복 시켜서 값을 찾고 그 값의 인덱스를 반환해 준다.
console.log(return5);

let arr2 = ['이사과', '김딸기', '이포도'];
// 배열 메소드 filter

let str = "가나다";
console.log(str[0]);
// 문자열도 인덱스로 한 글자씩 접근이 가능하다.

let return6 = arr2.filter(function(item){
    return item[0] === '이';
})
// 검색창 같은 알고리즘을 구현할 때 사용됨.

// 원하는 값을 모두 찾아서 반환해 준다.
console.log(return6);

// 배열 메소드 map
let return7 = arr2.map(function(item){
    console.log(item);
    // return item;
    // 반환 값들을 배열의 형태로 반환해 준다.
    return item[0] === "이";
});
// 반환 값이 나오면 순차적으로 정리하여 배열의 길이만큼 채워서 반환
console.log(return7);

// 배열 메소드 forEach
// 해당 배열을 반복시켜서 작업해야할 경우 용이하게 사용된다.

arr2.forEach(function(item){
    console.log(item);
});
// 배열의 길이만큼 반복하면서 값을 뽑아준다.
// 값을 바로 사용할 수 있다.
// 아이템을 순차적으로 뽑아준다.

// 배열 메소드 join
// join은 매개변수로 문자열을 전달해준다.
console.log(arr2.join("."));
// 배열을 문자열로 변경시켜준다.
// 배열에 들어있는 값들의 구분을 매개변수로 전달한 문자열로 해준다.

let str2 = arr2.join(",");
// split 함수
// 문자열을 배열로 변경
// split 함수의 매개변수로 문자열 값을 자를 문자열 값을 넣어주면 된다.
// "," 값을 매개변수로 전달하면 문자열에서 ,의 문자를 잘라서 배열의 형태로 변경시켜준다.
console.log(str2.split(","));