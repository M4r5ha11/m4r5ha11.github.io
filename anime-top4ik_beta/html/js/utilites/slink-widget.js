void((function() {
    if (window.location.protocol == 'https:') {
        window.location = 'https://slink.cf/?bookmark=1&token=f6cdf91b269eb71e39fab617f14dcaee&url=' + encodeURIComponent(document.URL);
    } else {
        var e = document.createElement('script');
        e.setAttribute('data-url', 'https://slink.cf');
        e.setAttribute('data-token', 'f6cdf91b269eb71e39fab617f14dcaee');
        e.setAttribute('id', 'gem_bookmarklet');
        e.setAttribute('type', 'text/javascript');
        e.setAttribute('src', 'https://slink.cf/static/bookmarklet.js?v=1627319966');
        document.body.appendChild(e)
    }
})());