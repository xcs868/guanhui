// JavaScript Document
/*
休日の設定	Month	Day	Detail	Date
holiday=01	01	元日	1月1日
holiday=02	11	建国記念の日	政令で定める日（2月11日）
holiday=04	29	昭和の日　　	4月29日
holiday=05	03	憲法記念日　	5月3日
holiday=05	04	みどりの日　	5月4日
holiday=05	05	こどもの日　	5月5日
holiday=05	06	振替休日　	5月6日
holiday=11	03	文化の日　　	11月3日
holiday=11	24	勤労感謝の日	11月23日
holiday=12	23	天皇誕生日　	12月23日

holiday=01	W	2	01	成人の日　　	1月の第2月曜日（1999年までは1月15日）
holiday=07	W	3	01	海の日　　　	7月の第3月曜日（2002年までは7月20日）
holiday=09	W	3	01	敬老の日　　	9月の第3月曜日（2002年までは9月15日）
holiday=10	W	2	01	体育の日　　	10月の第2月曜日（1999年までは10月10日）
*/


function getCalenderHash(Year){
	var holidayHash = {
		 '01-01':{words:'元日'			,DateText:'1月1日'}
		,'02-11':{words:'建国記念の日'	,DateText:'政令で定める日（2月11日）'}
		,'04-29':{words:'昭和の日'		,DateText:'4月29日'}
		,'05-03':{words:'憲法記念日'	,DateText:'5月3日'}
		,'05-04':{words:'みどりの日'	,DateText:'5月4日'}
		,'05-05':{words:'こどもの日'	,DateText:'5月5日'}
		,'11-03':{words:'文化の日'		,DateText:'11月3日'}
		,'11-23':{words:'勤労感謝の日'	,DateText:'11月23日'}
		,'12-23':{words:'天皇誕生日'	,DateText:'12月23日'}
	}

	var aBuf=holidayHash['01-01'];
	//alert('Holiday='+aBuf.words+";"+'Holiday='+aBuf.DateText);
	//aBuf=holidayHash['02-11'];
	//alert('Holiday='+aBuf.words+";"+'Holiday='+aBuf.DateText);
	
	//春分の日をセットする
	var sDate=getDayOfSpringEquinox(Year);
	holidayHash[sDate]={words:'春分の日',DateText:''};
	//aBuf=holidayHash['04-20'];
	//alert('Holiday='+aBuf.words+";"+'Holiday='+aBuf.DateText);
	
	//秋分の日をセットする
	var hAut=prvDayOfAutumnEquinox(Year);
	holidayHash[hAut]={words:'秋分の日',DateText:''};
	//aBuf=holidayHash['09-23'];
	//alert('Holiday='+aBuf.words+";"+'Holiday='+aBuf.DateText);
	
	
	//1月の第2月曜日 成人の日をセットする
	sDate = getWhatDayOfWeekYYYYMMDD(Year, 1, 2, 1);
	//alert(sDate);
	holidayHash[sDate]={words:'成人の日',DateText:'1月の第2月曜日（1999年までは1月15日）'};
	//aBuf=holidayHash['01-12'];
	//alert('Holiday='+aBuf.words+";"+'Holiday='+aBuf.DateText);
	
	//7月の第3月曜日 海の日をセットする
	sDate = getWhatDayOfWeekYYYYMMDD(Year, 7, 3, 1);
	//alert(sDate);
	holidayHash[sDate]={words:'海の日',DateText:'7月の第3月曜日（2002年までは7月20日）'};
	//9月の第3月曜日 敬老の日をセットする
	sDate = getWhatDayOfWeekYYYYMMDD(Year, 9, 3, 1);
	//alert(sDate);
	holidayHash[sDate]={words:'敬老の日',DateText:'9月の第3月曜日（2002年までは9月15日）'};
	//10月の第2月曜日 体育の日をセットする
	sDate = getWhatDayOfWeekYYYYMMDD(Year, 10, 2, 1);
	//alert(sDate);
	holidayHash[sDate]={words:'体育の日',DateText:'10月の第2月曜日（1999年までは10月10日）'};
	
	//aBuf=holidayHash['01-12'];
	//alert('Holiday='+aBuf.words+";"+'Holiday='+aBuf.DateText);
	return holidayHash;
}

//======================================================================
//  春分/秋分日の略算式は
//    『海上保安庁水路�? 暦計算研究会�? 新こよみ便利帳�??
//  で紹介されている式です�??
function getDayOfSpringEquinox(myYear){
  var DD;
  if (myYear <= 1947){
	  DD = 99; //祝日法施行前
  }else if (myYear <= 1979){
	// floor 関数は[VBAのInt関数]に相�?
	DD = Math.floor(20.8357 + (0.242194 * (myYear - 1980)) - Math.floor((myYear - 1980) / 4));
  }else if (myYear <= 2099){
	DD = Math.floor(20.8431 + (0.242194 * (myYear - 1980)) - Math.floor((myYear - 1980) / 4));
  }else if (myYear <= 2150){
	DD = Math.floor(21.851 + (0.242194 * (myYear - 1980)) - Math.floor((myYear - 1980) / 4));
  }else{
	DD = 99; //2151年以降は略算式が無いので不明
  }

  DD='04-'+DD;

  return DD;
}

//========================================================================
//秋分日
function prvDayOfAutumnEquinox(myYear){
  var DD;
  if (myYear <= 1947){
	  DD = 99; //祝日法施行前
  }else if (myYear <= 1979){
	  // floor 関数は[VBAのInt関数]に相�?
	  DD = Math.floor(23.2588 + (0.242194 * (myYear - 1980)) - Math.floor((myYear - 1980) / 4));
  }else if (myYear <= 2099){
	  DD = Math.floor(23.2488 + (0.242194 * (myYear - 1980)) - Math.floor((myYear - 1980) / 4));
  }else if (myYear <= 2150){
	  DD = Math.floor(24.2488 + (0.242194 * (myYear - 1980)) - Math.floor((myYear - 1980) / 4));
  }else{
	  DD = 99; //2151年以降は略算式が無いので不明
  }
  DD='09-'+DD;

  return DD;
}
	
//========================================================================
/**
 * 任意の年月の第n曜日の日付を求める関数
 * year 年
 * month 月
 * number 何番目の曜日か、第1曜日なら1。第3曜日なら3
 * dayOfWeek 求めたい曜日。0-6までの数字で曜日の日～土を指定する
 */
function getWhatDayOfWeek(year, month, number, dayOfWeek){
    var firstDt = new Date(year, month - 1, 1);
    var firstDayOfWeek = firstDt.getDay();//指定した年月の1日の曜日を取得
    var day = dayOfWeek - firstDayOfWeek + 1;
    if(day <= 0) day += 7;//1週間を足す
    var dt = new Date(year, month - 1, day);
    var msTime = dt.getTime();
    msTime += (86400000 * 7 * (number - 1));//n曜日まで1週間を足し込み
    dt.setTime(msTime);
    return dt;
}

function getWhatDayOfWeekYYYYMMDD(year, month, number, dayOfWeek){
	var date = getWhatDayOfWeek(year, month, number, dayOfWeek);
	var yyyy=date.getFullYear();
	var mm=date.getMonth() + 1;
	var dd=date.getDate();
	if(mm<10) mm="0"+mm;
	if(dd<10) dd="0"+dd;
	return mm+"-"+dd;
}

function getWeekNo(yyyy,mm,dd){
	jikan=new Date(); 
	jikan.setFullYear(yyyy); //年 
	jikan.setMonth(mm); //月 
	jikan.setDate(dd); //日 
	//曜日は設定した日の曜日に自動的になりますので、前ページで曜日を調べたときのように
	w=jikan.getDay();
	ww="日月火水木金土".substr(w,1);
	return w
}




var currentYear;
var currentMonth;
var currentDay;
//n日後、n日前の日付を求める
/**
 * 年月日と加算日からn日後、n日前を求める関数
 * year 年
 * month 月
 * day 日
 * addDays 加算日。マイナス指定でn日前も設定可能
 */
function computeDate(year, month, day, addDays) {
    var dt = new Date(year, month - 1, day);
    var baseSec = dt.getTime();
    var addSec = addDays * 86400000;//日数 * 1日のミリ秒数
    var targetSec = baseSec + addSec;
    dt.setTime(targetSec);
    currentYear = dt.getYear();
    currentYear = (currentYear < 2000) ? currentYear + 1900 : currentYear;
    currentMonth = "0" + (dt.getMonth() + 1);
	currentMonth = currentMonth.substr(currentMonth.length - 2, currentMonth.length);
    currentDay = "0" + (dt.getDate());
	currentDay = currentDay.substr(currentDay.length - 2, currentDay.length);
    return dt;
}


function setCurrentAfterDate(af) {
    data = new Date();
    //data.setYear(yyyy);
    //data.setMonth(mm);
    data.setDate(data.getDate()+af);
    currentYear = data.getYear();
    currentYear = (currentYear < 2000) ? currentYear + 1900 : currentYear;
    currentMonth = data.getMonth() + 1;
    currentDay = data.getDate();
}

function setCurrentDate() {
    data = new Date();
    currentYear = data.getYear();
    currentYear = (currentYear < 2000) ? currentYear + 1900 : currentYear;
    currentMonth = data.getMonth() + 1;
    currentDay = data.getDate();
}

function isToday(year, month, day) {
    if (year == currentYear && parseInt(month,10) == currentMonth && day == currentDay) {
        return true;
    }
    return false;
}

function isSaturday(year, month, day) {
    var week = new Date(year, month - 1, day).getDay();
    if (week == 6) {
        return true;
    }
    return false;
}

function isHoliday(year, month, day) {
    var week = new Date(year, month - 1, day).getDay();
	
    switch(parseInt(month,10)) {
    case 1:
        if (day == 1) {
            return '元日';
        }
        if (day == 2 && isSunday(year, month, 1)) {
            return '振替休日';
        }
        if (day == (getFirstMonday(year, month) + 7)) {
            return '成人の日';
        }
        break;
    case 2:
        if (day == 11) {
            return '建国記念の日';
        }
        if (day == 12 && isSunday(year, month, 11)) {
            return '振替休日';
        }
        break;
    case 3:
        if(year > 1979 && year < 2100) {
            if (day == parseInt(20.8431 + 0.242194 * (year - 1980) - parseInt((year - 1980) / 4))) {
                return '春分の日';
            }
            if (day == (parseInt(20.8431 + 0.242194 * (year - 1980) - parseInt((year - 1980) / 4)) + 1) && isSunday(year, month, day - 1)) {
                return '振替休日';
            }
        }
        break;
    case 4:
        if (day == 29) {
            return '昭和の日';
        }
        if (day == 30 && isSunday(year, month, 29)) {
            return '振替休日';
        }
        break;
    case 5:
        if (day == 3 || day == 4 || day == 5) {
	        if (day == 3) return '憲法記念日';
	        if (day == 4) return 'みどりの日';
	        if (day == 5) return 'こどもの日';
        }
        if (day == 6 && (isSunday(year, month, 3) ||
                         isSunday(year, month, 4) ||
                         isSunday(year, month, 5))) {
            return '振替休日';
        }
        break;
    case 7:
        if (day == (getFirstMonday(year, month) + 14)) {
            return '海の日';
        }
        break;
    case 9:
		var h1=getFirstMonday(year, month) + 14;
		var h2=parseInt(23.2488 + 0.242194 * (year - 1980) - parseInt((year - 1980) / 4));
        if (day == (getFirstMonday(year, month) + 14)) {
            return '敬老の日';
        }
        if(year > 1979 && year < 2100) {
            if (day == parseInt(23.2488 + 0.242194 * (year - 1980) - parseInt((year - 1980) / 4))) {
				//h2=parseInt(23.2488 + 0.242194 * (year - 1980) - parseInt((year - 1980) / 4));
                return '秋分の日';
            }
            if (day == (parseInt(23.2488 + 0.242194 * (year - 1980) - parseInt((year - 1980) / 4)) + 1) && isSunday(year, month, day - 1)) {
                return '振替休日';
            }
		}
		if(day==h2-1 && h2-h1==2 && !isSunday(year, month, h2-1)){
                return '国民の祝日';
		}
		if(day==h1-1 && h1-h2==2 && !isSunday(year, month, h1-1)){
                return '国民の祝日';
		}
        break;
    case 10:
        if (day == (getFirstMonday(year, month) + 7)) {
            return '体育の日';
        }
        break;
    case 11:
        if (day == 3 || day == 23) {
            if (day==3) return '文化の日';
            if (day==23) return '勤労感謝の日';
        }
        if (day == 4 && isSunday(year, month, 3)) {
            return '振替休日';
        }
        if (day == 24 && isSunday(year, month, 23)) {
            return '振替休日';
        }
        break;
    case 12:
        if (day == 23) {
            return '天皇誕生日';
        }
        if (day == 24 && isSunday(year, month, 23)) {
            return '振替休日';
        }
        break;
    }
    if (week == 0) {
        return '';
    }
    return null;
}

function isSunday(year, month, day) {
    var week = new Date(year, month - 1, day).getDay();
    if (week == 0) {
        return true;
    }
    return false;
}

function getFirstMonday(year, month) {
    var monday;
    for(monday = 1; monday < 8; monday++) {
        if(new Date(year, month - 1, monday).getDay() == 1) {
            break;
        }
    }
    return monday;
}
