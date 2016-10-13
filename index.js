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
        // Load links into iFrame
        $('#links div.item a').on('click', function (e) {
            if (this.target)
                return true;

            $('#target-iframe').prop('src', this.href);
            return false;
        });
    }

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