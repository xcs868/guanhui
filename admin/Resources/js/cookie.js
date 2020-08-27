// JavaScript Document
/**********************************************
 一時的なCookieの使用
 成功した場合true、失敗するとfalse
**********************************************/
function tempCookie(theName,theValue){
	if((theName != null) && (theValue != null)){
		document.cookie = theName + "=" + theValue;
		return true;
	}
	return false;
}

/**********************************************
 Cookieにデータを保存する
 成功した場合true、失敗するとfalse
**********************************************/
function setCookieEscape(theName,theValue,theDay){
	if((theName != null) && (theValue != null)){
		expDay = "Wed, 01 Jan 2020 18:56:35 GMT";
		var nc = theName + "=" + escape(theValue) + ";";
		
		//theDay.setHours(theDay.getHours() + 1); //一時間後に削除
		var expires = new Date();
		expires.setTime(expires.getTime() + 3 * 30 * 24 * 60 * 60 * 1000);

		document.cookie = nc + "expires=" + expires.toGMTString();
		//$('Layer2').innerHTML=document.cookie;
		return true;
	}
	return false;
}

/**********************************************
 Cookieのデータを削除する
 常にtrue
**********************************************/
function deleteCookie(theName){
	document.cookie = theName + "=;expires=Thu,01-Jan-70 00:00;01 GMT";
	//$('Layer2').innerHTML=document.cookie;
	return true;
}

/**********************************************
 Cookieに保存されたデータを取り出す
 成功した場合null以外、失敗するとfalse
**********************************************/
function getCookieUnescape(theName){
	theName += "=";
	theCookie = document.cookie+";";
	//trace("theCookie theName=" + theName);
	start = theCookie.indexOf(theName);
	if(start != -1){
		end = theCookie.indexOf(";",start);
		return unescape(theCookie.substring(start+theName.length,end));
		//return decodeURIComponent(theCookie.substring(start+theName.length,end));
	}
	return false;
}
