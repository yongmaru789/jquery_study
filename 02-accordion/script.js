$(document).ready(function () {
 
  // 이벤트 위임: 부모 .faq 하나에 걸고, .faq-question 클릭만 처리한다.
  // 나중에 질문이 동적으로 추가되어도 자동으로 동작한다.
  $(".faq").on("click", ".faq-question", function () {
 
    // $(this) = 방금 눌린 질문 버튼
    // .parent() = 그 버튼의 부모인 .faq-item
    var $item = $(this).parent();
 
    // 형제 item들 중 열려있는 것을 모두 닫는다
    $item.siblings().removeClass("open");
 
    // 눌린 item만 토글한다 (열려있었으면 닫고, 닫혀있었으면 연다)
    $item.toggleClass("open");
  });
 
});