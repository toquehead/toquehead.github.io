var cdnLinks = 
[
	{ name: 'Favorites', open: true, kids:
		[
		{ name: 'Nelson Weather', url: 'http://www.weatheroffice.gc.ca/city/pages/bc-37_metric_e.html' },
		{ name: 'High Elevation Forecast', url: 'http://weather.gc.ca/forecast/public_bulletins_e.html?Bulletin=fpcn68.cwvr' },
		{ name: 'Nelson Weather Network', url: 'http://www.theweathernetwork.com/weather/cities/can/pages/CABC0198.htm' },
		{ name: 'Nelson 14-day', url: 'http://www.theweathernetwork.com/fourteenday/cabc0198?ref=qlink_lt_14day' },
    	{ name: 'Radar', kids: 
            [
		    { name: 'Silver Star Radar', url: 'http://www.weatheroffice.gc.ca/radar/index_e.html?id=XSS' },
		    { name: 'Weather Network Radar', url: 'http://www.theweathernetwork.com/weather/maps/?ref=topnav_weatherindex_maps' }
            ]
        },
	    { name: 'Road Conditions', kids:
		    [
		    { name: 'Drive BC', url: 'http://www.drivebc.ca/' },
		    { name: 'BC Road Weather', url: 'http://www.weatheroffice.pyr.ec.gc.ca/icbctravelalert/dtables_e.html' },
		    ]
	    },
		{ },
		{ name: 'Revelstoke Weather', url: 'http://weatheroffice.ec.gc.ca/city/pages/bc-65_metric_e.html' },
		{ name: 'Whistler Alpine Weather', url: 'http://www.whistlerblackcomb.com/weather/forecast/index.htm' },
		{ name: 'US Forecasts Index', url: 'http://www.cpc.ncep.noaa.gov/products/forecasts/' },
		{ },
		{ name: 'Red Mountain Snow', url: 'http://www.redresort.com/today/report/' },
		{ name: 'Revelstoke Snow', url: 'http://www.revelstokemountainresort.com/conditions/snow-report' },
		{ name: 'Whistler Snow', url: 'http://www.whistlerblackcomb.com/weather/snowreport/index.htm' },
		{ name: 'Whitewater Snow', url: 'http://www.skiwhitewater.com/whitewater_snow_report.php' },
		{ },
		{ name: 'Castlegar Web Cam', url: 'http://selkirk.ca/weather/aviation-webcams/' },
		{ name: 'Kootenay Pass Web Cam', url: 'http://images.drivebc.ca/bchighwaycam/pub/html/www/5.html' },
		{ name: 'Red Mountain Cams', url: 'http://www.redresort.com/mountain/cams/' },
		{ name: 'Whitewater Web Cam', url: 'http://www.skiwhitewater.com/whitewater_webcam.php' },
		{ },
		{ name: 'Hall Creek wx', url: 'http://images.drivebc.ca/bchighwaycam/pub/weather/31091.html' },
		{ name: 'Strawberry Pass wx', url: 'http://images.drivebc.ca/bchighwaycam/pub/weather/32221.html' },
		{ name: 'Paulson wx', url: 'http://images.drivebc.ca/bchighwaycam/pub/weather/33122.html' },
		]
	},
	{ name: 'Weather', kids: 
		[
		{ name: 'BC Overview', url: 'http://weatheroffice.ec.gc.ca/forecast/canada/summary_e.html?BC' }, 
		{ name: 'Castlegar', url: 'http://weatheroffice.ec.gc.ca/city/pages/bc-21_metric_e.html' },
		{ name: 'Nakusp', url: 'http://weatheroffice.ec.gc.ca/city/pages/bc-38_metric_e.html' },
		{ name: 'Nelson', url: 'http://weatheroffice.ec.gc.ca/city/pages/bc-37_metric_e.html' },
		{ name: 'Osoyoos', url: 'http://weatheroffice.ec.gc.ca/city/pages/bc-69_metric_e.html' },
		{ name: 'Penticton', url: 'http://weatheroffice.ec.gc.ca/city/pages/bc-84_metric_e.html' },
		{ name: 'Revelstoke', url: 'http://weatheroffice.ec.gc.ca/city/pages/bc-65_metric_e.html' },
		{ name: 'Silver Star Radar', url: 'http://www.weatheroffice.gc.ca/radar/index_e.html?id=XSS' },
		{ name: 'CAA Weather Data', url: 'http://avalanche.ca/CAC_Weather_Images' },
		{ name: 'Vantage Washington', url: 'http://www.wrh.noaa.gov/total_forecast/index.php?zone=waz026&county=wac037&wfo=pdt&dgtl=1&lat=46.94556&lon=-119.98611' },
		{ name: 'US Forecasts', url: 'http://www.wrh.noaa.gov/' },
		{ name: 'Precip Water', url: 'http://cimss.ssec.wisc.edu/tropic/real-time/tpw2/epac/main.html' },
		{ name: 'Satellite, Visible', url: 'http://sat.wrh.noaa.gov/satellite/loopsat.php?wfo=pdt&area=nw&type=vis&size=4' },
		{ name: 'Satellite, Infared', url: 'http://sat.wrh.noaa.gov/satellite/loopsat.php?wfo=pdt&area=nw&type=ir&size=4' },
		{ name: 'Nelson Other', kids: 
			[
			{ name: 'Weather Network', url: 'http://www.theweathernetwork.com/weather/cities/can/pages/CABC0198.htm' },
			{ name: 'weather.com', url: 'http://www.weather.com/outlook/travel/local/CAXX0315?whatprefs=&amp;logssearchwhere=nelson,%20canada' },
			{ name: 'US Outlook Discussion', url: 'http://www.cpc.ncep.noaa.gov/products/predictions/610day/fxus06.html' },
			{ name: 'US 6-10 Day', url: 'http://www.cpc.ncep.noaa.gov/products/predictions/610day/' },
			{ name: 'US 8-14 Day', url: 'http://www.cpc.ncep.noaa.gov/products/predictions/814day/' },
			{ name: 'US Forecasts Index', url: 'http://www.cpc.ncep.noaa.gov/products/forecasts/' },
			]
		},

		{ name: 'Alpine Forecasts', kids: 
			[
			{ name: 'High Elevation Forecast', url: 'http://www.weatheroffice.gc.ca/forecast/textforecast_e.html?Bulletin=fpcn68.cwvr' },
			{ name: 'Big White Weather', url: 'http://www.bigwhite.com/mountain_showWeatherForecast.html' },
			{ name: 'Fernie', url: 'http://www.skifernie.com/conditions/alpineweather.aspx' },
			{ name: 'Mount Seymour', url: 'http://www.weatheroffice.com/scripts/citygen.pl?city=cp-5&client=seymour_e&cmap=cp' },
			{ name: 'Mount Baker', url: 'http://www.snow-forecast.com/resorts/Mount-Baker.0to3top.shtml' },
			{ name: 'Red Mountain', url: 'http://www.redresort.com/mountain/forecast/' },
			{ name: 'Silver Star Weather', url: 'http://www.skisilverstar.com/mountain_showWeatherForecast.html' },
			{ name: 'Sun Peaks Weather', url: 'http://www.sunpeaksresort.com/weather/forecast.aspx' },
			{ name: 'Whistler Alpine', url: 'http://www.whistlerblackcomb.com/weather/forecast/index.htm' },
			]
		},

		{ name: 'Automated Stations', kids: 
			[
			{ name: 'Hall Creek', url: 'http://images.drivebc.ca/bchighwaycam/pub/weather/31091.html' },
			{ name: 'Kootenay Pass', url: 'http://images.drivebc.ca/bchighwaycam/pub/html/www/5.html' },
			{ name: 'Paulson Summit', url: 'http://www.th.gov.bc.ca/bchighwaycam/weatherData.aspx?stationId=33122' },
			{ name: 'Redfish Creek', url: 'http://www.env.gov.bc.ca/rfc/river_forecast/Real_Time/Raw_Data/2D14P.htm' },
			{ name: 'Redfish Creek2', url: 'http://a100.gov.bc.ca/pub/aspr/aspr_main_report.do?disclaimer=Accept&fromYear=2008&fromMonth=December&fromDay=1&hourlyOrDaily=Daily&toYear=2009&toMonth=May&toDay=31&action=Table&stationParameters=2D14P%3A%3AMAXT&stationParameters=2D14P%3A%3AMINT&stationParameters=2D14P%3A%3ASDPS&stationParameters=2D14P%3A%3ASWES' },
			{ name: 'Strawberry Pass', url: 'http://www.th.gov.bc.ca/bchighwaycam/weatherData.aspx?stationId=32221' },
			{ name: 'Fish Lake/Retallack', url: 'http://www.th.gov.bc.ca/bchighwaycam/weatherData.aspx?stationId=34126' },
			{ name: 'Mt Fidelity', url: 'http://www.bchydro.com/info/res_hydromet/data/fdl.txt' },
			]
		},

		{ name: 'Freezing Levels', kids: 
			[
			{ name: 'Current', url: 'http://www.flightplanning.navcanada.ca/Latest/gfa/anglais/Latest-gfacn31_turbc_000-e.html' },
			{ name: '+6 hours', url: 'http://www.flightplanning.navcanada.ca/Latest/gfa/anglais/Latest-gfacn31_turbc_006-e.html' },
			{ name: '+12 hours', url: 'http://www.flightplanning.navcanada.ca/Latest/gfa/anglais/Latest-gfacn31_turbc_012-e.html' },
			]
		},

		{ name: 'Eastern BC', kids: 
			[
			{ name: 'Cranbrook', url: 'http://www.weatheroffice.gc.ca/city/pages/bc-77_metric_e.html' },
			{ name: 'Creston', url: 'http://www.weatheroffice.gc.ca/city/pages/bc-26_metric_e.html' },
			{ name: 'Golden', url: 'http://www.weatheroffice.gc.ca/city/pages/bc-34_metric_e.html' },
			{ name: 'Invermere', url: 'http://www.weatheroffice.gc.ca/city/pages/bc-72_metric_e.html' },
			]
		},

		{ name: 'West Coast', kids: 
			[
			{ name: 'Chilliwack', url: 'http://www.weatheroffice.gc.ca/city/pages/bc-24_metric_e.html' },
			{ name: 'Hope', url: 'http://www.weatheroffice.gc.ca/city/pages/bc-36_metric_e.html' },
			{ name: 'Port Hardy', url: 'http://www.weatheroffice.gc.ca/city/pages/bc-89_metric_e.html' },
			{ name: 'Squamish', url: 'http://www.weatheroffice.gc.ca/city/pages/bc-50_metric_e.html' },
			{ name: 'Tofino', url: 'http://www.weatheroffice.gc.ca/city/pages/bc-17_metric_e.html' },
			{ name: 'Vancouver', url: 'http://www.weatheroffice.gc.ca/city/pages/bc-74_metric_e.html' },      
			{ name: 'Whistler', url: 'http://www.weatheroffice.gc.ca/city/pages/bc-86_metric_e.html' },      
			]
		},
	    
		{ name: 'Alberta', kids: 
			[
			{ name: 'Banff', url: 'http://www.weatheroffice.gc.ca/city/pages/ab-49_metric_e.html' },
			{ name: 'Calgary', url: 'http://www.weatheroffice.gc.ca/city/pages/ab-52_metric_e.html' },
			{ name: 'Crowsnest', url: 'http://www.weatheroffice.gc.ca/city/pages/ab-17_metric_e.html' },
			{ name: 'Jasper', url: 'http://www.weatheroffice.gc.ca/city/pages/ab-70_metric_e.html' },
			{ name: 'Waterton', url: 'http://www.weatheroffice.gc.ca/city/pages/ab-66_metric_e.html' },
			]
		},
		]
	},
	{ name: 'Web Cams', kids: 
		[
		{ name: 'Banff', url: 'http://web.alberta.com/skycams/sulphurmtn.html' },
		{ name: 'Big White 1', url: 'http://www.bigwhite.com/images/bwwebcam.jpg' },
		{ name: 'Big White 2', url: 'http://www.bigwhite.com/images/glwebcam.jpg' },
		{ name: 'Bugaboos', url: 'http://www.cmhinc.com/images/webcam/BUwebcam.jpg' },
		{ name: 'Castlegar', url: 'http://selkirk.ca/weather/aviation-webcams/' },
		{ name: 'Fernie', url: 'http://www.ferniewebcam.com/Library.htm' },
		{ name: 'Kootenay Pass', url: 'http://images.drivebc.ca/bchighwaycam/pub/html/www/5.html' },
		{ name: 'Lake Lousy', url: 'http://www.skilouise.com/mountain_cam/' },
		{ name: 'Marmot Basin', url: 'http://www.skimarmot.com/skicam.html' },
		{ name: 'Panorama', url: 'http://www.rsn.com/cams/panorama/' },
		{ name: 'Red Mountain', url: 'http://www.redresort.com/today/' },
		{ name: 'Silver Star', url: 'http://www.skisilverstar.com/weather/webcam.jpg' },
		{ name: 'Red Mountain', url: 'http://www.redresort.com/mountain/cams/' },
		{ name: 'Revelstoke', url: 'http://www.th.gov.bc.ca/bchighwaycam/index.aspx?hideFramework=False&cam=11' },
		{ name: 'Rogers Pass', url: 'http://www.th.gov.bc.ca/bchighwaycam/index.aspx?hideFramework=False&cam=101' },
		{ name: 'Sunshine Village', url: 'http://www.skibanff.com/skicam/' },
		{ name: 'Whistler Alpine', url: 'http://www.whistlerwebcams.com/sproatt/' },
		{ name: 'Whistler/Blackcomb', url: 'http://www.whistlerblackcomb.com/weather/cams/whistler/index.htm' },
		{ name: 'Whitewater', url: 'http://www.skiwhitewater.com/whitewater_webcam.php' },
		]
	},
	 
	{ name: 'Ski Reports', kids: 
		[
 		{ name: 'Baldface', url: 'http://www.baldface.net/snowreport' },
 		{ name: 'Fernie Official', url: 'http://www.skifernie.com/snowreport/' },
		{ name: 'Fernie Unofficial', url: 'http://far.redtree.com/cgmrep.html' },
		{ name: 'Golden Alpine', url: 'http://gah.ca/w-snow_update.html' },
		{ name: 'Kicking Horse', url: 'http://www.kickinghorseresort.com/conditions/' },
		{ name: 'Powder Creek', url: 'http://community.netidea.com/powder/snowrpt.htm' },
		{ name: 'Red Mountain', url: 'http://www.redresort.com/today/report/' },
		{ name: 'The UnRed', url: 'http://www.unred.com/' },
		{ name: 'Revelstoke Snow', url: 'http://www.revelstokemountainresort.com/revelstokemtn/conditions.aspx' },
		{ name: 'Whistler', url: 'http://www.whistlerblackcomb.com/weather/snowreport/index.htm' },
		{ name: 'Whitewater', url: 'http://www.skiwhitewater.com/whitewater_snow_report.php' },

		{ },
	 	
		{ name: 'Lake Lousy', url: 'http://www.skilouise.com/conditions/snow-report.aspx' },
		{ name: 'Marmot Basin', url: 'http://www.skimarmot.com/u/snowreport.phtml' },
		{ name: 'Sunshine Village', url: 'http://www.skibanff.com/conditions/snow_report.php' },

		{ },
	 	
		{ name: 'Alta', url: 'http://www.alta.com/pages/report.php' },
		{ name: 'Brundage', url: 'http://www.brundage.com/the-mountain/snow-report/' },
		{ name: 'Mammoth Lakes', url: 'http://www.mammothmountain.com' },
		]
	},
	{ name: 'Avalanche Reports', kids: 
		[
		{ name: 'CAA Home', url: 'http://www.avalanche.ca/' },
		{ name: 'CAA Bulletins', url: 'http://www.avalanche.ca/default.aspx?DN=5,4,558,3,Documents' },
		{ name: 'Rogers Pass', url: 'http://www.pc.gc.ca/apps/PSB/index_e.asp?oqAVA_PARK_ID=3' },
		{ name: 'CSAC Avalanche Page', url: 'http://www.csac.org/' },
		{ name: 'Utah Avalanche Center', url: 'http://www.avalanche.org/%7Euac/' },
		]
	},
	{ name: 'Road Conditions', kids: 
		[
		{ name: 'Drive BC', url: 'http://www.drivebc.ca/' },
		{ name: 'BC Road Weather', url: 'http://www.weatheroffice.pyr.ec.gc.ca/icbctravelalert/dtables_e.html' },
		]
	},
	{ name: 'Trips and Stuff', kids: 
		[
		{ name: 'Mount Findlay', url: 'http://members.shaw.ca/toquehead/findlay/findlay.html' },
		{ name: 'Mount Burnham', url: 'http://members.shaw.ca/toquehead/burnham/burnham.html' },
		{ name: 'Monica Meadows', url: 'http://members.shaw.ca/toquehead/monica/monica.html' },
		{ name: 'Gold Range', url: 'http://members.shaw.ca/toquehead/goldrange/goldrange.html' },
		{ name: 'Shark Bay', url: 'http://members.shaw.ca/toquehead/sharkbay/sharkbay.html' },
		{ name: 'Valhalla - Nott to Dag', url: 'http://members.shaw.ca/toquehead/valhalla/valhalla.html' },
		{ name: 'Welsh Lakes', url: 'http://members.shaw.ca/toquehead/welshlakes/welshlakes.html' },
		{ name: 'Sandra\'s Trips', url: 'http://members.shaw.ca/dog_house/' },
		{ name: 'All About Bob', url: 'http://www.telusplanet.net/public/stjohnb/' },
		{ name: 'Old Goats Mailing List', kids: 
			[
			{ name: 'View the archive', url: 'http://groups.yahoo.com/group/oldgoat/' },
			{ name: 'Subscribe to the list', url: 'http://groups.yahoo.com/group/oldgoat/join/' },
			]
		},
		]
	},
	{
	    name: 'Miscellaneous', kids:
          [
          { name: 'KMC', url: 'http://www.kootenaymountaineering.bc.ca/' },
          { name: 'KMC Stats', url: 'http://stats.kootenayinternet.com/kootenaymountaineering.bc.ca/' },
          ]
	}
];
