$(function () {
  function url() {
    var url = location.href;
    var urlstatus = false;
    var https = url.split("=")[1];
    var http = url.split("=")[2];

    if (url.split("&")[2] !== undefined) {
      var hash = url.split("&")[2];
      var route = hash.split("=")[1];
    }

    $("#navbar-nav a").each(function () {
      if (
        (url + "/").indexOf($(this).attr("href")) !== -1 &&
        $(this).attr("href") != ""
      ) {
        $(this).addClass("color");
        urlstatus = true;
      } else {
        $(this).removeClass("color");
      }
    });

    if (!urlstatus) {
      if (https === "index") {
        $("#navbar-nav .home a").eq(0).addClass("color");
        $("#navbar-nav li").removeClass("color");
      }
      if (
        http === "aboutGuanHui" ||
        route === "introduc" ||
        route === "culture" ||
        route === "branch" ||
        route === "backpack"
      ) {
        $("#navbar-nav .home  a").eq(1).addClass("color");
        $("#navbar-nav li").removeClass("color");
      }
      if (
        http === "newtrend" ||
        route === "industry" ||
        route === "dynamic" ||
        route === "detailpages" ||
        route === "detailpage" ||
        route === "industryOne" ||
        route === "industryTwo" ||
        route === "industryThree"
      ) {
        $("#navbar-nav .home  a").eq(6).addClass("color");
        $("#navbar-nav li").removeClass("color");
      }
      if (
        http === "customer" ||
        route === "commonsense" ||
        route === "priceinquiry" ||
        route === "priceinquirymessage"
      ) {
        $("#navbar-nav .home a").eq(9).addClass("color");
        $("#navbar-nav li").removeClass("color");
      }
      if (http === "servicecase") {
        $("#navbar-nav a").eq(12).addClass("color");
        $("#navbar-nav li").removeClass("color");
      }
      if (
        http === "contactus" ||
        route === "map" ||
        route === "name" ||
        route === "my"
      ) {
        $("#navbar-nav a").eq(13).addClass("color");
        $("#navbar-nav li").removeClass("color");
      }
    }
  }
  url();
  //退出

  $("#loginout").click(function () {
    localStorage.clear("code");
    location.href = "./index.php?c=login&m=doDrop";
  });

  $("#navbar-nav>li").hover(
    function () {
      // alert("1")
      $(this).css("background", "#231815");
      $(this).siblings().css("background", "#0960b5");
      $(this).children(".navbar_ul").show();
      $(this).siblings().children(".navbar_ul").hide();
    },
    function () {
      $(this).css("background", "#0960b5");
      $(this).siblings().css("background", "#0960b5");
      $(this).children(".navbar_ul").hide();
    }
  );

  $(".journ_div").each(function (i) {
    var divH = $(this).height();
    console.log(divH);
    var $p = $(".journ_twop");
    $(this).children(".journ_twop").attr("title", $p.text());

    while ($p.outerHeight() > divH) {
      $p.text($p.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
    }
  });

  $("#introduc").click(function () {
    $("#about_introduc").show();
    $("#about_introduc").siblings().hide();
  });
  $("#culture").click(function () {
    $("#about_culture").show();
    $("#about_culture").siblings().hide();
  });
  $("#branch").click(function () {
    $("#about_branch").show();
    $("#about_branch").siblings().hide();
  });
  $("#backpack").click(function () {
    $("#about_backpack").show();
    $("#about_backpack").siblings().hide();
  });
});
