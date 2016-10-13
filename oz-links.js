function div(links, level) {
    level = level || 0;
    var indent = '';
    for (var i = 0; i < level; ++i)
        indent += '    ';

    var strDiv = '';
    links.forEach(link => {
        if (link.name) {
            if (link.kids) {
                strDiv += indent + '<div class="group">\r\n';
                let indent2 = indent + "    ";
                strDiv += `${indent2}<div class="group-toggle"></div><div class="group-name">${link.name}</div>\r\n`
                    + indent2 + '<div class="group-items">\r\n'
                    + div(link.kids, level + 2)
                    + indent2 + '</div>\r\n'
                    + indent + '</div>\r\n';
            }
            else {
                strDiv += `${indent}<div class="item"><a href="${link.url}">${link.name}</a></div>\r\n`;
            }
        }
        else {
            strDiv += indent + '<div class="spacer"></div>\r\n';
        }
    });
    
    return strDiv;
}

// Data for Toquehead's list
var ozLinks = [
	{ name: 'Favorites', open: true, kids: 
        [
        { name: 'Moruya', url: 'http://www.bom.gov.au/nsw/forecasts/batemansbay.shtml' },
        { name: 'Eden', url: 'http://www.bom.gov.au/nsw/forecasts/eden.shtml' },
        { name: 'Moruya Marine', url: 'http://www.bom.gov.au/nsw/forecasts/batemanscoast.shtml' },
        { name: 'Eden Marine', url: 'http://www.bom.gov.au/nsw/forecasts/edencoast.shtml' },
        { name: 'Moruya Tides', url: 'http://www.bom.gov.au/australia/tides/#!/nsw-moruya' },
        { name: 'Eden Tides', url: 'http://www.bom.gov.au/australia/tides/#!/nsw-eden' },
		{},
        { name: 'MetEye', url: 'http://www.bom.gov.au/australia/meteye/', pop: true },
        { name: 'Canberra radar', url: 'http://www.bom.gov.au/products/IDR403.loop.shtml', pop: true },
        { name: 'Willy Moruya Heads', url: 'http://wind.willyweather.com.au/nsw/south-coast/moruya-heads.html' },
        { name: 'Willy Montague Island', url: 'http://wind.willyweather.com.au/nsw/south-coast/montague-island.html' },
        { name: 'Willy Green Cape', url: 'http://wind.willyweather.com.au/nsw/south-coast/green-cape.html' },
        { name: 'Seabreeze South Coast', url: 'http://www.seabreeze.com.au/graphs/nsw5.asp' },
        { name: 'Batemans Bay Wave Data', url: 'http://new.mhl.nsw.gov.au/data/realtime/wave/Buoy-batbow' },
        { name: 'Eden Wave Data', url: 'http://new.mhl.nsw.gov.au/data/realtime/wave/Buoy-edenow' },
		{},
        { name: 'Moruya Surf Cam', url: 'http://www.coastalwatch.com/surf-cams-surf-reports/nsw/moruya' },
        { name: 'Narooma Surf Cam', url: 'http://www.coastalwatch.com/surf-cams-surf-reports/nsw/narooma' },
		{},
        { name: 'Nowra', url: 'http://www.bom.gov.au/nsw/forecasts/nowra.shtml' },
        { name: 'Katoomba', url: 'http://www.bom.gov.au/nsw/forecasts/katoomba.shtml' },
        { name: 'Bowral', url: 'http://www.bom.gov.au/nsw/forecasts/bowral.shtml' },
		{},
		{ name: 'Australia 4-day Charts', url: 'http://www.bom.gov.au/australia/charts/4day_col.shtml'},
		{ name: 'Tide Tables', url: 'http://www.bom.gov.au/australia/tides/'},
		{ name: 'Oz Weather', url: 'http://www.weatherzone.com.au/'},
		{ name: 'Marine Weather', url: 'http://www.bom.gov.au/marine/?ref=ftr'},
		{},
		{ name: 'Nelson Weather', url: 'http://www.weatheroffice.gc.ca/city/pages/bc-37_metric_e.html'},
		{ name: 'Koots High Elevation', url: 'http://weather.gc.ca/forecast/public_bulletins_e.html?Bulletin=fpcn68.cwvr'},
		{ name: 'Whitewater Snow', url: 'http://www.skiwhitewater.com/whitewater_snow_report.php'},
		{ name: 'Whistler Snow', url: 'http://www.whistlerblackcomb.com/the-mountain/snow-and-weather/index.aspx'}
	    ]
	},
    { name: 'NSW', kids: 
        [
		{ name: 'Sydney Weather', url: 'http://www.bom.gov.au/nsw/forecasts/sydney.shtml'},
		{ name: 'Sydney Marine', url: 'http://www.bom.gov.au/nsw/forecasts/sydneycoast.shtml'},
		{ name: 'Cronulla Tides', url: 'http://tides.willyweather.com.au/nsw/sydney/cronulla-beach.html'},
		{ name: 'Cronulla Surf', url: 'http://www.coastalwatch.com/camera/cameras_large.aspx?cam=4000&state=NSW&camName=Cronulla%20-%20Wanda'},
		{ name: 'Cronulla Swellnet', url: 'http://www.swellnet.com.au/reports/cronulla/daily'},
		{ name: 'Cronulla Swell', url: 'http://swell.willyweather.com.au/nsw/sydney/cronulla-beach.html'},
        ]
    },
    { name: 'Tassie', kids: 
        [
		{ name: 'Hobart', url: 'http://www.bom.gov.au/tas/forecasts/hobart.shtml'},
		{ name: 'Queenstown', url: 'http://www.bom.gov.au/tas/forecasts/queenstown.shtml'},
		{ name: 'Burnie', url: 'http://www.bom.gov.au/tas/forecasts/burnie.shtml'},
		{ name: 'Devonport', url: 'http://www.bom.gov.au/tas/forecasts/devonport.shtml'},
		{ name: 'Bridport', url: 'http://www.bom.gov.au/tas/forecasts/bridport.shtml'},
		{ name: 'St Helens', url: 'http://www.bom.gov.au/tas/forecasts/sthelens.shtml'},
		{ name: 'Coles Bay', url: 'http://www.bom.gov.au/tas/forecasts/coles-bay.shtml'},
		{ name: 'Maria Island', url: 'http://www.bom.gov.au/tas/forecasts/maria-island.shtml'},
		{ name: 'Adventure Bay', url: 'http://www.bom.gov.au/tas/forecasts/adventure-bay.shtml'},
		{ name: 'Dover', url: 'http://www.bom.gov.au/tas/forecasts/dover.shtml'},
		{ name: 'Melaleuca', url: 'http://www.bom.gov.au/tas/forecasts/melaleuca.shtml'},
		{},
		{ name: 'Tasmanian Towns', url: 'http://www.bom.gov.au/tas/forecasts/map7day.shtml'},
		{ name: 'Tasmanian Districts', url: 'http://www.bom.gov.au/tas/forecasts/map.shtml'},
		{},
		{ name: 'Cradle Valley', url: 'http://www.bom.gov.au/tas/forecasts/cradlevalley.shtml'},
		{ name: 'Lake St Clair', url: 'http://www.bom.gov.au/tas/forecasts/lakestclair.shtml'},
		{ name: 'Mt Field', url: 'http://www.bom.gov.au/tas/forecasts/mount-field.shtml'},
		{ name: 'Mt Wellington', url: 'http://www.bom.gov.au/tas/forecasts/mtwellington.shtml'},
		{ name: 'Ben Lomond', url: 'http://www.bom.gov.au/tas/forecasts/ben-lomond.shtml'},
		{},
		{ name: 'Marine North Coast', url: 'http://www.bom.gov.au/tas/forecasts/centralnorthcoast.shtml'},
		{ name: 'Marine NE Coast', url: 'http://www.bom.gov.au/tas/forecasts/eastflindersisland.shtml'},
		{ name: 'Marine Upper E Coast', url: 'http://www.bom.gov.au/tas/forecasts/uppereastcoast.shtml'},
		{ name: 'Marine Maria', url: 'http://www.bom.gov.au/tas/forecasts/lowereastcoast.shtml'},
		{ name: 'Marine Bruny', url: 'http://www.bom.gov.au/tas/forecasts/southeastcoast.shtml'},
		{ name: 'Marine Bruny West', url: 'http://www.bom.gov.au/tas/forecasts/channel.shtml'},
		{ name: 'Marine Norfolk Bay', url: 'http://www.bom.gov.au/tas/forecasts/bays.shtml'},
		{},
		{ name: 'Willy - Cape Bruny', url: 'http://wind.willyweather.com.au/tas/southern/cape-bruny.html'},
		{ name: 'Willy - Coles Bay', url: 'http://wind.willyweather.com.au/tas/southern/coles-bay.html'},
		{ name: 'Willy - Maria Island', url: 'http://wind.willyweather.com.au/tas/southern/maria-island.html'},
		{ name: 'Seabreeze - Friendly Beaches', url: 'http://www.seabreeze.com.au/graphs/tasmania_east_coast.asp'},
		{},
		{ name: 'BOM Wind Charts', url: 'http://www.bom.gov.au/jsp/watl/wind/index.jsp'},
		{ name: 'Cape Tourville Swell', url: 'http://swell.willyweather.com.au/tas/southern/cape-tourville.html'},
        ]
    },
    { name: 'Victoria', kids: 
        [
		{ name: 'Arapiles', url: 'http://www.bom.gov.au/vic/forecasts/horsham.shtml'},
		{ name: 'Arapiles - Elders', url: 'http://www.eldersweather.com.au/vic/wimmera/arapiles'},
		{ name: 'Melbourne', url: 'http://www.bom.gov.au/vic/forecasts/melbourne.shtml'},
		{ name: 'Portland', url: 'http://www.bom.gov.au/vic/forecasts/portland.shtml'},
		{ name: 'Victoria West Marine', url: 'http://www.bom.gov.au/vic/forecasts/westcoast.shtml'},
		{ name: 'Victoria Central Marine', url: 'http://www.bom.gov.au/vic/forecasts/centralcoast.shtml'}
        ]
    },
    {
        name: 'Queensland', kids:
          [
          {
              name: 'Cairns', kids:
                [
                { name: 'Cairns Weather', url: 'http://www.bom.gov.au/qld/forecasts/cairns.shtml' },
                { name: 'Cairns Marine Weather', url: 'http://www.bom.gov.au/qld/forecasts/cairns-coast.shtml' },
                { name: 'Cairns Obs', url: 'http://www.bom.gov.au/products/IDQ60801/IDQ60801.94287.shtml' },
                { name: 'Willy Wind', url: 'http://wind.willyweather.com.au/qld/far-north/cairns.html' },
                { name: 'Cairns Elders Weather', url: 'http://www.eldersweather.com.au/qld/nth-cst-and-tableland/cairns' },
                { name: 'Cairns Wave Data', url: 'http://www.ehp.qld.gov.au/coastal/monitoring/waves/site_param.php?siteid=9&paramid=1' },
                { name: 'Green Island Wave', url: 'http://swell.willyweather.com.au/qld/far-north/green-island.html' },
                { name: 'North Qld Beaches', url: 'http://www.northqueenslandlifesaving.com/beachupdates.htm' },
                { },
                { name: 'Queensland Synopsis', url: 'http://www.bom.gov.au/qld/forecasts/state.shtml' },
                { name: 'Queensland Forecasts', url: 'http://www.bom.gov.au/qld/forecasts/map.shtml' },
                ]
          },
          {
              name: 'Townsville', kids:
                [
                { name: 'Townsville Weather', url: 'http://www.bom.gov.au/qld/forecasts/townsville.shtml' },
                { name: 'Townsville Elders Weather', url: 'http://www.eldersweather.com.au/qld/lower-burdekin/townsville' },
                { name: 'Townsville Obs', url: 'http://www.bom.gov.au/products/IDQ60801/IDQ60801.94294.shtml' },
                { name: 'Bowen Weather', url: 'http://www.bom.gov.au/qld/forecasts/bowen.shtml' },
                { name: 'Hamilton Island Elders Weather', url: 'http://www.eldersweather.com.au/qld/central-coast/hamilton-island' },
                { },
                { name: 'Townsville Marine Weather', url: 'http://www.bom.gov.au/qld/forecasts/townsville-coast.shtml' },
                { name: 'Mackay Marine Weather', url: 'http://www.bom.gov.au/qld/forecasts/mackay-coast.shtml' },
                { name: 'Townsville Willy Wind', url: 'http://wind.willyweather.com.au/qld/northern/townsville.html' },
                { name: 'Hamilton Island Willy Wind', url: 'http://wind.willyweather.com.au/qld/mackay/hamilton-island.html' },
                { name: 'Seabreeze wind/wave', url: 'http://www.seabreeze.com.au/graphs/qld2.asp#F3TOWN' },
                { name: 'Townsville Wave Obs', url: 'http://www.ehp.qld.gov.au/coastal/monitoring/waves/site_param.php?siteid=10&paramid=1' },
                { name: 'Hamilton Island Obs', url: 'http://www.bom.gov.au/products/IDQ60801/IDQ60801.94368.shtml' },
                { },
                { name: 'Townsville Beaches', url: 'http://www.townsville.qld.gov.au/facilities/swimming/Pages/beaches.aspx' },
                ]
          }
          ]
    }
];
