var url = location.search.slice(1).split('=')[1];
var main = $('#main .container');
$.ajax({
    type: 'get',
    url: 'php/more.php',
    dataType: 'json',
    data: {
        id: url
    },
    success: function(data) {
        var temp = `
        <div class="left">

                <div class="goodpic">
                    <img src="images/${data[0].small}">
                </div>
                <ul>
                    <li>
                        <img src="images/${data[0].small}">
                    </li>
                </ul>
            </div>
            <div class="right">
                <dl>
                    <dt>${data[0].goods}</dt>
                </dl>
                <dd class="tit"> ${data[0].tit}</dd>
                <dd class="type"> ${data[0].goods}</dd>
                <dd class="com">${data[0].type}</dd>
                <dd class="price">${data[0].price}</dd>
                <dd class="color">
                    <span>${data[0].color}</span>
                    <div>
                        <a href="javascript:;"><img src="images/${data[0].small}"></a>
                    </div>
                </dd>
                <dd class="cart" onclick="gouwche()">
                    <a href="javascript:;">加入购物车</a>
                </dd>
            </div>
        `;
        main.append(temp);
    }
});
$('#nav h1 img').click(function() {
    location.href = 'xiaomi.html';
});

function gouwche() {
    if (localStorage.getItem(url)) {
        if (localStorage.getItem(url) >= 10) {
            localStorage.setItem(url, 10)
        } else {
            localStorage.setItem(url, Number(localStorage.getItem(url)) + 1);
        }

    } else {
        localStorage.setItem(url, 1);
    }
    var shuzu = [];
    for (let i = 1; i < 100; i++) {
        if (localStorage.getItem(i)) {
            shuzu.push(localStorage.getItem(i));
            $('#header .top-char>a').css({
                'background': '#ff6700',
                'color': '#fff'
            });
        }
    }
    $('#header .top-char>a span').html("(" + shuzu.length + ")");
};