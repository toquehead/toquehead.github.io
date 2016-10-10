// Input array indexes
var I_LABEL = 0;
var I_URL = 1;
var I_OPEN = 2;
var I_KIDS = 3;
var I_MASHUP = 4;

var nLink = 0;

function make_list(items, bMobile, bIframe)
{
	outputln('<table class="list">');
	
	for (var i=0; i<items.length; ++i)
	{
		var item = items[i];
		
		write_item(item, bMobile, bIframe);
	}
	
	outputln('</table>');
}

function write_item(item, bMobile, bIframe)
{
	if (!item)
		return;
		
	var label = item[I_LABEL];
	var url = item[I_URL];
	var open = item[I_OPEN];
	var kids = item[I_KIDS];
	
	if (false)
	{
		alert('write_item() called:'
			+ '\nlabel="' + label + '"'
			+ '\nurl="' + url + '"'
			+ '\nopen="' + open + '"'
			+ '\nkids="' + kids + '"');
	}
		
	output('<tr>');
		
	if (kids)
	{
		var href = 'href="javascript: toggle(\'' + label + '\', \'' + label + 'Div\')" class="pivot"';
		outputln('<td><a ' + href + '><img border="0" id="' + label + '" src="images/down.gif"><img border="0" src="images/blank.gif" width="3" height="1"></a></td>');
		outputln('<td><a ' + href + ' class="pivot">' + label + '</a></td>');

		output('</tr><tr>');
		outputln('<td></td>');
		outputln('<td>');
		outputln('<div id="' + label + 'Div" class="listitems" STYLE="DISPLAY: none">');
		outputln('<table class="sublist">');

		// Recurse for sub items
		for (var i=0; i<kids.length; ++i)
			write_item(kids[i], bMobile, bIframe);

		outputln('</td>');
		outputln('</tr>');	
		outputln('</table>');	
			
		if (open)
			toggle(label, label + 'Div');
	}
	else
	{
		output('<tr><td colspan="2">');
		
		if (label == '') {
		    output('<img border="0" src="images/blank.gif" width=3 height=7>');
		}
		else {
            if (bIframe && !bMobile)
                output('<a class="item" id="link' + ++nLink + '" onclick="document.getElementById(\'toque\').src=\'' + url + '\'; return false;" href="' + url + '">' + label + '</a>');
            else
                output('<a class="item" id="link' + ++nLink + '"' + (!bMobile ? ' TARGET="TOQUE" ' : '') + 'href="' + url + '">' + label + '</a>');
		}
		outputln('</td></tr>');
	}
	outputln('</tr>');

	return url;
}

function toggle(id1, id2) 
{
	var e1 = document.images[id1];
	var e2 = document.getElementById(id2);
	if ( e2.style.display != 'none' ) {
		e1.src = 'images/down.gif';
		e2.style.display = 'none';
	}
	else {
		e1.src = 'images/right.gif';
		e2.style.display = '';
	}
	
}

function output(v)
{
	document.write(v);
}
function outputln(v)
{
	output(v);
	document.writeln('');
}
