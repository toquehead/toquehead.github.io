
/* LIST.JS */
function GetChildElem(eSrc,sTagName)
	for (var i=0;i<cKids.length;i++)
	return false;
function document.onclick()
	if (eChild = GetChildElem(eSrc,'UL'))
function document.onclick_orig()
	if ("clsHasKids" == eSrc.className && (eChild = GetChildElem(eSrc,"UL")))
function ShowAll(sTagName)
	for (var i=1;i<iNumElems;i++) cElems[i].style.display = "block";
	cElems = document.getElementsByTagName("LI");
function HideAll(sTagName)
	for (var i=1;i<iNumElems;i++) cElems[i].style.display = "none";
	cElems = document.getElementsByTagName("LI");