var list = $('.inphone .boxgoods .row-right ul');
var list1 = $('.homeelec .boxgoods .row-right ul');
$.ajax({
    url: "php/goods.php",
    type: "get",
    dataType: "json",
    "success": function(data) {
        var temp;
        data.forEach(function(elm, i) {
            if (i > 7) {
                return;
            }
            temp = `
                <li>
                    <div class="row-img">
                        <a href="more.html?id=${elm.id}">
                        <img data-original="images/${elm.big}" class="lazy">
                        </a>
                    </div>
                    <h3><a href="more.html?id=${elm.id}">${elm.goods}</a></h3>
                    <p class="desc">${elm.tit}</p>
                    <p class="price"> <span class="num">${elm.price}</span></p>
                    <div class="flag-new">新品</div>
                </li>
                `;
            $('img.lazy').lazyload({
                effect: 'fadeIn',
                placeholder: 'images/timg.gif',
            });
            $(list).append(temp);
        });
    }
});
$.ajax({
    url: "php/goods.php",
    type: "get",
    dataType: "json",
    "success": function(data) {
        var temp;
        data.forEach(function(elm, i) {
            if (i <= 7) {
                return;
            }
            if (i < 15) {
                temp = `
                <li>
                    <div class="row-img">
                        <a href="more.html?id=${elm.id}">
                        <img data-original="images/${elm.big}" class="lazy">
                        </a>
                    </div>
                    <h3><a href="more.html?id=${elm.id}">${elm.goods}</a></h3>
                    <p class="desc">${elm.tit}</p>
                    <p class="price"> <span class="num">${elm.price}</span></p>
                    <div class="flag-new">新品</div>
                </li>
                `;
            } else {
                temp = `
                <li class="small">
                                    <div class="row-img">
                                        <a href="more.html?id=${elm.id}"><img data-original="images/${elm.big}" class="lazy"></a>
                                    </div>
                                    <h3><a href="more.html?id=${elm.id}">${elm.goods}</a></h3>
                                    <p class="price"><span class="num">${elm.price}</span></p>
                                </li>
                `;
            }
            $('img.lazy').lazyload({
                effect: 'fadeIn',
                placeholder: 'images/timg.gif',
            });
            $(list1).append(temp);
        });
    }
});
$('img.lazy').lazyload({
    effect: 'fadeIn',
    placeholder: 'images/timg.gif',
});
//二级导航

function show() {
    $('.li-sub').slideDown(300).css('display', 'block');
}

function display() {
    $('.li-sub').slideUp(300)
}
$('.nav-main .nav-item').on('mouseover', function() {
    show();
});
$('.nav-main').on("mouseenter mouseleave", function(ev) {
    var _that = this;
    var w = $(this).width();
    var h = $(this).height();
    var x = (ev.pageX - this.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
    var y = (ev.pageY - this.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
    var direction = Math.round(((Math.atan2(y, x) * (180 / Math.PI) + 180) / 90) + 3) % 4;
    if (direction == 2) {
        $('.li-sub').on('mouseleave', function() {
            display();
        })
    } else {
        display();
    }
});

//搜索框
$('.search [type="search"]').focus(function() {
        $('.inp-sub').css('display', 'block')
    }).blur(function() {
        $('.inp-sub').css('display', 'none')
    })
    //轮播
var banlist = $('.banner-list');

function init() {
    banlist.append(banlist.children('div').first().clone());
}
var imgs = $('.banner-list>div').length;
var i = 0;

function start(fx) {
    var t = i * '-1226' + 'px';
    banlist.animate({
        opacity: ".2"
    }, 500, function() {
        banlist.css('left', t);
        banlist.animate({
            opacity: "1"
        }, 1000)
    })
    $('.banner-btn>a').eq(i).addClass('active').siblings().removeClass('active');
}

function anm() {
    i++;
    if (i >= imgs) {
        i = 0;
    }
    start();
}
timer = setInterval(anm, 3000);
$('.box').hover(function() {
    clearInterval(timer);
}, function() {
    timer = setInterval(anm, 3000);
})
$('.pre').click(function() {
    i--;
    if (i <= 0) {
        i = imgs - 1;
    }
    start();
});
$('.next').click(function() {
    i++;
    if (i >= imgs) {
        i = 0;
    }
    start();
});
$('.banner-btn>a').on('click', function() {
    i = $('.banner-btn>a').index(this);
    start();
});
init();
//侧边二级
$('.left-item,.left-sub').on('mouseenter', function() {
    let geshu = $('.left-sub').children('ul').length;
    $('.left-sub').css('width', geshu * 256 + 'px').css('display', 'block');
}).on('mouseleave', function() {
    $('.left-sub').css('display', 'none');
});

$('.islog').children('a').eq(1).click(function() {
    cookie.remove("username");
    $('.log').css('display', 'block');
    $('.islog').css('display', 'none')
});