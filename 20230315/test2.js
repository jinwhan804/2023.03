// 변수 생성 영역
let count = 1;   // 게임 시행 횟수

let numRange = [];  // 숫자 선택 범위
let comSelect = [];  // 정답 배열
let playerSelect = [];  // 플레이어 선택 답안

let playerNum;     // 플레이어 선택 답안 (한자리)

let subText = "";   // 선택창 추가 문구 작성 시
let numSelect = true; // 필터 적용
let mainGame = true;

let strike = 0;  // 숫자와 자리가 모두 맞는 경우 카운트
let ball = 0;    // 숫자만 맞고 자리가 다른 경우 카운트

// 숫자 범위 생성
function makeNumRange(){
    // 배열 초기화
    numRange = [];    

    for (let i = 0; i <= 9; i++) {
        numRange.push(i);    // 0 ~ 9 숫자 풀 생성
    }
}

console.log(numRange);

// 정답 생성
function makeAnswer(){
    // 정답 초기화
    comSelect = [];

    for(let i = 0; i < 4; i++){
        let comRandom = Math.floor(Math.random() * numRange.length);   // 숫자 범위 내 값 하나 랜덤 선택
    
        comSelect.push(numRange[comRandom]);    // 정답 배열에 선택된 값 추가
        
        numRange.splice(comRandom, 1);      // 선택된 값을 숫자 선택 범위에서 제거
    }
}

console.log(comSelect);

// 플레이어 답안 선택
function playerWrite(){
    // 플레이어 선택지 초기화
    playerSelect = [];

    for(let i = 0; i < 4; i++){        
        while(numSelect){
            playerNum = parseInt(prompt(`${subText} ${i + 1}번 째자리 숫자를 선택해 주세요. \n
            숫자 범위 : 0 ~ 9 | 중복 숫자 불가`))
    
            // 숫자가 아닌 문자 작성 시 필터
            if(isNaN(playerNum)){
                subText = "숫자가 아닙니다.\n 다시 "
                continue;
            }  
        
            // 범위 내 숫자가 아닐 경우 필터
            if(playerNum < 0){
                subText = "숫자가 0보다 작습니다.\n 다시 "
                continue;
            }else if(playerNum > 9){
                subText = "숫자가 9보다 큽니다.\n 다시 "
                continue;
            }
    
            // 중복 검사
            let test = numRange.filter(function(item){
                return item === playerNum;
            })
        
            if(test.length == 0){
                subText = "숫자가 중복됩니다.\n 다시 "
                continue;
            }
    
            numSelect = false;  // 위의 검사 문제 없을 시 필터 종료
        }
    
        let selectIndex = numRange.indexOf(playerNum);  // 플레이어가 선택한 값의 답안 범위 내 인덱스 추적
    
        playerSelect.push(playerNum);    // 플레이어 답안 배열에 선택된 값 추가
        
        numRange.splice(selectIndex, 1);      // 선택된 값을 숫자 선택 범위에서 제거
    
        numSelect = true;   // 숫자 선택 및 정리 완료 후 필터 재 가동
    
        subText = "";    // 필터 사용 시 추가 문구 제거
    }
}

console.log(playerSelect);

// 정답 비교 및 결과
function compareWithCom(){
    // 스트라이크, 볼 카운트 초기화
    strike = 0;
    ball = 0;

    for (let a = 0; a < comSelect.length; a++) {
        for (let b = 0; b < playerSelect.length; b++) {
            if(comSelect[a] == playerSelect[b]){
                if(a == b){
                    strike++;
                }else{
                    ball++;
                }
            }
        }    
    }
    
    if(strike == 4){
        alert(`축하드립니다. ${count}회 만에 성공하셨습니다.\n
        정답 : ${comSelect.join(",")}`);
        mainGame = false;
    }else{
        alert(`${count}회차 결과, ${strike} 스트라이크, ${ball} 볼 입니다.\n
        선택 숫자 : ${playerSelect.join(",")}`);
        count++;
    }
}

// 전체 게임 회전
function main(){
    // 숫자 범위 생성
    makeNumRange(); 

    // 정답 수 생성
    makeAnswer();

    while(mainGame){
        // 숫자 범위 재 생성
        makeNumRange();

        // 플레이어 답안 작성
        playerWrite();
    
        // 정답과 비교 및 결과
        compareWithCom();
    }
}

main();