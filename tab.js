// 어렵게 생각하지말고 하나만 구현한다고 생각하기.


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



//for 문으로 수정
// 버튼을 변수에 담아서 사용

for(let i=0; i < $('.tab-button').length; i++){
    $('.tab-button').eq(i).on('click', function(){
        $('.tab-button').removeClass('orange'); //모든 탭에 orange class 제거
        $('.tab-button').eq(i).addClass('orange'); //버튼 0 에 orange class 추가
        $('.tab-content').removeClass('show'); //모든 div박스 show 제거
        $('.tab-content').eq(i).addClass('show'); //버튼 0 에 show class 추가
    });
}