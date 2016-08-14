//
//  ViewController.m
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

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (BOOL)application:(UIApplication*)application didFinishLaunchingWithOptions:(NSDictionary*)launchOptions
{
    UIScrollView *scrollView = [webView.subviews objectAtIndex:0];
    scrollView.bounces = NO;    return YES;
}
- (BOOL)prefersStatusBarHidden
{
    return YES;
}

- (void)viewDidLoad {
    [super viewDidLoad];
    
    
    //selon la résolution de l'écran
    //iphone 4
    if (SCREEN_WIDTH==320 && SCREEN_HEIGHT==480) {
        NSString *stringPath = [[	NSBundle mainBundle] pathForResource:@"Ressources/ficheside/index" ofType:@"html"];
        NSURL *url = [NSURL fileURLWithPath:stringPath];
        
        NSURLRequest *requestObj = [ NSURLRequest requestWithURL:url];
        [webView loadRequest:requestObj];
        UIScrollView *scrollView = [webView.subviews objectAtIndex:0];
        scrollView.bounces = NO;
    }
    //iphone 5
    else  if (SCREEN_WIDTH==320 && SCREEN_HEIGHT==568) {
        NSString *stringPath = [[	NSBundle mainBundle] pathForResource:@"Ressources/ficheside/index" ofType:@"html"];
        NSURL *url = [NSURL fileURLWithPath:stringPath];
        
        NSURLRequest *requestObj = [ NSURLRequest requestWithURL:url];
        [webView loadRequest:requestObj];
        UIScrollView *scrollView = [webView.subviews objectAtIndex:0];
        scrollView.bounces = NO;    }
    //iphone 6
    else if (SCREEN_WIDTH==375 && SCREEN_HEIGHT==667) {
        NSString *stringPath = [[	NSBundle mainBundle] pathForResource:@"Ressources/ficheside/index" ofType:@"html"];
        NSURL *url = [NSURL fileURLWithPath:stringPath];
        
        NSURLRequest *requestObj = [ NSURLRequest requestWithURL:url];
        UIScrollView *scrollView = [webView.subviews objectAtIndex:0];
        scrollView.bounces = NO;
        [webView loadRequest:requestObj];
     }
    //iphone 6 plus
    else if (SCREEN_WIDTH==414 && SCREEN_HEIGHT==736) {
        NSString *stringPath = [[	NSBundle mainBundle] pathForResource:@"Ressources/ficheside/index" ofType:@"html"];
        NSURL *url = [NSURL fileURLWithPath:stringPath];
        
        NSURLRequest *requestObj = [ NSURLRequest requestWithURL:url];
        [webView loadRequest:requestObj];
        UIScrollView *scrollView = [webView.subviews objectAtIndex:0];
        scrollView.bounces = NO;    }
    //ipad
    else if (SCREEN_WIDTH==768 && SCREEN_HEIGHT==1024) {
        NSString *stringPath = [[	NSBundle mainBundle] pathForResource:@"Ressources/ficheside/index" ofType:@"html"];
        NSURL *url = [NSURL fileURLWithPath:stringPath];
        
        NSURLRequest *requestObj = [ NSURLRequest requestWithURL:url];
        [webView loadRequest:requestObj];
        UIScrollView *scrollView = [webView.subviews objectAtIndex:0];
        scrollView.bounces = NO;

    }
    else {
        NSString *stringPath = [[	NSBundle mainBundle] pathForResource:@"Ressources/ficheside/index" ofType:@"html"];
        NSURL *url = [NSURL fileURLWithPath:stringPath];
        
        NSURLRequest *requestObj = [ NSURLRequest requestWithURL:url];
        [webView loadRequest:requestObj];
        UIScrollView *scrollView = [webView.subviews objectAtIndex:0];
        scrollView.bounces = NO;
        
    }

    
    
    
    }


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}




@synthesize webView;

@end
