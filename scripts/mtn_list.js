
/* LIST.JS */
function GetChildElem(eSrc,sTagName){	var cKids = eSrc.children;
	for (var i=0;i<cKids.length;i++)	{		if (sTagName == cKids[i].tagName) return cKids[i];	}
	return false;}
function document.onclick(){	var eSrc = window.event.srcElement;
	if (eChild = GetChildElem(eSrc,'UL'))	{		if ('clsHasKids' == eSrc.className)		{			eSrc.className = 'clsHasKidsOpen';			eChild.style.display = 'block';		}		else if ('clsHasKidsOpen' == eSrc.className)		{			eSrc.className = 'clsHasKids';			eChild.style.display = 'none';		}	}}
function document.onclick_orig(){	var eSrc = window.event.srcElement;
	if ("clsHasKids" == eSrc.className && (eChild = GetChildElem(eSrc,"UL")))	{		eChild.style.display = ("block" == eChild.style.display ? "none" : "block");	}}
function ShowAll(sTagName){	var cElems = document.getElementsByTagName("UL");	var iNumElems = cElems.length;
	for (var i=1;i<iNumElems;i++) cElems[i].style.display = "block";
	cElems = document.getElementsByTagName("LI");	var iNumElems = cElems.length;	for (var i=0;i<iNumElems;i++) 	{		if ("clsHasKids" == cElems[i].className)			cElems[i].className = "clsHasKidsOpen";	}}
function HideAll(sTagName){	var cElems = document.getElementsByTagName("UL");	var iNumElems = cElems.length;
	for (var i=1;i<iNumElems;i++) cElems[i].style.display = "none";
	cElems = document.getElementsByTagName("LI");	var iNumElems = cElems.length;	for (var i=0;i<iNumElems;i++) 	{		if ("clsHasKidsOpen" == cElems[i].className)			cElems[i].className = "clsHasKids";	}}
