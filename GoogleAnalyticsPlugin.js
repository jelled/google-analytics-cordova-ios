function startGA(){
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
            trackerDispatchDidComplete: function(count) {
                //console.log("trackerDispatchDidComplete :: " + count);
            }
        }
    }
}

<script type="text/javascript" src="cordova-2.2.0.js"></script>
<script type="text/javascript" src="js/GoogleAnalyticsPlugin.js"></script>
<script type="text/javascript">
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    startGA();
    window.GA.trackerWithTrackingId("UA-24808054-3");
    window.GA.trackView("/index");
}
</script>