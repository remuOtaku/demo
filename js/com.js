var shuzu = [];

function ini() {
    if (!!(cookie.get("username"))) {
        $('.log').css('display', 'none');
        $('.islog').css('display', 'block').children('a').eq(0).html(cookie.get("username"));
    }

    for (let i = 1; i < 100; i++) {
        if (localStorage.getItem(i)) {
            shuzu.push(localStorage.getItem(i));
            $('#header .top-char>a').css({
                'background': '#ff6700',
                'color': '#fff'
            });
        }
    }
}
ini();
$('#header .top-char>a span').html("(" + shuzu.length + ")");
$('.islog a').eq(1).on('click', function() {
    $(this).parent().css('display', 'none');
    $('.log').css('display', 'block');
    cookie.remove('username');
    $('.top-char>a').css({
        color: '#b0b0b0',
        background: 'transparent'
    });
    $('.top-char>a span').html("(" + 0 + ")");
});
$('.log a').eq(1).on('click', function() {
    int();
});
// 购物车
$('.top-char').hover(function() {
    $('.top-char a').css('hegiht', '44px').hover(function() {
        $('.char-menu').slideDown(100);
    });
    $('.char-menu').css('display', 'block');

}, function() {
    $('.top-char a').css('background', 'rgb(255, 103, 0)').css('hegiht', '');
    $('.char-menu').slideUp(300);
});