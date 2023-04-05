// 예외 처리문

// try-catch문 : 코드 실행 중 예외 상황이 발생해도 프로그램이 종료가 되지 않고
// 프로그램을 유지할 수 있다.
// 프로그램의 안정성을 높일 수 있다.

try {
    // 오류가 발생할 것 같은 코드
} catch (error) {
    // 오류 발생 시 활성화되는 코드
    // error는 오류 메시지
}

// try {
//     if(5 == 5)throw "Erraa"
//     // throw : 에러 메시지를 던질 수 있다.
// } catch (error) {
//     console.log(error);
// }

function myStr(){
    let devValue = document.querySelector(".dev").value;
    try {
        if(devValue == "")throw "비었음"
        devValue = Number(devValue);
        // Number 숫자로 타입을 변경해주는 생성자 함수.
        if(isNaN(devValue))throw "number가 아님"
        // 문자열이 들어가면 문자가 숫자로 변환될 수 없어서
        // number가 아니다.
        // 오류가 발생해도 프로그램 종료가 되지 않는다.
    } catch (error) {
        // 코드를 실행하다 err가 발생하면 catch문을 실행하고 오류의 내용은
        // error 매개변수에 들어온다.
        console.log(typeof devValue);
        console.log(devValue);
        document.querySelector(".message").innerHTML = error;
    }
}