$(document).ready(function () {
 
  // 추가 버튼 클릭 시
  $("#add-btn").on("click", function () {
    var text = $("#todo-input").val(); // 입력창의 값 읽기
 
    if (text === "") return; // 빈 값이면 중단
 
    // 새 li를 만들어 ul 끝에 추가
    $("#todo-list").append(
      "<li><span>" + text + "</span><button class='delete-btn'>삭제</button></li>"
    );
 
    $("#todo-input").val(""); // 입력창 비우기
  });
 
  // 삭제: 이벤트 위임. 부모 #todo-list에 걸어 두면
  // 나중에 추가된 .delete-btn도 자동으로 동작한다.
  $("#todo-list").on("click", ".delete-btn", function () {
    $(this).parent().remove(); // 삭제 버튼이 속한 li를 통째로 제거
  });
 
  // 입력창에서 Enter를 눌러도 추가되도록
  $("#todo-input").on("keypress", function (e) {
    if (e.which === 13) {      // 13 = Enter 키
      $("#add-btn").click();   // 추가 버튼을 코드로 클릭(로직 재사용)
    }
  });
 
});