// 업다운 게임
// 숫자 맞추기

// 1. 플레이어 있고, 컴퓨터가 있고
// 2. 플레이어는 선택을 할 수 있게 하고 컴퓨터는 랜덤값으로
// 3. 플레이어가 선택할 수 있는 제어문
// 4. 게임의 종료 시점 정하기



let playerSelect;
// 1~ 100까지의 랜덤 숫자 설정
let comSelect = parseInt(Math.random() * 99 + 1);

let count = 0; // 게임 시도 횟수

let max = 100; // 플레이어가 선택이 가능한 최대의 숫자.

let min = 0; // 플레이어가 선택이 가능한 최소의 숫자.

let subText = ""; // 컴퓨터가 알려줄 문구
let maxCount = parseInt(prompt("게임을 몇 번 진행하시겠습니까?")); // 게임 횟수 지정

// 게임 반복성 필요

while (playerSelect !== comSelect && count < maxCount) {
    // ES6에서 문자열을 사용할 때 편하게 사용할 수 있는 기법
    // 템플릿 리터럴 문자를 다룰 때 줄 바꿈 같은 걸 편하게 사용할 수 있게 해준다.
    // `백틱
    // "" + playerSelect
    // `${변수}문자열`
    // 문자를 작성할 때 \n 줄내림을 해준다.
    playerSelect = prompt(`${subText}\n숫자를 입력하세요.\n최소 : ${min} | 최대 : ${max} | 남은 횟수 : ${maxCount - count}`);

    // 숫자로 변환
    // playerSelect = parseInt([playerSelect]);
    // 입력된 값이 숫자인지 확인
    // isNaN 숫자가 아닌 값을 입력했는지 확인하는 것
    if(isNaN(playerSelect)){
        subText = "숫자로 입력해 주세요."
        // 다시 게임을 시작할 필요가 있음
        continue; 
        // continue 구문 아래를 읽지 않고 반복문의 시작점으로 돌아가는 구문.
    }

    // 최소와 최대 사이의 값인지 범위의 값이 맞는지 확인
    if(min >= playerSelect || max <= playerSelect){
        subText = `숫자를 다시 입력해주세요. 최소 : ${min} | 최대 : ${max}`
        continue;
    }

    // 게임 로직 시작
    if(playerSelect > comSelect){
        // max 최대값을 다시 겹치지 않게 입력해준다.
        max = playerSelect;
        subText = "입력하신 숫자가 큽니다.(다운)"
    }else if(playerSelect < comSelect){
        // mun 최소값을 다시 겹치지 않게 입력해준다.
        min = playerSelect;
        subText = "입력하신 숫자가 작습니다.(업)"
    }else{
        count = count + 1;
        console.log(`${count}번 시도해서 맞추셨습니다! 축하합니다!`);
        // 게임 종료
        break;
    }

    // 게임 횟수 증가
    count++;
    if(count >= maxCount){
        // 게임 횟수 오버
        console.log("횟수가 완료되었습니다... 다음 기회에...")
    }
}