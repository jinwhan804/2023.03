// 생성자 함수를 만들고
let objArr = [];

function create(name, age, content){
    this.name = name;
    this.age = age;
    this.content = content;
}

function divBtn(){
    // 버튼 누르면 실행시킬 기능
    console.log("버튼 잘 눌림");
    addArr();
    // 화면 업데이트를 위해 만든 함수
    render();
}

function addArr(){    
    // input 태그 명으로 querySelectorAll 메소드 매개변수로 전달해서
    // input 태그들을 배열로 가져온다.
    let inputs = document.querySelectorAll("input");
    console.log(inputs);
    // input 태그는 value라는 키 값이 있다.
    // input에 입력한 값이 value 키에 값으로 들어간다.
    console.log(inputs[0].value);
    console.log(inputs[1].value);
    console.log(inputs[2].value);
    
    
    // new 키워드로 빈 객체를 만들고 함수에서 this로 그 객체를 참조해서 
    // 각 키 값에 맞춰서 매개 변수로 값을 넣어준다
    // 이렇게 객체를 생성하여 obj라는 변수에 넣어 준다.
    let obj = new create(inputs[0].value, inputs[1].value, inputs[2].value);
    objArr.push(obj);
    console.log(objArr);
    // 객체와 배열은 레퍼런스 타입이기 때문에 값이 아니라 주소를 들고 있다.
    // 저렇게 보이는 현상은 일반 변수는 값을 가르키는 주소라서 서로 개념이 다르다
    // 주소를 console에 찍는 것이기 때문에 최종적으로 변한 값이 나오게 된다.
}

// 무언가를 그려주는 함수
function render(){
    // 랜더링 전에 문자열 초기화
    let text = "";
    // += : 원래 있던 값에 추가해준다.
    objArr.forEach(function(i){
        text += `<li> 이름 : ${i.name} 나이 : ${i.age} 내용 : ${i.content}</li>`;
    });
    console.log(text);

    document.querySelector('#tables').innerHTML = text;
}