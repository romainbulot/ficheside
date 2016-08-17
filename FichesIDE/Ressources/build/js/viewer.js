
// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('schemas', function (page) {

/*=== Default standalone ===*/
var myPhotoBrowserStandalone = myApp.photoBrowser({
    photos : [
        'http://lorempixel.com/1024/1024/sports/1/',
        'http://lorempixel.com/1024/1024/sports/2/',
        'http://lorempixel.com/1024/1024/sports/3/',
    ]
});
//Open photo browser on click
$$('.pb-standalone').on('click', function () {
    myPhotoBrowserStandalone.open();
});
 
/*=== Popup ===*/
var myPhotoBrowserPopup = myApp.photoBrowser({
    photos : [
        'http://lorempixel.com/1024/1024/sports/1/',
        'http://lorempixel.com/1024/1024/sports/2/',
        'http://lorempixel.com/1024/1024/sports/3/',
    ],
    type: 'popup'
});
$$('.pb-popup').on('click', function () {
    myPhotoBrowserPopup.open();
});
 
/*=== As Page ===*/
var myPhotoBrowserPage = myApp.photoBrowser({
    photos : [
        'http://lorempixel.com/1024/1024/sports/1/',
        'http://lorempixel.com/1024/1024/sports/2/',
        'http://lorempixel.com/1024/1024/sports/3/',
    ],
    type: 'page',
    backLinkText: 'Back'
});
$$('.pb-page').on('click', function () {
    myPhotoBrowserPage.open();
});
 
/*=== Standalone Dark ===*/
var myPhotoBrowserDark1 = myApp.photoBrowser({
    photos : [
        '../build/img/schemas/cardio/1.jpg',
        '../build/img/schemas/cardio/1l.jpg',
    ],
    theme: 'dark'
});
$$('.pb-standalone-dark1').on('click', function () {
    myPhotoBrowserDark1.open();
});

var myPhotoBrowserDark2 = myApp.photoBrowser({
    photos : [
        '../build/img/schemas/cardio/2.jpg',
        '../build/img/schemas/cardio/2l.jpg',
    ],
    theme: 'dark'
});
$$('.pb-standalone-dark2').on('click', function () {
    myPhotoBrowserDark2.open();
});

var myPhotoBrowserDark3 = myApp.photoBrowser({
    photos : [
        '../build/img/schemas/cardio/3.jpg',
        '../build/img/schemas/cardio/3l.jpg',
    ],
    theme: 'dark'
});
$$('.pb-standalone-dark3').on('click', function () {
    myPhotoBrowserDark3.open();
});

var myPhotoBrowserDark4 = myApp.photoBrowser({
    photos : [
        '../build/img/schemas/cardio/4.jpg',
        '../build/img/schemas/cardio/4l.jpg',
    ],
    theme: 'dark'
});
$$('.pb-standalone-dark4').on('click', function () {
    myPhotoBrowserDark4.open();
});

var myPhotoBrowserDark5 = myApp.photoBrowser({
    photos : [
        '../build/img/schemas/cardio/5.jpg',
        '../build/img/schemas/cardio/5l.jpg',
    ],
    theme: 'dark'
});
$$('.pb-standalone-dark5').on('click', function () {
    myPhotoBrowserDark5.open();
});
var myPhotoBrowserDark6 = myApp.photoBrowser({
    photos : [
        '../build/img/schemas/cardio/6.jpg',
        '../build/img/schemas/cardio/6l.jpg',
    ],
    theme: 'dark'
});
$$('.pb-standalone-dark6').on('click', function () {
    myPhotoBrowserDark6.open();
});
var myPhotoBrowserDark7 = myApp.photoBrowser({
    photos : [
        '../build/img/schemas/cardio/7.jpg',
        '../build/img/schemas/cardio/7l.jpg',
    ],
    theme: 'dark'
});
$$('.pb-standalone-dark7').on('click', function () {
    myPhotoBrowserDark7.open();
});


var myPhotoBrowserDark8a = myApp.photoBrowser({
    photos : [
        '../build/img/schemas/cardio/8a.jpg',
        '../build/img/schemas/cardio/8al.jpg',
    ],
    theme: 'dark'
});
$$('.pb-standalone-dark8a').on('click', function () {
    myPhotoBrowserDark8a.open();
});
var myPhotoBrowserDark8b = myApp.photoBrowser({
    photos : [
        '../build/img/schemas/cardio/8b.jpg',
        '../build/img/schemas/cardio/8bl.jpg',
    ],
    theme: 'dark'
});
$$('.pb-standalone-dark8b').on('click', function () {
    myPhotoBrowserDark8b.open();
});



var myPhotoBrowserDark9 = myApp.photoBrowser({
    photos : [
        '../build/img/schemas/cardio/9.jpg',
        '../build/img/schemas/cardio/9l.jpg',
    ],
    theme: 'dark'
});
$$('.pb-standalone-dark9').on('click', function () {
    myPhotoBrowserDark9.open();
});
var myPhotoBrowserDark10 = myApp.photoBrowser({
    photos : [
        '../build/img/schemas/cardio/10.jpg',
        '../build/img/schemas/cardio/10l.jpg',
    ],
    theme: 'dark'
});
$$('.pb-standalone-dark10').on('click', function () {
    myPhotoBrowserDark10.open();
});

var myPhotoBrowserDark11 = myApp.photoBrowser({
    photos : [
        '../build/img/schemas/cardio/11.jpg',
        '../build/img/schemas/cardio/11l.jpg',
    ],
    theme: 'dark'
});
$$('.pb-standalone-dark11').on('click', function () {
    myPhotoBrowserDark11.open();
});


 
/*=== Popup Dark ===*/
var myPhotoBrowserPopupDark = myApp.photoBrowser({
    photos : [
        'http://lorempixel.com/1024/1024/sports/1/',
        'http://lorempixel.com/1024/1024/sports/2/',
        'http://lorempixel.com/1024/1024/sports/3/',
    ],
    theme: 'dark',
    type: 'popup'
});
$$('.pb-popup-dark').on('click', function () {
    myPhotoBrowserPopupDark.open();
}); 
 
/*=== With Captions ===*/
var myPhotoBrowserPopupDark = myApp.photoBrowser({
    photos : [
        {
            url: 'http://lorempixel.com/1024/1024/sports/1/',
            caption: 'Caption 1 Text'
        },
        {
            url: 'http://lorempixel.com/1024/1024/sports/2/',
            caption: 'Second Caption Text'
        },
        // This one without caption
        {
            url: 'http://lorempixel.com/1024/1024/sports/3/',
        },
    ],
    theme: 'dark',
    type: 'standalone'
});
$$('.pb-standalone-captions').on('click', function () {
    myPhotoBrowserPopupDark.open();
});
 
/*=== With Video ===*/
var myPhotoBrowserPopupDark = myApp.photoBrowser({
    photos : [
        {
            html: '<iframe src="//www.youtube.com/embed/lmc21V-zBq0?list=PLpj0FBQgLGEr3mtZ5BTwtmSwF1dkPrPRM" frameborder="0" allowfullscreen></iframe>',
            caption: 'Woodkid - Run Boy Run (Official HD Video)'
        },
        {
            url: 'http://lorempixel.com/1024/1024/sports/2/',
            caption: 'Second Caption Text'
        },
        {
            url: 'http://lorempixel.com/1024/1024/sports/3/',
        },
    ],
    theme: 'dark',
    type: 'standalone'
});
$$('.pb-standalone-video').on('click', function () {
    myPhotoBrowserPopupDark.open();
});

});

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('schemasMembresSup', function (page) {

/*=== Default standalone ===*/
var myPhotoBrowserStandalone = myApp.photoBrowser({
    photos : [
        'http://lorempixel.com/1024/1024/sports/1/',
        'http://lorempixel.com/1024/1024/sports/2/',
        'http://lorempixel.com/1024/1024/sports/3/',
    ]
});
//Open photo browser on click
$$('.pb-standalone').on('click', function () {
    myPhotoBrowserStandalone.open();
});
 
/*=== Popup ===*/
var myPhotoBrowserPopup = myApp.photoBrowser({
    photos : [
        'http://lorempixel.com/1024/1024/sports/1/',
        'http://lorempixel.com/1024/1024/sports/2/',
        'http://lorempixel.com/1024/1024/sports/3/',
    ],
    type: 'popup'
});
$$('.pb-popup').on('click', function () {
    myPhotoBrowserPopup.open();
});
 
/*=== As Page ===*/
var myPhotoBrowserPage = myApp.photoBrowser({
    photos : [
        'http://lorempixel.com/1024/1024/sports/1/',
        'http://lorempixel.com/1024/1024/sports/2/',
        'http://lorempixel.com/1024/1024/sports/3/',
    ],
    type: 'page',
    backLinkText: 'Back'
});
$$('.pb-page').on('click', function () {
    myPhotoBrowserPage.open();
});
 
/*=== Standalone Dark ===*/
var myPhotoBrowserDark1 = myApp.photoBrowser({
    photos : [
        '../build/img/schemas/membresup/1.jpg',
        '../build/img/schemas/membresup/1l.jpg',
    ],
    theme: 'dark'
});
$$('.pb-standalone-dark1').on('click', function () {
    myPhotoBrowserDark1.open();
});

var myPhotoBrowserDark2 = myApp.photoBrowser({
    photos : [
        '../build/img/schemas/membresup/2.jpg',
        '../build/img/schemas/membresup/2l.jpg',
    ],
    theme: 'dark'
});
$$('.pb-standalone-dark2').on('click', function () {
    myPhotoBrowserDark2.open();
});

var myPhotoBrowserDark3 = myApp.photoBrowser({
    photos : [
        '../build/img/schemas/membresup/3.jpg',
        '../build/img/schemas/membresup/3l.jpg',
    ],
    theme: 'dark'
});
$$('.pb-standalone-dark3').on('click', function () {
    myPhotoBrowserDark3.open();
});

var myPhotoBrowserDark4 = myApp.photoBrowser({
    photos : [
        '../build/img/schemas/membresup/4.jpg',
        '../build/img/schemas/membresup/4l.jpg',
    ],
    theme: 'dark'
});
$$('.pb-standalone-dark4').on('click', function () {
    myPhotoBrowserDark4.open();
});

var myPhotoBrowserDark5 = myApp.photoBrowser({
    photos : [
        '../build/img/schemas/membresup/5.jpg',
        '../build/img/schemas/membresup/5l.jpg',
    ],
    theme: 'dark'
});
$$('.pb-standalone-dark5').on('click', function () {
    myPhotoBrowserDark5.open();
});
var myPhotoBrowserDark6 = myApp.photoBrowser({
    photos : [
        '../build/img/schemas/membresup/6.jpg',
        '../build/img/schemas/membresup/6l.jpg',
    ],
    theme: 'dark'
});
$$('.pb-standalone-dark6').on('click', function () {
    myPhotoBrowserDark6.open();
});
var myPhotoBrowserDark7 = myApp.photoBrowser({
    photos : [
        '../build/img/schemas/membresup/7.jpg',
        '../build/img/schemas/membresup/7l.jpg',
    ],
    theme: 'dark'
});
$$('.pb-standalone-dark7').on('click', function () {
    myPhotoBrowserDark7.open();
});


var myPhotoBrowserDark8a = myApp.photoBrowser({
    photos : [
        '../build/img/schemas/membresup/8a.jpg',
        '../build/img/schemas/membresup/8al.jpg',
    ],
    theme: 'dark'
});
$$('.pb-standalone-dark8a').on('click', function () {
    myPhotoBrowserDark8a.open();
});
var myPhotoBrowserDark8b = myApp.photoBrowser({
    photos : [
        '../build/img/schemas/membresup/8b.jpg',
        '../build/img/schemas/membresup/8bl.jpg',
    ],
    theme: 'dark'
});
$$('.pb-standalone-dark8b').on('click', function () {
    myPhotoBrowserDark8b.open();
});

var myPhotoBrowserDark8c = myApp.photoBrowser({
    photos : [
        '../build/img/schemas/membresup/8c.jpg',
        '../build/img/schemas/membresup/8cl.jpg',
    ],
    theme: 'dark'
});
$$('.pb-standalone-dark8c').on('click', function () {
    myPhotoBrowserDark8c.open();
});




var myPhotoBrowserDark9 = myApp.photoBrowser({
    photos : [
        '../build/img/schemas/membresup/9.jpg',
        '../build/img/schemas/membresup/9l.jpg',
    ],
    theme: 'dark'
});
$$('.pb-standalone-dark9').on('click', function () {
    myPhotoBrowserDark9.open();
});
var myPhotoBrowserDark10 = myApp.photoBrowser({
    photos : [
        '../build/img/schemas/membresup/10.jpg',
        '../build/img/schemas/membresup/10l.jpg',
    ],
    theme: 'dark'
});
$$('.pb-standalone-dark10').on('click', function () {
    myPhotoBrowserDark10.open();
});

var myPhotoBrowserDark11 = myApp.photoBrowser({
    photos : [
        '../build/img/schemas/membresup/11.jpg',
        '../build/img/schemas/membresup/11l.jpg',
    ],
    theme: 'dark'
});
$$('.pb-standalone-dark11').on('click', function () {
    myPhotoBrowserDark11.open();
});

var myPhotoBrowserDark12 = myApp.photoBrowser({
    photos : [
        '../build/img/schemas/membresup/12.jpg',
        '../build/img/schemas/membresup/12l.jpg',
    ],
    theme: 'dark'
});
$$('.pb-standalone-dark12').on('click', function () {
    myPhotoBrowserDark12.open();
});
var myPhotoBrowserDark13 = myApp.photoBrowser({
    photos : [
        '../build/img/schemas/membresup/13.jpg',
        '../build/img/schemas/membresup/13l.jpg',
    ],
    theme: 'dark'
});
$$('.pb-standalone-dark13').on('click', function () {
    myPhotoBrowserDark13.open();
});
var myPhotoBrowserDark14 = myApp.photoBrowser({
    photos : [
        '../build/img/schemas/membresup/14.jpg',
        '../build/img/schemas/membresup/14l.jpg',
    ],
    theme: 'dark'
});
$$('.pb-standalone-dark14').on('click', function () {
    myPhotoBrowserDark14.open();
});
var myPhotoBrowserDark15 = myApp.photoBrowser({
    photos : [
        '../build/img/schemas/membresup/15.jpg',
        '../build/img/schemas/membresup/15l.jpg',
    ],
    theme: 'dark'
});
$$('.pb-standalone-dark15').on('click', function () {
    myPhotoBrowserDark15.open();
});

 
/*=== Popup Dark ===*/
var myPhotoBrowserPopupDark = myApp.photoBrowser({
    photos : [
        'http://lorempixel.com/1024/1024/sports/1/',
        'http://lorempixel.com/1024/1024/sports/2/',
        'http://lorempixel.com/1024/1024/sports/3/',
    ],
    theme: 'dark',
    type: 'popup'
});
$$('.pb-popup-dark').on('click', function () {
    myPhotoBrowserPopupDark.open();
}); 
 
/*=== With Captions ===*/
var myPhotoBrowserPopupDark = myApp.photoBrowser({
    photos : [
        {
            url: 'http://lorempixel.com/1024/1024/sports/1/',
            caption: 'Caption 1 Text'
        },
        {
            url: 'http://lorempixel.com/1024/1024/sports/2/',
            caption: 'Second Caption Text'
        },
        // This one without caption
        {
            url: 'http://lorempixel.com/1024/1024/sports/3/',
        },
    ],
    theme: 'dark',
    type: 'standalone'
});
$$('.pb-standalone-captions').on('click', function () {
    myPhotoBrowserPopupDark.open();
});
 
/*=== With Video ===*/
var myPhotoBrowserPopupDark = myApp.photoBrowser({
    photos : [
        {
            html: '<iframe src="//www.youtube.com/embed/lmc21V-zBq0?list=PLpj0FBQgLGEr3mtZ5BTwtmSwF1dkPrPRM" frameborder="0" allowfullscreen></iframe>',
            caption: 'Woodkid - Run Boy Run (Official HD Video)'
        },
        {
            url: 'http://lorempixel.com/1024/1024/sports/2/',
            caption: 'Second Caption Text'
        },
        {
            url: 'http://lorempixel.com/1024/1024/sports/3/',
        },
    ],
    theme: 'dark',
    type: 'standalone'
});
$$('.pb-standalone-video').on('click', function () {
    myPhotoBrowserPopupDark.open();
});

});
