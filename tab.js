// 어렵게 생각하지말고 하나만 구현한다고 생각하기.

//   #####detail.html PAGE#####

// 버튼0 버튼누르면 
//  -Orange class 부착 
//  -div0 박스도 보여야됨 (show 라는 class 부착)
//  -기존 모든 버튼에 있던 Orange class + diw show 부착 해제

// $('.tab-button').eq(0).on('click', function(){
//     $('.tab-button').removeClass('orange'); //모든 탭에 orange class 제거
//     $('.tab-button').eq(0).addClass('orange'); //버튼 0 에 orange class 추가
//     $('.tab-content').removeClass('show'); //모든 div박스 show 제거
//     $('.tab-content').eq(0).addClass('show'); //버튼 0 에 show class 추가
// });

//########################################################################

//for 문으로 수정
// 버튼을 변수에 담아서 사용

// for(let i=0; i < $('.tab-button').length; i++){
//     $('.tab-button').eq(i).on('click', function(){
//         $('.tab-button').removeClass('orange'); //모든 탭에 orange class 제거
//         $('.tab-button').eq(i).addClass('orange'); //버튼 0 에 orange class 추가
//         $('.tab-content').removeClass('show'); //모든 div박스 show 제거
//         $('.tab-content').eq(i).addClass('show'); //버튼 0 에 show class 추가
//     });
// }

//########################################################################

// //Tab기능 함수로 빼기 
// //24.03.22 금요일
// for(let i=0; i < $('.tab-button').length; i++){
//     $('.tab-button').eq(i).on('click', function(){
//         TapOpen(i);
//     });
// }

//파라미터 num을 넣어야 된다!!! 조심!!!
// function TapOpen(num){
//     $('.tab-button').removeClass('orange'); 
//     $('.tab-button').eq(num).addClass('orange'); 
//     $('.tab-content').removeClass('show'); 
//     $('.tab-content').eq(num).addClass('show'); 
// }

//########################################################################

//이벤트리스너 한번만 사용해보기
//이벤트리스너 한번 사용할때마다 램 용량을 차지하기 때문에 줄이는 게 성능면으로 낫다.

//램 절약을 위해 이런식으로 list에 이벤트 버블링을 이용한다.
// $('.list').click(function(e){
// //ex)지금 누른게 버튼 0이면 TapOpen()
//     if(e.target == document.querySelectorAll('.tab-button')[0]){
//         TapOpen(0);
//     }
//     if(e.target == document.querySelectorAll('.tab-button')[1]){
//         TapOpen(1);
//     }
//     if(e.target == document.querySelectorAll('.tab-button')[2]){
//         TapOpen(2);
//     }
// })


// function TapOpen(num){
//     $('.tab-button').removeClass('orange'); 
//     $('.tab-button').eq(num).addClass('orange'); 
//     $('.tab-content').removeClass('show'); 
//     $('.tab-content').eq(num).addClass('show'); 
// }

//########################################################################


//data-id값을 받아와 값을 나타내는 방법
$('.list').click(function(e){
    console.log("Test : ",e.target.dataset.id);
        TapOpen(e.target.dataset.id);
    })

function TapOpen(num){
    $('.tab-button').removeClass('orange'); 
    $('.tab-button').eq(num).addClass('orange'); 
    $('.tab-content').removeClass('show'); 
    $('.tab-content').eq(num).addClass('show'); 
}