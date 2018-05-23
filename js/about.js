$('.logo').on('click', function () {
    window.location.href = '../index.html';
});

$('.nav-menu li').on('click', function () {//首页，关于，QTrade网页版
    if($(this).index() === 0){
        window.location.href = '../index.html';
    }else if($(this).index() === 2){
		window.location.href = '../html/charge-way.html';
    }else if($(this).index() === 3){
        window.open('https://www.qtrade.com.cn');
    }else if($(this).index() === 4){
		$('.mobile-menu').removeClass('mobile-show');
		$('#mobileMenu').parent().addClass('mobile-show');
    }
})

$('.about-l-m li').on('click', function () {//关于QTrade，联系我们，加入QTrade
    $('.about-l-m li').removeClass() && $(this).addClass('active');

    var index_ = ':nth-child('+($(this).index()+1)+')';
    $('.about-r-m>ol>li').removeClass() && $('.about-r-m>ol>li'+index_).addClass('active');
})

$('.check-detail').on('click', function () {//查看详情
    if(!$(this).children('span.up-down-icon').hasClass('active')){
        $(this).parent().parent().addClass('active');
        $(this).children('span.up-down-icon').addClass('active');
    }else {
        $(this).parent().parent().removeClass('active');
        $(this).children('span.up-down-icon').removeClass('active');
    }
})

$('#mobileMenu li').on('click', function(){
	if($(this).index() === 0){
		window.location.href = '../index.html';
	}else if($(this).index() === 1){
		$('#closeMobileMenu').click() && $('.about-l-m li:nth-child(1)').click();
	}else if($(this).index() === 2){
		$('#closeMobileMenu').click() && $('.about-l-m li:nth-child(2)').click();
	}else if($(this).index() === 3){
		$('#closeMobileMenu').click() && $('.about-l-m li:nth-child(3)').click();
	}
})

$('#closeMobileMenu').on('click', function(){
	$(this).parent().removeClass('mobile-show');
	$('.mobile-menu').addClass('mobile-show');
})

var url = window.location.href;
var last_index = url.charAt(url.length - 1, 1);
if(last_index === '1' || last_index === '2' || last_index === '3'){
	$('.about-l-m li:nth-child('+last_index+')').click();
}