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
function showhide(code){
    if(code == 'introduc'){
        $("#about_introduc").show();
        $("#about_introduc").siblings().hide();
        $("#introduc").addClass("addactive").siblings().removeClass("addactive");
    }else if (code == 'culture') {
        $("#about_culture").show();
        $("#about_culture").siblings().hide();
        $("#culture").addClass("addactive").siblings().removeClass("addactive");
   }else if (code == 'branch'){
        $("#about_branch").show();
        $("#about_branch").siblings().hide();
        $("#branch").addClass("addactive").siblings().removeClass("addactive");
    }else if(code == 'backpack'){
        $("#about_backpack").show();
        $("#about_backpack").siblings().hide();
        $("#backpack").addClass("addactive").siblings().removeClass("addactive");
    }

}

$(document).ready(function () {
    console.info(url);
    var code = getUrlParam(url, 'code');
    showhide(code);
})

