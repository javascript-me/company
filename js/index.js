var reg = location.search.match(/ts=([^&]*)/);
var ts = reg && reg[1] || 'scroll';
var a = new pageSwitch('pages',{
        duration: 1000,
        start: 0,
        direction: 1,
        loop: false,
        ease: 'ease',
        transition: ts,
        freeze: false,
        mouse: true,
        mousewheel: true,
        arrowkey: true
});

(function initPagination() {//导航条初始化
    var length = $('.page').length;
    var pageHtml = '<ul id="pagination"><li class="active"></li>'
    for (var i = 1; i < length; i++) pageHtml += '<li></li>';
    pageHtml += '</ul>';
    $("body").append(pageHtml);
})();

a.on('before', function (cpage, cp, tpage, tp) {//监听滑屏触发后事件，pagination
    var str;
    if((cpage-cp)=== -1) {//console.log('-1');
        if((cp+1) === 2) {//第二屏样式特殊处理
            $('#pagination li, #pagination li.active').css({'background':'#333'});
        }else {
            $('#pagination li, #pagination li.active').css({'background':'#fff'});
        }
        str = ':nth-child('+(cp+1)+')';
        $('#pagination li').removeClass('active');
        $('#pagination li'+str).addClass('active');
    }else if((cpage-cp) === 1) {//console.log('1');
        if(cpage === 2) {//第二屏样式特殊处理
            $('#pagination li, #pagination li.active').css({'background':'#333'});
        }else {
            $('#pagination li, #pagination li.active').css({'background':'#fff'});
        }
        str = ':nth-child('+(cpage)+')';
        $('#pagination li').removeClass('active');
        $('#pagination li'+str).addClass('active');
    }else {
        //do nothing
    }
});

setTimeout(function(){//防止图片闪烁问题
    $('.page-body').css({'visibility':'visible'});
}, 500);

$('.logo').on('click', function () {
    window.location.href = './index.html';
});

$('.nav-menu li').on('click', function () {//首页，关于，QTrade网页版
    if($(this).index() === 1){
        window.location.href = './html/about.html';
    }else if($(this).index() === 2){
		window.location.href = './html/charge-way.html';
    }else if($(this).index() === 3){
		window.open('https://www.qtrade.com.cn');
    }else if($(this).index() === 4){
		$('.mobile-menu').removeClass('mobile-show');
		$('#mobileMenu').parent().addClass('mobile-show');
    }
})

$('#mobileMenu li').on('click', function(){
	var index = $(this).index();
	if(index === 0){
		$('#closeMobileMenu').click();
		window.location.reload();
	}else if(index === 1){
		window.location.href = './html/about.html?index=' + index;
	}else if(index === 2){
		window.location.href = './html/about.html?index=' + index;
	}else if(index === 3){
		window.location.href = './html/about.html?index=' + index;
	}
})

$('#closeMobileMenu').on('click', function(){
	$(this).parent().removeClass('mobile-show');
	$('.mobile-menu').addClass('mobile-show');
})

$('button[name="clickToUse"]').on('click', function () {//点击使用
    window.open('https://www.qtrade.com.cn');
})