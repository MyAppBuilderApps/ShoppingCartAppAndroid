// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'starter.controllers'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

app.config(function($stateProvider, $urlRouterProvider) {
           
           // Ionic uses AngularUI Router which uses the concept of states
           // Learn more here: https://github.com/angular-ui/ui-router
           // Set up the various states which the app can be in.
           // Each state's controller can be found in controllers.js
           
           $stateProvider.state('blank', {
                                url: '/blank',
                                templateUrl: 'templates/blank.html',
                                controller: 'blankCtrl'
                                
                                });
           
           $stateProvider.state('main', {
                                url: '/main',
                                templateUrl: 'templates/main.html',
                                controller: 'MainCtrl'
                                
                                });
           
           $stateProvider.state('login', {
                                url: '/login',
                                templateUrl: 'templates/login.html',
                                controller: 'loginCtrl'
                                
                                });
           $stateProvider.state('register', {
                                url: '/register',
                                templateUrl: 'templates/register.html',
                                controller: 'registerCtrl'
                                
                                });
           
//           $stateProvider.state('menu', {
//                  url: "/app",
//                  abstract: true,
//                  templateUrl: "templates/menu.html",
//                  controller: 'AppCtrl'
//                  })
           
           
           
           $stateProvider.state('home', {
                  url: "/home",
                  templateUrl: "templates/home.html",
                  controller: 'HomeCtrl'
                  
                  })
           
           $stateProvider.state('content', {
                                url: "/content",
                                templateUrl: "templates/content.html",
                                controller: 'contentCtrl'
                                
                                })
           $stateProvider.state('cart', {
                                url: "/cart",
                                templateUrl: "templates/cart.html",
                                controller: 'cartCtrl'
                                
                                })
           $stateProvider.state('cart1', {
                                url: "/cart1",
                                templateUrl: "templates/cart1.html",
                                controller: 'cart1Ctrl'
                                
                                })
           
           $stateProvider.state('historylist', {
                                url: '/historylist',
                                templateUrl: 'templates/historylist.html',
                                controller: 'HistorylistCtrl'
                                
                                })
           
           $stateProvider.state('history', {
                                url: '/history',
                                templateUrl: 'templates/history.html',
                                controller: 'HistoryCtrl'
                                
                                })
           
           $stateProvider.state('admin', {
                                url: "/admin",
                                templateUrl: "templates/admin.html",
                                controller: 'AdminCtrl'
                                
                                })
           
           $stateProvider.state('addproduct', {
                                url: "/addproduct",
                                templateUrl: "templates/addproduct.html",
                                controller: 'AddproductCtrl'
                                
                                })
           $stateProvider.state('editproduct', {
                                url: "/editproduct",
                                templateUrl: "templates/editproduct.html",
                                controller: 'EditproductCtrl'
                                
                                })
           $stateProvider.state('orderlist', {
                                url: "/orderlist",
                                templateUrl: "templates/orderlist.html",
                                controller: 'OrderlistCtrl'
                                
                                })
           $stateProvider.state('order', {
                                url: "/order",
                                templateUrl: "templates/order.html",
                                controller: 'OrderCtrl'
                                
                                })
           $stateProvider.state('buttonAppWall',{
                                url: "/buttonAppWall",
                                templateUrl: "templates/buttonAppWall.html",
                                controller: "buttonAppWallCtrl"
                                })
           
           $urlRouterProvider.otherwise('/blank');
           
           });
