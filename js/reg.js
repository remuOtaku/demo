$('.meg i').on('click', function() {
    if ($(this).hasClass('act')) {
        $(this).removeClass('act');
    } else {
        $(this).addClass('act');
    }
});
$('.input input').blur(function() {
    var reg = /^\w{6,}$/;
    if ($('.input input').val() == "") {
        $('.err_tip').css('display', 'block').children('span').html('请输入密码').removeClass('islog');
    } else if (!(reg.test($('.input input').val()))) {
        $('.err_tip').css('display', 'block').children('span').html('请输入正确的密码').removeClass('islog');
    } else {
        $('.err_tip').css('display', 'none').addClass('islog', 'true');
    }

});
$('.sib input').on('click', function() {
    var user = $('#user').val();
    var pwd = $('.iplist .input input').val();
    if ($('.meg i').hasClass('act')) {
        $('.err_tip1').css('display', 'block').removeClass('islog');
    } else {
        $('.err_tip1').css('display', 'none').addClass('islog', 'true');
    }
    if ($('.iphone_step>p').hasClass('islog') && $('.err_tip').hasClass('islog') && $('.err_tip1').hasClass('islog')) {
        location.href = "php/reg.php?user=" + user + '&pwd=' + pwd;
    } else if (!($('.iphone_step>p').hasClass('islog'))) {
        $('.iphone_step>p').css('display', 'block');
        if (!($('.err_tip').hasClass('islog'))) {
            $('.err_tip').css('display', 'block');
        }
    } else if (!($('.err_tip').hasClass('islog'))) {
        $('.err_tip').css('display', 'block');
    }

});
$('.listwrap #user').blur(function() {
    var reg = /^[A-z]\w{4,}$/;
    if ($(this).val() == "") {
        $('.iphone_step>p').css('display', 'block').text("用户名不能为空").removeClass('islog');
    } else if (!(reg.test($(this).val()))) {
        $('.iphone_step>p').css('display', 'block').text('用户名以字母开头至少5位，不能使用非法字符').removeClass('islog');
    } else {
        $('.iphone_step>p').css('display', 'none').addClass('islog', 'true');
    }
});