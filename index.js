/// <reference path="scripts/jquery-2.2.0.min.js" />
/// <reference path="oz-links.js" />
"use strict";

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

    var index = -1;

    function toggle(event) {
        var anchor = this;
        if (!anchor)
            return true;

        var $tr = $(anchor).closest('tr');
        var $trKids = $tr.next();

        var $img = $tr.find('img.toggle');
        if ($trKids.is(':visible')) {
            $img.prop('src', 'images/down.gif');
            $trKids.hide();
        }
        else {
            $img.prop('src', 'images/right.gif');
            $trKids.show();
        }
    }

    function link(event) {
        var anchor = this;
        if (bSmallScreen || !anchor || !anchor.href || anchor.target || event.ctrlKey)
            return true;

        $('#target-iframe').prop('src', anchor.href);

        return false;
    }

    function appendLink(link) {
        index++;

        if (link.kids) {
            var img = link.open ? 'right' : 'down';
            html += '<tr data-index="' + index + '"><td><a href="#" class="pivot"><img class="toggle" id="img' + index + '" src="images/' + img + '.gif"></a></td><td><a href="#" class="pivot">' + link.name + '</a></td></tr>';

            html += '<tr';
            if (!link.open)
                html += ' style="display:none;"';
            html += '><td></td><td class="sublist"><table class="sublist">';

            link.kids.forEach(function (kid) {
                appendLink(kid);
            });
            html += '</table></td></tr>';
        }
        else {
            html += '<tr data-index="' + index + '"';

            if (!link.name) {
                html += ' class="spacer"><td></td><td>&nbsp;</td>';
            }
            else {
                html += `><td></td><td><a class="link" id="link${index}" href="${link.url}"${link.pop ? ' target="_blank"' : ''}>${link.name}</a></td>`;
            }
            html += '</tr>';
        }
    }

    var bCanada = params.indexOf('list=cdn') >= 0;
    var list = bCanada ? cdnLinks : ozLinks;

    // Remove the link pointing at this page.
    $('#' + (bCanada ? 'cdn' : 'oz')).remove();

    var html = '';
    list.forEach(function (link) {
        appendLink(link);
    });

    $('#index')
        .append(html)
        .on('click', 'a.pivot', toggle)
        .on('click', 'a.link', link);

    // Default to first link
    $('a.link:visible:first').trigger('click');
});