$(function(){
	//左侧栏图标
	$(".n_left>li>div").hover(function() {
	    $(this).css({"background": "#EAECEF"});
	},function(){
	    $(this).css({"background":"none"});
	 
	});

	$('.two>a>li').hover(function(){
		$(this).addClass("add").siblings().removeClass("add");
	},function(){
		$(this).removeClass("add");
	});
   $(".one").click(function(){
		$(this).next().slideToggle().parent().parent().siblings().children(".one").slideUp();
	});
    $('[data-toggle="popover"]').popover();
    $(".unalterable").attr("readonly","readonly");
    $(".unalterable").css({"background":"#f5f5f5","border":"1px solid #A9A9A9","outline":"none"});
    $("input").attr("autocomplete","off");
    
})

function oneClick(obj){
	var sn = jQuery(obj).children(".she").children(".sn")
	if(sn.css("display") == "block"){
		sn.css("display","none");
		jQuery(obj).children(".she").children(".glyphicon-menu-down").css("display","inline")
	}else{
		sn.css("display","inline");
		jQuery(obj).children(".she").children(".glyphicon-menu-down").css("display","none")
	}
	

}

function reflashSession(){
	jQuery.ajax({
		type: "POST",//方法类型
		dataType: "html",//预期服务器返回的数据类型
		data:{},
		url: "_loadSession.php" ,//url
		success: function (result) {
			
		},
		error : function() {
			//alert("异常！");
		}
	});
}
