function urlparam() {
    var q = location.href.indexOf('?');
    var r = {};
    if (q > 0) {
        var p = location.href.slice(q + 1);
        var a = p.split('&');
        for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
            var it = a_1[_i];
            var b = it.split('=');
            r[b[0]] = b[1];
        }
    }
    return r;
}
