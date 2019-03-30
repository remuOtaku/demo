if ($('#user span').html() == "") {
    $('.temp').css('display', 'block');
    $('.box').css('display', 'none');
} else {
    $('.temp').css('display', 'none');
    $('.box').css('display', 'block');
}
$('.list-head .check i').on('click', function() {
    if ($(this).html() == "") {
        $(this).html("✔");
        $('.check i').css('background', '#ff6700').css('border-width', '0');
        if ($('.goodslist').find('.item-box').length > 0) {
            $('.item-box .item-list .check i').html("✔");
        }

    } else {
        $(this).html("");
        $('.check i').css('background', '#fff').css('border-width', '1px');
        if ($('.goodslist').find('.item-box').length > 0) {
            $('.item-box .item-list .check i').html("");
        }

    }
});
$('.item-box .check i').on('click', function() {
    if ($(this).html() == "") {
        $(this).html("✔");
        $(this).css('background', '#ff6700').css('border-width', '0');
        let cont = 0;
        $('.item-box .check i').each(function(i, o) {
            if ($(this).html() == "✔") {
                cont++;
            }
        });
        if ($('.item-box .check i').length == cont) {
            $('.list-head .check i').html("✔").css('background', '#ff6700').css('border-width', '0');
        }
    } else {
        $(this).html("");
        $('.list-head .check i').html("").css('background', '#fff').css('border-width', '1px');
        $(this).css('background', '#fff').css('border-width', '1px');
    }

});
$('.item-box .action').on('click', function() {
    var choose = confirm('是否删除');
    if (choose) {
        $('.goodslist').children().eq($(this).parent().parent().index()).remove();

    }
});
$('.check i').on('click', function() {
    let cont = 0;
    $('.check i').each(function(i, o) {
        if ($(this).html() == "✔") {
            cont++;
        }
    });
    if (cont == 0) {
        $('.top-bar').css('display', 'block');
        $('.char-bar .clear').css({
            'background': '#e0e0e0',
            'color': '#e0e0e0',
            'border-color': '#e0e0e0',
            'cursor': 'default',
            'color': '#fff'
        })
    } else {
        $('.top-bar').css('display', 'none');
        $('.char-bar .clear').css('background', '#ff6700').css('color', '#fff').css('border-color', '#ff6700');
    }
});