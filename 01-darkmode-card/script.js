// HTML 문서가 모두 로드되면 안의 코드를 실행한다
$(document).ready(function () {
 
  // id가 theme-toggle인 버튼을 선택하고, 클릭 이벤트를 연결한다
  $("#theme-toggle").on("click", function () {
 
    // body에 dark 클래스를 붙였다(있으면) 뗀다(없으면)
    $("body").toggleClass("dark");
 
    // 현재 dark 클래스가 붙어있는지 확인해서 버튼 글자를 바꾼다
    if ($("body").hasClass("dark")) {
      $(this).text("☀️ 라이트모드"); //
    } else {
      $(this).text("🌙 다크모드");
    }
  });
 
});