$(function () {
  var str = document.getElementById('BZ')
  var span = document.getElementById('numberSize')
  str.addEventListener("input", function (e) {
    if (str.value.length > 500) return
     span.innerText = str.value.length
  });

  //客户留言
  $("#userAddMessage").click(function () {
    if ($("#BZ").val().trim() !== "") {
      if ($("#BZ").val().length < 500) {
        var msg_txt0 = $("#BZ").val();
        var msg = {msg_txt0:msg_txt0}
        // http://www.ghgylgl.com/index/index.php?c=message&m=addMessage
        $.ajax({
          url: "http://www.ghgylgl.com/index/index.php?c=message&m=addMessage",
          type: "POST",
          dataType: "json",
          data: msg,
          success: function (res) {
            if (res.code === 200) {
              clearTimeout(timeId);
              $("#module").text(res.mess);
              $("#BZ").val("");
              var timeId = setTimeout(() => {
                document.getElementById('numberSize').innerText = 0
                $("#module").text("");
              }, 2000);
            } else {
              $("#BZ").val("");
              window.location = "./index.php?c=login";
            }
          },
          error: function (e) {
            console.log(e);
          },
        });
      }else{
        document.getElementById('module').innerText = '请输入0-500个字'
      }
    }else{
      document.getElementById('module').innerText = '请输入内容'
    }
  });
});

var url = window.location;
function getUrlParam(url, name) {
  var pattern = new RegExp("[?&]" + name + "=([^&]+)", "g");
  var matcher = pattern.exec(url);
  var items = null;
  if (matcher != null) {
    try {
      items = decodeURIComponent(decodeURIComponent(matcher[1]));
    } catch (e) {
      try {
        items = decodeURIComponent(matcher[1]);
      } catch (e) {
        items = matcher[1];
      }
    }
  }
  return items;
}
function showhide(code) {
  if (code == "commonsense") {
    $("#about_backpack").show();
    $("#about_backpack").siblings().hide();
    $("#commonsense").addClass("addactive").siblings().removeClass("addactive");
    $("#footer").removeClass("dp0");
  }
  if (code === "priceinquiry") {
    $("#footer").addClass("dp0");
    $("#historyquery").show();
    $("#historyquery").siblings().hide();
    $("#culture").addClass("addactive").siblings().removeClass("addactive");
  }

  if (code === "priceinquirymessage") {
    $("#footer").removeClass("dp0");
    $("#message").show();
    $("#message").siblings().hide();
    $("#branch").addClass("addactive").siblings().removeClass("addactive");
  }
}

$(document).ready(function () {
  // console.info(url);
  var code = getUrlParam(url, "code");
  showhide(code);
});
