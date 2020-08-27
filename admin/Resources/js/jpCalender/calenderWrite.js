// 変数の設定
var monthDay = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
var weekHead = new Array('日','一','二','三','四','五','六');

var today=new Date();
var thisYear = today.getYear();
if (thisYear < 1900) { thisYear = thisYear + 1900; }
var thisMonth = today.getMonth();
var thisDay = today.getDate();

var objCal;
var dirsCalenderObj;
var baseCalenderTxt="";
//-------------------Form Drag & Drop-------------------------------------------------
var calenderSpace;

function setJPCalender(dispObj,space,rtnObj){
	setCreateCalenderDiv(rtnObj);
	var p = getObjectLocation2($(rtnObj));
	//alert("left=" + p[0] + ",top=" + p[1]);
	/*obj = $(rtnObj);
	p[0] = obj.offsetTop;
	p[1] = obj.offsetLeft;*/
	$(space).style.left=p[1]+"px";
	$(space).style.top=(p[0] + $(rtnObj).offsetHeight) +"px";

	calenderSpace=space;
	dirsCalenderObj=rtnObj;
	if(baseCalenderTxt==""){
		var	strURL;
		strURL = "./js/jpCalender/jpCalenderBase.php";
		strURL +="?formname=" +"/js/jpCalender/jpCalenderBase.php";	
		strURL +="&obj=objCal";
		strURL +="&id=" + Math.random();
		new Ajax.Request(strURL,{
				method: 'get',
				onComplete: reciveJPCalender,
				onFailure:setNetworkError
			}
		);
	}else{
		//alert("baseCalenderTxt");
		$(calenderSpace).innerHTML = baseCalenderTxt;
		$(calenderSpace).style.zIndex =8000;
		var sts = /^(\d{4})[-\/]?(\d{2})[-\/]?(\d{2})$/.exec($(rtnObj).value);
		if (sts == null) {
			//alert("err");
			//return;
		} else	{
			//結果が四桁、二桁、二桁でArrayに格納される
			objCal.setCrnt(sts[1],Number(sts[2])-1,sts[3]);
		}
		calenderContentsArray=objCal.setCalenderContentsArray();
		objCal.writeCal(calenderContentsArray);
	}
}

function reciveJPCalender(httpObj){
	baseCalenderTxt = httpObj.responseText;
	//alert(baseCalenderTxt);
	$(calenderSpace).innerHTML = baseCalenderTxt;
	jpCalenderInit(calenderSpace);
	$(calenderSpace).style.zIndex =8000;
}

function jpCalenderInit(obj) {
	objCal = new Cal();
	objCal.objName='objCal';
	calenderContentsArray=objCal.setCalenderContentsArray();
	objCal.writeCal(calenderContentsArray);
}

function setCreateCalenderDiv(obj){
	var pDiv =$(obj).parentNode;
	//var pDiv =document.body;
	var div =document.createElement('div');
	div.id='areaJpCalender';
	pDiv.appendChild(div);	
	$(div.id).style.position="absolute";
	$(div.id).style.width="205px";
	$(div.id).style.height="76px";
	$(div.id).style.zIndex ="1";
}

function setDeleteCalenderDiv(){
	var elem = $("areaJpCalender"); 
	var parent = elem.parentNode; 
	parent.removeChild(elem); 
}

function Cal() {
	this.setCrnt();
	return(this);
}

function returnDirsCalenderObj(str){
	$(dirsCalenderObj).value=str;

	if(typeof($(dirsCalenderObj).onchange)=="function"){
		$(dirsCalenderObj).onchange();
	}
	setDeleteCalenderDiv();
}

Cal.prototype.crntYear=0;
Cal.prototype.crntMonth=0;
Cal.prototype.crntDay=0;
Cal.prototype.crntMonthDay=0;
Cal.prototype.crntStartDay=0;
Cal.prototype.objName='';
Cal.prototype.nowYYYYMMDD='';

Cal.prototype.setCrnt = function (yyyy, mm, dd) {
  var dt = new Date();
  this.thisYear  = dt.getYear();
  if (this.thisYear < 1900) { this.thisYear = this.thisYear + 1900; };
  this.thisMonth = dt.getMonth();
  this.thisDay   = dt.getDate();
  if(!yyyy && !mm && !dd){
	this.crntYear = thisYear;
	this.crntMonth = thisMonth;
	this.crntDay = this.thisDay;
	// うるう年変換（1901年から2099年まで対応）
	if ((this.crntMonth == 1) && (this.crntYear % 4 == 0)) {
		this.crntMonthDay = 29;
	} else {
		this.crntMonthDay = monthDay[this.crntMonth];
	}
	//alert("1nowYYYYMMDD="+this.nowYYYYMMDD);
  }else{
	// 年変換（1901-2099）
	if ((typeof(yyyy) == 'undefined') || (yyyy < 1901) || (yyyy > 2099)) {
		this.crntYear = this.thisYear;
	} else {
		this.crntYear = yyyy;
	}
	//alert("crntYear:"+this.crntYear);

	// 月変換（0-11）
	if ((typeof(mm) == 'undefined') || (mm < 0) || (mm > 11)) {
		this.crntMonth = this.thisMonth;
	} else {
		this.crntMonth = mm;
	}

	// うるう年変換（1901年から2099年まで対応）
	if ((this.crntMonth == 1) && (this.crntYear % 4 == 0)) {
		this.crntMonthDay = 29;
	} else {
		this.crntMonthDay = monthDay[this.crntMonth];
	}
	//alert("crntMonthDay:"+this.crntMonthDay);
	
	// 日変換（1-31:this.crntMonthDay）
	if ((typeof(dd) == 'undefined') || (dd < 1) || (dd > this.crntMonthDay)) {
		this.crntDay = this.thisDay;
	} else {
		this.crntDay = dd;
	}
	//alert("crntDay:"+this.crntDay);  
	//alert("2nowYYYYMMDD="+this.nowYYYYMMDD);
  }
  var smm=this.thisMonth+1;
  if(smm<10) smm="0"+smm;
  var sdd=this.thisDay;
  if(sdd<10) sdd="0"+sdd;
  this.nowYYYYMMDD=this.thisYear+""+smm+""+sdd;
  //alert(this.crntYear+"-"+this.crntMonth+"-"+this.crntDay+","+this.crntMonthDay);
  
  // 開始曜日の設定
  var d1 = new Date(this.crntYear + '/' + (this.crntMonth + 1) + '/01');  
  this.startDay = d1.getDay();
}

Cal.prototype.setMoveMonth = function (obj,addMM) {
	// カレンダ移動
	this.crntMonth = this.crntMonth+addMM;
	
	if (this.crntMonth > 11) {this.crntYear++;this.crntMonth = 0;}
	if (this.crntMonth < 0)  {this.crntYear--;this.crntMonth = 11;}
	
	this.setCrnt(this.crntYear, this.crntMonth, this.crntDay);
	calenderContentsArray=this.setCalenderContentsArray(this.crntYear,this.crntMonth);
	this.writeCal(calenderContentsArray);
}

Cal.prototype.writeCal = function (calenderContentsArray) {
	$('jpCalenderTitle').innerHTML=this.crntYear + "年" + (this.crntMonth+1) + "月";

	var i, w;
	// 月初の空白表示
	for (i = 0; i < this.startDay; i++) $('jpCalCel_'+i).innerHTML="&nbsp;";
	var celno=i-1;
	
	// 1ヶ月の表示
	for (i = 1, w = this.startDay; i <= this.crntMonthDay; i++, w++) {
		// 今日の色分け表示
		var sDate="";
		var sYMD="";
		if(i<10) sDate="0"+i; else sDate=i;
		sYMD = this.crntYear+"-"+(this.crntMonth+1)+"-"+sDate;
		if(this.crntMonth+1<10) sYMD = this.crntYear+"-"+"0"+(this.crntMonth+1)+"-"+sDate;
		var no = i+celno;	
		var sMD=sYMD.substring(5,255);
		var dateName=isHoliday(this.crntYear,this.crntMonth+1,sDate)
		sYMD=sYMD.substring(8,255);
	
		var dateArray=[];
		dateArray=calenderContentsArray[0];
		//if(dateArray[i]!=null) sYMD=dateArray[i]; else sYMD="&nbsp;";
		sYMD=dateArray[i];

		if(dateName!=null)
			$('jpCalCel_'+no).innerHTML ='<div class="subTitlebarOnRed">'+sYMD+'</div>';
		else
			$('jpCalCel_'+no).innerHTML ='<div class="subTitlebarOf">'+sYMD+'</div>';
	}	
	// 月末の空白表示
	for (i=no+1; i < 42; i++) $('jpCalCel_'+i).innerHTML="&nbsp;";
}

Cal.prototype.getYYYYMM = function (YYYY,MM) {
	// 前月のカレンダ表示
	this.setCrnt();
	var yyyy = YYYY;
	var mm = MM;
	
	//if(mm>12){yyyy++;mm=mm-12;}
	if (mm > 12) {
		yyyy++;
		mm = 1;
	}
	return yyyy+"/"+mm;
}


/**
 * 年月を指定して月末日を求める関数
 * year 年
 * month 月
 *2007年2月の月末日を求めます
 *28が表示されます
 *var day = getMonthEndDay(2007, 2);
 */
Cal.prototype.getMonthEndDay =function (year, month) {
    //日付を0にすると前月の末日を指定したことになります
    //指定月の翌月の0日を取得して末日を求めます
    //そのため、ここでは month - 1 は行いません
    var dt = new Date(year, month, 0);
    return dt.getDate();
}

Cal.prototype.setCalenderContentsArray =function (){
	var clssArray = new Array();
	var dfltConts = '<div %func% class="dayCell">%cont%</div>';
	
	var yy=this.crntYear;
	var mm=this.crntMonth+1;
	if(mm<10) mm="0"+mm;

	var dateArray = new Array(32);
	var iDayNo;
	for(i=1;i<32;i++){
		var sDate;
		if(i<10) sDate="0"+i; else sDate=i;
		var dateYMD		=yy+"-"+mm+"-"+sDate;
		var todYMD		=parseInt(yy+""+mm+""+sDate);
		
		//if(parseInt(this.nowYYYYMMDD)<todYMD){
			tBuf=dfltConts.replace("%func%","onclick=returnDirsCalenderObj('"+dateYMD+"')");
			tBuf=tBuf.replace("%cont%",i);
			//tBuf=dfltConts.replace("%func%","onclick=returnDirsCalenderObj('"+dateYMD+"')");
			//tBuf=tBuf.replace("%cont%",sDate);
		/*}else{
			tBuf=dfltConts.replace("%func%","");
			tBuf=tBuf.replace("dayCell","dayCellof");
			//tBuf=tBuf.replace("%cont%",sDate);
			tBuf=tBuf.replace("%cont%",i);
		}*/
		if(parseInt(this.nowYYYYMMDD)==todYMD){
			tBuf=dfltConts.replace("%func%","onclick=returnDirsCalenderObj('"+dateYMD+"')");
			tBuf=tBuf.replace("dayCell","dayCelltd");
			//tBuf=tBuf.replace("%cont%",sDate);
			tBuf=tBuf.replace("%cont%",i);
		}
		
		var iDayNo			=parseInt(dateYMD.replace(/\-/g,""));
		iDayNo				=iDayNo-Math.floor(iDayNo/100)*100;
		dateArray[iDayNo]	=tBuf;
		//alert(parseInt(this.nowYYYYMMDD)+";"+todYMD+";"+tBuf);
	}
	clssArray[0]=dateArray;
	
	return clssArray;
}
