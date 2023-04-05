// promise 객체
// 비동기 처리를 가능하게 해주는 객체

// nodejs에서 많이 사용할 예정

function testPromise(num){
    // new 키워드로 빈객체를 만들고
    // Promise 객체를 생성
    // 전달하는 함수로 resolve, reject 두 가지 매개 변수를 받는데
    // resolve() : 처리가 완료되면 반환
    // reject() : 처리가 오류가 나면 반환
    return new Promise(function(res, rej){
        try {
            if(num > 10) rej({data : "숫자큼"});
            // if의 중괄호가 없으면 바로 다음 코드까지만 조건문 영역
            console.log(num);
            // 데이터를 받아온다고 가정하면 가져오는데 시간이 걸리게 되는데
            // 데이터를 다 가져오고 작업을 진행시켜야 할 때
            setTimeout(function(){
                res(num + 10);
            }, num * 1000);     
        } catch (error) {
            rej(error);
        }
    })
}

// testPromise(8).then(function(data){
//     console.log(data)
//     // 데이터를 가져오고 처리할 구문을 여기에 작성하면 된다.
//     // 데이터를 가지고 처리해야할 작업
//     return testPromise(data);
//     // res가 실행되면 then 메소드가 실행되고
//     // rej가 실행되면 catch 메소드가 실행된다.
// }).then(function(data){
//     // 성공
//     console.log(data);
// }).catch(function(err){
//     // 실패
//     console.log(err);
// })

// then과 catch를 안 쓰려면 async와 await구문 사용
// 절대 같이 쓰지 말 것.

async function asyncFun(){
    // 왠만하면 trycatch로 작업의 오류를 잡으면서 작업할 것.
    try {
        // await뒤에 promise 객체
        let temp = await testPromise(5);
        // promise 객체가 res 혹은 rej가 처리될 때 까지 기다리고 이후 처리
        console.log(temp);
        temp = await testPromise(temp);
        console.log(temp);
        // await + promise : promise를 기다리고 res값을 반환한다.
        // async와 await를 한 쌍으로 사용한다.
    } catch (error) {
        
    }
}

asyncFun();