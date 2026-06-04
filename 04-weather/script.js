$(document).ready(function () {
 
  // apiKey 는 config.js 에서 정의된 변수를 사용한다.
  // (index.html 에서 config.js 를 script.js 보다 먼저 불러옴)
 
  $("#search-btn").on("click", function () {
    var city = $("#city-input").val();
    if (city === "") return;
 
    // 요청 주소 만들기 (?뒤에 옵션을 &로 연결)
    var url = "https://api.openweathermap.org/data/2.5/weather"
            + "?q=" + city
            + "&appid=" + apiKey
            + "&units=metric"  // 섭씨 온도
            + "&lang=kr";      // 한국어 설명
 
    // $.getJSON: 요청을 보내고, 응답이 도착하면 콜백 실행 (비동기)
    $.getJSON(url, function (data) {
      // data 구조가 궁금하면 주석 해제: console.log(data);
      var html = "<h2>" + data.name + "</h2>"
               + "<p>기온: " + data.main.temp + "°C</p>"
               + "<p>날씨: " + data.weather[0].description + "</p>";
 
      $("#result").html(html); // 태그 포함 문자열을 HTML로 렌더링
    })
    .fail(function () {
      // 요청 실패(없는 도시, 키 오류 등) 시 실행
      $("#result").html("<p>도시를 찾을 수 없습니다.</p>");
    });
  });
 
  // Enter 키로도 검색
  $("#city-input").on("keypress", function (e) {
    if (e.which === 13) {
      $("#search-btn").click();
    }
  });
 
});