(function() {
    var cookie = {
        set: function(key, val, day) {
            if (day) {
                var d = new Date();
                d.setDate(d.getDate() + day);
                document.cookie = key + '=' + val + ';expires=' + d + ';Path=' + escape('/');
            } else {
                document.cookie = key + '=' + val;
            }
        },
        remove: function(key) {
            this.set(key, '', -1);
        },
        get: function(key) {
            if (document.cookie) {
                var str = document.cookie;
                var arr = str.split('; ');
                for (var i = 0; i < arr.length; i++) {
                    var item = arr[i].split('=');
                    if (item[0] == key) {
                        return item[1];
                    }
                }
            }
            return '';
        }
    };
    window.cookie = cookie;
})();