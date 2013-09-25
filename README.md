# Google Analytics plugin for Cordova 2.4.0 on iOS
====================
A iOS Google Analytics SDK 2.0 plugin for Cordova 2.4+

Setup:
---------------------
1. Add the SystemConfiguration and CoreData frameworks to Xcode.
2. Open your config.xml file add a new entry under Plugins `<plugin name="googleAnalyticsPlugin" value="GoogleAnalyticsPlugin" />`
 (once lowercase g, once UPPERCASE G!). Make sure, there's a `<access origin="*" />` line.
3. Drag and drop the GoogleAnalytics folder onto your Plugins folder in Xcode. Select 'Copy items into destination group's folder (if needed)', select 'Create groups for any added folders', and check your target under 'Add to targets'.
4. Reference your cordova.js file and the GoogleAnalyticsPlugin.js in your html. To use, wrap the window.GA methods inside of an onDeviceReady function.

Example:
---------------------
	<script type="text/javascript">
		document.addEventListener("deviceready", onDeviceReady, false);
		function onDeviceReady() {
			window.GA.trackerWithTrackingId("UA-XXXXXXXX-X");
			window.GA.trackView("/index");
		}
	</script>

More details:
---------------------
For a more detailed guide see http://jelled.com/google-analytics-plugin-for-phonegap-cordova-2-2-0-ios

Credit:
---------------------
The updated GoogleAnalyticsPlugin.m, GoogleAnalyticsPlugin.h, and GoogleAnalyticsPlugin.js files were courtesy of nocksf in this discussion: https://groups.google.com/d/msg/phonegap/uqYjTmd4w_E/fZvJCpAbtsUJ