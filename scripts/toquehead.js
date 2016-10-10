var win = null;
var base = null;

function noop()
{
}

function set_picture_base(pbase)
{
	base = pbase;
}
	
function pop_image(picfile, x, y,
	stylesheet, style_caption, style_close,
	title, caption, alt, win_name)
{
var xbuf = 60;
var ybuf = 120;
var xmargin = 100;
var ymargin = 100;

if (win != null)
{
	if (!win.closed)
		win.close();
		
	win = null;
}

// For convenience, the base URL of all pictures can be specified seperately
if (base != null)
	picfile = base + picfile;
	
if (win_name == null) win_name = '_blank';
if (title == null) title = 'Untitled';
if (caption == null) caption = title;
if (alt == null) alt = caption;

// Having <br> in the caption, causes dev studio (at least) great problems,
// so I'm using !br! instead; convert now
caption = caption.replace('!br!', '<br>');

// Similar issue with quotes
title = title.replace('!sq!', "'");
caption = caption.replace('!sq!', "'");

// Ensure window will fit on screen (allow 100 pixel buffer)
var oldx = x;
var oldy = y;
if (x + xbuf + xmargin > screen.availWidth)
	x = screen.availWidth - xbuf - xmargin;
if (y + ybuf + ymargin > screen.availHeight)
	y = screen.availHeight - ybuf - ymargin;
var xr = x/oldx;
var yr = y/oldy;
if (xr < yr)
	y = oldy * xr;
else if (yr < xr)
	x = oldx * yr;

// Add scroll bars if necessary
var bScroll = false;
if (x < oldx || y < oldy)
{
	bScroll = true;
	ybuf += 200;
	xbuf -= 150;
}
	
// Adding padding around picture	
var winx = x + xbuf;
var winy = y + ybuf;

// Center in window (IE doesn't support window h/w)
var	left = (screen.availWidth - winx) / 2;
var	top = (screen.availHeight - winy) / 2;

var win_options = 'hotkeys=no' 
				+ ',height=' + winy
				+ ',width=' + winx
				+ ',left=' + left
				+ ',top=' + top
				+ ',location=no'
				+ ',menubar=no'
				+ ',resizable=yes';
	
if (bScroll)
	win_options += ',scrollbars=yes';			
	
win = window.open('', win_name, win_options);
var doc = win.document;

doc.writeln('<HTML>');
doc.writeln('<HEAD>');
doc.writeln('<TITLE>' + title + '</TITLE>');
doc.writeln('');

if (stylesheet != null)
{
	doc.writeln('<LINK REL="stylesheet" TYPE="text/css" HREF="' + stylesheet + '">');
	doc.writeln('');
}

doc.writeln('</HEAD>');

doc.writeln('<BODY ID="docbody" leftmargin="10" topmargin="10" rightmargin="10" bottommargin="10">');
doc.writeln('<center>');
doc.writeln('');

doc.writeln('<IMG id="picture" alt="' + alt + '" src="' + picfile 
			+ '" height="' + oldy + '" width="' + oldx + '" name="picture"></P>');
if (style_caption != null)
	doc.writeln('<P class="' + style_caption + '">');
else
	doc.writeln('<P>');
doc.writeln(caption + '</P>');
doc.writeln('');

doc.writeln('<P>');
if (style_close != null)
	doc.writeln('<a class="' + style_close + '"');
else
	doc.writeln('<a');
doc.writeln('ID="close" href="" onClick="return window.close()">close window</a>');
doc.writeln('</P>');
doc.writeln('');

doc.writeln('</center>');
doc.writeln('</BODY>');

doc.writeln('</HTML>');
}
