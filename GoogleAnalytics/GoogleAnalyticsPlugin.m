#import "GoogleAnalyticsPlugin.h"
// Dispatch period in seconds
static const NSInteger kGANDispatchPeriodSec = 2;
@implementation GoogleAnalyticsPlugin

- (void) trackerWithTrackingId:(CDVInvokedUrlCommand*)command 
{    
    NSString* accountId = [command.arguments objectAtIndex:0];
    NSLog(@"with account id %@",accountId);
    [GAI sharedInstance].debug = YES;
    [GAI sharedInstance].dispatchInterval = kGANDispatchPeriodSec;
    [GAI sharedInstance].trackUncaughtExceptions = YES;
    [[GAI sharedInstance] trackerWithTrackingId:accountId];
}
- (void) trackEventWithCategory:(CDVInvokedUrlCommand*)command
{
    NSString* category = [command.arguments objectAtIndex:0];
    NSString* action = [command.arguments objectAtIndex:1];
    NSString* label = [command.arguments objectAtIndex:2];
    NSNumber* value = [command.arguments objectAtIndex:3];
    if (![[GAI sharedInstance].defaultTracker trackEventWithCategory:category
                                                          withAction:action
                                                           withLabel:label
                                                           withValue:value]) {
        // Handle error here
        NSLog(@"GoogleAnalyticsPlugin.trackEvent Error::");
        
    }
    NSLog(@"GoogleAnalyticsPlugin.trackEvent::%@, %@, %@, %@",category,action,label,value);
}

- (void) trackView:(CDVInvokedUrlCommand*)command
{
    
    NSString* pageUri = [command.arguments objectAtIndex:0];
    NSLog(@"with trackView %@",pageUri);
    if (![[GAI sharedInstance].defaultTracker trackView:pageUri]) {
       NSLog(@"ERROR LOADING PAGEURI");
    }
}

- (void) hitDispatched:(CDVInvokedUrlCommand*)command
{
    NSString* callback = [NSString stringWithFormat:@"window.plugins.googleAnalyticsPlugin.hitDispatched(%@);",  hitString];
    [ self.webView stringByEvaluatingJavaScriptFromString:callback];
}
@end