# Google Analytics plugin for Cordova 2.2.0 on iOS
====================
A iOS Google Analytics SDK 2.0 plugin for Cordova 2.2+

Setup:
---------------------
1. Add the SystemConfiguration and CoreData frameworks to Xcode.
2. Open your Cordova.plist file add a new entry under Plugins with the key as googleAnalyticsPlugin (note the lower case g) and the value as GoogleAnalyticsPlugin. Then under ExternalHosts add a new entry with a value of *
3. Drag and drop the GoogleAnalytics folder onto your Plugins folder in Xcode. Select 'Copy items into destination group's folder (if needed)', select 'Create groups for any added folders', and check your target under 'Add to targets'.
4. Reference your cordova.js file and GoogleAnalyticsPlugin.js in your html. To use, wrap startGA() and any of the window.GA methods inside of an onDeviceReady functions.

Example:
---------------------
	<script type="text/javascript">
		document.addEventListener("deviceready", onDeviceReady, false);
		function onDeviceReady() {
			startGA();
			window.GA.trackerWithTrackingId("UA-24808054-3");
			window.GA.trackView("/index");
		}
	</script>

More details:
---------------------
For a more detailed guide see http://jelled.com/google-analytics-plugin-for-phonegap-cordova-2-2-0-ios