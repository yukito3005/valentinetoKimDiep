const textConfig = {
  text1: "Helooo cậu!",
  text2: "Tớ có điều này muốn nói với Cậu...",
  text3: "Cậu yêu tớ nhiều lắm hok nào ._.",
  text4: "Nếu cậu ko trả lời mà thoát ra tức là muốn làm vợ tớ rùi đó nha :v",
  text5: "Mơ đi cậu à???",
  text6: "Yêu ơi là yêu <3",
  text7: "Cậu có điều gì muốn nhắn nhủ với tớ hok nè",
  text8: "Gửi cho tớ ngay nào <<<3",
  text10: "Tớ nhận được òi ^^ Love U 3000",
  text11: "và Tớ cũng có điều này muốn nói với Cậu...",
  text12: "Xem tiếp nào <3",
  
  text13: "Hy vọng Cậu có một ngày đầy tình yêu, niềm vui và ấm áp bên tớ nhé. Hãy trân trọng những khoảnh khắc đẹp bên nhau và luôn gửi đến nhau những lời yêu thương và hãy chăm sóc nhau suốt cả cuộc đời .",
  text14: "Okii lunn <3",
  text15: "Làm thật giỏi nè, chiều xong sớm Tớ qua chở Cậu đi ăn hen!!!",
  text16: "love U <3",
};

$(document).ready(function () {
  // process bar
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);

  $("#text3").html(textConfig.text3);
  $("#text4").html(textConfig.text4);
  $("#no").html(textConfig.text5);
  $("#yes").html(textConfig.text6);

  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "img/cuteCat.jpg",
      imageWidth: 400,
      imageHeight: 300,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
    });
  }

  // switch button position
  function switchButton() {
    var audio = new Audio("sound/duck.mp3");
    audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }
  // move random button póition
  function moveButton() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    if (screen.width <= 600) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 500;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });

  // generate text in input
  

  // show popup
  $("#yes").click(function () {
    var audio = new Audio("sound/tick.mp3");
    audio.play();
    Swal.fire({
      title: textConfig.text7,
      html: true,
      width: 900,
      padding: "3em",
      html: "<input type='text' class='form-control' id='txtReason'  placeholder='gõ vào đây lè....'>",
      background: '#fff url("img/iput-bg.jpg")',
      backdrop: `
                    rgba(0,0,123,0.4)              
                    left top
                    no-repeat
                  `,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#fe8a71",
      cancelButtonColor: "#f6cd61",
      confirmButtonText: textConfig.text8,
    }).then((result) => {
      if (result.value) {
        Swal.fire({
  width: 900,
  confirmButtonText: textConfig.text12,
  background: '#fff url("img/iput-bg.jpg")',
  title: textConfig.text10,
  text: textConfig.text11,
  confirmButtonColor: "#83d0c9",
}).then(() => {
  Swal.fire({
    title: textConfig.text13,
    width: 900,
    padding: "3em",
    background: '#fff url("img/iput-bg.jpg")',
    backdrop: `
      rgba(0,0,123,0.4)              
      left top
      no-repeat
    `,
    showCancelButton: false,
    confirmButtonColor: "#fe8a71",
    confirmButtonText: textConfig.text16,
  }).then(() => {
    Swal.fire({
      title: textConfig.text15,
      width: 900,
      padding: "3em",
      background: '#fff url("img/iput-bg.jpg")',
      backdrop: `
        rgba(0,0,123,0.4)              
        left top
        no-repeat
      `,
      showCancelButton: false,
      confirmButtonColor: "#fe8a71",
      confirmButtonText: textConfig.text14,
    });
  });
});



      }
    });

    $("#txtReason").focus(function () {
      var handleWriteText = setInterval(function () {
        textGenerate();
      }, 10);
      $("#txtReason").blur(function () {
        clearInterval(handleWriteText);
      });
    });
  });
});
