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
  if (code == "map") {
    $("#about_introduc").show();
    $("#about_introduc").siblings().hide();
    $("#map").addClass("addactive").siblings().removeClass("addactive");
  } else if (code == "name") {
    $("#about_culture").show();
    $("#about_culture").siblings().hide();
    $("#name").addClass("addactive").siblings().removeClass("addactive");
  } else if (code == "my") {
    $("#about_branch").show();
    $("#about_branch").siblings().hide();
    $("#my").addClass("addactive").siblings().removeClass("addactive");
  }
}

$(document).ready(function () {
  // console.info(url);
  var code = getUrlParam(url, "code");
  showhide(code);
});

function renderMap() {
  // 创建地图实例
  var map = new BMapGL.Map("container");

  // 创建点坐标 上海市静安区天目中路267号蓝宝石大厦
  var point = new BMapGL.Point(121.47654,31.25287);

  // 初始化地图，设置中心点坐标和地图级别
  map.centerAndZoom(point, 18);

  var new_point = new BMapGL.Point(121.47654,31.25287);
  var marker = new BMapGL.Marker(new_point); // 创建标注
  // map.addOverlay(marker); // 将标注添加到地图中
  
  map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放

  var sContent ="上海市静安区天目中路267号蓝宝石大厦";
  var infoWindow = new BMapGL.InfoWindow(sContent);  // 创建信息窗口对象
	map.openInfoWindow(infoWindow,point); //开启信息窗口

	// marker.setLabel(label);
  map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
}

renderMap();
