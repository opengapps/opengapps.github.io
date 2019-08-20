var archs = [{% for i in site.data.table.arch %}'{{i.name}}',{% endfor %}];
var apis = [{% for i in site.data.table.api %}'{{i.name}}',{% endfor %}];
var variants = [{% for i in site.data.table.variant %}'{{i.name}}',{% endfor %}];
var packages = {};
Array.prototype.has = function has(o) {
    return this.indexOf(o) !== -1;
};
Object.prototype.each = function each(key, cb) {
    var test = function (el) {
        if (!!el[key]) {
            cb(el);
        }
    };
    if (typeof this.length === 'number') {
        for (var i = 0; i < this.length; i++) {
            test(this[i]);
        }
    } else {
        for (var i in this) {
            if (this.hasOwnProperty(i)) {
                test(this[i]);
            }
        }
    }
};
var storage = window.localStorage;
try {
    storage.setItem('__test_key', '__test_val');
    if (storage.getItem('__test_key') !== '__test_val') {
        throw 'getItem test failed';
    }
    storage.removeItem('__test_key');
} catch (e) {
    storage = {
        getItem: function () {
            return null;
        },
        setItem: function () {},
        removeItem: function () {}
    };
}
var arch = getUrlParam('arch');
var autoAllowArch = archs.has(arch);
if (!autoAllowArch) {
    arch = storage.getItem('arch') || 'arm64';
}
document
    .getElementById(arch)
    .checked = true;
var api = getUrlParam('api');
var autoAllowApi = apis.has(api);
if (!autoAllowApi) {
    var ua = (!!navigator.userAgent
        ? navigator.userAgent
        : '').match(/Android ((\d\.\d)(\.\d)?)/i) || [];
    api = storage.getItem('api') || (apis.has(ua[1])
        ? ua[1]
        : (apis.has(ua[2])
            ? ua[2]
            : '9.0'));
}
document
    .getElementById(api)
    .checked = true;
var variant = getUrlParam('variant');
var autoAllowVariant = variants.has(variant);
if (!autoAllowVariant) {
    variant = storage.getItem('variant') || 'stock';
}
document
    .getElementById(variant)
    .checked = true;
var download = getUrlParam('download') === 'true';
var autoDownload = download && autoAllowArch && autoAllowApi && autoAllowVariant;
if (download && !autoDownload) {
    alert('Automatic download requested but refused: Unexpected value for ' +
            [
        autoAllowArch
            ? null
            : 'arch',
        autoAllowApi
            ? null
            : 'api',
        autoAllowVariant
            ? null
            : 'variant'
    ].filter(function (o) {
        return o !== null;
    }).join(' & ') +
            '.');
}
function getCookie(key) {
    key += '=';
    var cs = document
        .cookie
        .split(';');
    for (var i = 0; i < cs.length; i++) {
        var c = cs[i].trim();
        if (c.substr(0, key.length) === key) {
            return c
                .substr(key.length)
                .trim();
        }
    }
    return '';
}
function setCookie(key, value, days) {
    var d = new Date();
    d.setTime(d.getTime() +
            (days * 24 * 60 * 60 * 1000));
    document.cookie = key +
            '=' +
            value +
            '; expires=' +
            d.toUTCString();
}
var isApp = getUrlParam('app') === 'true';
function redirectToFile(eventCategory, eventLabel, filename) {
    gaEvent(eventCategory, 'download', eventLabel, function () {
        location.assign('https://github.com/opengapps/' +
                arch +
                '/releases/download/' +
                packages[arch].dateTag +
                '/' +
                filename);
    }, 1000);
}
function redirectToUrl(targetUrl) {
    gaEventOutbound(targetUrl, function () {
        var d = true;
        if (isApp && targetUrl != '{{site.url}}/') {
            d = !window.open(targetUrl, '_blank');
        }
        if (d) {
            location.assign(targetUrl);
        }
    });
}
function downloadSubmit() {
    var v = validateForm();
    if (v === 'ok') {
        redirectToFile('GApps', arch +
                '-' +
                api +
                '-' +
                variant, 'open_gapps-' +
                arch +
                '-' +
                api +
                '-' +
                variant +
                '-' +
                packages[arch].dateTag +
                '.zip');
    }
}
function mirrorsSubmit() {
    var v = validateForm();
    if (v === 'api' || v === 'variant' || v === 'ok') {
        redirectToUrl('https://sourceforge.net/settings/mirror_choices?projectname=opengapps&filename=' +
                arch +
                '/' +
                packages[arch].dateTag +
                '/' +
                'open_gapps-' +
                arch +
                '-' +
                api +
                '-' +
                variant +
                '-' +
                packages[arch].dateTag +
                '.zip');
    }
}
function versionSubmit() {
    var v = validateForm();
    if (v === 'ok') {
        redirectToFile('Version', arch +
                '-' +
                api +
                '-' +
                variant, 'open_gapps-' +
                arch +
                '-' +
                api +
                '-' +
                variant +
                '-' +
                packages[arch].dateTag +
                '.versionlog.txt');
    }
}
function md5Submit() {
    var v = validateForm();
    if (v === 'ok') {
        redirectToFile('MD5', arch +
                '-' +
                api +
                '-' +
                variant, 'open_gapps-' +
                arch +
                '-' +
                api +
                '-' +
                variant +
                '-' +
                packages[arch].dateTag +
                '.zip.md5');
    }
}
function reportSubmit() {
    var v = validateForm();
    if (v === 'variant' || v === 'ok') {
        redirectToFile('Report', arch +
                '-' +
                api, 'sources_report-' +
                arch +
                '-' +
                api +
                '-' +
                packages[arch].dateTag +
                '.txt');
    }
}
function olderSubmit() {
    var v = validateForm();
    if (v === 'api' || v === 'variant' || v === 'ok') {
        redirectToUrl('https://sourceforge.net/projects/opengapps/files/' +
                arch +
                '/');
    }
}
function setButtonEnable(id, enable) {
    var el = document.getElementById(id);
    if (typeof el.MaterialButton === 'object') {
        el.MaterialButton[
            (!!enable)
                ? 'enable'
                : 'disable'
        ]();
    }
}
function setBoxEnable(id, enable) {
    var el = document
        .getElementById(id)
        .parentElement;
    if (typeof el.MaterialRadio === 'object') {
        el.MaterialRadio[
            (!!enable)
                ? 'enable'
                : 'disable'
        ]();
    }
}
function setBoxCheck(id, check) {
    var el = document
        .getElementById(id)
        .parentElement;
    if (typeof el.MaterialRadio === 'object') {
        el.MaterialRadio[
            !!check
                ? 'check'
                : 'uncheck'
        ]();
    }
}
function setAd(el, content, label) {
    el.style.cssText = 'display:block !important';
    el.innerHTML = content;
    gaEvent('Ads', 'display', label);
}
var extraAds = [];
function showSnackbar() {
    if (getCookie('c') !== 'y') {
        window
            .componentHandler
            .upgradeDom();
        var snackbar = document
            .getElementsByClassName('mdl-js-snackbar')[0]
            .MaterialSnackbar;
        snackbar.showSnackbar({
            message: 'We use cookies to share information about your use of our site with our advertising and analytics partner',
            actionHandler: function () {
                setCookie('c', 'y', 365);
                snackbar.cleanup_();
            },
            actionText: 'Got it!',
            timeout: 60000
        });
    }
}
function validateAds() {
    var ads = document.getElementsByClassName('adsbygoogle');
    var donateTextOnFirst = Math.random() < 0.5;
    var donateTextElement = ads[
        donateTextOnFirst
            ? 0
            : 1
    ];
    var fallbackAdElement = ads[
        donateTextOnFirst
            ? 1
            : 0
    ];
    if (!donateTextElement || !fallbackAdElement) {
        setTimeout(validateAds, 500);
        return;
    }
    if (donateTextElement.innerHTML.trim().length === 0) {
        var donateTitles = ['Please Donate!', 'Support Open GApps'];
        setAd(donateTextElement.parentElement, '<div id="donatebox"><div id="donatetitle" class="mdl-typography--display-1"><a href="#" onclick="window.paypal();return false;" title="The project is supported by donations and advertisements">' +
                donateTitles[Math.round(Math.random())] +
                '</a></div><br /><div id="donatebody" class="mdl-typography--body-1">You blocked the advertisements, that is OK. But please consider a <a href="#" onclick="window.paypal();return false;">donation</a> to the project instead!</div><div id="donatespace"><br /></div><a href="#" onclick="window.paypal();return false;"><div id="donaterectangle"><i class="material-icons" style="color:#f5f5f5">favorite</i></div></a><br /><div id="donatecaption" class="mdl-typography--caption-color-contrast">The advertisement revenue supports the projects\' efforts. Can\'t donate? <a href="abp:subscribe?location=http%3A%2F%2Fopengapps.org%2Fopengapps.org.abp.txt&amp;title=Open%20GApps" title="Add opengapps.org to your Adblocker\'s whitelist">Please unblock our ads!</a></div></div>', 'Donate');
    } else {
        gaEvent('Ads', 'display', 'AdSense' +
                (donateTextOnFirst
            ? 'Header'
            : 'Footer'));
    }
    if (fallbackAdElement.innerHTML.trim().length === 0) {
        if (extraAds.length > 0) {
            var fallbackAd = extraAds[Math.floor(Math.random() * extraAds.length)];
            setAd(fallbackAdElement.parentElement, '<div id="extrabox"><a id="extralink" href="' +
                    fallbackAd.targetUrl +
                    '"><img src="{{site.img}}' +
                    fallbackAd.imgName +
                    '.' +
                    (fallbackAdElement.parentElement.id || 'topa') +
                    '.png" alt="' +
                    fallbackAd.altText +
                    '" title="' +
                    fallbackAd.titleText +
                    '" /></a></div>', 'Campaign' +
                    fallbackAd.name);
        } else {
            gaEvent('Ads', 'display', 'NoCampaign');
        }
    } else {
        gaEvent('Ads', 'display', 'AdSense' +
                (donateTextOnFirst
            ? 'Footer'
            : 'Header'));
    }
}
function validateForm() {
    var form = document.getElementById('DownloadForm');
    form
        .arch
        .each('checked', function (el) {
            arch = el.value;
        });
    if (!archs.has(arch) || packages[arch] === undefined) {
        return 'arch';
    }
    storage.setItem('arch', arch);
    form
        .api
        .each('checked', function (el) {
            api = el.value;
        });
    if (!apis.has(api) || packages[arch].apis[api] === undefined) {
        return 'api';
    }
    storage.setItem('api', api);
    form
        .variant
        .each('checked', function (el) {
            variant = el.value;
        });
    if (!variants.has(variant) || packages[arch].apis[api][variant] === undefined) {
        return 'variant';
    }
    storage.setItem('variant', variant);
    return 'ok';
}
function updateButtons() {
    var v = validateForm();
    var ch = window.componentHandler;
    ch.upgradeDom();
    var info = document.getElementById('package-latest');
    if (v === 'arch') {
        info.innerHTML = '<div id="package-progressbar" class="mdl-progress mdl-js-progress mdl-progress__indeterminate progress-demo"></div><span class="mdl-typography--caption-color-contrast">Querying package API...</span>';
    } else if (v === 'api') {
        info.innerHTML = '<span class="mdl-typography--subhead-color-contrast">Select an Android version</span>';
    } else if (v === 'variant') {
        info.innerHTML = '<span class="mdl-typography--subhead-color-contrast">Select a variant</span>';
    } else {
        info.innerHTML = '<span class="mdl-typography--headline">' +
                packages[arch].day +
                ' ' +
                packages[arch].month +
                ' ' +
                packages[arch].year;
    }
    ch.upgradeDom();
    var hasApi = function (a) {
        return v !== 'arch' && packages[arch]
            .apis
            .hasOwnProperty(a);
    };
    for (var iApi = 0; iApi < apis.length; iApi++) {
        setBoxEnable(apis[iApi], hasApi(apis[iApi]));
    }
    setBoxCheck(api, hasApi(api));
    var hasVariant = function (a) {
        return v !== 'arch' && v !== 'api' && packages[arch]
            .apis[api]
            .hasOwnProperty(a);
    };
    for (var iVariant = 0; iVariant < variants.length; iVariant++) {
        setBoxEnable(variants[iVariant], hasVariant(variants[iVariant]));
    }
    setBoxCheck(variant, hasVariant(variant));
    setButtonEnable('bdownload', v === 'ok');
    setButtonEnable('bmirrors', v === 'ok');
    setButtonEnable('bversion', v === 'ok');
    setButtonEnable('bmd5', v === 'ok');
    setButtonEnable('breport', v === 'ok');
    setButtonEnable('bolder', v === 'ok' || v === 'variant' || v === 'api');
}
function queryRelease() {
    document
        .getElementById('DownloadForm')
        .arch
        .each('checked', function (el) {
            arch = el.value;
        });
    storage.setItem('arch', arch);
    delete packages[arch];
    updateButtons();
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {
            var data = JSON.parse(httpRequest.responseText);
            for (var api in data.archs.arch.apis) {
                console.log(api)
            }
            var releaseName = data
                .name
                .split(' ');
            packages[releaseName.shift()] = {
                'apis': {},
                'dateTag': data.tag_name,
                'year': releaseName.pop(),
                'month': releaseName.pop(),
                'day': releaseName.pop()
            };
            for (var i = 0; i < data.assets.length; i++) {
                var asset = data.assets[i];
                if (asset.name.substr(asset.name.length - 4, 4) !== '.zip') {
                    continue;
                }
                var assetName = asset
                    .name
                    .split('-');
                if (packages[assetName[1]].apis[assetName[2]] === undefined) {
                    packages[assetName[1]].apis[assetName[2]] = {};
                }
            }
            updateButtons();
            if (autoDownload) {
                downloadSubmit();
                autoDownload = false;
            }
        }
    };
    httpRequest.open('GET', 'https://api.opengapps.org/list');
    httpRequest.setRequestHeader('Access-Control-Allow-Origin', '*');
    try {
        httpRequest.send();
    } catch (e) {}
}
function materialTabsNav() {
    'use strict';
    this.element_ = document.querySelector('.mdl-layout'),
    this.element_ && (this.tabLinks = this.element_.querySelectorAll('.mdl-layout__tab'), this.activeLink = null, this.activePage = null, this.init())
}
materialTabsNav.prototype.linksMap_ = {},
materialTabsNav.prototype.CssClasses_ = {
    ACTIVE: 'is-active'
},
materialTabsNav.prototype.init = function () {
    'use strict';
    for (var t = 0; t < this.tabLinks.length; t++) 
        this
            .tabLinks[t]
            .addEventListener('click', this.clickHandler(this.tabLinks[t])),
        this.linksMap_[
            '#' +
                    this
                .tabLinks[t]
                .href
                .split('#')[1]
        ] = this.tabLinks[t];
    if (this.displaySectionForFragment(window.location.hash.split('/')[0]), 'onhashchange' in window) {
        var s = this;
        window.onhashchange = function () {
            s.displaySectionForFragment(window.location.hash.split('/')[0])
        }
    }
},
materialTabsNav.prototype.displaySectionForFragment = function (t) {
    'use strict';
    t && this.linksMap_[t] && this
        .linksMap_[t]
        .click
            ? this
                .linksMap_[t]
                .click()
            : t && '' !== t && '#' !== t || this.displayIndexPage()
},
materialTabsNav.prototype.displayIndexPage = function () {
    'use strict';
    this.activeLink && this
        .activeLink
        .classList
        .remove(this.CssClasses_.ACTIVE),
    this.activeLink = null,
    this.activePage && this
        .activePage
        .classList
        .remove(this.CssClasses_.ACTIVE),
    this.activePage = this
        .element_
        .querySelector('#downloadsection'),
    this
        .activePage
        .classList
        .add(this.CssClasses_.ACTIVE)
},
materialTabsNav.prototype.clickHandler = function (t) {
    'use strict';
    return function (s) {
        s.preventDefault();
        var i = this.findPage(t);
        this.activePage && this
            .activePage
            .classList
            .remove(this.CssClasses_.ACTIVE),
        this.activeLink && this
            .activeLink
            .classList
            .remove(this.CssClasses_.ACTIVE),
        this.activePage = i,
        this.activeLink = t,
        t
            .classList
            .add(this.CssClasses_.ACTIVE),
        i
            .classList
            .add(this.CssClasses_.ACTIVE);
        var e = window
                .location
                .hash
                .split('/')[0],
            n = t
                .href
                .split('#')[1];
        return e !== '#' +
                n && (history.pushState(null, '{{site.title}}', t), document.getElementById('content').scrollTop = 0, ga && ga('send', 'pageview', location.pathname +
                n)),
        !0
    }.bind(this)
},
materialTabsNav.prototype.findPage = function (t) {
    'use strict';
    var s = t
        .href
        .split('#')[1];
    return this
        .element_
        .querySelector('#' +
                s)
},
window.addEventListener('load', function () {
    'use strict';
    window
        .componentHandler
        .upgradeDom();
    new materialTabsNav
});
document.addEventListener('DOMContentLoaded', function () {
    window
        .componentHandler
        .upgradeDom();
    try {
        (adsbygoogle = window.adsbygoogle || []).push({google_ad_client: 'ca-pub-9489060368971640', enable_page_level_ads: true})
    } catch (e) {};
    for (var iAd = 0; iAd < document.getElementsByClassName('adsbygoogle').length; iAd++) {
        try {
            (window.adsbygoogle || []).push({});
        } catch (e) {
            validateAds();
            break;
        }
    }
    queryRelease();
    showSnackbar();
    document.addEventListener('click', function (e) {
        var target = e.target || e.srcElement;
        var href = target.href;
        if (target.tagName.toLowerCase() === 'a' && href.toLowerCase().substr(0, 4) === 'http') {
            if (target.getAttribute('href') === '#') {
                e.preventDefault();
            } else if (target.target === '_blank' || e.ctrlKey || e.shiftKey || e.altKey || e.metaKey || e.button === 1) {
                gaEventOutbound(target.href);
            } else {
                e.preventDefault();
                redirectToUrl(target.href);
            }
        }
    });
    document
        .getElementById('bdownload')
        .addEventListener('click', downloadSubmit);
    document
        .getElementById('bmirrors')
        .addEventListener('click', mirrorsSubmit);
    document
        .getElementById('bversion')
        .addEventListener('click', versionSubmit);
    document
        .getElementById('bmd5')
        .addEventListener('click', md5Submit);
    document
        .getElementById('breport')
        .addEventListener('click', reportSubmit);
    document
        .getElementById('bolder')
        .addEventListener('click', olderSubmit);
    var inputs = document.getElementsByTagName('input');
    for (var iInput = 0; iInput < inputs.length; iInput++) {
        var input = inputs[iInput];
        switch (input.name) {
            case 'arch':
                input.addEventListener('change', queryRelease);
                break;
            case 'api':
            case 'variant':
                input.addEventListener('change', updateButtons);
                input.addEventListener('change', queryPackage);
                break;
        }
    }
    if (isApp) {
        var links = document.getElementsByTagName('a');
        for (var iLink = 0; iLink < links.length; iLink++) {
            var link = links[iLink];
            if (document.querySelectorAll('[data-mdl-for="' +
                    link.id +
                    '"]').length === 0 && link.href != '{{site.url}}/') {
                link.target = '_blank';
            } else if (link.href == '{{site.url}}/') {
                link.href = '{{site.url}}/?app=true';
            }
        }
        var forms = document.getElementsByTagName('form');
        for (var iForm = 0; iForm < forms.length; iForm++) {
            if (forms[iForm].id !== 'DownloadForm') {
                forms[iForm].target = '_blank';
            }
        }
    }
});
window.onload = function () {
    setTimeout(validateAds, 2000);
};
