//
//  AppDelegate.m
//  FichesIDE
//
//  Created by Romain BULOT on 10/08/2015.
//  Copyright (c) 2015 Romain BULOT. All rights reserved.
//
#define IS_IPAD (UI_USER_INTERFACE_IDIOM() == UIUserInterfaceIdiomPad)
#define IS_IPHONE (UI_USER_INTERFACE_IDIOM() == UIUserInterfaceIdiomPhone)
#define IS_RETINA ([[UIScreen mainScreen] scale] >= 2.0)

#define SCREEN_WIDTH ([[UIScreen mainScreen] bounds].size.width)
#define SCREEN_HEIGHT ([[UIScreen mainScreen] bounds].size.height)
#define SCREEN_MAX_LENGTH (MAX(SCREEN_WIDTH, SCREEN_HEIGHT))
#define SCREEN_MIN_LENGTH (MIN(SCREEN_WIDTH, SCREEN_HEIGHT))

#define IS_IPHONE_4_OR_LESS (IS_IPHONE && SCREEN_MAX_LENGTH < 568.0)
#define IS_IPHONE_5 (IS_IPHONE && SCREEN_MAX_LENGTH == 568.0)
#define IS_IPHONE_6 (IS_IPHONE && SCREEN_MAX_LENGTH == 667.0)
#define IS_IPHONE_6P (IS_IPHONE && SCREEN_MAX_LENGTH == 736.0)
#import "AppDelegate.h"

@interface AppDelegate ()

@end

@implementation AppDelegate


- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // Override point for customization after application launch.
    [self.window makeKeyAndVisible];
    
    splashView = [[UIImageView alloc] initWithFrame:CGRectMake(0,0, SCREEN_WIDTH, SCREEN_HEIGHT)];

    //selon la résolution de l'écran
    //iphone 4
    if (SCREEN_WIDTH==320 && SCREEN_HEIGHT==480) {
        splashView.image = [UIImage imageNamed:@"default_iphone4.png"];
    }
    //iphone 5
    else  if (SCREEN_WIDTH==320 && SCREEN_HEIGHT==568) {
        splashView.image = [UIImage imageNamed:@"default_iphone5.png"];
    }
    //iphone 6
    else if (SCREEN_WIDTH==375 && SCREEN_HEIGHT==667) {
        splashView.image = [UIImage imageNamed:@"default_iphone6.png"];
    }
    //iphone 6 plus
    else if (SCREEN_WIDTH==414 && SCREEN_HEIGHT==736) {
        splashView.image = [UIImage imageNamed:@"default_iphone6plus.png"];
    }
    //ipad
    else if (SCREEN_WIDTH==414 && SCREEN_HEIGHT==736) {
        splashView.image = [UIImage imageNamed:@"default_ipad.png"];
    }
    else {
         splashView.image = [UIImage imageNamed:@"default_ipad.png"];
    }


    [_window addSubview:splashView];
    [_window bringSubviewToFront:splashView];
    //Set your animation below
    [UIView beginAnimations:nil context:nil];
    [UIView setAnimationDelay:1.5];
    [UIView setAnimationDuration:1.5];
    [UIView setAnimationTransition:UIViewAnimationTransitionNone forView:_window cache:YES];
    [UIView setAnimationDelegate:self];
    [UIView setAnimationDidStopSelector:@selector (startupAnimationDone:finished:context:)];
    splashView.frame = CGRectMake(-60, -60, SCREEN_WIDTH+120, SCREEN_HEIGHT+120);
    splashView.alpha = 0.0;
    [UIView commitAnimations];
    

    
    return YES;
}

- (void)startupAnimationDone:(NSString *)animationID finished:(NSNumber *)finished context:(void *)context {
    [splashView removeFromSuperview];
    
}



- (void)applicationWillResignActive:(UIApplication *)application {
    // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
    // Use this method to pause ongoing tasks, disable timers, and throttle down OpenGL ES frame rates. Games should use this method to pause the game.
}

- (void)applicationDidEnterBackground:(UIApplication *)application {
    // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
    // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
}

- (void)applicationWillEnterForeground:(UIApplication *)application {
    // Called as part of the transition from the background to the inactive state; here you can undo many of the changes made on entering the background.
}

- (void)applicationDidBecomeActive:(UIApplication *)application {
    // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
}

- (void)applicationWillTerminate:(UIApplication *)application {
    // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
}



@end
