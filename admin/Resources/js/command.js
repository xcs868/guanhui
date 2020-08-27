// JavaScript Document
function loadThumbDate(){
	strURL='thumbData.php?id=' +Math.random();
	new Ajax.Request(strURL, {method: 'post' ,  onComplete: loadThumbDate_Receive});
}

function loadThumbDate_Receive(httpObj){
	text = httpObj.responseText;
	$("thumbData").innerHTML = text;
}

function get_frame_data(year,month){
	strURL='thumbData.php?id=' +Math.random();
	strURL+= '&thuYear='+ year;
	strURL+= '&thuMonth='+ month;
	new Ajax.Request(strURL, {method: 'post' ,  onComplete: loadThumbDate_Receive});
}

function get_date_of_schedule(year,month,day){
	strURL='_dataSchedule.php?id=' +Math.random();
	strData = 	"year="		+ year;
	strData += 	"&month="	+ month;
	strData += 	"&day="		+ day;
	new Ajax.Request(strURL, {method: 'post', parameters: strData,  onComplete: get_date_of_schedule_Receive});
	
}

function get_date_of_schedule_Receive(httpObj){
	text = httpObj.responseText;
	$("dateSchedule").innerHTML = text;
}

function reflashSession(){
	
	strURL='_loadSession.php?id=' +Math.random();
	new Ajax.Request(strURL, {method: 'post' ,  onComplete: reflashSession_Receive});
}

function reflashSession_Receive(httpObj){
	text = httpObj.responseText;

	$("getUserMessage").innerHTML = text;
	
	messageHeight = $("getUserMessage").offsetHeight;
	
	$("getUserMessage").style.marginTop = (contextSideHeight - messageHeight -240) +"px";
}

function reflashWarn(){
	strURL='_loadWarn.php?id=' +Math.random();
	new Ajax.Request(strURL, {method: 'post' ,  onComplete: reflashWarn_Receive});
}

function reflashWarn_Receive(httpObj){
	text = httpObj.responseText;
	$("todayWarn").innerHTML = text;
}