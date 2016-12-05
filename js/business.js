//设置底部的nav
$(".navbar a").eq(1).css("color","#06c1ae").siblings().css("color","grey");
$(".navbar i").eq(1).css("color","#06c1ae").siblings().css("color","grey");

//首先把所有右边的列表项先隐藏
$("ul[class*='block-right-']").css("display","none");

//把整个页面所有按钮被按下时都去除边框
$("button").on({
	"mousedown": function(){
		$("button").css("outline","none");
	},
})

//点击头部导航第一个按钮全部商家按钮应用的样式
$(".header button").eq(0).on({
	"click": function (){
		$(".header button").eq(0).attr("id","btn1").siblings().attr("id","");
//		$(".block-left").eq(0).css("display","none");
		$(".block").css("display","none");
	},
})

//点击头部导航第二个按钮优惠商家商家按钮应用的样式
$(".header button").eq(1).on({
	"click": function (){
		$(".header button").eq(1).attr("id","btn1").siblings().attr("id","");
//		$(".block-left").eq(0).css("display","none");
		$(".block").css("display","none");
		
	},
})

//点击nav导航中的第一个按钮应用的样式
$(".nav button").eq(0).on({
	"click": function(){
		$(".block-left").eq(1).css("display","none");
		$(".block-left").eq(2).css("display","none");
		$(".block").css("display","block");
		$(".block-left").eq(0).css("display","block");
		$("ul[class*='block-righta-']").css("display","none");
		$("ul[class*='block-right-']").css("display","none");
		$(".block-righta-").css("display","none");
		$(".block-right-").css("display","block");
//		$(".block").css("height",window.screen.height);
		$(".block").css("height",screen.availHeight-160+'px');
		$(".block-left li").css("background-color","#fff")
		$(".block-left li").eq(0).css("background-color","#f1f1f1");
	}
})

//点击nav导航中的第二个按钮应用的样式
$(".nav button").eq(1).on({
	"click": function(){
		$(".block").css("display","block");
		$(".block-left").eq(0).css("display","none");
		$(".block-left").eq(2).css("display","none");
		$(".block-left").eq(1).css("display","block");
		$("ul[class*='block-right-']").css("display","none");
		$(".block-righta-a").css("display","block");
//		$(".block").css("height",window.screen.height);
		$(".block").css("height",screen.availHeight-20+'px');
	}
})

//点击nav导航中的第三个按钮应用的样式
$(".nav button").eq(2).on({
	"click": function(){
		$(".block").css("display","block");
		$(".block-left").eq(0).css("display","none");
		$(".block-left").eq(1).css("display","none");
		$(".block-left").eq(2).css({
			"display":"block",
			"width": 100+'%',
			"height": "1.4rem",
			});
		$(".block-left").eq(2).children().eq(0).css("background-color", "#f1f1f1")
		$("ul[class*='block-right-']").css("display","none");
		$("ul[class*='block-righta-']").css("display","none");
//		$(".block").css("height",window.screen.height);
		$(".block").css("height",screen.availHeight-160+'px');
	}
})

//下面10个是点击对应的li显示对应的ul和隐藏其他ul
$(".block-left li").eq(0).click(function(){
	$("ul[class*='block-righta-']").css("display","none");
	$("ul[class*='block-right-']").css("display","none");
	$(".block-right-").css("display","block");
	$(".fcolor").removeClass("qingse");
	$(".fcolor").eq(0).addClass("qingse");
	$(".block-left li").css("background-color","#fff")
	$(".block-left li").eq(0).css("background-color","#f1f1f1");
})

$(".block-left li").eq(1).click(function(){
	$("ul[class*='block-righta-']").css("display","none");
	$("ul[class*='block-right-']").css("display","none");
	$(".block-right-").css("display","block");
	$(".fcolor").removeClass("qingse");
	$(".fcolor").eq(1).addClass("qingse");
		$(".block-left li").css("background-color","#fff")
	$(".block-left li").eq(1).css("background-color","#f1f1f1");
})

$(".block-left li").eq(2).click(function(){
	$("ul[class*='block-righta-']").css("display","none");
	$("ul[class*='block-right-']").css("display","none");
	$(".block-right-a").css("display","block");
	$(".fcolor").removeClass("qingse");
	$(".fcolor").eq(2).addClass("qingse");	
	$(".block-left li").css("background-color","#fff")
	$(".block-left li").eq(2).css("background-color","#f1f1f1");
})

$(".block-left li").eq(3).click(function(){
	$("ul[class*='block-righta-']").css("display","none");
	$("ul[class*='block-right-']").css("display","none");
	$(".block-right-").css("display","block");
	$(".fcolor").removeClass("qingse");
	$(".fcolor").eq(3).addClass("qingse");
	$(".block-left li").css("background-color","#fff")
	$(".block-left li").eq(3).css("background-color","#f1f1f1");
})

$(".block-left li").eq(4).click(function(){
	$("ul[class*='block-righta-']").css("display","none");
	$("ul[class*='block-right-']").css("display","none");
	$(".block-right-b").css("display","block");
	$(".fcolor").removeClass("qingse");
	$(".fcolor").eq(4).addClass("qingse");
	$(".block-left li").css("background-color","#fff")
	$(".block-left li").eq(4).css("background-color","#f1f1f1");
})

$(".block-left li").eq(5).click(function(){
	$("ul[class*='block-righta-']").css("display","none");
	$("ul[class*='block-right-']").css("display","none");
	$(".block-right-c").css("display","block");
	$(".fcolor").removeClass("qingse");
	$(".fcolor").eq(5).addClass("qingse");
	$(".block-left li").css("background-color","#fff")
	$(".block-left li").eq(5).css("background-color","#f1f1f1");
})

$(".block-left li").eq(6).click(function(){
	$("ul[class*='block-righta-']").css("display","none");
	$("ul[class*='block-right-']").css("display","none");
	$(".block-right-").css("display","block");
	$(".fcolor").removeClass("qingse");
	$(".fcolor").eq(6).addClass("qingse");
	$(".block-left li").css("background-color","#fff")
	$(".block-left li").eq(6).css("background-color","#f1f1f1");
})

$(".block-left li").eq(7).click(function(){
	$("ul[class*='block-righta-']").css("display","none");
	$("ul[class*='block-right-']").css("display","none");
	$(".block-right-d").css("display","block");
	$(".fcolor").removeClass("qingse");
	$(".fcolor").eq(7).addClass("qingse");
	$(".block-left li").css("background-color","#fff")
	$(".block-left li").eq(7).css("background-color","#f1f1f1");
})

$(".block-left li").eq(8).click(function(){
	$("ul[class*='block-righta-']").css("display","none");
	$("ul[class*='block-right-']").css("display","none");
	$(".block-right-e").css("display","block");
	$(".fcolor").removeClass("qingse");
	$(".fcolor").eq(8).addClass("qingse");
	$(".block-left li").css("background-color","#fff")
	$(".block-left li").eq(8).css("background-color","#f1f1f1");
})

$(".block-left li").eq(9).click(function(){
	$("ul[class*='block-righta-']").css("display","none");
	$("ul[class*='block-right-']").css("display","none");
	$(".block-right-f").css("display","block");
	$(".fcolor").removeClass("qingse");
	$(".fcolor").eq(9).addClass("qingse");
	$(".block-left li").css("background-color","#fff")
	$(".block-left li").eq(9).css("background-color","#f1f1f1");
})


//下面10个是点击对应的li显示对应的ul和隐藏其他ul
$(".block-left").eq(1).children().eq(0).click(function(){
	$("ul[class*='block-righta-']").css("display","none");
	$(".block-righta-a").css("display","block");
	$(".block-left").eq(1).children().children().removeClass("qingse");
	$(".block-left").eq(1).children().eq(0).children().eq(0).addClass("qingse");
	$(".block-left").eq(1).children().css("background-color","#fff")
	$(".block-left").eq(1).children().eq(0).css("background-color","#f1f1f1")
})

$(".block-left").eq(1).children().eq(1).click(function(){
	$("ul[class*='block-righta-']").css("display","none");
	$(".block-righta-b").css("display","block");
	$(".block-left").eq(1).children().children().removeClass("qingse");
	$(".block-left").eq(1).children().eq(1).children().eq(0).addClass("qingse");
	$(".block-left").eq(1).children().css("background-color","#fff")
	$(".block-left").eq(1).children().eq(1).css("background-color","#f1f1f1")
})

//$(".block-left").eq(1).children().eq(2).click(function(){
//	$("ul[class*='block-righta-']").css("display","none");
//	$(".block-righta-c").css("display","block");
//	$(".block-left").eq(1).children().children().removeClass("qingse");
//	$(".block-left").eq(1).children().eq(2).children().addClass("qingse");
//})

$(".block-left").eq(1).children().eq(3).click(function(){
	$("ul[class*='block-righta-']").css("display","none");
	$(".block-righta-c").css("display","block");
	$(".block-left").eq(1).children().children().removeClass("qingse");
	$(".block-left").eq(1).children().eq(3).children().eq(0).addClass("qingse");
	$(".block-left").eq(1).children().css("background-color","#fff")
	$(".block-left").eq(1).children().eq(3).css("background-color","#f1f1f1")
})

$(".block-left").eq(1).children().eq(4).click(function(){
	$("ul[class*='block-righta-']").css("display","none");
	$(".block-righta-d").css("display","block");
	$(".block-left").eq(1).children().children().removeClass("qingse");
	$(".block-left").eq(1).children().eq(4).children().eq(0).addClass("qingse");
	$(".block-left").eq(1).children().css("background-color","#fff");
	$(".block-left").eq(1).children().eq(4).css("background-color","#f1f1f1");
})

$(".block-left").eq(1).children().eq(5).click(function(){
	$("ul[class*='block-righta-']").css("display","none");
	$(".block-righta-e").css("display","block");
	$(".block-left").eq(1).children().children().removeClass("qingse");
	$(".block-left").eq(1).children().eq(5).children().eq(0).addClass("qingse");
	$(".block-left").eq(1).children().css("background-color","#fff");
	$(".block-left").eq(1).children().eq(5).css("background-color","#f1f1f1");
})

$(".block-left").eq(1).children().eq(6).click(function(){
	$("ul[class*='block-righta-']").css("display","none");
	$(".block-righta-f").css("display","block");
	$(".block-left").eq(1).children().children().removeClass("qingse");
	$(".block-left").eq(1).children().eq(6).children().eq(0).addClass("qingse");
	$(".block-left").eq(1).children().css("background-color","#fff");
	$(".block-left").eq(1).children().eq(6).css("background-color","#f1f1f1");
})

$(".block-left").eq(1).children().eq(7).click(function(){
	$("ul[class*='block-righta-']").css("display","none");
	$(".block-righta-g").css("display","block");
	$(".block-left").eq(1).children().children().removeClass("qingse");
	$(".block-left").eq(1).children().eq(7).children().eq(0).addClass("qingse");
	$(".block-left").eq(1).children().css("background-color","#fff");
	$(".block-left").eq(1).children().eq(7).css("background-color","#f1f1f1");
})

$(".block-left").eq(1).children().eq(8).click(function(){
	$("ul[class*='block-righta-']").css("display","none");
	$(".block-righta-h").css("display","block");
	$(".block-left").eq(1).children().children().removeClass("qingse");
	$(".block-left").eq(1).children().eq(8).children().eq(0).addClass("qingse");
	$(".block-left").eq(1).children().css("background-color","#fff");
	$(".block-left").eq(1).children().eq(8).css("background-color","#f1f1f1");
})

$(".block-left").eq(1).children().eq(9).click(function(){
	$("ul[class*='block-righta-']").css("display","none");
	$(".block-righta-j").css("display","block");
	$(".block-left").eq(1).children().children().removeClass("qingse");
	$(".block-left").eq(1).children().eq(9).children().eq(0).addClass("qingse");
	$(".block-left").eq(1).children().css("background-color","#fff");
	$(".block-left").eq(1).children().eq(9).css("background-color","#f1f1f1");
})

//下面4个是点击对应的li显示对应的ul和隐藏其他ul
$(".block-left").eq(2).children().eq(0).click(function(){
	$(".block-left").eq(2).children().children().removeClass("qingse");
	$(".block-left").eq(2).children().eq(0).children().eq(0).addClass("qingse");
	$(".block-left").eq(2).children().css("background-color","#fff");
	$(".block-left").eq(2).children().eq(0).css("background-color","#f1f1f1");
})

$(".block-left").eq(2).children().eq(1).click(function(){
	$(".block-left").eq(2).children().children().removeClass("qingse");
	$(".block-left").eq(2).children().eq(1).children().eq(0).addClass("qingse");
	$(".block-left").eq(2).children().css("background-color","#fff");
	$(".block-left").eq(2).children().eq(1).css("background-color","#f1f1f1");
})

$(".block-left").eq(2).children().eq(2).click(function(){
	$(".block-left").eq(2).children().children().removeClass("qingse");
	$(".block-left").eq(2).children().eq(2).children().eq(0).addClass("qingse");
	$(".block-left").eq(2).children().css("background-color","#fff");
	$(".block-left").eq(2).children().eq(2).css("background-color","#f1f1f1");
})

$(".block-left").eq(2).children().eq(3).click(function(){
	$(".block-left").eq(2).children().children().removeClass("qingse");
	$(".block-left").eq(2).children().eq(3).children().eq(0).addClass("qingse");
	$(".block-left").eq(2).children().css("background-color","#fff");
	$(".block-left").eq(2).children().eq(3).css("background-color","#f1f1f1");
})
