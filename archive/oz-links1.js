// Data for Toquehead's list
// Format of data for list is an array of items represented as 1x4 arrays.
// Item 1x4 array is:
// [0] = Label
// [1] = URL (optional)
// [2] = open/closed (boolean, optional)
// [3] = array sub-items represented as 1x4 arrays (optional)
// [4] = mashup (boolean, optional)
var OZ_LINKS = 
[
	['Favorites', null, true, 
		[
        ['Albury/Wodonga', 'http://www.bom.gov.au/vic/forecasts/wodonga.shtml', null, null, true],
        ['Moruya', 'http://www.bom.gov.au/nsw/forecasts/batemansbay.shtml', null, null, true],
        ['Canberra', 'http://www.bom.gov.au/act/forecasts/canberra.shtml', null, null, true],
        ['Katoomba', 'http://www.bom.gov.au/nsw/forecasts/katoomba.shtml', null, null, true],
		['&nbsp;', null],
		['BOM Wind Charts', 'http://www.bom.gov.au/jsp/watl/wind/index.jsp', null, null, true],
		['Willy Weather', 'http://www.willyweather.com.au/', null, null, true],
		['&nbsp;', null],
		['Australia 4-day Charts', 'http://www.bom.gov.au/australia/charts/4day_col.shtml', null, null, true],
		['Tide Tables', 'http://www.bom.gov.au/australia/tides/', null, null, true],
		['Oz Weather', 'http://www.weatherzone.com.au/', null, null, true],
		['Marine Weather', 'http://www.bom.gov.au/marine/?ref=ftr', null, null, true],
		['&nbsp;', null],
		['Nelson Weather', 'http://www.weatheroffice.gc.ca/city/pages/bc-37_metric_e.html', null, null, true],
		['Koots High Elevation', 'http://weather.gc.ca/forecast/public_bulletins_e.html?Bulletin=fpcn68.cwvr', null, null, true],
		['Whitewater Snow', 'http://www.skiwhitewater.com/whitewater_snow_report.php', null, null, true],
		['Whistler Snow', 'http://www.whistlerblackcomb.com/the-mountain/snow-and-weather/index.aspx', null, null, true]
		]
	],
    ['NSW', null, false,
        [
		['Sydney Weather', 'http://www.bom.gov.au/nsw/forecasts/sydney.shtml', null, null, true],
		['Sydney Marine', 'http://www.bom.gov.au/nsw/forecasts/sydneycoast.shtml', null, null, true],
		['Cronulla Tides', 'http://tides.willyweather.com.au/nsw/sydney/cronulla-beach.html', null, null, true],
		['Cronulla Surf', 'http://www.coastalwatch.com/camera/cameras_large.aspx?cam=4000&state=NSW&camName=Cronulla%20-%20Wanda', null, null, true],
		['Cronulla Swellnet', 'http://www.swellnet.com.au/reports/cronulla/daily', null, null, true],
		['Cronulla Swell', 'http://swell.willyweather.com.au/nsw/sydney/cronulla-beach.html', null, null, true],
        ]
    ],
    ['Tassie', null, false,
        [
		['Hobart', 'http://www.bom.gov.au/tas/forecasts/hobart.shtml', null, null, true],
		['Queenstown', 'http://www.bom.gov.au/tas/forecasts/queenstown.shtml', null, null, true],
		['Burnie', 'http://www.bom.gov.au/tas/forecasts/burnie.shtml', null, null, true],
		['Devonport', 'http://www.bom.gov.au/tas/forecasts/devonport.shtml', null, null, true],
		['Bridport', 'http://www.bom.gov.au/tas/forecasts/bridport.shtml', null, null, true],
		['St Helens', 'http://www.bom.gov.au/tas/forecasts/sthelens.shtml', null, null, true],
		['Coles Bay', 'http://www.bom.gov.au/tas/forecasts/coles-bay.shtml', null, null, true],
		['Maria Island', 'http://www.bom.gov.au/tas/forecasts/maria-island.shtml', null, null, true],
		['Adventure Bay', 'http://www.bom.gov.au/tas/forecasts/adventure-bay.shtml', null, null, true],
		['Dover', 'http://www.bom.gov.au/tas/forecasts/dover.shtml', null, null, true],
		['Melaleuca', 'http://www.bom.gov.au/tas/forecasts/melaleuca.shtml', null, null, true],
		['&nbsp;', null],
		['Tasmanian Towns', 'http://www.bom.gov.au/tas/forecasts/map7day.shtml', null, null, true],
		['Tasmanian Districts', 'http://www.bom.gov.au/tas/forecasts/map.shtml', null, null, true],
		['&nbsp;', null],
		['Cradle Valley', 'http://www.bom.gov.au/tas/forecasts/cradlevalley.shtml', null, null, true],
		['Lake St Clair', 'http://www.bom.gov.au/tas/forecasts/lakestclair.shtml', null, null, true],
		['Mt Field', 'http://www.bom.gov.au/tas/forecasts/mount-field.shtml', null, null, true],
		['Mt Wellington', 'http://www.bom.gov.au/tas/forecasts/mtwellington.shtml', null, null, true],
		['Ben Lomond', 'http://www.bom.gov.au/tas/forecasts/ben-lomond.shtml', null, null, true],
		['&nbsp;', null],
		['Marine North Coast', 'http://www.bom.gov.au/tas/forecasts/centralnorthcoast.shtml', null, null, true],
		['Marine NE Coast', 'http://www.bom.gov.au/tas/forecasts/eastflindersisland.shtml', null, null, true],
		['Marine Upper E Coast', 'http://www.bom.gov.au/tas/forecasts/uppereastcoast.shtml', null, null, true],
		['Marine Maria', 'http://www.bom.gov.au/tas/forecasts/lowereastcoast.shtml', null, null, true],
		['Marine Bruny', 'http://www.bom.gov.au/tas/forecasts/southeastcoast.shtml', null, null, true],
		['Marine Bruny West', 'http://www.bom.gov.au/tas/forecasts/channel.shtml', null, null, true],
		['Marine Norfolk Bay', 'http://www.bom.gov.au/tas/forecasts/bays.shtml', null, null, true],
		['&nbsp;', null],
		['Willy - Cape Bruny', 'http://wind.willyweather.com.au/tas/southern/cape-bruny.html', null, null, true],
		['Willy - Coles Bay', 'http://wind.willyweather.com.au/tas/southern/coles-bay.html', null, null, true],
		['Willy - Maria Island', 'http://wind.willyweather.com.au/tas/southern/maria-island.html', null, null, true],
		['Seabreeze - Friendly Beaches', 'http://www.seabreeze.com.au/graphs/tasmania_east_coast.asp', null, null, true],
		['&nbsp;', null],
		['BOM Wind Charts', 'http://www.bom.gov.au/jsp/watl/wind/index.jsp', null, null, true],
		['Cape Tourville Swell', 'http://swell.willyweather.com.au/tas/southern/cape-tourville.html', null, null, true],
        ]
    ],
    ['Victoria', null, false,
        [
		['Arapiles', 'http://www.bom.gov.au/vic/forecasts/horsham.shtml', null, null, true],
		['Arapiles - Elders', 'http://www.eldersweather.com.au/vic/wimmera/arapiles', null, null, true],
		['Melbourne', 'http://www.bom.gov.au/vic/forecasts/melbourne.shtml', null, null, true],
		['Portland', 'http://www.bom.gov.au/vic/forecasts/portland.shtml', null, null, true],
		['Victoria West Marine', 'http://www.bom.gov.au/vic/forecasts/westcoast.shtml', null, null, true],
		['Victoria Central Marine', 'http://www.bom.gov.au/vic/forecasts/centralcoast.shtml', null, null, true]
        ]
    ],
    ['Queensland', null, false,
        [
            ['Cairns', null, false,
                [
		        ['Cairns Weather', 'http://www.bom.gov.au/qld/forecasts/cairns.shtml', null, null, true],
		        ['Cairns Marine Weather', 'http://www.bom.gov.au/qld/forecasts/cairns-coast.shtml', null, null, true],
		        ['Cairns Obs', 'http://www.bom.gov.au/products/IDQ60801/IDQ60801.94287.shtml', null, null, true],
		        ['Willy Wind', 'http://wind.willyweather.com.au/qld/far-north/cairns.html', null, null, true],
		        ['Cairns Elders Weather', 'http://www.eldersweather.com.au/qld/nth-cst-and-tableland/cairns', null, null, true],
		        ['Cairns Wave Data', 'http://www.ehp.qld.gov.au/coastal/monitoring/waves/site_param.php?siteid=9&paramid=1', null, null, true],
		        ['Green Island Wave', 'http://swell.willyweather.com.au/qld/far-north/green-island.html', null, null, true],
		        ['North Qld Beaches', 'http://www.northqueenslandlifesaving.com/beachupdates.htm', null, null, true],
		        ['&nbsp;', null],
		        ['Queensland Synopsis', 'http://www.bom.gov.au/qld/forecasts/state.shtml', null, null, true],
		        ['Queensland Forecasts', 'http://www.bom.gov.au/qld/forecasts/map.shtml', null, null, true],
                ]
            ],
            ['Townsville', null, false,
                [
		        ['Townsville Weather', 'http://www.bom.gov.au/qld/forecasts/townsville.shtml', null, null, true],
		        ['Townsville Elders Weather', 'http://www.eldersweather.com.au/qld/lower-burdekin/townsville', null, null, true],
		        ['Townsville Obs', 'http://www.bom.gov.au/products/IDQ60801/IDQ60801.94294.shtml', null, null, true],
		        ['Bowen Weather', 'http://www.bom.gov.au/qld/forecasts/bowen.shtml', null, null, true],
		        ['Hamilton Island Elders Weather', 'http://www.eldersweather.com.au/qld/central-coast/hamilton-island', null, null, true],
		        ['&nbsp;', null],
		        ['Townsville Marine Weather', 'http://www.bom.gov.au/qld/forecasts/townsville-coast.shtml', null, null, true],
		        ['Mackay Marine Weather', 'http://www.bom.gov.au/qld/forecasts/mackay-coast.shtml', null, null, true],
		        ['Townsville Willy Wind', 'http://wind.willyweather.com.au/qld/northern/townsville.html', null, null, true],
		        ['Hamilton Island Willy Wind', 'http://wind.willyweather.com.au/qld/mackay/hamilton-island.html', null, null, true],
		        ['Seabreeze wind/wave', 'http://www.seabreeze.com.au/graphs/qld2.asp#F3TOWN', null, null, true],
		        ['Townsville Wave Obs', 'http://www.ehp.qld.gov.au/coastal/monitoring/waves/site_param.php?siteid=10&paramid=1', null, null, true],
		        ['Hamilton Island Obs', 'http://www.bom.gov.au/products/IDQ60801/IDQ60801.94368.shtml', null, null, true],
		        ['&nbsp;', null],
		        ['Townsville Beaches', 'http://www.townsville.qld.gov.au/facilities/swimming/Pages/beaches.aspx', null, null, true],
                ]
            ]
        ]
    ]
];
