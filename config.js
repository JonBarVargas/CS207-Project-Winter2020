/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out or empty, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
			     // local for armv6l processors, default
			     //   starts serveronly and then starts chrome browser
			     // false, default for all  NON-armv6l devices
			     // true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"					
					},
					{
						symbol: "MyCalendar",
						url: "https://calendar.google.com/calendar/ical/jonathanbvargas%40gmail.com/private-f74e1da60fc69e33a37581e8ffa4c25c/basic.ics"					
					},
					{
						symbol: "UNI",
						url: "https://calendar.google.com/calendar/ical/vlrsolp5rer4al4auhnc9ddc1g%40group.calendar.google.com/private-4d988334115d931e55551fd9740ce2ce/basic.ics"					
					},
					
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "currentweather",
			position: "top_left",
			config: {
				location: "Regina",
				locationID: "6119109", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "0173fb09d5ca98d5ae3176583d2df4b6"
			}
		},
		{
			module: "weatherforecast",
			position: "top_left",
			header: "Weather Forecast",
			config: {
				location: "Regina",
				locationID: "6119109", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "0173fb09d5ca98d5ae3176583d2df4b6"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
		  module: "MMM-NowPlayingOnSpotify",
		  position: "bottom_right",

		  config: {
		    clientID: "4087f71ace1d4d1abec0523304dd8353",
		    clientSecret: "2466b78035284418a3182fa3923537af",
		    accessToken: "BQAFBYRTs8X6-P3bbnPJpnGwnue1Bn2U5AbOmlExlMq89eMeIDIFKkbtrqHt0ZoCVpavIQTPa5fv3sMDnck3H5J90ryeXx2zjdIbzwJ8lvnJXCSEymI2qICQ1d_1_9pu4B8fRi8gUgyjRZ5XzOEp8Vk5_WagxHE08p4IDU8Wq1Og0w",
		    refreshToken: "AQCxlnPXXgHjJsUjdQHu3t2ene0XOPMNwB-aAaoEWsc3IcjOmW83ioimDkObZCidIhtYUx-3rvVXa6_NXOyCFJPpumPztiu9ECroLbF38y5R2Vxu8ztziD0uioFCGe2fDEs"
		  }
		},

        {
  module: "MMM-GooglePhotos",
  position: "top_right",
  config: {
		albums: ["MagicMirror"], // Set your album name. like ["My wedding", "family share", "Travle to Paris"]
		updateInterval: 1000 * 60, // minimum 10 seconds.
		sort: "new", // "old", "random"
		uploadAlbum: null, // Only album created by `create_uploadable_album.js`.
		condition: {
			fromDate: null, // Or "2018-03", RFC ... format available
			toDate: null, // Or "2019-12-25",
			minWidth: null, // Or 400
			maxWidth: null, // Or 8000
			minHeight: null, // Or 400
			maxHeight: null, // Or 8000
			minWHRatio: null,
			maxWHRatio: null,
			// WHRatio = Width/Height ratio ( ==1 : Squared Photo,   < 1 : Portraited Photo, > 1 : Landscaped Photo)
		},
		showWidth: 500, // These values will be used for quality of downloaded photos to show. real size to show in your MagicMirror region is recommended.
		showHeight: 350,
		timeFormat: "YYYY/MM/DD HH:mm", // Or `relative` can be used.
  }
},
        
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
