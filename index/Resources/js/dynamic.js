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
  if (code == "industry") {
    $("#news_industry").show();
    $("#news_industry").siblings().hide();
    $("#industry").addClass("addactive").siblings().removeClass("addactive");
    $("#industry a").css({ color: "#5A86C1" });
    $("#dynamic a").css({ color: "#000" });
  } else if (code == "dynamic") {
    $("#news_dynamic").show();
    $("#news_dynamic").siblings().hide();
    $("#dynamic").addClass("addactive").siblings().removeClass("addactive");
    $("#industry a").css({ color: "#000" });
    $("#dynamic a").css({ color: "#5A86C1" });
  }
}

$(document).ready(function () {
  console.info(url);
  var code = getUrlParam(url, "code");
  showhide(code);
});

