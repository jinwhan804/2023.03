let arr1 = [[1,2,3],[4,5,6],[7,8,9]];
// 배열 arr1의 인덱스 0 안에 있는 배열의 인덱스 1 --> 결과값 : 2
console.log(arr1[0][1]); 

let arr2 = [1,2,3,4,5,6];
// arr2를 그냥 돌리면 6까지만 나오지만
arr2.push(7);
arr2.push(8);
// push를 해주고 나면 arr2가 7과 8이 추가되기 때문에
// 8까지 출력된다.
for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}

let obj = {
    a : 1, 
    b : 2,
    c : function(num){
        console.log(num + "의 값을 받음.");
    }
}
obj.c(5);

// 객체를 활용해 함수로 활용할 수 있다.

// 문자도 배열처럼 인덱스로 접근 가능
let str = "가나다라마바사";
console.log(str[3]);

// 배열 메소드
// indexOf : 배열 내에서 원하는 값을 찾고 해당 값의 인덱스를 호출하는 명령어
let a = arr2.indexOf(6); 
console.log(a);

// find : 배열 내에서 원하는 값을 찾을 때까지 순환하는 함수
// return값이 true인 값이 반환되면 호출한 후 함수 종료
// 동일한 값이 많아도 첫 번째 값을 발견하면 종료됨.
let b = arr2.find(function(item){
    console.log("검색 중 " + item);
    return item === 5;
});
console.log(b);

// findIndex : find처럼 배열 내에서 원하는 값을 찾을 때까지 순환하는 함수
// return 값이 true가 되면 해당 값의 인덱스를 호출한 후 함수 종료
// 동일한 값이 많아도 첫 번째 값을 발견하면 종료됨.
let c = arr2.findIndex(function(item){
    console.log("인덱스 찾는 중 " + item);
    return item === 3;
})
console.log(c);

// filter : 배열 내에서 원하는 값을 모두 찾아서 호출하는 함수
let city = ["대구","울산","부산","서울"];
let d = city.filter(function(item){
    return item[1] === "산";
})
console.log(d);

// map : return값에 대해 true와 false를 판단하여 배열로 반환해 주는 함수
let e = city.map(function(item){
    return item[1] === "산";
})
console.log(e);

// forEach : 배열 길이에 맞춰서 순환하는 함수
// for과 유사한 기능이지만 조건을 따로 설정할 필요가 없음
city.forEach(function(item){
    console.log("forEach로 뽑는 중 " + item);
})

// join : 배열을 문자열로 변경해주는 함수
// 매개변수에 따라 배열 사이의 문자가 변경된다.
console.log(city.join("!"));

// split : join의 반대 개념. 문자열을 배열로 변경해주는 함수.
// 매개변수를 제거하면서 해당 매개변수를 기준으로 배열화 진행.
let str2 = city.join(",");
console.log(str2);
console.log(str2.split(","));

// splice : 배열에서 원하는 값을 찾아 제거하는 함수
// 매개 변수 2개 필요
// 첫 번째는 제거하고자 시작 인덱스 두번째는 몇 자리를 제거할지 결정
city.splice(2,2);
city.forEach(function(item){
    console.log("splice 확인 중 " + item);
})


// 문자열 함수
// 배열 함수와 동일하게 사용되는 함수들 : indexOf, length

// slice : 문자열을 잘라주는 함수
// 매개 변수가 2개 필요하며 첫 번째는 시작점, 두 번째는 잘라주는 지점
console.log(str.slice(3,5));

// split : 매개 변수를 기준으로 문자열을 나누어 배열화 하는 함수
// 빈문자열일 경우 한 글자씩 나눠준다.
console.log(str.split("하"));

let en = "aBcDeFgH";
// toUpperCase : 대문자로 변경하는 함수
console.log(en.toUpperCase());

// toLowerCase : 소문자로 변경하는 함수
console.log(en.toLowerCase());