/**
* ajax 动态加载 登录信息 基础信息
*/
(function(undefined){
    var gutou_loadbase = {};

    gutou_loadbase._init = function(){
        gutou_loadbase._live();
    }

    gutou_loadbase._live = function(){
        $('.pre_loading').show();
        // 加载登录的信息
        gutou_loadbase.loginData();
    }

    // 每次加载页面 加载登录信息
    gutou_loadbase.loginData = function(){
        var app1 = app || '';
        $.ajax({
            type:'GET',
            url:'http://www.epet.com/json/data.html?t='+(new Date().getTime()),
            data:'jsoncallback=gutou_loadbase.loaduserinfo&app='+app1,
            dataType:'jsonp'
        });
    }

    gutou_loadbase.loaduserinfo = function(data){
        $('.pre_loading').hide();
        if(data.method == 'write'){
            if(data.append){
                $.each(data.append,function(k,v){
                    $("[data-name='"+k+"']").append(v);
                });
            }

            if(data.remove){
                $.each(data.remove,function(k,v){
                    $("[data-name='"+k+"']").remove();
                });
            }

            if(data.html){
                $.each(data.html,function(k,v){
                    $("[data-name='"+k+"']").html(v);
                });
            }
            if(data.runFunction){
                eval(''+data.runFunction+'('+data.data+');');
            }
        }
    }

    if(window.gutou_loadbase == undefined) {
        window.gutou_loadbase = gutou_loadbase;
    }
})();
function runFunction(data){
    //alert('ok');
}

//$(document).ready(function(){
    gutou_loadbase._init();
//});