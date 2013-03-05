if (!window.GA) {
	window.GA = {
		trackerWithTrackingId: function(id) {
			if (cordova && cordova.exec) {
				cordova.exec("GoogleAnalyticsPlugin.trackerWithTrackingId",id);
			} else {
				console.log("would track using ID " + id);
			}
			//console.log("trackerWithTrackingId Initialized");
		},
		trackView: function(pageUri) {
			if (cordova && cordova.exec) {
				cordova.exec("GoogleAnalyticsPlugin.trackView",pageUri);
			} else {
				console.log("would track VIEW " + pageUri);
			}
			//console.log("trackView Initialized");
		},
		trackEventWithCategory: function(category,action,label,value) {
			var options = {category:category,
				action:action,
				label:label,
				value:value};
			if (cordova && cordova.exec) {
				cordova.exec("GoogleAnalyticsPlugin.trackEventWithCategory",options);
			} else {
				console.log("would track EVENT " + category+"/"+action+"/"+label+"/"+value);
			}
		},
		hitDispatched: function(hitString) {
			//console.log("hitDispatched :: " + hitString);
		},
		trackerDispatchDidComplete: function(count) {
			//console.log("trackerDispatchDidComplete :: " + count);
		}
	};
}
