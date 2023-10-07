$(document).ready(function () {
    var query = document.location.search.toLowerCase();
    if (query[0] === '?')
        query = query.substr(1);
    var params = query.split('&');

    var bSmallScreen = screen.width < 1080;
    if (params.indexOf('smallscreen=true') >= 0)
        bSmallScreen = true;

    var bTouch = 'ontouchstart' in document;
    if (params.indexOf('touch=true') >= 0)
        bTouch = true;

    var bodyClass = (bSmallScreen ? 'large' : '') + (bTouch ? ' touch' : '');
    if (bodyClass)
        document.body.className = bodyClass;

    var sizeIframe = function () {
        $('#target').css('width', 'calc(100% - ' + $('#index').outerWidth() + 'px)');
    };

    // On small screen, open all links in new window
    if (bSmallScreen) {
        $('#target').remove();
        $('#index').width('100%');
        $('div.item a').each(function () { $(this).attr('target', '_blank'); });
    }
    else {
        // As of v117.0.0.0 Chrome is forcing BOM http pages to https inside iframe. Fuckers. 
        // And Willy Weather units don't work in an iframe.
        var bChrome = navigator.userAgent.indexOf('Chrome') >= 0 && location.protocol === 'https:';
        $('div.item a').each(function () {
            if ((bChrome && this.href.substr(0, 5) != 'https') || this.href.indexOf("willyweather.com.au") >= 0)
                $(this).attr('target', '_blank');
        });
    }

    // Process link clicks
    $('#links div.item a').on('click', function (e) {
        // If target specified, let browser handle it.
        if (this.target)
            return true;

        // If Ctrl pressed, load in new tab/window.
        if (e.ctrlKey) {
            // Temporarily set target and let browser open tab/window.
            this.target = '_blank';
            setTimeout(() => this.target = '', 0);
            return true;
        }

        // Otherwise load link into iFrame.
        $('#target-iframe').prop('src', this.href);
        return false;
    });

    // Wire up index expand/collapse
    $('#links').on('click', 'div.group-toggle, div.group-name', function (e) {
        $(this).closest('div.group').toggleClass('open');

        // Resize iframe as index width may have changed.
        if (!bSmallScreen)
            sizeIframe();
    });

    // iFrame to fill window.
    sizeIframe();

    // Open first item
    $('div.item a:visible:first').trigger('click');

    $(window).on('resize', sizeIframe);
});
