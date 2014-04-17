if (!window.GA)
{
    window.GA = {
        trackerWithTrackingId: function (id)
        {
            cordova.exec(function (e) {}, function (error) {}, 'googleAnalyticsPlugin', 'trackerWithTrackingId', [id]);
            //console.log("trackerWithTrackingId Initialized");
        },
        trackView: function (pageUri)
        {
            cordova.exec(function (e) {}, function (error) {}, 'googleAnalyticsPlugin', 'trackView', [pageUri]);
            //console.log("trackView Initialized");
        },
        trackEventWithCategory: function (category, action, label, value)
        {
            cordova.exec(function (e) {}, function (error) {}, 'googleAnalyticsPlugin', 'trackEventWithCategory', [category, action, label, value]);
        },
        hitDispatched: function (hitString)
        {
            //console.log("hitDispatched :: " + hitString);
        },
        trackerDispatchDidComplete: function (count)
        {
            //console.log("trackerDispatchDidComplete :: " + count);
        }
    };
}