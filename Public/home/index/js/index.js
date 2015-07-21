var _c = _h = 0;
var iad = $(".indexad");
function play()
{
    _h = setInterval("auto()", 5000);
}
function change(i)
{
    var ctime = 200;
    var opc = 0.3;
    iad.find('.adplay > a.hov').removeClass('hov');
    iad.find('.adplay > a').eq(i).addClass('hov').blur();
    var fcs = iad.find(".adpic > div").eq(i);
    var hov = iad.find(".adpic > div.hov");
    if(!fcs.hasClass("hov")){        
        hov.stop().animate({opacity:opc},ctime);
    }
    fcs.css({opacity:opc}).stop().show().animate({opacity:1},ctime,function(){
        if(hov.length > 0){
            hov.removeClass("hov").hide();
        }
        $(this).addClass("hov").show();
	});
    var color = fcs.css("background-color");
    if(fcs.attr('data-barcolor') != ''){
        color = fcs.attr('data-barcolor');
    }
    $(".maincates-title").css({"background-color":color,opacity:opc}).animate({opacity:1});
    $(".catelist").css({"border-color":color});
}
function auto()
{    
	var ttal = iad.find('.adplay > a').length-2;
    _c = _c > ttal ? 0 : _c + 1;
    change(_c);
}
function disbuy(gid){
    cart_ctl('add',{
        gid:0,
        buytype:'discount',
        buynum:1,
        pam:2590,
        pam1:gid
    });	
}
function ffdbuy(){
    $('#fdbuy').load(reurl('share/goods.html?do=fdbuy&inajax=1'));
}
//$("[name='keyword']").focus();
$(document).ready(function(){
    var topadv = $('#index-topadv');
    if(topadv.length > 0){
        $('.headerTop').removeClass('fixed');
        $('.header').css({'padding-top':'10px'});
        var oldh = topadv.height();
        topadv.hide();
        $('body').prepend(topadv);
        topadv.show().height(0).animate({height:oldh},'slow',function(){
            setTimeout(function(){
        		topadv.animate({height:0},'slow',function(){
        		    topadv.remove();  
        		});
        	},15000);    
        });
    }
    //最新动态
    ScrollStart(".newact",90,3000);
    //联动
    iad.find('.adplay > a').mouseover(function(){
		var i = $(this).attr('alt') - 1;
		clearInterval(_h);
		_c = i;
		play();
		change(i);        
	})
	iad.mouseover(function(){clearInterval(_h)}).mouseout(function(){play()});
    change(0);
	play();
	/*
    $(".fuwu a").mouseover(function(){
        $(".fuwu a.hov").removeClass("hov");
        $(this).addClass("hov");
        $(".fuwu div").hide().eq($(this).index()).show();    
    });*/
    $(".zhis span a").mouseover(function(){
        $(".zhis span a.hov").removeClass("hov");
        $(this).addClass("hov");
        $(".zhistxt").hide().eq($(this).index()).show();
    });
    
    
    //首页活动tab切换
    var tab_num = $(".cx_nav a").length;
    var current_tab = 0;
    var timer = '';
    autoSwitchTab();
    $(".cx_nav a").hover(function(){//手动切换
        clearInterval(timer);
        switchTab($(this));
    },function(){
        autoSwitchTab();
    });
    $(".cx_nav a").click(function(){//自动切换用
        switchTab($(this));
    });
    function switchTab(obj){
        $(".cx_nav a.hov").removeClass("hov");
        var a = obj;
        a.addClass("hov");
        var hov = a.parents(".cx_nav").siblings(".cx_listbox").find("ul").hide().eq(a.index()).show();
        if(hov.html() == ''){
            hov.html('<em class="loading"></em>');
            hov.load(reurl('share/run.html?act=indexcx&tp='+a.attr('lang')),{inajax:1},function(data){
                lazyload({evt:hov.get(0)});
            });
        }
    }
    function autoSwitchTab(){
        timer = setInterval(function(){
            $('.cx_nav a').eq(current_tab).trigger('click');
            current_tab++; 
            current_tab = current_tab > tab_num - 1 ? 0 : current_tab;
        },5000);
    }
    
    $(".bdlist a").hover(function(){
        var img = $(this).find('img');
        img.hide();
        $(this).append('<span>'+img.attr('alt')+'</span>');    
    },function(){
        $(this).find('span').remove();
        $(this).find('img').show();
    });
    //首页品牌中心上方的幻灯片
    function slider(classname){
        var index = 0;
        var length = $("."+classname).find(".slider li").length;
        $("."+classname).find(".num li").mouseover(function(){
            index = $("."+classname).find(".num li").index(this);
            myShow(index);
        }).eq(0).mouseover();

        function myShow(index){
            $("."+classname).find(".num li").eq(index).addClass("on").siblings().removeClass("on");
            $("."+classname).find(".slider li").eq(index).stop(true,true).fadeIn(600).siblings("li").fadeOut(600);
        }
        //滑入停止动画，滑出开始动画
        $("."+classname).find(".slider li").hover(function(){
            clearInterval(myTime);
        },function(){
            myTime = setInterval(function(){
                myShow(index)
                index++;
                if(index==length){index=0;}
            } , 3000);
        });
        //自动开始
        var myTime = setInterval(function(){
            myShow(index)
            index++;
            if(index==length){index=0;}
        } , 3000);	
    }
    slider("dc-slider");
});