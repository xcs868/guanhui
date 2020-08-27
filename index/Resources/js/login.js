$(function () {
    $("#nav li:first").bind("click", bg1 = function () {
        $(this).css("color", "#1086fd");
        $(this).siblings().css("color", "#ccc");

    }).bind("click", content1 = function () {
        $("#dayTask").show();
        // $(".remember").show();
        $("#growTask").hide();
    });
    $("#nav li:last").bind("click", bg2 = function () {
        $(this).css("color", "#1086fd");
        $(this).siblings().css("color", "#ccc");

    }).bind("click", content2 = function () {
        $("#dayTask").hide();
        // $(".remember").hide();

        $("#growTask").show();
    });
    /*$("#del").click(function(){
        $("#nav li:first").unbind("click", content1)
    });*/
    var url = window.location;

    function getUrlParam(url, name) {
        var pattern = new RegExp("[?&]" + name + "\=([^&]+)", "g");
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

    $(document).ready(function () {
        var code = getUrlParam(url, 'code');
        if (code == 10) {
            $("#dayTask").show();
            $("#growTask").hide();

        } else {
            $("#dayTask").hide();
            $("#growTask").show();
            $(".first_zc").css("color", "#1086fd");
            $(".first_zc").siblings().css("color", "#ccc");
            $("title").html("冠辉---注册");
        }


        $("#del").click(function () {
            $("#nav li:first").unbind();
        });
        $("input").bind('input propertychange', function () {
            if ($(".home_input").val() != "") {
                $("#input_zc").css({"background": "#3990FC", "color": "white"});
            } else {
                $("#input_zc").css({"background": "rgb(204, 204, 204)", "color": "white"});
            }
        })
        $("input").bind('input propertychange', function () {
            if ($(".home_inputt").val() != "") {
                $("#input_zc").css({"background": "#3990FC", "color": "white"});
            } else {
                $("#input_zc").css({"background": "rgb(204, 204, 204)", "color": "white"});
            }
        })
    })

});