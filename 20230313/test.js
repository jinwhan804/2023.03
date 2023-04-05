let playGame = true;

let player = prompt("가위, 바위, 보 중 하나를 입력하세요.");

let cpuSellect = "";

let cpu;
let cpuCtrl;

while (playGame) {    
    cpu = parseInt(Math.random() * 3);
    cpuCtrl = true;

    while (cpuCtrl) {
        switch (cpu) {
            case 0:
                cpuSellect = "가위";
                cpuCtrl = false;
                break;
            case 1:
                cpuSellect = "바위";
                cpuCtrl = false;
                break;
            case 2:
                cpuSellect = "보";
                cpuCtrl = false;
                break;    
            default:
                cpu = parseInt(Math.random() * 3);
                cpuCtrl = true;
                break;
        }    
    }

    if(player === cpuSellect){
        player = prompt("비겼습니다. 다시 입력해주세요.")
        playGame = true;
    }else{
        switch (player) {
            case "가위":
                if(cpuSellect === "바위"){
                    console.log("졌습니다. 다음 기회에...")
                }else{
                    console.log("축하합니다! 이겼습니다!")
                }
                playGame = false;
                break;
            case "바위":
                if(cpuSellect === "보"){
                    console.log("졌습니다. 다음 기회에...")
                }else{
                    console.log("축하합니다! 이겼습니다!")
                }
                playGame = false;
                break;
            case "보":
                if(cpuSellect === "가위"){
                    console.log("졌습니다. 다음 기회에...")
                }else{
                    console.log("축하합니다! 이겼습니다!")
                }
                playGame = false;
                break;    
            default:
                player = prompt("잘못 입력하였습니다. 가위, 바위, 보 중 하나를 입력하세요.");
                playGame = true;
                break;
        }   
    }
}