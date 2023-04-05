// 구조분해 할당(디스트럭처링)

// ES5 문법에서 배열의 값을 호출해서 변수에 담거나 사용할 때
// let one;
// let two;

// let arr = [1,2,3,4,5];
// one = arr[0];
// two = arr[1];
// console.log(one, two);
// // 인덱스를 사용해서 값을 하나씩 할당.

// // 구조분해 할당은 ES6에서 도입됨

// // 변수를 선언하고 배열 arr2의 값을 구조분해 할당해서 순서대로 할당 시킨다.
// // 배열의 구조분해 할당
// let arr2 = [1,2,3,4];
// let [one1,two1,three1,one2] = arr2;
// console.log(one1,two1,three1,one2);

// 값이 순서대로 할당된다.
// let [a,b] = [1,2];
// console.log(a,b); // 1,2

// // 값이 존재하지 않으면 undefined가 호출된다.
// let [c,d] = [1];
// console.log(c,d); // 1, undefined

// // 할당되는 값이 많아도 상관 없다. 앞의 값부터 순차적으로 할당되기만 한다.
// let [e,f] = [1,2,3];
// console.log(e,f);

// // 변수에 디폴트 값도 추가할 수 있다.
// let [g,h,i=1] = [1,2,3];
// console.log(g,h,i);

// ES6에서 구조분해 할당이 도입되었는데
// 배열이나 객체의 값을 분해해서 편하게 변수에 할당해서 사용할 수 있다.
// 코드 작성 시 시간 절약 가능. 작성 길이도 간편화, 가독성 상승

// 객체의 구조분해 할당
// ES5
// let name1 = {firstName : "lee", lastName : "kim"};
// let name2 = name1.firstName;
// let name3 = name1.lastName;
// console.log(name2,name3);

// // ES6 객체의 각 키를 뽑아서 변수에 할당.
// // 객체의 구조분해 할당은 순서대로 되지 않는다.

// // 키를 기준으로 구조분해 할당이 이루어진다. 
// let {lastName,firstName} = name1;
// console.log(firstName,lastName);

// // 객체의 디폴트 값 추가
// let name4 = {firstName = "lee", lastName} = {firstName : "lee2" ,lastName : "kim"};
// console.log(firstName,lastName);

// 구조분해 할당
// 문자열을 담은 변수에서
// let str = "asdfqwer"
// // 구조분해 할당으로 문자열 길이 값도 변수에 할당
// let {length} = str;
// console.log(length);

// // 작업할 때 객체화 시켜서 작업을 하다가 객체안에 필요한 값만 호출해서 
// // 구조분해 할당해 사용 가능.

// let list = [{id : 1, content : "asdf", isActive : true},
//             {id : 2, content : "asdf", isActive : true},
//             {id : 3, content : "asdf", isActive : true},
//             {id : 4, content : "asdf", isActive : true}];

// // id만 뽑는 방법
// list.forEach(function(i){
//     let {id} = i;
//     console.log(id);
// })
// // list 객체에서 id 키 값만 구조분해할당으로 할당 해줄 수 있다.

// let user = {
//     name : "lee",
//     address : {
//         city : "seoul"
//     }
// }
// // 구조분해 할당으로 city 값을 할당해보자.
// let {address:{city}} = user;
// console.log(city);

// 스프레드 연산자 ...
// 스프레드 연산자는 본 객체를 변경하지 않고 새로운 객체를 만들어 준다.
let temp1 = [1,2,3];
let temp2 = [4,5,6,7];
let temp3 = [...temp1,...temp2];
console.log(temp3);
// 값만 참조한다.

let obj1 = {
    a : 1,
    b : 2
}

let obj2 = {
    a : 2,
    b : 3,
    c : 1
}

let obj4 = {
    a : 3,
    b : 4,
    c : 5
}

// 키 값이 동일할 경우 마지막 값으로 할당된다.
let obj3 = {...obj1,...obj2,...obj4};
console.log(obj3);
