var shuzu = [];

function ini() {
    if (!!(cookie.get("username"))) {
        $('.log').css('display', 'none');
        $('.islog').css('display', 'block').children('a').eq(0).html(cookie.get("username"));
        for (var i = 1; i < 100; i++) {
            if (localStorage.getItem(i)) {
                shuzu.push(localStorage.getItem(i));
                $('#header .top-char>a').css({
                    'background': '#ff6700',
                    'color': '#fff'
                });
            }
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
$('.top-char,.top-char .char-menu').on("mouseenter", function() {
    if (cookie.get("username") !== "") {
        $('.char-menu').css({
            'display': 'block',
            hegiht: '100px'
        });
        $('.top-char a').css({
            'background': '#fff',
            color: 'rgb(255, 103, 0)'
        });
    }
    var d = [];
    if ($(this).hasClass('top-char')) {
        for (var i = 0; i <= 100; i++) {
            if (localStorage.getItem(i)) {
                $.ajax({
                    url: 'php/more.php',
                    type: 'get',
                    dataType: 'json',
                    data: {
                        id: i
                    },
                    success: function(data) {
                        var list = $('.char-menu .loading ul');
                        data.forEach(function(elm) {
                            var temp = `
                        <li>
                                <a href="more.html?id=${elm.id}">
                                    <img src="images/${elm.small}">
                                    <span>${elm.goods}</span>
                                </a>
                            </li>
                        `;
                            list.append(temp);
                        });
                    }
                });
            }
        }
    }

}).on('mouseleave', function() {
    if (!!(cookie.get("username"))) {
        $('.top-char a').css({
            'background': 'rgb(255, 103, 0)',
            'hegiht': '',
            color: '#fff'
        });
    } else {
        $('.top-char a').css({
            'background': 'transparent',
            'hegiht': '',
            color: '#b0b0b0'
        });
    }
    $('.char-menu').slideUp(300);
    $('.char-menu .loading ul').html("");
});