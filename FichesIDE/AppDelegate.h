//
//  AppDelegate.h
//  FichesIDE
//
//  Created by Romain BULOT on 10/08/2015.
//  Copyright (c) 2015 Romain BULOT. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface AppDelegate : UIResponder <UIApplicationDelegate>{
    UIImageView *splashView;
    
}

@property (strong, nonatomic) UIWindow *window;

- (void)startupAnimationDone:(NSString *)animationID finished:(NSNumber *)finished context:(void *)context;

@end

