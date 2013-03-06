if (!window.GA) {
	window.GA = {
		trackerWithTrackingId: function(id) {
			PhoneGap.exec("GoogleAnalyticsPlugin.trackerWithTrackingId",id);
			//console.log("trackerWithTrackingId Initialized");
		},
		trackView: function(pageUri) {
			PhoneGap.exec("GoogleAnalyticsPlugin.trackView",pageUri);
			//console.log("trackView Initialized");
		},
		trackEventWithCategory: function(category,action,label,value) {
			var options = {category:category,
				action:action,
				label:label,
				value:value};
			PhoneGap.exec("GoogleAnalyticsPlugin.trackEventWithCategory",options);
		},
		hitDispatched: function(hitString) {
			//console.log("hitDispatched :: " + hitString);
		},
		sessionStart: function() {
			if (cordova && cordova.exec) {
				cordova.exec("GoogleAnalyticsPlugin.sessionStart",pageUri);
			} else {
				console.log("would start new Session with the next event");
			}

		},
		trackerDispatchDidComplete: function(count) {
			//console.log("trackerDispatchDidComplete :: " + count);
		}
	}
}
