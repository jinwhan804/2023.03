let a = 9;

for(let b = 2; a >= b; b++){
    for(let c = 1; a >= c; c++){
        console.log(b + " X " + c + " = " + b * c)
    }
}

let arr = ["박용택", "정의윤" , "심수창", "정근우", "이대호", "이택근", "송승준", "이대은", "유희관", "박찬희"];
let winner = ["정근우"];

for(let d = 0; d <= 9; d++){    
    if(arr[d] === winner[0]){
        console.log("수상자는",arr[d]);
    }
}

for(let e = 1; e <= 60; e++){
    if(e % 3 == 0){
        console.log("짝");
    }else{
        console.log(e);
    }
}