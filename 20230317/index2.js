// 스크립트를 body위에 작성한 상태로 아래 코드를 작성하면 null만 나온다.
// let a = document.querySelector(".aaa");
// console.log(a);

// 부득이하게 스크립트를 body위에 작성해야 할 경우
window.onload = function(){
    let a = document.querySelector(".aaa");
    console.log(a);
    // 이렇게 될 경우 이 안에서 작업을 다 해줘야 한다. 
    // 혹은 onload를 분리해서 작업해야 한다.
}