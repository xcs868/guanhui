// JavaScript Document
function loadOverlayFormHaveParam(url,subform,layer,PosiX,PosiY,zIndex){
	//var	strURL = SystemPath + "/Skeleton/order2/FormSearchOrder.php";
	var	strURL = SystemPath + url;
	//alert(strURL);
	subFormName=subform;//ord2SearchSubForm
	subLayerName=layer;//ord2SearchSubLayer
	subFormZindex=zIndex;//5010
	subFormPositionX=PosiX;//5010
	subFormPositionY=PosiY;//5010
	//alert(strURL+";"+subFormName+";"+subLayerName+";"+subFormZindex);
	ajax = new Ajax.Request(strURL,{
			asynchronous: false ,
			method: 'get',
			onFailure:AjaxonFailure
		}
	);
	loadOverlayFormReceive(ajax.transport);
}


function loadOverlayFormReceive(httpObj){
	text = httpObj.responseText;
	//alert(text);
	//setCloseSubForm('ord2SubForm','ord2SubLayer');
	//alert(subFormPositionX+","+subFormPositionY+","+document.documentElement.scrollTop);
	setOverlayform(text
			   	,subFormName
				,subLayerName
				,subFormPositionX
				,subFormPositionY + document.documentElement.scrollTop
				,subFormZindex);
	//$('MID').focus();
}

function setOverlayform(text,formid,backid,top,left,zindex){
	bod=document.getElementsByTagName('body')[0];
	overlay=document.createElement('div');
	overlay.id=backid;
	
	lb							=document.createElement('div');
	lb.id						=formid;
	//lb.className				=formid;
	lb.style.top				=left+"px"; 
	lb.style.left				=top +"px"; 
	lb.style.display			="block"; 
	lb.style.position			="absolute"; 
	lb.style.zIndex				=zindex+10;
	lb.style.filter				="alpha(opacity=100)";
	//alert(text);
	lb.innerHTML 				= text;

	overlay.style.display		="block";
	overlay.style.position		="absolute";
	overlay.style.left			="0px";
	overlay.style.top			="0px";
	overlay.style.width			="2000px"; 
	overlay.style.height		="2000px"; 
	overlay.style.zIndex		=zindex;
	overlay.style.filter		="alpha(opacity=40)";
	overlay.style.mozopacity	=0.6;
	overlay.style.opacity		=0.60;
	overlay.style.backgroundColor="#DDDDDD";
	bod.appendChild(overlay);
	
	bod.appendChild(lb);

	//alert(14);
}





function loadFormHaveParam(url,subform,layer,PosiX,PosiY,zIndex){
	//var	strURL = SystemPath + "/Skeleton/order2/FormSearchOrder.php";
	var	strURL = SystemPath + url + "?id=" + Math.random();
	//alert(strURL);
	subFormName=subform;//ord2SearchSubForm
	subLayerName=layer;//ord2SearchSubLayer
	subFormZindex=zIndex;//5010
	subFormPositionX=PosiX;//5010
	subFormPositionY=PosiY;//5010
	//alert(strURL+";"+subFormName+";"+subLayerName+";"+subFormZindex);
	ajax = new Ajax.Request(strURL,{
			asynchronous: false ,
			method: 'get',
			onFailure:AjaxonFailure
		}
	);
	loadFormReceive(ajax.transport);
}


function loadFormReceive(httpObj){
	text = httpObj.responseText;
	//alert(text);
	//setCloseSubForm('ord2SubForm','ord2SubLayer');
	//alert(subFormPositionX+","+subFormPositionY+","+document.documentElement.scrollTop);
	setform(text
			   	,subFormName
				,subLayerName
				,subFormPositionX
				,subFormPositionY + document.documentElement.scrollTop
				,subFormZindex);
	//$('MID').focus();
}

function setform(text,formid,backid,top,left,zindex){
	bod=document.getElementsByTagName('body')[0];
	if($(formid)==null){
		lb						=document.createElement('div');
	}else{
		lb 						=$(formid);
	}
	lb.id						=formid;
	//lb.className				=formid;
	lb.style.top				=left+"px"; 
	lb.style.left				=top +"px"; 
	lb.style.display			="block"; 
	lb.style.position			="absolute"; 
	lb.style.zIndex				=zindex+10;
	//lb.style.filter				="alpha(opacity=100)";
	//alert(text);
	lb.innerHTML 				= text;
	bod.appendChild(lb);
	
	//alert(14);
}

function loadSubFormHaveParam(url,subform,layer,PosiX,PosiY,zIndex){
	//var	strURL = SystemPath + "/Skeleton/order2/FormSearchOrder.php";
	var	strURL = SystemPath + url + "&id=" + Math.random();
	//alert(strURL);
	subFormName=subform;//ord2SearchSubForm
	subLayerName=layer;//ord2SearchSubLayer
	subFormZindex=zIndex;//5010
	subFormPositionX=PosiX;//5010
	subFormPositionY=PosiY;//5010
	//alert(strURL+";"+subFormName+";"+subLayerName+";"+subFormZindex);
	ajax = new Ajax.Request(strURL,{
			asynchronous: false ,
			method: 'get',
			onFailure:AjaxonFailure
		}
	);
	loadSubFormReceive(ajax.transport);
}

function reloadSubFormHaveParam(url,subform){
	var	strURL = SystemPath + url + "&id=" + Math.random();
	//alert(strURL);
	subFormName=subform;//ord2SearchSubForm
	ajax = new Ajax.Request(strURL,{
			asynchronous: false ,
			method: 'get',
			onFailure:AjaxonFailure
		}
	);
	reloadSubFormReceive(ajax.transport);
}

function loadSubForm(url,subform,layer,PosiX,PosiY,zIndex){
	//var	strURL = SystemPath + "/Skeleton/order2/FormSearchOrder.php";
	if(url.indexOf("?")>=0){
		var	strURL = SystemPath + url + "&id=" + Math.random();
	}else{
		var	strURL = SystemPath + url + "?id=" + Math.random();
	}
	//alert(strURL);
	subFormName=subform;//ord2SearchSubForm
	subLayerName=layer;//ord2SearchSubLayer
	subFormZindex=zIndex;//5010
	subFormPositionX=PosiX;//5010
	subFormPositionY=PosiY;//5010
	//alert(subFormPositionX);
	//alert(strURL+";"+subFormName+";"+subLayerName+";"+subFormZindex);
	ajax = new Ajax.Request(strURL,{
			asynchronous: false ,
			method: 'get',
			onFailure:AjaxonFailure
		}
	);
	loadSubFormReceive(ajax.transport);
}

function loadSubFormReceive(httpObj){
	text = httpObj.responseText;
	//alert(text);
	//setCloseSubForm('ord2SubForm','ord2SubLayer');
	//alert(subFormPositionX+","+subFormPositionY+","+document.documentElement.scrollTop);
	setSubform(text
			   	,subFormName
				,subLayerName
				,subFormPositionX
				,subFormPositionY + document.documentElement.scrollTop
				,subFormZindex);
	//$('MID').focus();
}

function reloadSubFormReceive(httpObj){
	text = httpObj.responseText;
	RefreshSubform(text
					,subFormName);
	//setLoadingNow();
}

function AjaxonFailure(){
	alert(strErrAjaxonFailure);
	ClosePross();
}

function accMul(arg1,arg2)
{
    var m=0,s1=arg1.toString(),s2=arg2.toString();
    try{m+=s1.split(".")[1].length}catch(e){}
    try{m+=s2.split(".")[1].length}catch(e){}
    return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m)
}

function setCloseSubForm(formid,backid,closeFun){	
	
	if(closeFun   ==   void   0) {  
		//closeFunction=null;
	}else{
		closeFun.CloseFrom();
	}
	bod=document.getElementsByTagName('body')[0];
	overlay=document.getElementById(backid);
	if(overlay!=null) bod.removeChild(overlay);
	lb=document.getElementById(formid);
	if(lb!=null) lb.parentNode.removeChild(lb);
	
	//return true;
}

function setSubform(text,formid,backid,top,left,zindex){
	bod=document.getElementsByTagName('body')[0];
	overlay=document.createElement('div');
	overlay.id=backid;

	/*overlay.style.display		="block";
	overlay.style.position		="absolute";
	overlay.style.left			="0px";
	overlay.style.top			="0px";
	overlay.style.width			="2000px"; 
	overlay.style.height		="2000px"; 
	overlay.style.zIndex		=zindex;
	overlay.style.filter		="alpha(opacity=40)";
	overlay.style.mozopacity	=0.6;
	overlay.style.opacity		=0.60;
	overlay.style.backgroundColor="#DDDDDD";*/

	if($(formid)==null){
		lb						=document.createElement('div');
	}else{
		lb						=$(formid);
	}
	lb.id						=formid;
	//lb.className				=formid;
	lb.style.top				=left+"px"; 
	lb.style.left				=top +"px"; 
	lb.style.display			="block"; 
	lb.style.position			="absolute"; 
	lb.style.zIndex				=zindex+10;
	lb.style.filter				="alpha(opacity=100)";
	//alert(text);
	lb.innerHTML 				= text;
	bod.appendChild(overlay);
	bod.appendChild(lb);
	//alert(14);
}

function RefreshSubform(text,formid){
	lb							=document.getElementById(formid);
	lb.innerHTML 				= text;
}

function setCloseSubFormNolayer(formid){
	bod=document.getElementsByTagName('body')[0];
	lb=document.getElementById(formid);
	bod.removeChild(lb);
	return true;
}


function loadSubFormNolayer(url,subform,PosiX,PosiY,zIndex){
	//AddPross();
	//setLoadingNow();
	var	strURL = SystemPath + url + "?id=" + Math.random();
	strURL+="&formname="+subform;
	subFormName=subform;//ord2SearchSubForm
	subFormZindex=zIndex;//5010
	subFormPositionX=PosiX;//5010
	subFormPositionY=PosiY;//5010
	new Ajax.Request(strURL,{
			onComplete: loadSubFormNolayerReceive,
			method: 'get',
			onFailure:AjaxonFailure
		}
	);
	return;
}

function loadSubFormNolayerReceive(httpObj){
	text = httpObj.responseText;
	setSubformNolayerText(text
			   	,subFormName
				,subFormPositionY + document.documentElement.scrollTop
				,subFormPositionX
				,subFormZindex);
	/*
	*/
}

function setSubformNolayerText(text,formid,top,left,zindex){
	bod=document.getElementsByTagName('body')[0];
	lb							=document.createElement('div');
	lb.id						=formid;
	//lb.className				=formid;
	lb.style.top				=left+"px"; 

	lb.style.left				=top +"px"; 
	lb.style.display			="block"; 
	lb.style.position			="absolute"; 
	lb.style.zIndex				=zindex+10;
	lb.style.filter				="alpha(opacity=100)";
	lb.innerHTML 				= text;
	bod.appendChild(lb);
	/*
	*/
	//alert("0987654");
	//ClosePross();

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

function getCallUrl(url1,url2){
	var bname = getBrowserName();
	//alert(bname);
	var url="";
	if(bname!="Mozilla"){
		url=url1+url2;
	} else {
		url=url2;
	}
	//alert(url);
	return url;
}

function getBrowserName(){
	var name = "";
	if( navigator.appName.charAt(0)=="N" ) name = "Mozilla";
	if( navigator.appVersion.indexOf( "KHTML" ) > -1 ) name = "Safari";
	if( navigator.appName.charAt(0)=="M" ) name = "IE";
	//alert(name);
	return name;
}

function getConvForSafari ( text ) {
	if ( navigator.appVersion.indexOf( "KHTML" ) > -1 ) {
		var esc = escape( text );
		if ( esc.indexOf("%u") < 0 && esc.indexOf("%") > -1 ) {
			text = decodeURIComponent( esc );
		}
	}
	return text;
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

function setBgcolor(mObj,mColor) {
	mObj.style.background = mColor;
}

function highlight(mObj) {
	mObj.style.background = '#CCFFCC';
	mObj.style.borderTopColor = '#000000';
	mObj.style.borderBottomColor = '#000000';
}

function unhighlight(mObj,mColor,mTBColor) {
	mObj.style.background = mColor;
	mObj.style.borderTopColor = mTBColor;
	mObj.style.borderBottomColor = mTBColor;
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
/**
LogicalValue:用于判断对象的值是否符合条件，现已提供的选择有：
integer：整型，还可判断正整型和负整型
number ：数值型，同样可判断正负
date ：日期型，可支持以自定义分隔符的日期格式，缺省是以'-'为分隔符
string ：判断一个字符串包括或不包括某些字符
返回值：
true或false

参数：
ObjStr ：对象标识符——对象名；
ObjType：对象类型('integer','number','date','string'之一)

其他说明：
当对象值为空时，则返回错误。

Author:PPDJ 

例子：
example 1:要求检验输入框text1的输入数据是否是"整型"数据，若不是，则提示
if (!LogicalValue('text1','integer')) alert('Error: Your must input a integer number');
example 2:要求检验输入框text1的输入数据是否是"正整型"数据，若不是，则提示 
if (!LogicalValue('text1','integer','+')) alert('Error: Your must input a positive integer number');
example 3:要求检验输入框text1的输入数据是否是"负整型"数据，若不是，则提示 
if (!LogicalValue('text1','integer','-')) alert('Error: Your must input a negative integer number');
exmaple 4:要求检验输入框text1的输入数据是否是数值，若不是，则提示 
if (!LogicalValue('text1','number')) alert('Error: Your must input a number');
exmaple 5:要求检验输入框text1的输入数据是否是"正"数值，若不是，则提示 
if (!LogicalValue('text1','number','+')) alert('Error: Your must input a number');
exmaple 6:要求检验输入框text1的输入数据是否是"负"数值，若不是，则提示 
if (!LogicalValue('text1','number','-')) alert('Error: Your must input a number');
example 7:要求检验输入框text1的输入数据是否是日期型，若不是，则提示
if (!LogicalValue('text1','date')) alert('Error: Your must input a logical date value');
若它的分隔符为A，"A"是一个变量，如常用的'-'和'/'，则用如下语法
if (!LogicalValue('text1','date',A)) alert('Error: Your must input a logical date value');
或当分隔符为'/'时
if (!LogicalValue('text1','date','/')) alert('Error: Your must input a logical date value');
当分隔符为'-'时，可不要参数'-'，可带上
example 8:要求检验输入框text1的输入表示颜色的字符串是否合理，若不合理，则提示
if (!LogicalValue('text1','string','0123456789ABCDEFabcdef')) alert('Error: Your must input a logical color value');
example 9:要求检验输入框text1的输入表示密码的字符串是否不含"'"@#$%&^*"这些字符，若含有，则提示
if (!LogicalValue('text1','string','\'"@#$%&^*',false)) alert('Error: Your password can not contain \'"@#$%&^*');
其中false表示不包含有某些字符，true表示必须是哪些字符，缺省值为true
*/

function LogicalValue(ObjStr,ObjType){
	var str='';
	if ((ObjStr==null) || (ObjStr=='') || ObjType==null){
		alert('函数LogicalValue缺少参数');
		return false;
	}
	var obj = document.all(ObjStr);
	if (obj.value=='') return false;
	for (var i=2;i<arguments.length;i++){ 
		if (str!='')str += ',';
		str += 'arguments['+i+']';
	}
	str=(str==''?'obj.value':'obj.value,'+str);
	var temp=ObjType.toLowerCase();
	if (temp=='integer'){
		return eval('IsInteger('+str+')');
	}else if (temp=='number'){
		return eval('IsNumber('+str+')');
	}else if (temp=='string'){
		return eval('SpecialString('+str+')');
	}else if (temp=='date'){
		return eval('IsDate('+str+')');
	}else{
		alert('"'+temp+'"类型在现在版本中未提供');
		return false;
	}
}

/**
IsInteger: 用于判断一个数字型字符串是否为整形，
还可判断是否是正整数或负整数，返回值为true或false
string: 需要判断的字符串
sign: 若要判断是正负数是使用，是正用'+'，负'-'，不用则表示不作判断
Author: PPDJ
sample:
var a = '123';
if (IsInteger(a))
{
alert('a is a integer');
}
if (IsInteger(a,'+'))
{
alert(a is a positive integer);
}
if (IsInteger(a,'-'))
{
alert('a is a negative integer');
}
*/

function IsInteger(string ,sign)
{ 
var integer;
if ((sign!=null) && (sign!='-') && (sign!='+'))
{
alert('IsInter(string,sign)的参数出错：\nsign为null或"-"或"+"');
return false;
}
integer = parseInt(string);
if (isNaN(integer))
{
return false;
}
else if (integer.toString().length==string.length)
{ 
if ((sign==null) || (sign=='-' && integer<0) || (sign=='+' && integer>0))
{
return true;
}
else
return false; 
}
else
return false;
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

function SpecialString(string,compare,BelongOrNot)
{
if ((string==null) || (compare==null) || ((BelongOrNot!=null) && (BelongOrNot!=true) && (BelongOrNot!=false)))
{
alert('function SpecialString(string,compare,BelongOrNot)参数错误');
return false;
}
if (BelongOrNot==null || BelongOrNot==true)
{
for (var i=0;i<string.length;i++)
{
if (compare.indexOf(string.charAt(i))==-1)
return false
}
return true;
}
else
{
for (var i=0;i<string.length;i++)
{
if (compare.indexOf(string.charAt(i))!=-1)
return false
}
return true;
}
}

function CloseWindows(){
	EditFreeList=document.getElementById("objEditFree");
	if(EditFreeList!=null){
		EditFreeList.focus();
	}
	bod=document.getElementsByTagName('body')[0];
	overlay=document.getElementById('overlay');
	bod.removeChild(overlay);
	lb=document.getElementById('lightbox');
	bod.removeChild(lb);
	try{
		//alert('CloseWindows')
		hideContextMenu();
	}catch(e){
		
	}
}

function CloseWindows1(){
	bod=document.getElementsByTagName('body')[0];
	overlay=document.getElementById('overlay1');
	bod.removeChild(overlay);
	lb=document.getElementById('lightbox1');
	bod.removeChild(lb);
}

function CloseWindows2(){
	bod=document.getElementsByTagName('body')[0];
	overlay=document.getElementById('overlay2');
	bod.removeChild(overlay);
	lb=document.getElementById('lightbox2');
	bod.removeChild(lb);
}

function CloseWindows3(){
	bod=document.getElementsByTagName('body')[0];
	overlay=document.getElementById('overlay3');
	bod.removeChild(overlay);
	lb=document.getElementById('lightbox3');
	bod.removeChild(lb);
}

function CloseWindows4(){
	bod=document.getElementsByTagName('body')[0];
	overlay=document.getElementById('overlay4');
	bod.removeChild(overlay);
	lb=document.getElementById('lightbox4');
	bod.removeChild(lb);
}

function CloseWindowsStockNo(){
	bod=document.getElementsByTagName('body')[0];
	lb=document.getElementById('StockNoForm');
	bod.removeChild(lb);
}

function getObjectLocation2(obj){
	var t=obj.offsetTop;
	var l=obj.offsetLeft;
	var objLocat = new Array();
	var e=obj;
	
	while(e=e.offsetParent){
		if(e.className=="dialog"){
			break;
		}
		t+=e.offsetTop;
		l+=e.offsetLeft;
	}
	
	//alert("top="+t+"\nleft="+l)
	objLocat[0]=t;
	objLocat[1]=l;
	return objLocat;
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

function mouseDownTitleBar(subFromDiv){
	mouseDown="true";
	divSubFrom=$(subFromDiv);
	//LayerMaxNo++;
	//divSubFrom.style.zIndex = LayerMaxNo;
	//var msg ='divSubFrom='+subFromDiv+";";
	//divSubFrom=document.getElementById(subFromDiv);
	//window.status='divSubFrom='+subFromDiv;
	if(document.all){ //e4,e5,e6用 
		x=document.body.scrollLeft+event.clientX; 
		y=document.body.scrollTop+event.clientY; 
		board_left_dif=x-divSubFrom.style.posLeft;
		board_top_dif=y-divSubFrom.style.posTop;
	}else if(document.getElementById) { //n6,n7,m1,o7,s1用 
		board_left_dif = mouse_X - parseInt(divSubFrom.style.left);
		board_top_dif  = mouse_Y - parseInt(divSubFrom.style.top);

	}
	//msg +='board_left_dif='+board_left_dif+";";
	//msg +='board_top_dif='+board_top_dif+";";
	//window.status='divSubFrom='+subFromDiv;
}

function mouseUpTitleBar(){
	mouseDown="false";
}

function setMouseMove(e){
	try{
		if(mouseDown=="true"){
			if(document.all){ //e4,e5,e6用 
				mouse_X=document.body.scrollLeft+event.clientX; 
				mouse_Y=document.body.scrollTop+event.clientY; 
				divSubFrom.style.left	= (mouse_X - board_left_dif);
				divSubFrom.style.top	= (mouse_Y - board_top_dif);
			}else if(document.getElementById) { //n6,n7,m1,o7,s1用 
				mouse_X=getMouseX(e);
				mouse_Y=getMouseY(e);
				divSubFrom.style.left	= (mouse_X - board_left_dif) + 'px';
				divSubFrom.style.top 	= (mouse_Y - board_top_dif)  + 'px';
			}
			//swfupload ButtonMoveing
			if($("btnBrowsedummy")!=null){
				$(swfu.movieName).style.left=getObjectLocation($("btnBrowsedummy"))[1]+"px";
				$(swfu.movieName).style.top=getObjectLocation($("btnBrowsedummy"))[0]+"px";
			}
		}
		//window.status = "X = " + getMouseX(e)+":Y = " + getMouseY(e);
	} catch (e) {
		alert(err.message);
	}
}

function DrepTitleBar(e){
	if(mouseDown=="true"){
		x=getMouseX(e);
		y=getMouseY(e);
		divSubFrom.style.left=x-XLong;
		divSubFrom.style.top=y-YLong;
	}
}

function getMouseX(e){
	if(navigator.userAgent.search("Opera(\ |\/)6") != -1 )	//o6用
		return e.clientX
	else if(document.all)									//e4,e5,e6用
		return document.body.scrollLeft+event.clientX
	else if(document.layers || document.getElementById)	//n4,n6,n7,m1,o7,s1用
		return e.pageX
}
function getMouseY(e){
	if(navigator.userAgent.search("Opera(\ |\/)6") != -1 )	//o6用
		return e.clientY
	else if(document.all)									//e4,e5,e6用
		return document.body.scrollLeft+event.clientY
	else if(document.layers || document.getElementById)	//n4,n6,n7,m1,o7,s1用
		return e.pageY
}

function ClosePross(){
	bod=document.getElementsByTagName('body')[0];
	overlay=document.getElementById('ProcessingBack');
	bod.removeChild(overlay);
	lb=document.getElementById('ProcessingBox');
	bod.removeChild(lb);
}

function AddPross(){
	//alert($('ProcessingBox'));
	if($('ProcessingBox')==null){

		var	strURL = SystemPath + "/ProgressList.php";
			strURL+= '?id=' + Math.random()
		ajax = new Ajax.Request(strURL,{asynchronous:false,method:'get'});
		var text = ajax.transport.responseText;
		text = getConvForSafari(text);
		var arrayPageSize = getPageSize();
		var top =(150 + document.documentElement.scrollTop);
		var left=(arrayPageSize[0]-400)/2
		setSubform(text,'ProcessingBox','ProcessingBack',top,left,11000);
	}
}

function AddProssReceive(httpObj){
	var text = httpObj.responseText;
	//alert(text);
	//text = getConvForSafari(text);
	var arrayPageSize = getPageSize();
	var top =(150 + document.documentElement.scrollTop);
	var left=(arrayPageSize[0]-400)/2
	setSubform(text,'ProcessingBox','ProcessingBack',top,left,11000);
	//alert(3);
}

function setNetworkError(){
	ClosePross();
	alert('Network Error!');
}

function setWriteSessionGroup(){
	strURL="./include/sessionWrite.php"
		+ "?currGID=" + $("GroupListValue").value
		+ "&currGNM=" + encodeURIComponent($("GroupListText").value)
		+ "&id=" + Math.random();
	//alert(strURL);
	new Ajax.Request(strURL, {method: 'get', onComplete: setWriteSessionGroupReceive});

}

function setWriteSessionGroupReceive(httpObj){
	var sbuf="";
}

function getHanNumber(object){
	if($(object)!=null){
		motoText=$(object).value;
		han  = "0123456789";
		han +="abcdefghijklmnopqrstuvwxyz";
		han +="ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
		han +=".,-+*/";
		zen  = "０１２３４５６７８９";
		zen += "ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ";
		zen += "ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ"; 
		zen += "．，－＋＊／";
		str = ""; 
		for (i=0; i<motoText.length; i++) { 
			c = motoText.charAt(i); 
			n = zen.indexOf(c,0); 
			if (n >= 0) c = han.charAt(n); 
			str += c; 
		}
		$(object).value=str;
	}
	//alert(str);
	//return str;
}

function setHiddenSelect(){
	var elems = document.getElementsByTagName("select");
	for (i = 0; i < elems.length; i++) {
	 elems[i].style.display = "none";
	}
}

function setVisibleSelect(){
	var elems = document.getElementsByTagName("select");
	for (i = 0; i < elems.length; i++) {
	 elems[i].style.display = "inline";
	}
}

function isChkNumber(obj){
	var number;
	if ($(obj)==null){
		//alert("null1");
		return false;
	}
	if ($(obj).value==null || $(obj).value==""){
		//alert("null2");
		return false;
	}
	number = $(obj).value.replace(/,/g,"");
	//number = number.replace(".","");
	//alert(number);
	number = new Number(number);
	if (isNaN(number)){
		alert($(obj).value+strMsgSearchNo);
		$(obj).value="";
		$(obj).focus();
		return true;
	} else {
		return false;
	}
}

function isChkStringLength(obj,num){
	if ($(obj)==null){
		//alert("null1");
		return false;
	}
	if ($(obj).value==null || $(obj).value==""){
		//alert("null2");
		return false;
	}
	var str = $(obj).value;
	var buf="";
	count = 0; 
	//alert(str);
	for (i=0; i<str.length; i++) { 
		n = escape(str.charAt(i));
		if (n.length < 4) count++; else count+=3;
		if(count<256) buf+=str.charAt(i);
	}
	if (count>255){
		alert('Too many charactor,Charactor was chenged By System');
		$(obj).value=buf;
		$(obj).focus();
		return true;
	} else {
		//alert("count="+count);
		return false;
	}
}
var tim=15*60*1000;
function callSetTimeout(){
	try{
		clearTimeout();
		setTimeout('callContinuSession()',tim);
	}catch(e){
		alert(e);
	}
}
function callContinuSession(){
	try{
		strURL = "./continuSession.php?id=" + Math.random();
		new Ajax.Request(strURL,{method: 'get',	onComplete: callContinuSessionReceive,onFailure:AjaxonFailure});	
	}catch(e){
		alert(e);
	}
}
function callContinuSessionReceive(){
	try{
		//alert('Continu Session');
		//clearTimeout();
		setTimeout('callContinuSession()',tim);
	}catch(e){
		alert(e);
	}
}


/***************************************************************
 * 機　能： 入力された値が日付でYYYY-MM-DD形式になっているか調べる
 * 引　数： datestr　入力された値
 * 戻り値： 正：true　不正：false
 ****************************************************************/
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

/***************************************************************
 * 機　能： 入力された値が日付でYYYY-MM-DD HH:MM形式になっているか調べる
 * 引　数： datestr　入力された値
 * 戻り値： 正：true　不正：false
 ****************************************************************/
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

/***************************************************************
 * Function ： Get Message from Text File 
 * Parameter： variable
 * Return   ： Message Text
 ****************************************************************/
function getMessage(str){
	strURL='./getJSMessages.php?variable=' + str + '&id='+Math.random();
	var ajax = new Ajax.Request(
			 strURL ,
			{
				asynchronous: false ,
				method: 'get' ,
				onFailure:AjaxonFailure
			}
	);
	text=ajax.transport.responseText;
	t = text.parseJSON();
	return decodeURIComponent(t.msg);
}

/**********************************************************
 *
 *  全角英数字（+ ＿）⇔ 半角英数字（+ _）
 *
 *    replace と正規表現を使ったお手軽版。
 *    この方が JavaScript っぽいかも知れない。
 *
 *  Copyright (c) 2005 AOK <soft@aokura.com>
 *
 **********************************************************/

/* 全角英数字を半角英数字に置換する */
function z2h_word(src) {
  return src.replace(/([Ａ-Ｚａ-ｚ０-９＿])/g,
    function ($0) {
      return String.fromCharCode($0.charCodeAt(0) - 65248);
    });
}

/* 半角英数字を全角英数字に置換する */
function h2z_word(src) {
  return src.replace(/(\w)/g,
    function ($0) {
      return String.fromCharCode($0.charCodeAt(0) + 65248);
    });
}

//OpenForm------------------------------------------------------
var subSubFormX;
var subSubFormY;
var subSubFormZ;
var subSubFormN;
function setSubFormLoad(formPath,X,Y,Z,param){
	var	strURL = SystemPath + formPath;
	subSubFormX=X;
	subSubFormY=Y;
	subSubFormZ=Z;
	subSubFormN=formPath;
	strURL +="?formname=" +formPath;
	if(param!='') strURL +=param;
	strURL +="&id=" + Math.random();
	new Ajax.Request(strURL,{
			method: 'get',
			onComplete: setSubFormLoadReceive,
			onFailure:AjaxonFailure
		}
	);
}

function setSubFormLoadReceive(httpObj){
	text = httpObj.responseText;
	setSubform(text
			   ,subSubFormN
			   ,'/Layer'+subSubFormN
			   ,subSubFormY + document.documentElement.scrollTop
			   ,subSubFormX
			   ,subSubFormZ);	
}

function setSubFormLoadClose(formid){
	bod=document.getElementsByTagName('body')[0];
	overlay=document.getElementById('/Layer'+formid);
	bod.removeChild(overlay);
	lb=document.getElementById(formid);
	bod.removeChild(lb);
	return true;
}

function setSubFormLoadNolayer(formPath,X,Y,Z,param){
	var	strURL = SystemPath + formPath;
	subSubFormX=X;
	subSubFormY=Y;
	subSubFormZ=Z;
	subSubFormN=formPath;
	strURL +="?formname=" +formPath;
	if(param!='') strURL +=param;
	strURL +="&id=" + Math.random();
	new Ajax.Request(strURL,{
			method: 'get',
			onComplete: setSubFormLoadNolayerReceive,
			onFailure:AjaxonFailure
		}
	);
}
function setSubFormLoadNolayerReceive(httpObj){
	text = httpObj.responseText;
	setSubformNolayer(text
			   ,subSubFormN
			   ,subSubFormY + document.documentElement.scrollTop
			   ,subSubFormX
			   ,subSubFormZ);	
}
function setSubformNolayer(text,formid,top,left,zindex){
	bod=document.getElementsByTagName('body')[0];
	lb							=document.createElement('div');
	lb.id						=formid;
	lb.style.top				=left+"px"; 
	lb.style.left				=top +"px"; 
	lb.style.display			="block"; 
	lb.style.position			="absolute"; 
	lb.style.zIndex				=zindex+10;
	lb.style.filter				="alpha(opacity=100)";
	lb.innerHTML 				= text;
	bod.appendChild(lb);
}
function setCloseSubFormNolayer(formid){
	bod=document.getElementsByTagName('body')[0];
	lb=document.getElementById(formid);
	bod.removeChild(lb);
	return true;
}
function setFeeLoadFormReceive(httpObj){
	text = httpObj.responseText;
	setSubform(text
			   ,subFormN
			   ,'/Layer'+subFormN
			   ,subFormX
			   ,subFormY + document.documentElement.scrollTop
			   ,subFormZ);	
}
//OpenForm------------------------------------------------------

//Function trim-------------------------------------------------------------------------------
//var trimStr = str.trim();
// StringクラスにTrimメソッドの追加
String.prototype.trim = function() {
    return this.replace(/^[ ]+|[ ]+$/g, '');
}
//Function trim-------------------------------------------------------------------------------

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
				strURIComponent =  obj.name+"=1";
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

function getParameter(){
	var lists = document.getElementsByTagName("input"); 
	var nodes = $A(lists);	
	var obj = {};
	var errFlag=false;
	
	for(var i in nodes){
		
		if(nodes[i].id){
			if(nodes[i].getAttribute("chkType")){
				infomsg =";"+nodes[i].id + "の値は" + nodes[i].value;
				var chkType=nodes[i].getAttribute("chkType");
				infomsg+=nodes[i].id + "のchkTypeは「"+nodes[i].getAttribute("chkType")+"」です";
				infomsg+=";"+nodes[i].id + "のlabelは「"+nodes[i].getAttribute("label")+"」です";
				obj[nodes[i].id] = nodes[i].value;
				//alert(infomsg);
				if(chkType=='date' && (nodes[i].value!="" && !isChkDate(nodes[i].value))) {
					errFlag=true;
					alert(nodes[i].getAttribute("label")+"の入力値が日付ではありません");
				}
				if(chkType=='dateNotNull' && !isChkDate(nodes[i].value)) {
					if(nodes[i].value!="") {
						errFlag=true;
						alert(nodes[i].getAttribute("label")+"の日付を入力してください。");						
					}else if(!isChkDate(nodes[i].value)){
						errFlag=true;
						alert(nodes[i].getAttribute("label")+"の入力値が日付ではありません");
					}
				}
			}
		}
		if(errFlag)	return "";
	}

	var lists = document.getElementsByTagName("select"); 
	var nodes = $A(lists);	
	for(var i in nodes){
		if(nodes[i].id){
			if(nodes[i].getAttribute("chkType")){
				infomsg =";"+nodes[i].id + "の値は" + nodes[i].value;
				infomsg+=nodes[i].id + "のchkTypeは「"+nodes[i].getAttribute("chkType")+"」です";
				infomsg+=";"+nodes[i].id + "のlabelは「"+nodes[i].getAttribute("label")+"」です";
				obj[nodes[i].id] = nodes[i].value;
				//alert(infomsg);
			}
		}
		if(errFlag)	return "";
	}

	var requestData = $H(obj).toQueryString();
	return $H(obj).toQueryString();
	//alert(requestData);	
}