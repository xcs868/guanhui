$(function(){
	window.addEventListener("scroll", function(event) {
        var scrollTop = document.documentElement.scrollTop;
        var active = $("#navbar-nav").attr("num");
        console.log(scrollTop);
         if(scrollTop>2380){
            // console.log("1400");
            // alert("1900");
            $("#navbar-nav").active==2;
            $("#navbar-nav").children("li:eq(4)").addClass("add");
            $("#navbar-nav").children("li:eq(0)").removeClass("add");
            $("#navbar-nav").children("li:eq(1)").removeClass("add"); 
            $("#navbar-nav").children("li:eq(3)").removeClass("add"); 
            $("#navbar-nav").children("li:eq(2)").removeClass("add");
            $("#navbar-nav").children("li:eq(5)").removeClass("add");
            $(".navbar-fixed-top").css({"background":"#0f87fb"});

        }else if(scrollTop>=2300 && scrollTop<2370){
            // console.log("1400");
            // alert("1900");
            
            $(".navbar_li").click(function(){
                $(this).addClass("add");
                $(this).parent().siblings().children("a").removeClass("add");
            })
            $("#navbar-nav").children("li:eq(3)").addClass("add");
            $("#navbar-nav").children("li:eq(0)").removeClass("add");
            $("#navbar-nav").children("li:eq(1)").removeClass("add"); 
            $("#navbar-nav").children("li:eq(2)").removeClass("add"); 
            $("#navbar-nav").children("li:eq(4)").removeClass("add");
            $("#navbar-nav").children("li:eq(5)").removeClass("add");
            $(".navbar-fixed-top").css({"background":"#0f87fb"});
        }else if(scrollTop>=1900 && scrollTop<2100){
            // console.log("1400");
            // alert("1900");
            $(this).parent().siblings().children("a").removeClass("add");
            $("#navbar-nav").children("li:eq(2)").addClass("add");
            $("#navbar-nav").children("li:eq(0)").removeClass("add");
            $("#navbar-nav").children("li:eq(1)").removeClass("add"); 
            $("#navbar-nav").children("li:eq(3)").removeClass("add"); 
            $("#navbar-nav").children("li:eq(4)").removeClass("add");
            $("#navbar-nav").children("li:eq(5)").removeClass("add");
            $(".navbar-fixed-top").css({"background":"#0f87fb"});
        }else if(scrollTop>=1400 && scrollTop<1800){
            // console.log("1400");
            // alert("2");
            
            $(".navbar_li").click(function(){
                $(this).addClass("add");
                $(this).parent().siblings().children("a").removeClass("add");
            })
            $("#navbar-nav").children("li:eq(1)").addClass("add");
            $("#navbar-nav").children("li:eq(0)").removeClass("add");
            $("#navbar-nav").children("li:eq(2)").removeClass("add"); 
            $("#navbar-nav").children("li:eq(3)").removeClass("add"); 
            $("#navbar-nav").children("li:eq(4)").removeClass("add");
            $("#navbar-nav").children("li:eq(5)").removeClass("add");
            $(".navbar-fixed-top").css({"background":"#0f87fb"});


        }else if (scrollTop>200){
            // $(".navbar-fixed-top").css({"background":"rgba(0,0,0,0)"});
            // alert("2")
            $(".navbar-fixed-top").css({"background":"#0f87fb"});
            if(scrollTop<1500&& scrollTop >=990){
                // alert("1");
                $("#scollr_img").css({"background-attachment":"fixed","background-size":"84% 57%","height":"400px"})
                // $(".navbar-fixed-top").css({"background":"#0f87fb"});
                    
            }
            else if(scrollTop <900 || scrollTop >=800){
                $("#scollr_img").css({"background-attachment":"scroll","background-size":"100% 100%","height":"400px"});
                // $(".navbar-fixed-top").css({"background":"rgba(0,0,0,0)"});
                // alert("3");
                
            }
        }else if(scrollTop ==0 || scrollTop <200){
            // alert("top")
            $("#navbar-nav").children("li:eq(0)").addClass("add");
            $("#navbar-nav").children("li:eq(1)").removeClass("add");
            $("#navbar-nav").children("li:eq(2)").removeClass("add"); 
            $("#navbar-nav").children("li:eq(3)").removeClass("add"); 
            $("#navbar-nav").children("li:eq(4)").removeClass("add");
            $("#navbar-nav").children("li:eq(5)").removeClass("add");
            $(".navbar-fixed-top").css({"background":"rgba(0,0,0,0)"});
                          
        }
        if (active==1) {
            $(".navbar_li").click(function(){
                $(this).addClass("add");
                $(this).parent().siblings().children("a").removeClass("add");
            })
        }else{
            $(".navbar_li").parent().siblings().children("a").removeClass("add");
        }
    });
 
    $(window).scroll(function(){
        // var scrollTop = document.documentElement.scrollTop;
        if($(this).scrollTop()>100){
            // alert("2");
           $(".rightMenuBox").show();
        }else{
            $(".rightMenuBox").hide();
        }
    });
    $(".backTop").click(function(){
        $("html,body").animate({"scrollTop":"0"},500);
    });
    var active = $("#navbar-nav").attr("num");
    // alert(active);
    if (active==1) {
        $(".navbar_li").click(function(){
            $(this).addClass("add");
            $(this).parent().siblings().children("a").removeClass("add");
        })
    }else{
        $(".navbar_li").parent().siblings().children("a").removeClass("add");
    }
   
}) 