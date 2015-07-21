$(document).ready(function(){
	setTimeout(visitLog, 10000);
});
function visitLog(){
	//$.get(reurl('share/visitLog.html'),{pageurl:window.location.href});
	$.ajax({
		url: reurl('share/visitLog.html'),
		type: 'POST',
		timeout:5000,
		data:{pageurl:window.location.href}
	});
}
//百度统计
var _hmt = _hmt || [];
(function(){
	var hm = document.createElement("script");
	hm.src = "//hm.baidu.com/hm.js?77150d2282460688ba0ff4074c41dd63";
	var s = document.getElementsByTagName("script")[0];
	s.parentNode.insertBefore(hm,s);
})();
//广点通
(function(){
	var tajs = document.createElement("script");
	tajs.src = "http://tajs.qq.com/gdt.php?sId=29918045";
	tajs.charset = "UTF-8";
	var s = document.getElementsByTagName("script")[0];
	s.parentNode.insertBefore(tajs,s);
})();
//摸象代码
$(document).ready(function(){
	var url = window.location.host;
	var str = url.split('.');
	if(str[0] == 'www'){
		var _mjoy = window.mjoy || [];
		_mjoy.push(['ula','3175103']);
		_mjoy.push(['userId',getcookie('mjoysid')]);
		if(theid == ''){
			_mjoy.push(['isRegister','0']);
			_mjoy.push(['isLogin','0']);
		}else{
			_mjoy.push(['isRegister','1']);
			_mjoy.push(['isLogin','1']);
		}
		switch(app){
			case 'main':
				_mjoy.push(['pageLv','index']);
				break;
			case 'brand':
				_mjoy.push(['pageLv','brand']);
				_mjoy.push(['brandId',brandid]);
				_mjoy.push(['brandName',brandname]);
				break;
			case 'goodslist':
				_mjoy.push(['pageLv','category']);
				_mjoy.push(['categoryId',cate_cid]);
				_mjoy.push(['categoryName',cate_name]);
				break;
			case 'goods':
				_mjoy.push(['pageLv','goods']);
				_mjoy.push(['categoryName',cate_name]);
				_mjoy.push(['categoryId',cate_id]);
				_mjoy.push(['brandId',brandid]);
				_mjoy.push(['brandName',brandname]);
				_mjoy.push(['goodName',subject]);
				_mjoy.push(['goodId',goodid]);
				_mjoy.push(['goodNowPrice',nowprice]);
				_mjoy.push(['goodPrice',price]);
				_mjoy.push(['goodStockStatus',stock]);
				_mjoy.push(['goodEndTime','']);
				_mjoy.push(['goodImgUrls',imgurl]);
				break;
			case 'search':
				_mjoy.push(['pageLv','search']);
				break;
			case 'favorites':
				_mjoy.push(['pageLv','loveGoods']);
				break;
			default:
				_mjoy.push(['pageLv','na']);
				break;
		}
		window._mjoy = _mjoy;
		(function (){
			var mjoy = document.createElement("script");
			mjoy.src = 'http://fx.mjoys.com/mjoy.min.js';
			var s = document.getElementsByTagName("script")[0];
			s.parentNode.insertBefore(mjoy,s);
		})();
	}
});
//品友
var _py = _py || [];
$(function (){
	_py.push(['a', 'P-..IiRNoC0BdN7ZqOCRoeyFl0']);
    _py.push(['domain','stats.ipinyou.com']);
    _py.push(['e','']);
    if(app == 'goods'){
    	var _goodsData = 
    	{
    	id:goodid, //商品ID（必填）
    	soldOut:stock<=0 ? 1 : 0, // 状态 1下架，0在售（必填）
    	category:parent_cname+'-'+cate_name, // 所属分类完整路径 （必填）
    	categoryId:cate_id, // 所属分类ID （必填）
    	name:subject, // 商品名称（必填）
    	price:nowprice, // 商品售价（必填）
    	imgUrl:imgurl, // 商品预览图 （必填）
    	productUrl:'http://www'+cookiedomain+'/goods/'+goodid+'.html', // 商品URL地址 （必填）
    	domain:'', // 分站（如有分站必填）
    	brand:'', // 商品品牌(选填)
    	promotion:'', // 促销信息 (选填)
    	discount:'', // 折扣数字(选填)
    	origPrice:price // 商品原价(选填)
    	};
    	_py.push(['pi',_goodsData]);
    }
	if(app == 'goods' || app == 'goodslist'){
		_py.push(['pv',jskey]);
	}
	-function(d) {
		var s = d.createElement('script'),
		e = d.body.getElementsByTagName('script')[0]; e.parentNode.insertBefore(s, e),
		f = 'https:' == location.protocol;
		s.src = (f ? 'https' : 'http') + '://'+(f?'fm.ipinyou.com':'fm.p0y.cn')+'/j/adv.js';
	}(document);
});