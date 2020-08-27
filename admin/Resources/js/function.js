var	divSubFrom;
var XLong;
var YLong;
var board_top_dif;         // マウスポインタと子ウィンドウのY座標の差分
var board_left_dif;        // マスポインタと子ウィンドウのX座標の差分
var SystemPath;
var LayerMaxNo=10000;		//Layer Max-Zindex Value				

var mouse_X;
var mouse_Y;
var mouseDown="false";

//------------------------------------------------------------------------------
var subFormName="";
var subLayerName="";
var subFormZindex="";
var subFormPositionX="";
var subFormPositionY="";

var strDelRecord = "真的要删除此数据吗？";
function changePassword(){
	processOrder_ScrollTop = document.documentElement.scrollTop;
	winWidth = document.documentElement.clientWidth;
	winHeight = document.documentElement.clientHeight;
	URL = "./_changePassword.php";
	URL += '?id='+Math.random();
	
	change_password_frame = new Window({
		className: "alphacube", 
		title: "数据导入", 
		width:650, height:300 , top:(winHeight-300)/2, left:(winWidth-650)/2,
		destroyOnClose:true
	}); 
	change_password_frame.setAjaxContent(URL);
	change_password_frame.show(true);
}

function closeChangePassword(){
	change_password_frame.close();
}

function saveUserPassword(){
	
	strData = "oldPassword="+$("oldPassword").value;
	strData += "&newPassword="+$("newPassword").value;
	strData += "&chkPassword="+$("chkPassword").value;
	//alert(strData);
	strURL='_savePassword.php' + '?id=' +Math.random();
	new Ajax.Request(strURL, {method: 'post' ,parameters: strData,  onComplete: saveUserPassword_Receive});
}

function saveUserPassword_Receive(httpObj){
	text = httpObj.responseText;
	
	t=text.parseJSON();
	if(t.code=200){
		closeChangePassword();
	}
	alert(t.message);
}

function mainMenuLeft(){
	$("mainMenuBar").scrollLeft = $("mainMenuBar").scrollLeft-92;
}

function mainMenuRight(){
	$("mainMenuBar").scrollLeft = $("mainMenuBar").scrollLeft+92;
}

function subMenuLeft(){
	$("subMenuBar").scrollLeft = $("subMenuBar").scrollLeft-102;
}

function subMenuRight(){
	$("subMenuBar").scrollLeft = $("subMenuBar").scrollLeft+102;
}

function getPageSize(){
	var xScroll, yScroll;
	if (window.innerHeight && window.scrollMaxY) {
		xScroll = document.body.scrollWidth;
		yScroll = window.innerHeight + window.scrollMaxY;
	} else if (document.body.scrollHeight > document.body.offsetHeight){ // all but Explorer Mac
		xScroll = document.body.scrollWidth;
		yScroll = document.body.scrollHeight;
	} else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari
		xScroll = document.body.offsetWidth;
		yScroll = document.body.offsetHeight;
	}

	var windowWidth, windowHeight;
	if (self.innerHeight) {	// all except Explorer
		windowWidth = self.innerWidth;
		windowHeight = self.innerHeight;
	} else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
		windowWidth = document.documentElement.clientWidth;
		windowHeight = document.documentElement.clientHeight;
	} else if (document.body) { // other Explorers
		windowWidth = document.body.clientWidth;
		windowHeight = document.body.clientHeight;
	}

	// for small pages with total height less then height of the viewport
	if(yScroll < windowHeight){
		pageHeight = windowHeight;
	} else {
		pageHeight = yScroll;
	}
	// for small pages with total width less then width of the viewport
	if(xScroll < windowWidth){
		pageWidth = windowWidth;
	} else {
		pageWidth = xScroll;
	}
	arrayPageSize = new Array(pageWidth,pageHeight,windowWidth,windowHeight)
	return arrayPageSize;
}

function getBrowserName(){
	var name = "";
	if( navigator.appName.charAt(0)=="N" ) name = "Mozilla";
	if( navigator.appVersion.indexOf( "KHTML" ) > -1 ) name = "Safari";
	if( navigator.appName.charAt(0)=="M" ) name = "IE";
	//alert(name);
	return name;
}

function FormatNumber(text) {
	//alert(text);
	var regex = /^\d[\d,]*([.]\d{1,2})?$/; // 123,456.09 or 123456 or 1,23,,,45,6.09 or 123456,,,,,.09
	if (!text.match(regex)) {
		//alert('format is error');
		//return "error";
		return 0;
	}

	// remove all commas
	text = text.replace(/,/g, "");
	
	var nums = null;
	if (text.indexOf(".") != -1) {
		nums = text.split(/[.]/);
		nums[0] += "";
	} else {
		nums = new Array();
		nums[0] = text;
		nums.length = 1;
	}
	// format
	var offsetPos = 0;
	var numParts = "";
	var integers = "";
	
	if (nums[0].length > 3) {
		offsetPos = nums[0].length % 3;
		integers = nums[0].substring(0, offsetPos);
		for (var i = 0; i < Math.floor(nums[0].length / 3); i++) {
			numParts[i] = nums[0].substr(offsetPos, 3);
			if (integers.length > 0) {
				integers += "," + nums[0].substr(offsetPos, 3);
			} else {
				integers += nums[0].substr(offsetPos, 3);
			}
			offsetPos += 3;
		}
	}else{
		integers = nums[0];
	}
	
	if (nums[1] != null) {
		return integers + "." + nums[1];
	} else {
		return integers;
	}
}

function IsNumber(string,sign){
	var number;
	if (string==null) return false;
	if ((sign!=null) && (sign!='-') && (sign!='+')){
		alert('IsNumber(string,sign)的参数出错：\nsign为null或"-"或"+"');
		return false;
	}
	number = new Number(string);
	if (isNaN(number)){
		return false;
	}
	else if ((sign==null) || (sign=='-' && number<0) || (sign=='+' && number>0)){
		return true;
	}
	else
		return false;
}

function IsInteger(string ,sign){ 
	var integer;
	if ((sign!=null) && (sign!='-') && (sign!='+')){
		alert('IsInter(string,sign)的参数出错：\nsign为null或"-"或"+"');
		return false;
	}
	integer = parseInt(string);
	if (isNaN(integer)){
		return false;
	}else if (integer.toString().length==string.length){ 
		if ((sign==null) || (sign=='-' && integer<0) || (sign=='+' && integer>0)){
			return true;
		}else
			return false; 
	}else{
		return false;
	}
}

function IsNumber(string,sign){
	var number;
	if (string==null) return false;
	if ((sign!=null) && (sign!='-') && (sign!='+')){
		alert('IsNumber(string,sign)的参数出错：\nsign为null或"-"或"+"');
		return false;
	}
	
	number = new Number(string);
	if (isNaN(number))	{
		return false;
	}else if ((sign==null) || (sign=='-' && number<0) || (sign=='+' && number>0)){
		return true;
	}else
		return false;
}

function SpecialString(string,compare,BelongOrNot){
	if ((string==null) || (compare==null) || ((BelongOrNot!=null) && (BelongOrNot!=true) && (BelongOrNot!=false))){
		alert('function SpecialString(string,compare,BelongOrNot)参数错误');
		return false;
	}
	
	if (BelongOrNot==null || BelongOrNot==true){
		for (var i=0;i<string.length;i++){
			if (compare.indexOf(string.charAt(i))==-1)
				return false
		}
		return true;
	}else{
		for (var i=0;i<string.length;i++){
			if (compare.indexOf(string.charAt(i))!=-1)
			return false
		}
		return true;
	}
}


function isChkDate(datestr) {
  // 正規表現による書式チェック
  if(!datestr.match(/^(\d{4})-(\d{2})-(\d{2})$/)){
	//alert('not match');
    return false;
  }
  var vYear  = datestr.substr(0, 4) - 0;
  var vMonth = datestr.substr(5, 2) - 1; // Javascriptは、0-11で表現
  var vDay   = datestr.substr(8, 2) - 0;
  // 月,日の妥当性チェック
  if(vMonth >= 0 && vMonth <= 11 && vDay >= 1 && vDay <= 31){
    var vDt = new Date(vYear, vMonth, vDay);
    if(isNaN(vDt)){
	  //alert('vDt error');
      return false;
    }else if(vDt.getFullYear() == vYear && vDt.getMonth() == vMonth && vDt.getDate() == vDay){
	  //alert('OK');
      return true;
    }else{
	  //alert('getFullYear error');
      return false;
    }
  }else{
	//alert('MD error');
    return false;
  }
}

function IsDate(DateString , Dilimeter){
	if (DateString==null) return false;
	if (Dilimeter=='' || Dilimeter==null) Dilimeter = '-';
	var tempy='';
	var tempm='';
	var tempd='';
	var tempArray;
	if (DateString.length<8 && DateString.length>10) return false; 
	tempArray = DateString.split(Dilimeter);
	if (tempArray.length!=3) return false;
	if (tempArray[0].length==4)	{
		tempy = tempArray[0];
		tempd = tempArray[2];
	}else{
		tempy = tempArray[2];
		tempd = tempArray[1];
	}
	tempm = tempArray[1];
	var tDateString = tempy + '/'+tempm + '/'+tempd+' 8:0:0';//加八小时是因为我们处于东八区
	var tempDate = new Date(tDateString);
	if (isNaN(tempDate)) return false;
	if (((tempDate.getUTCFullYear()).toString()==tempy) && (tempDate.getMonth()==parseInt(tempm)-1) && (tempDate.getDate()==parseInt(tempd))){
		return true;
	}else{
		return false;
	}
}

function isChkDateHHMM(datestr) {
  // 正規表現による書式チェック
  //alert(datestr);
  if(!datestr.match(/^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})$/)){
    return false;
  }
  var vYear  = datestr.substr(0, 4) - 0;
  var vMonth = datestr.substr(5, 2) - 1; // Javascriptは、0-11で表現
  var vDay   = datestr.substr(8, 2) - 0;
  var vHour  = datestr.substr(11, 2) - 0;
  var vMin   = datestr.substr(14, 2) - 0;
  // 月,日の妥当性チェック
  if(vMonth >= 0 && vMonth <= 11 && vDay >= 1 && vDay <= 31){
    var vDt = new Date(vYear, vMonth, vDay);
    if(isNaN(vDt)){
	  //alert('vDt error');
      return false;
    }else if(vDt.getFullYear() == vYear && vDt.getMonth() == vMonth && vDt.getDate() == vDay){
	  if(vHour >= 0 && vHour <= 24 && vMin >= 0 && vMin <= 59){
		  //alert('OK');
	      return true;
	  }else{
		  //alert('NG');
	      return false;
	  }
    }else{
	  //alert('getFullYear error');
      return false;
    }
  }else{
	//alert('MD error');
    return false;
  }
}

function getObjForURIComponent(obj){
	strURIComponent = "";

	if(obj.tagName=="INPUT"){
		if (obj.type == 'checkbox'){
			if(obj.checked){
				strURIComponent = obj.name+"=1";
			}else{
				strURIComponent =  obj.name+"=0";
			}
		}else if(obj.type == 'radio'){
			if(obj.checked){
				strURIComponent =  obj.name+"="+obj.value;
			}
		}else{
			strURIComponent =  obj.id+"="+encodeURIComponent(obj.value);
		}
	}else if(obj.tagName=="TEXTAREA"){
		strURIComponent =  obj.id+"="+encodeURIComponent(obj.value);
	}else if(obj.tagName=="SELECT"){
		strURIComponent =  obj.id+"="+encodeURIComponent(obj.value);
	}
	if(strURIComponent!=""){
		strURIComponent = strURIComponent+"&";
	}
	return strURIComponent;
}

function reflashSession(){
	strURL='_loadSession.php?id=' +Math.random();
	new Ajax.Request(strURL, {method: 'post' ,  onComplete: reflashSession_Receive});
}

function reflashSession_Receive(httpObj){
	text = httpObj.responseText;
	$("getUserMessage").innerHTML = text;
}

function getObjectLocation(obj){
	var t=obj.offsetTop;
	var l=obj.offsetLeft;
	var objLocat = new Array();
	var e=obj;
	
	while(e=e.offsetParent){
		t+=e.offsetTop;
		l+=e.offsetLeft;
	}
	//alert("top="+t+"\nleft="+l)
	objLocat[0]=t;
	objLocat[1]=l;
	return objLocat;
}