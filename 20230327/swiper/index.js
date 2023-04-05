// 클릭의 시작위치를 가지고 있고
// 끝나면 끝난 좌표와 비교를 해서 오른쪽으로 스와이프된건지 왼쪽으로 스와이프된건지
// 먼저 확인하고 인덱스를 기준으로 움직임을 제어해준다.

// 클릭 시작 지점 x좌표
let _start;
// 진행 중인 인덱스
let _index = 1;

let _swiper = document.querySelector(".swiper");
let _swiperContent = document.querySelector(".swiper-content");
let {length} = document.querySelectorAll('.swiper-item');
let _prev = document.querySelector(".prev");
let _next = document.querySelector(".next");
console.log(length);

// getComputedStyle : 적용된 스타일의 값을 가져올 수 있다.
// 적용된 스타일을 가저올 태그를 매개변수로 전달
let _swiperWidth = parseInt(getComputedStyle(_swiper).width);
console.log(_swiperWidth);

_swiper.addEventListener("mousedown", function(e){
    console.log("클릭 시작");
    // 클릭했을 때 x 좌표 = clientX
    console.log(e);
    // e.clientX;
    _start = e.clientX;
    console.log(_start);
})

_swiper.addEventListener("mouseup",function(e){
    console.log(e.clientX - _start);
    _swiperContent.style.transition = "1s";
    if(e.clientX - _start < -50){
        if(_index < (length - 1)){
            _index++;
            swiperMove();
        }     
    }else if(e.clientX - _start > 50){
        if(_index > 0){
            _index--;
            swiperMove();
        }
    }

    _swiperContent.addEventListener("transitionend",function(){
        loop();
    });
})

// 인덱스 기준으로 움직임
function swiperMove(){
    _swiperContent.style.left = -(_index * _swiperWidth) + "px";
}

function loop(){
    if(_index <= 0){
        _swiperContent.style.transition = "none";
        _index = length - 2;
        swiperMove();
    }else if(_index >= (length - 1)){
        _swiperContent.style.transition = "none";
        _index = 1;
        swiperMove();
    }    
}

swiperMove();

_prev.addEventListener("click",function(){
    _swiperContent.style.transition = "1s";
    if(_index > 0){
        _index--;
        swiperMove();
    }   

    _swiperContent.addEventListener("transitionend",function(){
        loop();
    });
})

_next.addEventListener("click",function(){
    _swiperContent.style.transition = "1s";
    if(_index < (length - 1)){
        _index++;
        swiperMove();
    }

    _swiperContent.addEventListener("transitionend",function(){
        loop();
    });
})