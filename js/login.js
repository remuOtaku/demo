$('.tabs>a').eq(0).on('click', function() {
    $('.tabs-con').css('display', 'block');
    $('.tabs-con1').css('display', 'none');
    $('.tabs>a').eq(0).addClass('active').siblings('a').removeClass('active')
});
$('.tabs>a').eq(1).on('click', function() {
    $('.tabs-con1').css('display', 'block');
    $('.tabs-con').css('display', 'none');
    $('.tabs>a').eq(1).addClass('active').siblings('a').removeClass('active')
});