let objArr = [];

function create(name, age, gender, content, glass){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.content = content;
}

function addArr(){
    let inputs = document.querySelectorAll("input");


    let obj = new create(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value);

    objArr.push(obj);
}

function btn(){
    addArr();

    render();
}

function render(){
    let text = "이름 나이 성별 내용 안경 유무";
    objArr.forEach(function(i){
        text += `${i.name} ${i.age} ${i.gender} ${i.content}\n`
    })

    document.querySelector("#table").innerHTML = text;
}