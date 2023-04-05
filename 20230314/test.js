// 변수 설정 영역
let count = 0; // 게임 시행 횟수
let maxCount = 20; // 최대 게임 시행 횟수

let playerMoney = 20000; // 플레이어 시작 소지금
let bettingMoney;  // 플레이어 배팅금
let minBettingMoney = 2000; // 배팅 최소 금액

let player = ""; // 플레이어 가위바위보 선택

let comSelect = ""; // com 가위바위보 선택
let com; // com 가위바위보 선택 (난수 생성용)

let comFirst = true; // 묵찌빠 공격권 설정

let playGame1 = true;  // 가위바위보 게임 진행 bool
let playGame2 = true;  // 묵찌빠 게임 진행 bool

// 함수 작성 영역
function bettingMoneyFilter(num) {
    while(isNaN(num) || num < minBettingMoney || num > playerMoney){        
        if (num < minBettingMoney) {
            num = parseInt(prompt(`배팅 금액이 너무 작습니다. 다시 입력해 주세요.\n
            최소 : ${minBettingMoney} | 현재 소지금 : ${playerMoney}`));
            continue;
        } else if (num > playerMoney) {
            num = parseInt(prompt(`배팅 금액이 너무 큽니다. 다시 입력해 주세요.\n
            최소 : ${minBettingMoney} | 현재 소지금 : ${playerMoney}`));
            continue;
        } // 배팅 금액 최대 최소 제한 필터

        if(isNaN(num)){
            num = parseInt(prompt(`배팅 금액을 숫자로 다시 입력해 주세요.\n
            최소 : ${minBettingMoney} | 현재 소지금 : ${playerMoney}`));
        } // 배팅 금액 문자열 필터
    }
}   // 배팅 금액 필터

function comRandom(num){
    switch (num) {
        case 0:
            comSelect = "가위";
            return;    
        case 1:
            comSelect = "바위";
            return;    
        case 2:
            comSelect = "보";
            return;    
    }
}   // com 가위바위보 선택 함수

function compareWithCom(value){
    switch (value) {
        case "가위":
            if(comSelect === "바위"){
                comFirst = true;
            }else{
                comFirst = false;
            }
            playGame1 = false;
            return;
        case "바위":
            if(comSelect === "보"){
                comFirst = true;
            }else{
                comFirst = false;
            }
            playGame1 = false;
            return;
        case "보":
            if(comSelect === "가위"){
                comFirst = true;
            }else{
                comFirst = false;
            }
            playGame1 = false;
            return;   
        default:
            value = prompt("잘못 입력하셨습니다. \n 가위, 바위, 보 중 하나를 입력하세요.");
            break;
    }
}   // com과 가위바위보 비교 (같은 값일 경우 제외)

function game1() {
    while(playGame1){
        com = parseInt(Math.random() * 3);
    
        comRandom(com);    
    
        if(player === comSelect){
            player = prompt("비겼습니다. 다시 입력해 주세요.");
        }else{
            compareWithCom(player);
        }        
    }
}   // 가위바위보 게임

function game2() {
    while(playGame2){
        com = parseInt(Math.random() * 3);
    
        comRandom(com);
    
        if(comFirst == true){
            player = prompt("com의 공격으로 묵찌빠를 진행하겠습니다.\n 가위, 바위, 보 중 하나를 입력하세요.");
            
            if(player === comSelect){
                alert(`com 공격 성공! 패배하셨습니다. 게임 패`);
                playerMoney = playerMoney - bettingMoney * 2;
                playGame2 = false;
            }else{
                compareWithCom(player);
            }        
        }else{
            player = prompt("플레이어의 공격으로 묵찌빠를 진행하겠습니다.\n 가위, 바위, 보 중 하나를 입력하세요.");
            
            if(player === comSelect){
                alert(`플레이어 공격 성공! 승리하셨습니다. 게임 승`);
                playerMoney = playerMoney + bettingMoney * 2;
                playGame2 = false;
            }else{
                compareWithCom(player);
            }  
        }
    }
}   // 묵찌빠 게임

function totalGame(num1, num2) {
    while(num1 < num2 && playerMoney >= minBettingMoney){
        bettingMoney = parseInt(prompt(`배팅 금액을 입력해주세요.\n 
        ${num1 + 1}회차 게임 | 남은 게임 횟수 : ${num2 - num1} \n
        최소 : ${minBettingMoney} | 현재 소지금 : ${playerMoney}`)) // 플레이어 배팅 금액 설정

        bettingMoneyFilter(bettingMoney);

        player = prompt(`게임 시작! 가위, 바위, 보 중 하나를 입력하세요.`);

        game1();

        game2();

        playGame1 = true;
        playGame2 = true;
        num1++;

        // 게임 종료 조건
        if(num1 >= num2 || playerMoney < minBettingMoney){
            console.log(`모든 게임이 종료되었습니다.\n 
            최종 게임 횟수 : ${num1} | 플레이어 총 획득 금액 : ${playerMoney}`)
        }
    }
}   // 전체 게임 loop

totalGame(count, maxCount);