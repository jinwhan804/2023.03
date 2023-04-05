// 팝업 여는 함수
function openPopup(){
    let popup = document.querySelector(".popup-wrap");
    console.log(popup);
    
    console.log(popup.classList);
    console.log(popup.className);

    // popup.className
    // popup.classList

    // popup.className을 사용하면 문자열을 그대로 대입해주면 되고
    // popup.classList를 사용하면 메소드를 사용하면 된다.

    // 클래스를 구분해 줘야 하기 때문에 ' is-active'처럼 한칸 띄어서 작성함
    // popup.className = popup.className + " is-active";
    // popup.classList.add('is-active');

    // 조건문으로 클래스 확인 구문 만들기
    // popup.classList.contains("is-active")

    // let strArr = popup.className.split(" ");

    // if(strArr.indexOf("is-active") != -1){
    //     // class 있으면
    // }else{
    //     // class 없으면
    //     popup.className = popup.className + " is-active";
    // }

    // 메소드 사용해서 조건 추가
    if(popup.classList.contains("is-active")){
        // is-active 있으면 제거
        popup.classList.remove("is-active");
    }else{
        // is-active 없으면 추가
        popup.classList.add("is-active");
    }
}