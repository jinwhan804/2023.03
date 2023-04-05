// 스프레드 연산자
let obj = {name : "lee", content : "내용"};
let obj2 = obj;
obj2.name = "kim";
// 객체는 주소를 참조하는 레퍼런스타입
console.log(obj);
console.log(obj2);
console.log(obj == obj2);

let obj3 = {...obj};
// 값을 복사해서 새로운 객체를 만들어 준 것.
obj3.name = "kim2";
console.log(obj);
console.log(obj3);
console.log(obj == obj3);

// 스프레드 연산자를 사용하면 원본을 유지하고 작업을 진행할 수 있다.
// 데이터베이스에서 값을 가져와서 검색기능을 만든다고 가정한다면 
// 모든 리스트를 가지고 있는 배열은 유지하되 검색으로 걸러낸 배열만 사용하고 싶을 때 활용 가능.

// 리액트에서 많이 사용할 내용
// 옵션 체이닝
// ES11에서 도입됨. 객체의 값을 호출할 때 안전성을 유지하면서 호출 가능하다.
// 객체의 키 앞에 ? 구문을 추가해서 작성

let obj4 = {name : "park", content : "내용"};

// obj4?.name
// name의 키값이 있는지 확인, 없으면 undefined를 반환한다.
// 오류가 나지 않게 방지해준다.

console.log(obj4?.age);

let obj5 = {
    name : "koo",
    content : {
        age : 1
    }
}

// console.log(obj5.content.key);
// 현재 오류가 나지 않는 것은 객체의 키값을 확인하고 
// type 에러가 나지 않게 방지해주기 때문
// node 환경에서 확인