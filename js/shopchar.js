//用户名
if (!!(cookie.get("username"))) {
    $('#user a').eq(0).attr('href', 'javascript:;').children('span').html(cookie.get("username"));
    $('#main .temp').css('display', 'none');
    $('#main .box').css('display', 'block');
} else {
    $('#main .temp').css('display', 'block');
    $('#main .box').css('display', 'none');
}
//内容
var arr = [];
var arr1 = [];
for (var i = 0; i <= 100; i++) {
    if (localStorage.getItem(i)) {
        arr.push(localStorage.getItem(i));
        $.ajax({
            url: 'php/more.php',
            type: 'get',
            dataType: 'json',
            data: {
                id: i
            },
            success: function(data) {
                var list = $('.goodslist');
                data.forEach(function(elm) {
                    var temp = `
                    <div class="item-box" id="${elm.id}">
                        <div class="item-list">
                            <div class="check">
                                <i onclick="gou(${elm.id})" class="ischeck">✔</i>
                            </div>
                            <div class="img">
                                <a href="more.html?id=${elm.id}">
                                    <img src="images/${elm.small}">
                                </a>
                            </div>
                            <div class="goodsname">${elm.goods}</div>
                            <div class="price">${elm.price}</div>
                            <div class="num">
                                <div>
                                    <a href="javascript:;" onclick="jian(${elm.id})">-</a>
                                    <input type="text" value="${localStorage.getItem(elm.id)}">
                                    <a href="javascript:;" onclick="jia(${elm.id})">+</a>
                                </div>
                            </div>
                            <div class="total">${localStorage.getItem(elm.id)*parseInt(elm.price)}元</div>
                            <div class="action" onclick="xiaoshi(${elm.id})">x</div>
                        </div>

                    </div>
                    `;
                    list.append(temp);
                });
            }
        });
    }
}
setTimeout(function() {
    let zhong = 0;
    for (let i = 0; i < $('.item-box .total').length; i++) {
        zhong += parseInt($('.item-box .total').eq(i).html());

    }
    $('.char-bar>span em').html(zhong);
}, 1000);
//数量按钮
function jia(i) {
    if ($('#' + i).children().children('.check').children('i').html() == "") {

    } else {
        if ($('#' + i).children().children('.num').children().children('input').val() >= 10) {
            return;
        }
        $('#' + i).children().children('.num').children().children('input').val(function(x, o) {
            return parseInt(o) + 1;
        });
        localStorage.setItem(i, $('#' + i).children().children('.num').children().children('input').val());
        $('#' + i).children().children('.total').html(parseInt($('#' + i).children().children('.price').html()) * localStorage.getItem(i) + '元');
        $('.char-bar>span em').html(
            (parseInt($('#' + i).children().children('.price').html())) + (parseInt($('.char-bar>span em').html())));
    }
}

function jian(i) {

    if ($('#' + i).children().children('.check').children('i').html() == "") {

    } else {
        if ($('#' + i).children().children('.num').children().children('input').val() <= 1) {
            return;
        }
        $('#' + i).children().children('.num').children().children('input').val(function(x, o) {
            return parseInt(o) - 1;
        });
        localStorage.setItem(i, $('#' + i).children().children('.num').children().children('input').val());
        $('#' + i).children().children('.total').html(parseInt($('#' + i).children().children('.price').html()) * localStorage.getItem(i) + '元');
        $('.char-bar>span em').html(
            (parseInt($('.char-bar>span em').html())) - (parseInt($('#' + i).children().children('.price').html())));
    }
}
//删除
function xiaoshi(i) {
    var choose = confirm("是否删除");
    if (choose) {
        $('#' + i).parent().children('#' + i).remove();
        localStorage.removeItem(i);
        location.reload();
    }
}

//价格
function jisuan() {
    $('.char-bar .bar-left span i').eq(1).html($('.ischeck').length);
}
$('.char-bar .bar-left span i').eq(0).html(arr.length);
$('.char-bar .bar-left span i').eq(1).html(arr.length);
//钩
function gou(i) {
    var check = $('#' + i).children().children('.check').children();
    if (check.html() == "") {
        check.html("✔");
        check.css('background', '#ff6700').css('border-width', '0').removeClass('ucheck').addClass('ischeck');
        if ($('.ischeck').length == $('.item-box .check i').length) {
            $('.list-head .check i').css({
                'background': '#ff6700',
                'border-width': '0'
            });
        }
        $('.char-bar>span em').html(
            (parseInt($('.char-bar>span em').html())) + (parseInt($('#' + i).children().children('.total').html())));
    } else {
        check.html("");
        check.css('background', '#fff').css('border-width', '1px').removeClass('ischeck').addClass('ucheck');
        $('.list-head .check i').css({
            'background': '#fff',
            'border-width': '1px'
        });
        $('.char-bar>span em').html(
            (parseInt($('.char-bar>span em').html())) - (parseInt($('#' + i).children().children('.total').html())));
    }
    if ($('.ischeck').length <= 0) {
        $('.top-bar').css('display', 'block');
    } else {
        $('.top-bar').css('display', 'none');
    }
    jisuan();
}

$('.list-head .check i').on('click', function() {
    if ($(this).html() == "") {
        $(this).html("✔");
        $('.check i').css('background', '#ff6700').css('border-width', '0');
        if ($('.goodslist').find('.item-box').length > 0) {
            $('.item-box .item-list .check i').html("✔");
        }
        $('.top-bar').css('display', 'none');
        setTimeout(function() {
            let zhong = 0;
            for (let i = 0; i < $('.item-box .total').length; i++) {
                zhong += parseInt($('.item-box .total').eq(i).html());

            }
            $('.char-bar>span em').html(zhong);
        }, 300);
        $('.char-bar .clear').css('background', '#ff6700').css('color', '#fff').css({
            'border-color': '#ff6700',
            'cursor': 'pointer'
        });
    } else {
        $(this).html("");
        $('.check i').css('background', '#fff').css('border-width', '1px');
        if ($('.goodslist').find('.item-box').length > 0) {
            $('.item-box .item-list .check i').html("");
        }
        $('.top-bar').css('display', 'block');
        $('.char-bar .clear').css({
            'background': '#e0e0e0',
            'color': '#e0e0e0',
            'border-color': '#e0e0e0',
            'cursor': 'default',
            'color': '#fff'
        });
        $('.char-bar>span em').html(0);
    }
});
// $('.item-box .check i').on('click', function() {
//     if ($(this).html() == "") {
//         $(this).html("✔");
//         $(this).css('background', '#ff6700').css('border-width', '0');
//         let cont = 0;
//         $('.item-box .check i').each(function(i, o) {
//             if ($(this).html() == "✔") {
//                 cont++;
//             }
//         });
//         if ($('.item-box .check i').length == cont) {
//             $('.list-head .check i').html("✔").css('background', '#ff6700').css('border-width', '0');
//         }
//     } else {
//         $(this).html("");
//         $('.list-head .check i').html("").css('background', '#fff').css('border-width', '1px');
//         $(this).css('background', '#fff').css('border-width', '1px');
//     }

// });
// $('.check i').on('click', function() {
//     let cont = 0;
//     $('.check i').each(function(i, o) {
//         if ($(this).html() == "✔") {
//             cont++;
//         }
//     });
//     if (cont == 0) {
//         $('.top-bar').css('display', 'block');
//         $('.char-bar .clear').css({
//             'background': '#e0e0e0',
//             'color': '#e0e0e0',
//             'border-color': '#e0e0e0',
//             'cursor': 'default',
//             'color': '#fff'
//         })
//     } else {
//         $('.top-bar').css('display', 'none');
//         $('.char-bar .clear').css('background', '#ff6700').css('color', '#fff').css('border-color', '#ff6700');
//     }
// });