// Data for Toquehead's list
// Format of data for list is an array of items represented as 1x4 arrays.
// Item 1x4 array is:
// [0] = Label
// [1] = URL (optional)
// [2] = open/closed (boolean, optional)
// [3] = array sub-items represented as 1x4 arrays (optional)
// [4] = mashup (boolean, optional)
var MTN_LINKS = 
[
	['Favorites', null, true, 
		[
		['Nelson Weather', 'http://www.weatheroffice.gc.ca/city/pages/bc-37_metric_e.html', null, null, true],
		['High Elevation Forecast', 'http://weather.gc.ca/forecast/public_bulletins_e.html?Bulletin=fpcn68.cwvr', null, null, true],
		['Nelson Weather Network', 'http://www.theweathernetwork.com/weather/cities/can/pages/CABC0198.htm', null, null, true],
		['Nelson 14-day', 'http://www.theweathernetwork.com/fourteenday/cabc0198?ref=qlink_lt_14day', null, null, true],
    	['Radar', null, false, 
            [
		    ['Silver Star Radar', 'http://www.weatheroffice.gc.ca/radar/index_e.html?id=XSS'],
		    ['Weather Network Radar', 'http://www.theweathernetwork.com/weather/maps/?ref=topnav_weatherindex_maps']
            ]
        ],
	    ['Road Conditions', null, false,
		    [
		    ['Drive BC', 'http://www.drivebc.ca/'],
		    ['BC Road Weather', 'http://www.weatheroffice.pyr.ec.gc.ca/icbctravelalert/dtables_e.html'],
		    ]
	    ],
		['', null],
		['Revelstoke Weather', 'http://weatheroffice.ec.gc.ca/city/pages/bc-65_metric_e.html'],
		['Whistler Alpine Weather', 'http://www.whistlerblackcomb.com/weather/forecast/index.htm', null, null, true],
		['US Forecasts Index', 'http://www.cpc.ncep.noaa.gov/products/forecasts/'],
		['', null],
		['Red Mountain Snow', 'http://www.redresort.com/today/report/', null, null, true],
		['Revelstoke Snow', 'http://www.revelstokemountainresort.com/conditions/snow-report'],
		['Whistler Snow', 'http://www.whistlerblackcomb.com/weather/snowreport/index.htm', null, null, true],
		['Whitewater Snow', 'http://www.skiwhitewater.com/whitewater_snow_report.php', null, null, true],
		['', null],
		['Castlegar Web Cam', 'http://selkirk.ca/weather/aviation-webcams/'],
		['Kootenay Pass Web Cam', 'http://images.drivebc.ca/bchighwaycam/pub/html/www/5.html', null, null, true],
		['Red Mountain Cams', 'http://www.redresort.com/mountain/cams/'],
		['Whitewater Web Cam', 'http://www.skiwhitewater.com/whitewater_webcam.php'],
		['', null],
		['Hall Creek wx', 'http://images.drivebc.ca/bchighwaycam/pub/weather/31091.html'],
		['Strawberry Pass wx', 'http://images.drivebc.ca/bchighwaycam/pub/weather/32221.html'],
		['Paulson wx', 'http://images.drivebc.ca/bchighwaycam/pub/weather/33122.html'],
		]
	],
	['Weather', null, false, 
		[
		['BC Overview', 'http://weatheroffice.ec.gc.ca/forecast/canada/summary_e.html?BC'], 
		['Castlegar', 'http://weatheroffice.ec.gc.ca/city/pages/bc-21_metric_e.html'],
		['Nakusp', 'http://weatheroffice.ec.gc.ca/city/pages/bc-38_metric_e.html'],
		['Nelson', 'http://weatheroffice.ec.gc.ca/city/pages/bc-37_metric_e.html'],
		['Osoyoos', 'http://weatheroffice.ec.gc.ca/city/pages/bc-69_metric_e.html'],
		['Penticton', 'http://weatheroffice.ec.gc.ca/city/pages/bc-84_metric_e.html'],
		['Revelstoke', 'http://weatheroffice.ec.gc.ca/city/pages/bc-65_metric_e.html'],
		['Silver Star Radar', 'http://www.weatheroffice.gc.ca/radar/index_e.html?id=XSS'],
		['CAA Weather Data', 'http://avalanche.ca/CAC_Weather_Images'],
		['Vantage Washington', 'http://www.wrh.noaa.gov/total_forecast/index.php?zone=waz026&county=wac037&wfo=pdt&dgtl=1&lat=46.94556&lon=-119.98611'],
		['US Forecasts', 'http://www.wrh.noaa.gov/'],
		['Precip Water', 'http://cimss.ssec.wisc.edu/tropic/real-time/tpw2/epac/main.html', null, null, true],
		['Satellite, Visible', 'http://sat.wrh.noaa.gov/satellite/loopsat.php?wfo=pdt&area=nw&type=vis&size=4', null, null, true],
		['Satellite, Infared', 'http://sat.wrh.noaa.gov/satellite/loopsat.php?wfo=pdt&area=nw&type=ir&size=4', null, null, true],
		['Nelson Other', null, false, 
			[
			['Weather Network', 'http://www.theweathernetwork.com/weather/cities/can/pages/CABC0198.htm'],
			['weather.com', 'http://www.weather.com/outlook/travel/local/CAXX0315?whatprefs=&amp;logssearchwhere=nelson,%20canada'],
			['US Outlook Discussion', 'http://www.cpc.ncep.noaa.gov/products/predictions/610day/fxus06.html'],
			['US 6-10 Day', 'http://www.cpc.ncep.noaa.gov/products/predictions/610day/'],
			['US 8-14 Day', 'http://www.cpc.ncep.noaa.gov/products/predictions/814day/'],
			['US Forecasts Index', 'http://www.cpc.ncep.noaa.gov/products/forecasts/'],
			]
		],

		['Alpine Forecasts', null, false, 
			[
			['High Elevation Forecast', 'http://www.weatheroffice.gc.ca/forecast/textforecast_e.html?Bulletin=fpcn68.cwvr'],
			['Big White Weather', 'http://www.bigwhite.com/mountain_showWeatherForecast.html'],
			['Fernie', 'http://www.skifernie.com/conditions/alpineweather.aspx'],
			['Mount Seymour', 'http://www.weatheroffice.com/scripts/citygen.pl?city=cp-5&client=seymour_e&cmap=cp'],
			['Mount Baker', 'http://www.snow-forecast.com/resorts/Mount-Baker.0to3top.shtml'],
			['Red Mountain', 'http://www.redresort.com/mountain/forecast/'],
			['Silver Star Weather', 'http://www.skisilverstar.com/mountain_showWeatherForecast.html'],
			['Sun Peaks Weather', 'http://www.sunpeaksresort.com/weather/forecast.aspx'],
			['Whistler Alpine', 'http://www.whistlerblackcomb.com/weather/forecast/index.htm'],
			]
		],

		['Automated Stations', null, false, 
			[
			['Hall Creek', 'http://images.drivebc.ca/bchighwaycam/pub/weather/31091.html', null, null, true],
			['Kootenay Pass', 'http://images.drivebc.ca/bchighwaycam/pub/html/www/5.html'],
			['Paulson Summit', 'http://www.th.gov.bc.ca/bchighwaycam/weatherData.aspx?stationId=33122', null, null, true],
			['Redfish Creek', 'http://www.env.gov.bc.ca/rfc/river_forecast/Real_Time/Raw_Data/2D14P.htm'],
			['Redfish Creek2', 'http://a100.gov.bc.ca/pub/aspr/aspr_main_report.do?disclaimer=Accept&fromYear=2008&fromMonth=December&fromDay=1&hourlyOrDaily=Daily&toYear=2009&toMonth=May&toDay=31&action=Table&stationParameters=2D14P%3A%3AMAXT&stationParameters=2D14P%3A%3AMINT&stationParameters=2D14P%3A%3ASDPS&stationParameters=2D14P%3A%3ASWES'],
			['Strawberry Pass', 'http://www.th.gov.bc.ca/bchighwaycam/weatherData.aspx?stationId=32221'],
			['Fish Lake/Retallack', 'http://www.th.gov.bc.ca/bchighwaycam/weatherData.aspx?stationId=34126'],
			['Mt Fidelity', 'http://www.bchydro.com/info/res_hydromet/data/fdl.txt'],
			]
		],

		['Freezing Levels', null, false, 
			[
			['Current', 'http://www.flightplanning.navcanada.ca/Latest/gfa/anglais/Latest-gfacn31_turbc_000-e.html'],
			['+6 hours', 'http://www.flightplanning.navcanada.ca/Latest/gfa/anglais/Latest-gfacn31_turbc_006-e.html'],
			['+12 hours', 'http://www.flightplanning.navcanada.ca/Latest/gfa/anglais/Latest-gfacn31_turbc_012-e.html'],
			]
		],

		['Eastern BC', null, false, 
			[
			['Cranbrook', 'http://www.weatheroffice.gc.ca/city/pages/bc-77_metric_e.html'],
			['Creston', 'http://www.weatheroffice.gc.ca/city/pages/bc-26_metric_e.html'],
			['Golden', 'http://www.weatheroffice.gc.ca/city/pages/bc-34_metric_e.html'],
			['Invermere', 'http://www.weatheroffice.gc.ca/city/pages/bc-72_metric_e.html'],
			]
		],

		['West Coast', null, false, 
			[
			['Chilliwack', 'http://www.weatheroffice.gc.ca/city/pages/bc-24_metric_e.html'],
			['Hope', 'http://www.weatheroffice.gc.ca/city/pages/bc-36_metric_e.html'],
			['Port Hardy', 'http://www.weatheroffice.gc.ca/city/pages/bc-89_metric_e.html'],
			['Squamish', 'http://www.weatheroffice.gc.ca/city/pages/bc-50_metric_e.html'],
			['Tofino', 'http://www.weatheroffice.gc.ca/city/pages/bc-17_metric_e.html'],
			['Vancouver', 'http://www.weatheroffice.gc.ca/city/pages/bc-74_metric_e.html'],      
			['Whistler', 'http://www.weatheroffice.gc.ca/city/pages/bc-86_metric_e.html'],      
			]
		],
	    
		['Alberta', null, false, 
			[
			['Banff', 'http://www.weatheroffice.gc.ca/city/pages/ab-49_metric_e.html'],
			['Calgary', 'http://www.weatheroffice.gc.ca/city/pages/ab-52_metric_e.html'],
			['Crowsnest', 'http://www.weatheroffice.gc.ca/city/pages/ab-17_metric_e.html'],
			['Jasper', 'http://www.weatheroffice.gc.ca/city/pages/ab-70_metric_e.html'],
			['Waterton', 'http://www.weatheroffice.gc.ca/city/pages/ab-66_metric_e.html'],
			]
		],
		]
	],
	['Web Cams', null, false, 
		[
		['Banff', 'http://web.alberta.com/skycams/sulphurmtn.html'],
		['Big White 1', 'http://www.bigwhite.com/images/bwwebcam.jpg'],
		['Big White 2', 'http://www.bigwhite.com/images/glwebcam.jpg'],
		['Bugaboos', 'http://www.cmhinc.com/images/webcam/BUwebcam.jpg'],
		['Castlegar', 'http://selkirk.ca/weather/aviation-webcams/'],
		['Fernie', 'http://www.ferniewebcam.com/Library.htm'],
		['Kootenay Pass', 'http://images.drivebc.ca/bchighwaycam/pub/html/www/5.html'],
		['Lake Lousy', 'http://www.skilouise.com/mountain_cam/'],
		['Marmot Basin', 'http://www.skimarmot.com/skicam.html'],
		['Panorama', 'http://www.rsn.com/cams/panorama/'],
		['Red Mountain', 'http://www.redresort.com/today/'],
		['Silver Star', 'http://www.skisilverstar.com/weather/webcam.jpg'],
		['Red Mountain', 'http://www.redresort.com/mountain/cams/'],
		['Revelstoke', 'http://www.th.gov.bc.ca/bchighwaycam/index.aspx?hideFramework=False&cam=11'],
		['Rogers Pass', 'http://www.th.gov.bc.ca/bchighwaycam/index.aspx?hideFramework=False&cam=101'],
		['Sunshine Village', 'http://www.skibanff.com/skicam/'],
		['Whistler Alpine', 'http://www.whistlerwebcams.com/sproatt/'],
		['Whistler/Blackcomb', 'http://www.whistlerblackcomb.com/weather/cams/whistler/index.htm'],
		['Whitewater', 'http://www.skiwhitewater.com/whitewater_webcam.php'],
		]
	],
	 
	['Ski Reports', null, false, 
		[
 		['Baldface', 'http://www.baldface.net/snowreport'],
 		['Fernie Official', 'http://www.skifernie.com/snowreport/'],
		['Fernie Unofficial', 'http://far.redtree.com/cgmrep.html'],
		['Golden Alpine', 'http://gah.ca/w-snow_update.html'],
		['Kicking Horse', 'http://www.kickinghorseresort.com/conditions/'],
		['Powder Creek', 'http://community.netidea.com/powder/snowrpt.htm'],
		['Red Mountain', 'http://www.redresort.com/today/report/'],
		['The UnRed', 'http://www.unred.com/'],
		['Revelstoke Snow', 'http://www.revelstokemountainresort.com/revelstokemtn/conditions.aspx'],
		['Whistler', 'http://www.whistlerblackcomb.com/weather/snowreport/index.htm'],
		['Whitewater', 'http://www.skiwhitewater.com/whitewater_snow_report.php'],

		['', null],
	 	
		['Lake Lousy', 'http://www.skilouise.com/conditions/snow-report.aspx'],
		['Marmot Basin', 'http://www.skimarmot.com/u/snowreport.phtml'],
		['Sunshine Village', 'http://www.skibanff.com/conditions/snow_report.php'],

		['', null],
	 	
		['Alta', 'http://www.alta.com/pages/report.php'],
		['Brundage', 'http://www.brundage.com/the-mountain/snow-report/'],
		['Mammoth Lakes', 'http://www.mammothmountain.com'],
		]
	],
	['Avalanche Reports', null, false, 
		[
		['CAA Home', 'http://www.avalanche.ca/'],
		['CAA Bulletins', 'http://www.avalanche.ca/default.aspx?DN=5,4,558,3,Documents'],
		['Rogers Pass', 'http://www.pc.gc.ca/apps/PSB/index_e.asp?oqAVA_PARK_ID=3'],
		['CSAC Avalanche Page', 'http://www.csac.org/'],
		['Utah Avalanche Center', 'http://www.avalanche.org/%7Euac/'],
		]
	],
	['Road Conditions', null, false, 
		[
		['Drive BC', 'http://www.drivebc.ca/'],
		['BC Road Weather', 'http://www.weatheroffice.pyr.ec.gc.ca/icbctravelalert/dtables_e.html'],
		]
	],
	['Trips and Stuff', null, false, 
		[
		['Mount Findlay', 'http://members.shaw.ca/toquehead/findlay/findlay.html'],
		['Mount Burnham', 'http://members.shaw.ca/toquehead/burnham/burnham.html'],
		['Monica Meadows', 'http://members.shaw.ca/toquehead/monica/monica.html'],
		['Gold Range', 'http://members.shaw.ca/toquehead/goldrange/goldrange.html'],
		['Shark Bay', 'http://members.shaw.ca/toquehead/sharkbay/sharkbay.html'],
		['Valhalla - Nott to Dag', 'http://members.shaw.ca/toquehead/valhalla/valhalla.html'],
		['Welsh Lakes', 'http://members.shaw.ca/toquehead/welshlakes/welshlakes.html'],
		['Sandra\'s Trips', 'http://members.shaw.ca/dog_house/'],
		['All About Bob', 'http://www.telusplanet.net/public/stjohnb/'],
		['Old Goats Mailing List', null, false, 
			[
			['View the archive', 'http://groups.yahoo.com/group/oldgoat/'],
			['Subscribe to the list', 'http://groups.yahoo.com/group/oldgoat/join/'],
			]
		],
		]
	],
	['Miscellaneous', null, false, 
		[
		['KMC', 'http://www.kootenaymountaineering.bc.ca/'],
		['KMC Stats', 'http://stats.kootenayinternet.com/kootenaymountaineering.bc.ca/'],
		]
	]
];
