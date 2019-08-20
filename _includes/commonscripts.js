function gaEvent(eventCategory, eventAction, eventLabel, cb, timeoutMillis) {
    var acted = false;
    var act = function () {
        if (acted) {
            return;
        }
        (cb || function () {})();
        acted = true;
    };
    try {
        ga('send', 'event', eventCategory, eventAction, eventLabel, {hitCallback: act});
        setTimeout(act, timeoutMillis || 1);
    } catch (e) {
        act();
    }
}
function gaEventOutbound(targetUrl, cb) {
    gaEvent('Outbound', 'open', targetUrl, cb || function () {}, 1000);
}
function getUrlParam(param) {
    var vars = window
        .location
        .search
        .substring(1)
        .split('&');
    for (var i = 0; i < vars.length; i++) {
        var parts = vars[i].split('=');
        if (parts[0] === param) {
            var part = parts[1] || '';
            if (part.substr(part.length - 1, 1) === '/') {
                part = part.substr(0, part.length - 1);
            }
            return part;
        }
    }
    return null;
}(function (i, s, o, g, r, a, m) {
    i.GoogleAnalyticsObject = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments);
    };
    i[r].l = 1 * new Date();
    a = s.createElement(o);
    m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m
        .parentNode
        .insertBefore(a, m);
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-63785067-1', 'auto');
ga('send', 'pageview', location.pathname);
window.paypal = function paypal() {
    gaEventOutbound('https://www.paypal.com/cgi-bin/webscr');
    document
        .getElementById('paypal')
        .submit();
    return false;
};
