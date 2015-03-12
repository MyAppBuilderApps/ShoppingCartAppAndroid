var control = angular.module('starter.controllers', ['ngTagsInput']);
/*For changing 0rder history app change this order key*/
var orderkey = '3de8ab45442e58e9bb00534620db7c4d';
var appkey;
var cartitemsarr = [];
var listarr = [];
var orderarr = [];
var productarr = [];
var quantityarr = [];
var taxarr = [];
var pricearr = [];
var elementarr = [];
var orderelementarr = [];
var cartarr = [];
var itms=[];
var userid;
var username;
var useremail;
var userid1;
var username1;
var useremail1;
var categoryid;
var elementid;
var itemid;
var qty;
var device;
var title;
var editData;
var order_bid;
var order_eid;
var pendingarr = [];
var deliveredarr = [];
var returnedarr = [];
var historyarr=[];
var historyelementarr = [];
var amenities = [];
var imagearr;
var scval = 'UPS';
var scarr = [];
var admin;
function exitout(button) {
                    if (button == 1) {
                        navigator.app.exitApp();
                    }else{
                    
                    }
                    
                }
control.run(function($ionicPlatform, $ionicPopup, $state, $ionicLoading, $http, $window) {

    $ionicPlatform.registerBackButtonAction(function () {
  navigator.notification.confirm(
                    'Are you sure you want to Exit?',
                    exitout,
                    'Please Confirm',
                    ["OK","CANCEL"]
            ); 
  
}, 100);
	
        $ionicPlatform.ready(function() {
            if(window.Connection) {
                if(navigator.connection.type == Connection.NONE) {
                    $ionicPopup.confirm({
                        title: "Internet Disconnected",
                        content: "The internet is disconnected on your device."
                    })
                    .then(function(result) 
                    {
                        if(result) 
                        {
                            ionic.Platform.exitApp();
                        }

                    });
                }
                else
                {
//                             $ionicLoading.show({
//                                                template: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
//                                                animation: 'fade-in',
//                                                showBackdrop: true,
//                                                maxWidth: 200,
//                                                showDelay: 0
//                                                });
                             

                             $http({method: "GET", url:"key.txt", cache: false, params:{}})
                             .success(function(data, status){
                                      
                                      
                                      appkey = $.trim(data);
                                      
                                      $http({method: "GET", url:"http://build.myappbuilder.com/api/buttons.json", cache: false, params:{"api_key":appkey}})
                                      .success(function(data, status){
                                               
                                               listarr = data;
                                               pendingarr = [];
                                               deliveredarr = [];
                                               returnedarr = [];
                                               $http({method: "GET", url:"http://build.myappbuilder.com/api/buttons.json", cache: false, params:{"api_key":orderkey}})
                                               .success(function(data, status){
                                                        
                                                       
                                                        orderarr = data;
                                                        for(var i=0;i<orderarr.length;i++){
                                                        if(orderarr[i].elements[0]){
                                                        if(orderarr[i].elements[0].additional_field=="Pending"){
                                                        pendingarr.push(orderarr[i]);
                                                        }
                                                        else if(orderarr[i].elements[0].additional_field=="Delivered"){
                                                        deliveredarr.push(orderarr[i]);
                                                        }
                                                        else{
                                                        returnedarr.push(orderarr[i]);
                                                        }
                                                        }
                                                        }
                                                        if($window.innerWidth<=420){
                                                        
                                                        device = 'iphone';
                                                        
                                                        }
                                                        else{
                                                        device = 'ipad';
                                                        }
                                                        
//                                                         $state.go('main');

$http({method: "GET", url:"http://build.myappbuilder.com/api/book_custom_fields.json", cache: false, params:{"api_key":appkey}})
                                                        .success(function(data, status){
                                                                 
                                                                 for(var i=0;i<data.length;i++){
                                                                 if(data[i].key=='Shipping Type'){
                                                                 scval = data[i].value;
                                                                 }
                                                                 }
                                                                 if(JSON.parse(localStorage.getItem("savedData"))){
                                                                 cartarr = JSON.parse(localStorage.getItem("savedData"));
                                                                 
                                                                 for(var i=0; i<cartarr.length; i++){
                                                                 //                   if(cartarr[i].user_id==userid){
                                                                 for(var j=0; j<listarr.length; j++){
                                                                 for(var k=0; k<listarr[j].elements.length; k++){
                                                                 if(cartarr[i].title == listarr[j].elements[k].id){
                                                                 cartitemsarr.push(listarr[j].elements[k]);
                                                                 }
                                                                 
                                                                 }
                                                                 
                                                                 }
                                                                 //                   }
                                                                 }
                                                                 categoryid = listarr[0].id;
                                                                 title = listarr[0].title;
                                                                 $http({method: "GET", url:"http://build.myappbuilder.com/api/buttons.json", cache: false, params:{"api_key":appkey,"id":categoryid}})
                                                                 .success(function(data, status){
                                                                          elementarr = data.elements;
                                                                          $state.go('home');
                                                                          
                                                                          })
                                                                 .error(function(data, status) {
                                                                        alert(JSON.stringify(data));
                                                                        $ionicLoading.hide();
                                                                        });
                                                                 }
                                                                 else{

                                                                 categoryid = listarr[0].id;
                                                                 title = listarr[0].title;
                                                                 $http({method: "GET", url:"http://build.myappbuilder.com/api/buttons.json", cache: false, params:{"api_key":appkey,"id":categoryid}})
                                                                 .success(function(data, status){
                                                                          elementarr = data.elements;
                                                                          $state.go('home');
                                                                          
                                                                          })
                                                                 .error(function(data, status) {
                                                                        alert(JSON.stringify(data));
                                                                        $ionicLoading.hide();
                                                                        });
                                                                 }
                                                                 })
                                                        .error(function(data, status) {
                                                               alert(JSON.stringify(data));
                                                               $ionicLoading.hide();
                                                               });
                                                        
                                                        })
                                               .error(function(data, status) {
                                                      alert(JSON.stringify(data));
                                                      $ionicLoading.hide();
                                                      });
                                               
                                               
                                               
                                               })
                                      .error(function(data, status) {
                                             alert(JSON.stringify(data));
                                             $ionicLoading.hide();
                                             });
                                      
                                     
                                      
                                      })
                             .error(function(data, status) {
                                    alert(JSON.stringify(data));
                                    $ionicLoading.hide();
                                    });
            		
                }
            }
    });
});

control.filter("reverse", function(){
        return function(items){
        return items.slice().reverse(); // Create a copy of the array and reverse the order of the items
        };
        });

control.directive('onValidSubmit', ['$parse', '$timeout', function($parse, $timeout) {
                             return {
                             require: '^form',
                             restrict: 'A',
                             link: function(scope, element, attrs, form) {
                             form.$submitted = false;
                             var fn = $parse(attrs.onValidSubmit);
                             element.on('submit', function(event) {
                                        scope.$apply(function() {
                                                     element.addClass('ng-submitted');
                                                     form.$submitted = true;
                                                     if (form.$valid) {
                                                     if (typeof fn === 'function') {
                                                     fn(scope, {$event: event});
                                                     }
                                                     }
                                                     });
                                        });
                             }
                             }
                             
                             }])
control.directive('validated', ['$parse', function($parse) {
                         return {
                         restrict: 'AEC',
                         require: '^form',
                         link: function(scope, element, attrs, form) {
                         var inputs = element.find("*");
                         for(var i = 0; i < inputs.length; i++) {
                         (function(input){
                          var attributes = input.attributes;
                          if (attributes.getNamedItem('ng-model') != void 0 && attributes.getNamedItem('name') != void 0) {
                          var field = form[attributes.name.value];
                          if (field != void 0) {
                          scope.$watch(function() {
                                       return form.$submitted + "_" + field.$valid;
                                       }, function() {
                                       if (form.$submitted != true) return;
                                       var inp = angular.element(input);
                                       if (inp.hasClass('ng-invalid')) {
                                       element.removeClass('has-success');
                                       element.addClass('has-error');
                                       } else {
                                       element.removeClass('has-error').addClass('has-success');
                                       }
                                       });
                          }
                          }
                          })(inputs[i]);
                         }
                         }
                         }
                         }])
;

control.controller('blankCtrl',function($scope,$state,$ionicLoading,$http){
//$state.go('home');
	});
var type;
control.controller('MainCtrl',function($scope,$state,$ionicLoading,$http){
                   $scope.device = device;
                   cartarr = [];
                   cartitemsarr = [];
                   $scope.shopkeper = function(){
                   type = 'shopkeper';
                   $state.go('login');
                   };
                   $scope.customer = function(){
                   type = 'customer';
//                   $state.go('login');
                   $scope.listViewClickFtn(listarr[0].id,listarr[0].title);
                   };
                   $http({method: "GET", url:"http://build.myappbuilder.com/api/book_custom_fields.json", cache: false, params:{"api_key":appkey}})
                   .success(function(data, status){
                            
                            for(var i=0;i<data.length;i++){
                            if(data[i].key=='Shipping Type'){
                            scval = data[i].value;
                            }
                            }
                   if(JSON.parse(localStorage.getItem("savedData"))){
                   cartarr = JSON.parse(localStorage.getItem("savedData"));
                   
                   for(var i=0; i<cartarr.length; i++){
                   //                   if(cartarr[i].user_id==userid){
                   for(var j=0; j<listarr.length; j++){
                   for(var k=0; k<listarr[j].elements.length; k++){
                   if(cartarr[i].title == listarr[j].elements[k].id){
                   cartitemsarr.push(listarr[j].elements[k]);
                   }
                   
                   }
                   
                   }
                   //                   }
                   }
                   $scope.cartlen = cartitemsarr.length;
                   }
                   })
                   .error(function(data, status) {
                          alert(JSON.stringify(data));
                          $ionicLoading.hide();
                          });
                   $scope.listViewClickFtn = function(val1,val2){
                   categoryid = val1;
                   title = val2;
                   elementarr = [];
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
                                      animation: 'fade-in',
                                      showBackdrop: true,
                                      maxWidth: 200,
                                      showDelay: 0
                                      });
                   $http({method: "GET", url:"http://build.myappbuilder.com/api/buttons.json", cache: false, params:{"api_key":appkey,"id":categoryid}})
                   .success(function(data, status){
                            
                            $ionicLoading.hide();
                            
                            elementarr = data.elements;
                            $scope.items = elementarr;
                            $state.go('home');
                            
                            })
                   .error(function(data, status) {
                          alert(JSON.stringify(data));
                          $ionicLoading.hide();
                          });
                   };
                   
                   });

control.controller('loginCtrl',function($scope,$state,$ionicLoading,$http,$window){
                   
                   $scope.device = device;
                   $scope.type = type;
                   $scope.loginback = function(){
                   $state.go('main');
                   };
                   
                   $scope.registerPageCallFtn = function(){
                   $state.go('register');
                   };
                   if($scope.type=='shopkeper'){
                   $scope.userId = "sai";
                   $scope.password = "password"
                   }
                   else{
                   $scope.userId = "cust123";
                   $scope.password = "password"
                   }
                   
                   $scope.loginFtn = function(val1,val2){
                   username = val1;
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
                                      animation: 'fade-in',
                                      showBackdrop: true,
                                      maxWidth: 200,
                                      showDelay: 0
                                      });

                   
                   $http({method: "POST", url:"http://build.myappbuilder.com/api/login.json", cache: false, params:{"api_key":appkey,"login":val1,"password":val2}})
                   .success(function(data, status){
                            userid1 = data.id;
                            useremail1 = data.email;
                            if(data.incentive_programs){
                            $ionicLoading.hide();
//                            listarr = data;
                            userid = userid1;
                            useremail = userid1;
                            $http({method: "GET", url:"http://build.myappbuilder.com/api/book_custom_fields.json", cache: false, params:{"api_key":appkey}})
                            .success(function(data, status){
                                     
                                     for(var i=0;i<data.length;i++){
                                     if(data[i].key=='Shipping Type'){
                                     scval = data[i].value;
                                     }
                                     }
                                     if(JSON.parse(localStorage.getItem("savedData"))){
                                     itms = JSON.parse(localStorage.getItem("savedData"));
                                     $http({method: "GET", url:"http://build.myappbuilder.com/api/subscriber_custom_fields.json", cache: false, params:{"api_key":appkey}})
                                     .success(function(data, status){
                                              cartitemsarr = [];
                                              cartarr = data;
                                              $ionicLoading.hide();
                                              for(var i=0; i<cartarr.length; i++){
                                              if(cartarr[i].user_id==userid){
                                              for(var j=0; j<listarr.length; j++){
                                              for(var k=0; k<listarr[j].elements.length; k++){
                                              if(cartarr[i].title == listarr[j].elements[k].id){
                                              cartitemsarr.push(listarr[j].elements[k]);
                                              }
                                              
                                              }
                                              
                                              }
                                              }
                                              }
                                              
                                              var sss;
                                     for(var l=0; l<itms.length; l++){
                                     
                                     var val = itms[l].title;
                                     var cust = itms[l].value;
                                     var val1 = cust.split("#");
                                     val1 = val1[0].split(":")[1];
                                              sss = itms[l].value;
                                   
                                     
                                     $http({method: "POST", url:"http://build.myappbuilder.com/api/subscriber_custom_fields.json", cache: false, params:{"api_key":appkey,"subscriber_id":userid,"title":val,"value":cust}})
                                     .success(function(data, status){
                                              
                                              
                                              
                                              })
                                     .error(function(data, status) {
                                           var sda = sss.split("#");
                                            if(data.detail=="Title has already been taken"){
                                            var id;
                                            var val0 = [];
                                            
                                            
                                            for(var i=0; i<cartarr.length; i++){
                                            if(cartarr[i].user_id==userid){
                                            
                                            
                                            if(cartarr[i].title == val){
                                            
                                            id = cartarr[i].id;
                                            val0 = cartarr[i].value;
                                            val0 = val0.split("#");
                                            }
                                            
                                            
                                            }
                                            }
                                            
                                            var itemqty = val0[0].split(":")[1];
                                            itemqty = parseInt(itemqty)+parseInt(val1);
                                            
                                            var cust = "Quantity:"+itemqty;
                                            
                                            
//                                            if(contentntarr.custom_values!=null){
                                            for(var i=1; i<sda.length; i++){
                                            
                                            cust = cust+"#"+sda[i];
                                            
                                            }
                                            
//                                            }
                                            
//                                            if($scope.scval == 'BS'){
//                                            cust = cust+"#Shipping:"+val2;
//                                            }
                                            
                                            $http({method: "PUT", url:"http://build.myappbuilder.com/api/subscriber_custom_fields.json", cache: false, params:{"api_key":appkey,"id":id,"new_title":val,"new_value":cust}})
                                            .success(function(data, status){
                                                     
                                                    
                                                     
                                                     
                                                     })
                                            .error(function(data, status) {
                                                   alert(JSON.stringify(data));
                                                   $ionicLoading.hide();
                                                   });
                                            
                                            }
                                            });
                                     }
                                     
                                     $http({method: "GET", url:"http://build.myappbuilder.com/api/subscriber_custom_fields.json", cache: false, params:{"api_key":appkey}})
                                     .success(function(data, status){
                                              cartitemsarr = [];
                                              cartarr = data;
                                              $ionicLoading.hide();
                                              for(var i=0; i<cartarr.length; i++){
                                              if(cartarr[i].user_id==userid){
                                              for(var j=0; j<listarr.length; j++){
                                              for(var k=0; k<listarr[j].elements.length; k++){
                                              if(cartarr[i].title == listarr[j].elements[k].id){
                                              cartitemsarr.push(listarr[j].elements[k]);
                                              }
                                              
                                              }
                                              
                                              }
                                              }
                                              }
                                              //                                  $state.go('home');
                                              categoryid = listarr[0].id;
                                              localStorage.clear();
                                              $scope.listViewClickFtn(categoryid,listarr[0].title);
                                              
                                              })
                                     .error(function(data, status) {
                                            alert(JSON.stringify(data));
                                            $ionicLoading.hide();
                                            });
                                              
                                              })
                                     .error(function(data, status) {
                                            alert(JSON.stringify(data));
                                            $ionicLoading.hide();
                                            });
                                     
                                     }
                                     else{
                                     $http({method: "GET", url:"http://build.myappbuilder.com/api/subscriber_custom_fields.json", cache: false, params:{"api_key":appkey}})
                                     .success(function(data, status){
                                              cartitemsarr = [];
                                              cartarr = data;
                                              $ionicLoading.hide();
                                              for(var i=0; i<cartarr.length; i++){
                                              if(cartarr[i].user_id==userid){
                                              for(var j=0; j<listarr.length; j++){
                                              for(var k=0; k<listarr[j].elements.length; k++){
                                              if(cartarr[i].title == listarr[j].elements[k].id){
                                              cartitemsarr.push(listarr[j].elements[k]);
                                              }
                                              
                                              }
                                              
                                              }
                                              }
                                              }
                                              //                                  $state.go('home');
                                              categoryid = listarr[0].id;
                                              $scope.listViewClickFtn(categoryid,listarr[0].title);
                                              
                                              })
                                     .error(function(data, status) {
                                            alert(JSON.stringify(data));
                                            $ionicLoading.hide();
                                            });
                                     }
                                     
                                     })
                            .error(function(data, status) {
                                   alert(JSON.stringify(data));
                                   $ionicLoading.hide();
                                   });
                            
                            
                            
                            }
                            else{
                            
                            var has = '';
                            $http({method: "GET", url:"http://build.myappbuilder.com/api/apps.json", cache: false, params:{"api_key":data.api_key}})
                            .success(function(data, status){
                                     for(var i=0; i<data.length; i++){
                                     if(data[i].api_key == appkey){
                                     has = data[i].api_key;
                                     }
                                     }
                                     if(has==appkey){
                                     $http({method: "GET", url:"http://build.myappbuilder.com/api/book_custom_fields.json", cache: false, params:{"api_key":appkey}})
                                     .success(function(data, status){
                                              
                                              for(var i=0;i<data.length;i++){
                                              if(data[i].key=='Shipping Type'){
//                                              $scope.scid = data[i].id;
                                              scval = data[i].value;
                                              }
                                              }
                                              $ionicLoading.hide();
                                              categoryid = listarr[0].id;
                                              $scope.listViewClickFtn1(categoryid,listarr[0].title);
                                              })
                                     .error(function(data, status) {
                                            alert(JSON.stringify(data));
                                            $ionicLoading.hide();
                                            });
                                     
                                     
                                     }
                                     else{
                                     $ionicLoading.hide();
                                     alert('You are not authorised for this app');
                                     }
                                     })
                            
                            .error(function(data, status) {
                                   alert(JSON.stringify(data));
                                   $ionicLoading.hide();
                                   });
                            }
                            })
                   .error(function(data, status) {
                          alert(JSON.stringify(data));
                          $ionicLoading.hide();
                          });
                   
//                   categoryid = listarr[0].id;
//                   $state.go('home');
                   };
                   
                   
                   
                   $scope.listViewClickFtn = function(val1,val2){
                   categoryid = val1;
                   title = val2;
                   elementarr = [];
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
                                      animation: 'fade-in',
                                      showBackdrop: true,
                                      maxWidth: 200,
                                      showDelay: 0
                                      });
                   $http({method: "GET", url:"http://build.myappbuilder.com/api/buttons.json", cache: false, params:{"api_key":appkey,"id":categoryid}})
                   .success(function(data, status){
                            
                            $ionicLoading.hide();
                           
                            elementarr = data.elements;
                            $scope.items = elementarr;
                            $state.go('home');
                            
                            })
                   .error(function(data, status) {
                          alert(JSON.stringify(data));
                          $ionicLoading.hide();
                          });
                   };
                   
                   $scope.listViewClickFtn1 = function(val1,val2){
                   categoryid = val1;
                   title = val2;
                   elementarr = [];
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
                                      animation: 'fade-in',
                                      showBackdrop: true,
                                      maxWidth: 200,
                                      showDelay: 0
                                      });
                   $http({method: "GET", url:"http://build.myappbuilder.com/api/buttons.json", cache: false, params:{"api_key":appkey,"id":categoryid}})
                   .success(function(data, status){
                            
                            $ionicLoading.hide();
                            
                            elementarr = data.elements;
                            $scope.items = elementarr;
                            $state.go('admin');
                            
                            })
                   .error(function(data, status) {
                          alert(JSON.stringify(data));
                          $ionicLoading.hide();
                          });
                   };
                   
                   });

control.controller('registerCtrl',function($scope,$state,$ionicLoading,$http){
                   
                   $scope.registerBack = function(){
                   $state.go('login');
                   };
                   
                   $scope.registerPageSubmitFtn = function(val1,val2,val3,val4){
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
                                      animation: 'fade-in',
                                      showBackdrop: true,
                                      maxWidth: 200,
                                      showDelay: 0
                                      });
                   if(val3==val4){
                   
                   $http({method: "POST", url:"http://build.myappbuilder.com/api/subscribers.json", cache: false, params:{"api_key":appkey,"subscriber[username]":val1,"subscriber[email]":val2,"subscriber[password]":val3,"subscriber[password_confirmation]":val4}})
                   .success(function(data, status){
                            
                            $ionicLoading.hide();
//                            listarr = data;
                            
                            userid = data.id;
                            useremail = data.email;

                            $state.go('home');
                            
                            })
                   .error(function(data, status) {
                          alert(JSON.stringify(data));
                          $ionicLoading.hide();
                          });
                   
                   }
                   else{
                   navigator.notification.alert("Password and Confirm password not matched!");
                   }
               
//                   elementarr = listarr[0].elements;
//                   $state.go('home');
                   };
                   });


control.controller('HomeCtrl', function($scope, $ionicLoading, $state, $http, $ionicSideMenuDelegate, $ionicPopup,$window) {
                   $scope.device = device;
                   
                   if(userid){
                   $scope.log = 't';
                   }
                   else{
                   $scope.log = 'f';
                   }
                   
                   $scope.category = listarr;
                   $scope.categoryid = categoryid;
                   $scope.title = title;
                   $scope.cartlen = cartitemsarr.length;
                   $scope.items = elementarr;
                   
                   
                   //                 elementarr = listarr[0].elements;
                   //                 $scope.items = elementarr;
                   //                   if(cartarr.length == 0){
                   //                   scope.cartlen = 0;
                   //                   }
                   
                   $scope.addcart = function(val,val1,val2){
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
                                      animation: 'fade-in',
                                      showBackdrop: true,
                                      maxWidth: 200,
                                      showDelay: 0
                                      });
                   
                   $http({method: "POST", url:"http://build.myappbuilder.com/api/subscriber_custom_fields.json", cache: false, params:{"api_key":appkey,"subscriber_id":userid,"title":val,"value":val1+"#"+val2}})
                   .success(function(data, status){
                            $http({method: "GET", url:"http://build.myappbuilder.com/api/subscriber_custom_fields.json", cache: false, params:{"api_key":appkey}})
                            .success(function(data, status){
                                     cartitemsarr = [];
                                     cartarr = data;
                                     $ionicLoading.hide();
                                     for(var i=0; i<cartarr.length; i++){
                                     if(cartarr[i].user_id==userid){
                                     for(var j=0; j<listarr.length; j++){
                                     for(var k=0; k<listarr[j].elements.length; k++){
                                     if(cartarr[i].title == listarr[j].elements[k].id){
                                     cartitemsarr.push(listarr[j].elements[k]);
                                     }
                                     
                                     }
                                     
                                     }
                                     }
                                     }
                                     $scope.cartlen = cartitemsarr.length;
                                     
                                     })
                            .error(function(data, status) {
                                   alert(JSON.stringify(data));
                                   $ionicLoading.hide();
                                   });
                            
                            
                            })
                   .error(function(data, status) {
                          
                          $ionicLoading.hide();
                          if(data.detail=="Title has already been taken"){
                          var id;
                          var val0 = [];
                          $ionicLoading.show({
                                             content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
                                             animation: 'fade-in',
                                             showBackdrop: true,
                                             maxWidth: 200,
                                             showDelay: 0
                                             });
                          
                          for(var i=0; i<cartarr.length; i++){
                          if(cartarr[i].user_id==userid){
                          
                          
                          if(cartarr[i].title == val){
                          
                          id = cartarr[i].id;
                          val0 = cartarr[i].value;
                          val0 = val0.split("#");
                          }
                          
                          
                          }
                          }
                          
                          var itemqty = parseInt(val0[0])+parseInt(val1);
                          
                          $http({method: "PUT", url:"http://build.myappbuilder.com/api/subscriber_custom_fields.json", cache: false, params:{"api_key":appkey,"id":id,"new_title":val,"new_value":itemqty+"#"+val2}})
                          .success(function(data, status){
                                   
                                   $http({method: "GET", url:"http://build.myappbuilder.com/api/subscriber_custom_fields.json", cache: false, params:{"api_key":appkey}})
                                   .success(function(data, status){
                                            cartitemsarr = [];
                                            //                                     alert(JSON.stringify(data));
                                            
                                            cartarr = data;
                                            $ionicLoading.hide();
                                            for(var i=0; i<cartarr.length; i++){
                                            if(cartarr[i].user_id==userid){
                                            for(var j=0; j<listarr.length; j++){
                                            for(var k=0; k<listarr[j].elements.length; k++){
                                            if(cartarr[i].title == listarr[j].elements[k].id){
                                            cartitemsarr.push(listarr[j].elements[k]);
                                            }
                                            
                                            }
                                            
                                            }
                                            }
                                            }
                                            $scope.cartitems = cartitemsarr;
                                            $scope.cartlen = cartitemsarr.length;
                                            $state.reload();
                                            $scope.detailModal.hide();
                                            
                                            })
                                   .error(function(data, status) {
                                          alert(JSON.stringify(data));
                                          $ionicLoading.hide();
                                          });
                                   
                                   
                                   })
                          .error(function(data, status) {
                                 alert(JSON.stringify(data));
                                 $ionicLoading.hide();
                                 });
                          
                          }
                          });
                   
                   };
                   
                   $scope.addcartClickFtn = function(val) {
                   $scope.data = {}
                   $scope.data.size = "Medium";
                   $scope.data.qty = 1;
                   // An elaborate, custom popup
                   var myPopup = $ionicPopup.show({
                                                  template: '<select ng-model="data.size" style="width:100%;">                                                 <option>Small</option>                                                  <option>Medium</option>                                                  <option>Large</option>                                                  </select></br></br><select ng-model="data.qty" style="width:100%;">                                                 <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21</option><option>22</option><option>23</option><option>24</option><option>25</option><option>26</option><option>27</option><option>28</option><option>29</option><option>30</option><option>31</option><option>32</option><option>33</option><option>34</option><option>35</option><option>36</option><option>37</option><option>38</option><option>39</option><option>40</option><option>41</option><option>42</option><option>43</option><option>44</option><option>45</option><option>46</option><option>47</option><option>48</option><option>49</option><option>50</option><option>51</option><option>52</option><option>53</option><option>54</option><option>55</option><option>56</option><option>57</option><option>58</option><option>59</option><option>60</option><option>61</option><option>62</option><option>63</option><option>64</option><option>65</option><option>66</option><option>67</option><option>68</option><option>69</option><option>70</option><option>71</option><option>72</option><option>73</option><option>74</option><option>75</option><option>76</option><option>77</option><option>78</option><option>79</option><option>80</option><option>81</option><option>82</option><option>83</option><option>84</option><option>85</option><option>86</option><option>87</option><option>88</option><option>89</option><option>90</option><option>91</option><option>92</option><option>93</option><option>94</option><option>95</option><option>96</option><option>97</option><option>98</option><option>99</option><option>100</option>                                                   </select>',
                                                  title: 'Choose Details',
                                                  //                                                  subTitle: 'Please use normal things',
                                                  scope: $scope,
                                                  buttons: [
                                                            { text: 'Cancel' },
                                                            {
                                                            text: '<b>Save</b>',
                                                            type: 'button-positive',
                                                            onTap: function(e) {
                                                            
                                                            $scope.addcart(val,$scope.data.qty,$scope.data.size);
                                                            }
                                                            },
                                                            ]
                                                  });
                   myPopup.then(function(res) {
                                console.log('Tapped!', res);
                                });
                   
                   };
                   
                   $scope.gocart = function(){
                   productarr = [];
                   quantityarr = [];
                   pricearr = [];
                   taxarr = [];
                   if(userid){
                    $state.go('cart');
                   }
                   else{
                    $state.go('cart1');
                   }
                  
                   };
                   
                   $scope.gocart0 = function(){
                   $ionicPopup.alert({
                                     title: 'My Cart - Empty',
                                     content: 'Please add an item to the cart!'
                                     }).then(function(res) {
                                             console.log('Test Alert Box');
                                             });
                   };
                   
                   $scope.listViewClickFtn = function(val1,val2){
                   categoryid = val1;
                   title = val2;
                   elementarr = [];
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
                                      animation: 'fade-in',
                                      showBackdrop: true,
                                      maxWidth: 200,
                                      showDelay: 0
                                      });
                   $http({method: "GET", url:"http://build.myappbuilder.com/api/buttons.json", cache: false, params:{"api_key":appkey,"id":categoryid}})
                   .success(function(data, status){
                            
                            $ionicLoading.hide();
                            $ionicSideMenuDelegate.toggleLeft();
                            elementarr = data.elements;
                            $scope.items = elementarr;
                            $scope.categoryid = categoryid;
                            //                            alert($scope.items);
                            $scope.title = title;
                            $state.go('home');
                            
                            })
                   .error(function(data, status) {
                          alert(JSON.stringify(data));
                          $ionicLoading.hide();
                          });
                   };
                   $ionicSideMenuDelegate.toggleLeft();
                   //                   $scope.listViewClickFtn(categoryid);
                   
                   $scope.itemClickFtn = function(val1,val2){
                   elementid = val1;
                   
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
                                      animation: 'fade-in',
                                      showBackdrop: true,
                                      maxWidth: 200,
                                      showDelay: 0
                                      });
                   $http({method: "GET", url:"http://build.myappbuilder.com/api/elements.json", cache: false, params:{"api_key":appkey,"id":elementid}})
                   .success(function(data, status){
                            
                            $ionicLoading.hide();
                            
                            contentntarr = data;
                            $scope.content = contentntarr;
                            //alert($scope.items);
                            $state.go('content');
                            
                            })
                   .error(function(data, status) {
                          alert(JSON.stringify(data));
                          $ionicLoading.hide();
                          });
                   };
                   $scope.convert = function(val){
                   var price = parseInt(val);
                   return price;
                   };
                   
                   $scope.logout = function(val){
                   userid = undefined;
                   userid1 = undefined;
                   cartitemsarr = [];
                   cartarr = [];
                   itms=[];
                   $state.go('main');
                   };
                   $scope.login = function(val){
                   
                   $state.go('main');
                   };
                   
                   $scope.historygo = function(){
                   $state.go('historylist');
                   };
                
                   });


control.controller('HistorylistCtrl', function($scope, $ionicLoading, $state, $http, $ionicSideMenuDelegate, $ionicPopup,$window) {
                   $scope.device = device;
                   
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
                                      animation: 'fade-in',
                                      showBackdrop: true,
                                      maxWidth: 200,
                                      showDelay: 0
                                      });
                   
                   $http({method: "GET", url:"http://build.myappbuilder.com/api/buttons.json", cache: false, params:{"api_key":orderkey}})
                   .success(function(data, status){
                            historyarr=[];
                            $ionicLoading.hide();
                            orderarr = data;
                            for(var j=0; j<orderarr.length; j++){
                            for(var i=0; i<cartarr.length; i++){
                            if(cartarr[i].user_id==userid){
                            if(cartarr[i].title == orderarr[j].id){
                            historyarr.push(orderarr[j]);
                            }
                            }
                            }
                            }
                            $scope.history = historyarr;
                            })
                   .error(function(data, status) {
                          alert(JSON.stringify(data));
                          $ionicLoading.hide();
                          });
                   
                   $scope.ordersClickFtn = function(val1){
                   order_bid = val1;
                   historyelementarr = [];
                   
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
                                      animation: 'fade-in',
                                      showBackdrop: true,
                                      maxWidth: 200,
                                      showDelay: 0
                                      });
                   $http({method: "GET", url:"http://build.myappbuilder.com/api/buttons.json", cache: false, params:{"api_key":orderkey,"id":order_bid}})
                   .success(function(data, status){
                            
                            $ionicLoading.hide();
                            //                            $ionicSideMenuDelegate.toggleRight();
                            historyelementarr = data.elements;
                            //                            $scope.orderitems = orderelementarr;
                            
                            $state.go('history');
                            
                            })
                   .error(function(data, status) {
                          alert(JSON.stringify(data));
                          $ionicLoading.hide();
                          });
                   };
                   
                   $scope.contentback = function(){
                   $state.go('home');
                   };
                   
                   
                   
                   });

control.controller('HistoryCtrl', function($scope, $ionicLoading, $state, $http, $ionicSideMenuDelegate,$window,$sce) {
                   $scope.device = device;
                   $scope.historyarr = historyelementarr;
                   $scope.historyelement = $sce.trustAsHtml(historyelementarr[0].text);
                   $scope.historyback = function(){
                   $state.go('historylist');
                   };
                   $scope.appwall = function(){
                   admin=0;
                   $state.go('buttonAppWall');
                   };
                   });

control.controller('contentCtrl', function($scope, $ionicLoading, $state, $http, $ionicSideMenuDelegate,$window, $ionicPopup) {
                   //                   $scope.items = listarr[0].elements;
                   
                   $scope.device = device;
                   $scope.models = {};
                   $scope.add = {};
                   $scope.scval = scval;
                   $scope.content = contentntarr;
                  $scope.scval = scval;
                   $scope.category = listarr;
                   $scope.categoryid = categoryid;
                   $scope.title = title;
                   console.log($scope.content);
                   $scope.cartlen = cartitemsarr.length;
                   $scope.items = elementarr;
                   $scope.add.scheme = contentntarr.tag_list[0];
                   $scope.qty1 = 1;
                   
                   $scope.gocart = function(){
                   productarr = [];
                   quantityarr = [];
                   pricearr = [];
                   taxarr = [];
                   if(userid){
                   $state.go('cart');
                   }
                   else{
                   $state.go('cart1');
                   }
                   };
                   $scope.gocart0 = function(){
                   $ionicPopup.alert({
                                     title: 'My Cart - Empty',
                                     content: 'Please add an item to the cart!'
                                     }).then(function(res) {
                                             console.log('Test Alert Box');
                                             });
                   };
                   $scope.contentback = function(){
                   $state.go('home');
                   };
                   
                   $scope.convert = function(val){
                   var price = parseInt(val);
                   return price;
                   };
                   if(contentntarr.custom_values!=null){
                   for(var i=0; i<contentntarr.custom_values.length; i++){
                   var res = (contentntarr.custom_values[i].value).split(",");
                   $scope.models[i]= res[0];
                   }
                   }
                   
                   $scope.addcart = function(val,val1,val2){
                   
//                   alert($scope.models[0]);
                   val1 = parseInt(val1);
                   if(userid){
                   
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
                                      animation: 'fade-in',
                                      showBackdrop: true,
                                      maxWidth: 200,
                                      showDelay: 0
                                      });
                   var cust = "Quantity:"+val1;
                   if(contentntarr.custom_values!=null){
                   for(var i=0; i<contentntarr.custom_values.length; i++){
                   
                   cust = cust+"#"+contentntarr.custom_values[i].title+":"+$scope.models[i];
                   
                   }
                   }
                   if($scope.scval == 'BS'){
                   cust = cust+"#Shipping:"+val2;
                   }
                   
                   
                   $http({method: "POST", url:"http://build.myappbuilder.com/api/subscriber_custom_fields.json", cache: false, params:{"api_key":appkey,"subscriber_id":userid,"title":val,"value":cust}})
                   .success(function(data, status){
                            $http({method: "GET", url:"http://build.myappbuilder.com/api/subscriber_custom_fields.json", cache: false, params:{"api_key":appkey}})
                            .success(function(data, status){
                                     cartitemsarr = [];
                                     cartarr = data;
                                     $ionicLoading.hide();
                                     for(var i=0; i<cartarr.length; i++){
                                     if(cartarr[i].user_id==userid){
                                     for(var j=0; j<listarr.length; j++){
                                     for(var k=0; k<listarr[j].elements.length; k++){
                                     if(cartarr[i].title == listarr[j].elements[k].id){
                                     cartitemsarr.push(listarr[j].elements[k]);
                                     }
                                     
                                     }
                                     
                                     }
                                     }
                                     }
                                     $scope.cartlen = cartitemsarr.length;
                                     var alertPopup = $ionicPopup.alert({
                                                                        title: $scope.title,
                                                                        template: 'Item succesfully added to the cart!'
                                                                        });
                                     alertPopup.then(function(res) {
                                                     $state.go('home');
                                                     });
                                     
                                     })
                            .error(function(data, status) {
                                   alert(JSON.stringify(data));
                                   $ionicLoading.hide();
                                   });
                            
                            
                            })
                   .error(function(data, status) {
                          
                          $ionicLoading.hide();
                          if(data.detail=="Title has already been taken"){
                          var id;
                          var val0 = [];
                          $ionicLoading.show({
                                             content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
                                             animation: 'fade-in',
                                             showBackdrop: true,
                                             maxWidth: 200,
                                             showDelay: 0
                                             });
                          
                          for(var i=0; i<cartarr.length; i++){
                          if(cartarr[i].user_id==userid){
                          
                          
                          if(cartarr[i].title == val){
                          
                          id = cartarr[i].id;
                          val0 = cartarr[i].value;
                          val0 = val0.split("#");
                          }
                          
                          
                          }
                          }
                          
                          var itemqty = val0[0].split(":")[1];
                          itemqty = parseInt(itemqty)+parseInt(val1);
                          var cust = "Quantity:"+itemqty;
                          if(contentntarr.custom_values!=null){
                          for(var i=0; i<contentntarr.custom_values.length; i++){
                          
                          cust = cust+"#"+contentntarr.custom_values[i].title+":"+$scope.models[i];
                          
                          }
                          }
                          
                          if($scope.scval == 'BS'){
                          cust = cust+"#Shipping:"+val2;
                          }
                          
                          $http({method: "PUT", url:"http://build.myappbuilder.com/api/subscriber_custom_fields.json", cache: false, params:{"api_key":appkey,"id":id,"new_title":val,"new_value":cust}})
                          .success(function(data, status){
                                   
                                   $http({method: "GET", url:"http://build.myappbuilder.com/api/subscriber_custom_fields.json", cache: false, params:{"api_key":appkey}})
                                   .success(function(data, status){
                                            cartitemsarr = [];
                                            //                                     alert(JSON.stringify(data));
                                            
                                            cartarr = data;
                                            $ionicLoading.hide();
                                            for(var i=0; i<cartarr.length; i++){
                                            if(cartarr[i].user_id==userid){
                                            for(var j=0; j<listarr.length; j++){
                                            for(var k=0; k<listarr[j].elements.length; k++){
                                            if(cartarr[i].title == listarr[j].elements[k].id){
                                            cartitemsarr.push(listarr[j].elements[k]);
                                            }
                                            
                                            }
                                            
                                            }
                                            }
                                            }
                                            $scope.cartitems = cartitemsarr;
                                            $scope.cartlen = cartitemsarr.length;
//                                            $state.reload();
//                                            $scope.detailModal.hide();
                                            var alertPopup = $ionicPopup.alert({
                                                                               title: $scope.title,
                                                                               template: 'Item succesfully added to the cart!'
                                                                               });
                                            alertPopup.then(function(res) {
                                                            $state.go('home');
                                                            });
                                            
                                            })
                                   .error(function(data, status) {
                                          alert(JSON.stringify(data));
                                          $ionicLoading.hide();
                                          });
                                   
                                   
                                   })
                          .error(function(data, status) {
                                 alert(JSON.stringify(data));
                                 $ionicLoading.hide();
                                 });
                          
                          }
                          });
                   }
                   else{
                   
//                   $ionicLoading.show({
//                                      content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
//                                      animation: 'fade-in',
//                                      showBackdrop: true,
//                                      maxWidth: 200,
//                                      showDelay: 0
//                                      });
                   var cust = "Quantity:"+val1;
                   if(contentntarr.custom_values!=null){
                   for(var i=0; i<contentntarr.custom_values.length; i++){
                   
                   cust = cust+"#"+contentntarr.custom_values[i].title+":"+$scope.models[i];
                   
                   }
                   }
                   if($scope.scval == 'BS'){
                   cust = cust+"#Shipping:"+val2;
                   }
                   
                   if(JSON.parse(localStorage.getItem("savedData"))){
                   itms = JSON.parse(localStorage.getItem("savedData"));
                   var atc=null;
                   var id;
                   var val0 = [];
                   for(var l=0; l<itms.length; l++){
                   if(itms[l].title==val){
                   atc=l;
                   
                   val0 = itms[l].value;
                   val0 = val0.split("#");
                   
                   
                   }
//                   else{
//                   console.log(cust);
//                   itms.push({"title":val,"value":cust});
//                   }
                   }
                   
                   if(atc==null){
                   itms.push({"title":val,"value":cust});
                   }
                   else{
                   var itemqty = val0[0].split(":")[1];
                   itemqty = parseInt(itemqty)+parseInt(val1);
                   var cust = "Quantity:"+itemqty;
                   if(contentntarr.custom_values!=null){
                   for(var i=0; i<contentntarr.custom_values.length; i++){
                   
                   cust = cust+"#"+contentntarr.custom_values[i].title+":"+$scope.models[i];
                   
                   }
                   }
                   
                   if($scope.scval == 'BS'){
                   cust = cust+"#Shipping:"+val2;
                   }
                   itms.splice(atc, 1);
                   itms.push({"title":val,"value":cust});
                   }
                   
                   }
                   else{
                   console.log(cust);
                   itms.push({"title":val,"value":cust});
                   }
                   
                    localStorage.setItem("savedData", JSON.stringify(itms));
                   
                   
                   
                   
                   cartitemsarr = [];
                   cartarr = JSON.parse(localStorage.getItem("savedData"));
//                   alert(JSON.parse(localStorage.getItem("savedData")));
//                   $ionicLoading.hide();
                   for(var i=0; i<cartarr.length; i++){
//                   if(cartarr[i].user_id==userid){
                   for(var j=0; j<listarr.length; j++){
                   for(var k=0; k<listarr[j].elements.length; k++){
                   if(cartarr[i].title == listarr[j].elements[k].id){
                   cartitemsarr.push(listarr[j].elements[k]);
                   }
                   
                   }
                   
                   }
//                   }
                   }
                   $scope.cartlen = cartitemsarr.length;
                   var alertPopup = $ionicPopup.alert({
                                                      title: $scope.title,
                                                      template: 'Item succesfully added to the cart!'
                                                      });
                   alertPopup.then(function(res) {
                                   $state.go('home');
                                   });
                   }
                   
                   };
                   
                   
                   });

control.controller('cart1Ctrl',function($scope,$state,$ionicLoading,$ionicModal,$http, $ionicPopup, $sce){
                   
                   $scope.cartitems = cartitemsarr;
                   $scope.add = {};
                   $scope.cartlen = cartitemsarr.length;
                   $scope.login = function(){
                   $state.go('login');
                   }
                   $scope.custval = function(val){
                   
                   for(var i=0; i<cartarr.length; i++){
//                   if(cartarr[i].user_id==userid){
                   
                   
                   if(cartarr[i].title == val){
                   
                   qty = cartarr[i].value;
                   qty = qty.split("#");
                   }
                   
                   
//                   }
                   }
                   
                   return qty;
                   
                   };
                   
                   $scope.quantity = function(val){
                   
                   for(var i=0; i<cartarr.length; i++){
//                   if(cartarr[i].user_id==userid){
                   
                   
                   if(cartarr[i].title == val){
                   
                   qty = cartarr[i].value;
                   qty = qty.split("#");
                   }
                   
                   
//                   }
                   }
                   
                   return ["Quantity",qty[0]];
                   
                   };
                   
                   $scope.size = function(val){
                   
                   for(var i=0; i<cartarr.length; i++){
//                   if(cartarr[i].user_id==userid){
                   
                   
                   if(cartarr[i].title == val){
                   
                   qty = cartarr[i].value;
                   qty = qty.split("#");
                   }
                   
                   
//                   }
                   }
                   
                   return qty[1];
                   
                   };
                   
                   $scope.convertunit1 = function(val,val1){
                   var extra = 0;
                   for(var i=0; i<cartarr.length; i++){
//                   if(cartarr[i].user_id==userid){
                   
                   
                   if(cartarr[i].title == val1){
                   
                   qty = cartarr[i].value;
                   qty = qty.split("#");
                   
                   }
                   
                   
//                   }
                   }
                   
                   for(var j=0; j<qty.length; j++){
                   if(qty[j].match("^Size")){
                   
                   extra =qty[j].split(':')[1];
                   
                   }
                   
                   }
                   if(extra!=0){
                   if(extra.indexOf('$')!=-1){
                   extra = extra.split('$')[1]
                   }
                   else{
                   extra = 0;
                   }
                   }
                   else{
                   extra = 0;
                   }
                   
                   var unitprice = parseInt(val)+parseInt(extra);
                   
                   return unitprice;
                   };
                   
                   $scope.convert1 = function(val,val1){
                   var extra = 0;
                   for(var i=0; i<cartarr.length; i++){
//                   if(cartarr[i].user_id==userid){
                   
                   
                   if(cartarr[i].title == val1){
                   
                   qty = cartarr[i].value;
                   qty = qty.split("#");
                   
                   }
                   
                   
//                   }
                   }
                   
                   for(var j=0; j<qty.length; j++){
                   if(qty[j].match("^Size")){
                   
                   extra =qty[j].split(':')[1];
                   
                   }
                   
                   }
                   
                   if(extra!=0){
                   if(extra.indexOf('$')!=-1){
                   extra = extra.split('$')[1]
                   }
                   else{
                   extra = 0;
                   }
                   }
                   else{
                   extra = 0;
                   }
                   
                   var unitprice = parseInt(val)+parseInt(extra);
                   
                   for(var i=0; i<cartarr.length; i++){
//                   if(cartarr[i].user_id==userid){
                   
                   
                   if(cartarr[i].title == val1){
                   
                   qty = cartarr[i].value;
                   qty = qty.split("#");
                   }
                   
                   
//                   }
                   }
                   var price = parseInt(unitprice)*qty[0].split(":")[1];
                   
                   return price;
                   };
                   
                   var total;
                   $scope.totalprice = function(){
                   pricearr = [];
                   
                   for(var i=0; i<cartitemsarr.length; i++){
                   pricearr.push($scope.convert1(cartitemsarr[i].price,cartitemsarr[i].id));
                   }
                   if(pricearr.length == 0){
                   total = 0;
                   }
                   else{
                   
                   for(var i=0; i<pricearr.length; i++){
                   
                   if(i==0){
                   total = pricearr[i];
                   }
                   else{
                   total = total+pricearr[i];
                   }
                   }
                   
                   }
                   return total;
                   };
                   
                   $scope.remove = function(val){
                   $ionicPopup.confirm({
                                       title: 'Remove Product',
                                       template: 'Do you want to remove this product from cart?'
                                       }).then(function(res) {
                                               if(res) {
                                               
                                               
                                               $ionicLoading.show({
                                                                  content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
                                                                  animation: 'fade-in',
                                                                  showBackdrop: true,
                                                                  maxWidth: 200,
                                                                  showDelay: 0
                                                                  });
                                               
                                               for(var l=0; l<cartarr.length; l++){
                                               
                                               
                                               if(cartarr[l].title == val){
                                               cartarr.splice(l,1);
                                               localStorage.setItem("savedData", JSON.stringify(cartarr));
                                               
                                               
                                               cartitemsarr = [];
                                               itms=JSON.parse(localStorage.getItem("savedData"));;
                                               cartarr = JSON.parse(localStorage.getItem("savedData"));
                                               
                                               for(var i=0; i<cartarr.length; i++){
                                               if(cartarr[i].user_id==userid){
                                               for(var j=0; j<listarr.length; j++){
                                               for(var k=0; k<listarr[j].elements.length; k++){
                                               if(cartarr[i].title == listarr[j].elements[k].id){
                                               cartitemsarr.push(listarr[j].elements[k]);
                                               }
                                               
                                               }
                                               
                                               }
                                               }
                                               }
                                               $scope.cartitems = cartitemsarr;
                                               $scope.cartlen = cartitemsarr.length;
                                               $ionicLoading.hide();
                                               if($scope.cartlen==0){
                                               localStorage.clear();
                                               itms=[];
                                               cartarr=[];
                                               $state.go('home');
                                               }
                                               else{
                                               $state.reload();
                                               }
                                               }
                                               
                                               }
                                               
                                               } else {
                                               console.log('You are not sure');
                                               }
                                               });
                   
                   
                   
                   };
                   
                   
                   $scope.cartback = function(){
                   $state.go('home');
                   };
                   

                   });

control.controller('cartCtrl',function($scope,$state,$ionicLoading,$ionicModal,$http, $ionicPopup, $sce){
                   
                   $ionicModal.fromTemplateUrl('templates/detail.html',{
                                               scope: $scope,
                                               animation: 'slide-in-up'
                                               }).then(function(modal) {
                                                       $scope.detailModal = modal;
                                                       });
                   $ionicModal.fromTemplateUrl('templates/address.html',{
                                               scope: $scope,
                                               animation: 'slide-in-up'
                                               }).then(function(modal) {
                                                       $scope.addressModal = modal;
                                                       });
                   
                   $scope.detailclose = function() {
                   $ionicModal.fromTemplateUrl('templates/detail.html',{
                                               scope: $scope,
                                               animation: 'slide-in-up'
                                               }).then(function(modal) {
                                                       $scope.detailModal = modal;
                                                       });
                   $scope.detailModal.hide();
                   }
                   
                   $scope.add = {};
                   
                  $scope.cartlen = cartitemsarr.length;
                   $scope.Checked = true;
                   $scope.title = title;
                   $scope.states = ["AR", "GA", "IN", "IA", "KS", "KY", "MI", "MN", "NE", "NV", "NJ", "NC", "ND", "OH", "OK", "RI", "SD", "TN", "UT", "VT", "WA", "WV", "WI", "WY", "CT", "DC", "MD", "MA", "GU", "PR", "VI", "AL", "AK", "AZ", "CA", "CO", "FL", "HI", "ID", "IL", "LA", "ME", "MS", "MO", "NM", "NY", "PA", "SC", "TX", "VA", "DE", "MT", "NH", "OR", "AS", "MP"];
                   $scope.eliminateDuplicates = function(arr) {
                   var i,
                   len=arr.length,
                   out=[],
                   obj={};
                   
                   for (i=0;i<len;i++) {
                   obj[arr[i]]=0;
                   }
                   for (i in obj) {
                   out.push(i);
                   }
                   return out;
                   }
                   
                   $scope.citylist = function(val) {
                   citiesarr = [];
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
                                      animation: 'fade-in',
                                      showBackdrop: true,
                                      maxWidth: 200,
                                      showDelay: 0
                                      });
                   $http.get('http://api.sba.gov/geodata/city_county_links_for_state_of/'+val+'.json', {}, {
                              transformRequest:angular.identity,
                              headers:{'Content-Type':JSON}
                              })
                   .success(function(response,status,headers,config){
                           
//                            alert(response[result].length);
                            
                            for(var i=0; i<response.length; i++){
                            
//                            console.log(response.City);
                            citiesarr.push(response[i].name);
                            
                            }
//                            $scope.cities = $scope.eliminateDuplicates(citiesarr);
                            $scope.cities = citiesarr;
                            $ionicLoading.hide();
//                            alert($scope.cities);
                            $state.reload();
                            
                            })
                   .error(function(error,status,headers,config){
                          $ionicLoading.hide();
                          alert('error');
                          });
                   }
//                   alert($scope.cartlen);
                 
//                   for(var i=0; i<cartarr.length; i++){
//                   
//                   for(var j=0; j<listarr.length; j++){
//                   for(var k=0; k<listarr[j].elements.length; k++){
//                   if(cartarr[i] == listarr[j].elements[k].id){
//                   cartitemsarr.push(listarr[j].elements[k]);
//                   }
//                   
//                   }
//                   
//                   }
//                   }
                   
                   $http({method: "GET", url:"http://build.myappbuilder.com/api/subscriber_custom_fields.json", cache: false, params:{"api_key":appkey}})
                   .success(function(data, status){
                            cartitemsarr = [];
                            cartarr = data;
                            $ionicLoading.hide();
                            for(var i=0; i<cartarr.length; i++){
                            if(cartarr[i].user_id==userid){
                            for(var j=0; j<listarr.length; j++){
                            for(var k=0; k<listarr[j].elements.length; k++){
                            if(cartarr[i].title == listarr[j].elements[k].id){
                            cartitemsarr.push(listarr[j].elements[k]);
                            }
                            
                            }
                            
                            }
                            }
                            }
                            
                            
                            })
                   .error(function(data, status) {
                          alert(JSON.stringify(data));
                          $ionicLoading.hide();
                          });
                   
                   $scope.cartitems = cartitemsarr;
                   
                   console.log(JSON.stringify(cartitemsarr));
                   
                   if(cartitemsarr!=''){
                   for(var l=0; l<cartitemsarr.length; l++){
                   
                   if(l==0){
                   $scope.totalprice = parseInt(cartitemsarr[l].price);
                   }
                   else{
                   $scope.totalprice = parseInt($scope.totalprice)+parseInt(cartitemsarr[l].price);
                   }
                   
                   }
                   }
                   else{
                   $scope.totalprice = 0;
                   }
                   
                   
                   
                   
                   $scope.remove = function(val){
                   $ionicPopup.confirm({
                                       title: 'Remove Product',
                                       template: 'Do you want to remove this product from cart?'
                                       }).then(function(res) {
                                     if(res) {
                                     
                                               
                                               $ionicLoading.show({
                                                                  content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
                                                                  animation: 'fade-in',
                                                                  showBackdrop: true,
                                                                  maxWidth: 200,
                                                                  showDelay: 0
                                                                  });
                                               
                                               $scope.cartlen = cartitemsarr.length;
                                               
                                               
                                               $http({method: "GET", url:"http://build.myappbuilder.com/api/subscriber_custom_fields.json", cache: false, params:{"api_key":appkey}})
                                               .success(function(data, status){
                                                        cartarr = data;
                                                        //                            $ionicLoading.hide();
                                                        for(var i=0; i<cartarr.length; i++){
                                                        if(cartarr[i].user_id==userid){
                                                        
                                                        
                                                        if(cartarr[i].title == val){
                                                        itemid = cartarr[i].id;
                                                        }
                                                        
                                                        
                                                        }
                                                        }
                                                        
                                                        $http({method: "DELETE", url:"http://build.myappbuilder.com/api/subscriber_custom_fields.json", cache: false, params:{"api_key":appkey,"id":itemid}})
                                                        .success(function(data, status){
                                                                 cartitemsarr = [];
                                                                 $http({method: "GET", url:"http://build.myappbuilder.com/api/subscriber_custom_fields.json", cache: false, params:{"api_key":appkey}})
                                                                 .success(function(data, status){
                                                                          cartarr = data;
                                                                          $ionicLoading.hide();
                                                                          for(var i=0; i<cartarr.length; i++){
                                                                          if(cartarr[i].user_id==userid){
                                                                          for(var j=0; j<listarr.length; j++){
                                                                          for(var k=0; k<listarr[j].elements.length; k++){
                                                                          if(cartarr[i].title == listarr[j].elements[k].id){
                                                                          cartitemsarr.push(listarr[j].elements[k]);
                                                                          }
                                                                          
                                                                          }
                                                                          
                                                                          }
                                                                          }
                                                                          }
                                                                          $scope.cartitems = cartitemsarr;
                                                                          $scope.cartlen = cartitemsarr.length;
                                                                          if($scope.cartlen==0){
                                                                          $state.go('home');
                                                                          }
                                                                          else{
                                                                          $state.reload();
                                                                          }
                                                                          })
                                                                 .error(function(data, status) {
                                                                        alert(JSON.stringify(data));
                                                                        $ionicLoading.hide();
                                                                        });
                                                                 
                                                                 })
                                                        .error(function(data, status) {
                                                               alert(JSON.stringify(data));
                                                               $ionicLoading.hide();
                                                               });
                                                        
                                                        })
                                               .error(function(data, status) {
                                                      alert(JSON.stringify(data));
                                                      $ionicLoading.hide();
                                                      });
                                               
                                     } else {
                                     console.log('You are not sure');
                                     }
                                     });
                   
                   
                   
                   };
                   
                   $scope.custval = function(val){
                   
                   for(var i=0; i<cartarr.length; i++){
                   if(cartarr[i].user_id==userid){
                   
                   
                   if(cartarr[i].title == val){
                   
                   qty = cartarr[i].value;
                   qty = qty.split("#");
                   }
                   
                   
                   }
                   }
                   
                   return qty;
                   
                   };
                   
                   $scope.quantity = function(val){
                  
                            for(var i=0; i<cartarr.length; i++){
                            if(cartarr[i].user_id==userid){
                            
                            
                            if(cartarr[i].title == val){
                            
                            qty = cartarr[i].value;
                            qty = qty.split("#");
                            }
                            
                            
                            }
                            }
                   
                   return ["Quantity",qty[0]];
                   
                   };
                   
                   $scope.size = function(val){
                   
                   for(var i=0; i<cartarr.length; i++){
                   if(cartarr[i].user_id==userid){
                   
                   
                   if(cartarr[i].title == val){
                   
                   qty = cartarr[i].value;
                   qty = qty.split("#");
                   }
                   
                   
                   }
                   }
                   
                   return qty[1];
                   
                   };
                   
                   $scope.convertunit1 = function(val,val1){
                   var extra = 0;
                   for(var i=0; i<cartarr.length; i++){
                   if(cartarr[i].user_id==userid){
                   
                   
                   if(cartarr[i].title == val1){
                   
                   qty = cartarr[i].value;
                   qty = qty.split("#");
                   
                   }
                   
                   
                   }
                   }
                   
                   for(var j=0; j<qty.length; j++){
                   if(qty[j].match("^Size")){
                   
                   extra =qty[j].split(':')[1];
                   
                   }
                   
                   }
                   if(extra!=0){
                   if(extra.indexOf('$')!=-1){
                   extra = extra.split('$')[1]
                   }
                   else{
                   extra = 0;
                   }
                   }
                   else{
                   extra = 0;
                   }
                   
                   var unitprice = parseInt(val)+parseInt(extra);
                   
                   return unitprice;
                   };
                   
                   $scope.convert1 = function(val,val1){
                   var extra = 0;
                   for(var i=0; i<cartarr.length; i++){
                   if(cartarr[i].user_id==userid){
                   
                   
                   if(cartarr[i].title == val1){
                   
                   qty = cartarr[i].value;
                   qty = qty.split("#");
                   
                   }
                   
                   
                   }
                   }
                   
                   for(var j=0; j<qty.length; j++){
                   if(qty[j].match("^Size")){
                   
                   extra =qty[j].split(':')[1];
                   
                   }
                   
                   }
                   
                   if(extra!=0){
                   if(extra.indexOf('$')!=-1){
                   extra = extra.split('$')[1]
                   }
                   else{
                   extra = 0;
                   }
                   }
                   else{
                   extra = 0;
                   }
                   
                   var unitprice = parseInt(val)+parseInt(extra);
                   
                   for(var i=0; i<cartarr.length; i++){
                   if(cartarr[i].user_id==userid){
                   
                   
                   if(cartarr[i].title == val1){
                   
                   qty = cartarr[i].value;
                   qty = qty.split("#");
                   }
                   
                   
                   }
                   }
                   var price = parseInt(unitprice)*qty[0].split(":")[1];
                   
                   return price;
                   };
                   
                   
                   
                   var total;
                   $scope.totalprice = function(){
                   pricearr = [];
                   
                   for(var i=0; i<cartitemsarr.length; i++){
                   pricearr.push($scope.convert1(cartitemsarr[i].price,cartitemsarr[i].id));
                   }
                   if(pricearr.length == 0){
                   total = 0;
                   }
                   else{
                   
                   for(var i=0; i<pricearr.length; i++){
                   
                   if(i==0){
                   total = pricearr[i];
                   }
                   else{
                   total = total+pricearr[i];
                   }
                   }
                   
                   }
                   return total;
                   };
                   
                   
                   
                   $scope.addcart = function(val,val1){
                   var id;
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
                                      animation: 'fade-in',
                                      showBackdrop: true,
                                      maxWidth: 200,
                                      showDelay: 0
                                      });
                   
                   for(var i=0; i<cartarr.length; i++){
                   if(cartarr[i].user_id==userid){
                   
                   
                   if(cartarr[i].title == val){
                   
                   id = cartarr[i].id;
                   
                   }
                   
                   
                   }
                   }
//                   alert(id);
                   var cust = "Quantity:"+val1;
                   if(contentntarr.custom_values!=null){
                   for(var i=0; i<contentntarr.custom_values.length; i++){
                   
                   cust = cust+"#"+contentntarr.custom_values[i].title+":"+$scope.models[i];
                   
                   }
                   }
                   
                   $http({method: "PUT", url:"http://build.myappbuilder.com/api/subscriber_custom_fields.json", cache: false, params:{"api_key":appkey,"id":id,"new_title":val,"new_value":cust}})
                   .success(function(data, status){
                            
                            $http({method: "GET", url:"http://build.myappbuilder.com/api/subscriber_custom_fields.json", cache: false, params:{"api_key":appkey}})
                            .success(function(data, status){
                                     cartitemsarr = [];
//                                     alert(JSON.stringify(data));
                                     
                                     cartarr = data;
                                     $ionicLoading.hide();
                                     for(var i=0; i<cartarr.length; i++){
                                     if(cartarr[i].user_id==userid){
                                     for(var j=0; j<listarr.length; j++){
                                     for(var k=0; k<listarr[j].elements.length; k++){
                                     if(cartarr[i].title == listarr[j].elements[k].id){
                                     cartitemsarr.push(listarr[j].elements[k]);
                                     }
                                     
                                     }
                                     
                                     }
                                     }
                                     }
                                     $scope.cartitems = cartitemsarr;
                                     $scope.cartlen = cartitemsarr.length;
                                     $state.reload();
                                     $scope.detailModal.hide();
                                     
                                     })
                            .error(function(data, status) {
                                   alert(JSON.stringify(data));
                                   $ionicLoading.hide();
                                   });
                            
                            
                            })
                   .error(function(data, status) {
                          alert(JSON.stringify(data));
                          $ionicLoading.hide();
                          });
                   
                   };
                   
                   
                   $scope.cngqty = function(val){
                   $scope.qty1=val;
                   }
                   
                   $scope.convertunit = function(val){
                   var unitprice = parseInt(val);
                   
                   return unitprice;
                   };
                   
                   $scope.convert = function(val,val1){
                   for(var i=0; i<cartarr.length; i++){
                   if(cartarr[i].user_id==userid){
                   
                   
                   if(cartarr[i].title == val1){
                   
                   qty = cartarr[i].value;
                   qty = qty.split("#");
                   }
                   
                   
                   }
                   }
                   var price = parseInt(val)*qty[0].split(":")[1];
                   
                   return price;
                   };
                   
                   $scope.cartback = function(){
                   $state.go('home');
                   };
                   
                   $scope.Getaddress = function(){
                   $scope.addressModal.show();
                   };
                   
                   $scope.Purchase = function(val){
                   arr=[];
                   productarr=[];
                   quantityarr=[];
                   imagearr=[];
                   scarr=[];
                   pricearr=[];
                   console.log(cartitemsarr);
                   for(var i=0; i<cartitemsarr.length; i++){
                   imagearr.push(cartitemsarr[i].images[0].url);
                   productarr.push(cartitemsarr[i].title);
                   pricearr.push($scope.convertunit(cartitemsarr[i].price));
                   quantityarr.push(($scope.quantity(cartitemsarr[i].id))[1].split(":")[1]);
                   arr.push($scope.custval(cartitemsarr[i].id));
                   scarr.push(cartitemsarr[i].additional_field);
                   taxarr.push('yes');
                   
                   }
                   console.log(scarr);
                   
                  
                   if(val==true){
                   if($scope.add.userName && $scope.add.address && $scope.add.selectedcity && $scope.add.selectedstate && $scope.add.pincode){
                   if(scval=='UPS'){
                   var url ='http://nuatransmedia.com/song_app/stripe/cart_android.php?C_Name='+$scope.add.userName+'&C_Mail='+useremail+'&Total_Items='+cartitemsarr.length+'&Items_Name='+productarr+'&Items_Price='+pricearr+'&Items_Qty='+quantityarr+'&Items_Tax='+taxarr+'&Image='+imagearr+'&oths='+JSON.stringify(arr)+'&type='+JSON.stringify(scarr)+'&Seller=333 place St.,City,AL,36000&Buyer='+$scope.add.address+','+$scope.add.selectedcity+','+$scope.add.selectedstate+','+$scope.add.pincode;
                   }
                   else if(scval=='BS'){
                   var url ='http://nuatransmedia.com/song_app/stripe/cart_android.php?C_Name='+$scope.add.userName+'&C_Mail='+useremail+'&Total_Items='+cartitemsarr.length+'&Items_Name='+productarr+'&Items_Price='+pricearr+'&Items_Qty='+quantityarr+'&Items_Tax='+taxarr+'&Image='+imagearr+'&oths='+JSON.stringify(arr)+'&type=BS&Seller=333 place St.,City,AL,36000&Buyer='+$scope.add.address+','+$scope.add.selectedcity+','+$scope.add.selectedstate+','+$scope.add.pincode;
                   }
                   else{
                   var url ='http://nuatransmedia.com/song_app/stripe/cart_android.php?C_Name='+$scope.add.userName+'&C_Mail='+useremail+'&Total_Items='+cartitemsarr.length+'&Items_Name='+productarr+'&Items_Price='+pricearr+'&Items_Qty='+quantityarr+'&Items_Tax='+taxarr+'&Image='+imagearr+'&oths='+JSON.stringify(arr)+'&type='+scval+'&Seller=333 place St.,City,AL,36000&Buyer='+$scope.add.address+','+$scope.add.selectedcity+','+$scope.add.selectedstate+','+$scope.add.pincode;
                   }
                   
                   
                   var ref = window.open(url, '_blank', 'location=no,toolbar=yes,closebuttoncaption=Cancel');
                   ref.addEventListener('loadstop', function(event) {
                                        
                                        if(event.url=='http://nuatransmedia.com/song_app/stripe/done.html'){
                                        ref.close();
                                        var res = url.replace(/&/g, "^");
                                        
                                        $scope.payment_success('http://nuatransmedia.com/song_app/stripe/cart_details.php?url='+res);
                                        }
                                        });
                   
                   }
                   else{
                   $ionicPopup.alert({
                                     title: 'My Cart',
                                     content: 'Please Enter Valid Billing Address'
                                     }).then(function(res) {
                                             console.log('Test Alert Box');
                                             });
                   }
                   
                   }
                   else{
                   if($scope.add.userName && $scope.add.address && $scope.add.selectedcity && $scope.add.selectedstate && $scope.add.pincode && $scope.add.userName1 && $scope.add.address1 && $scope.add.selectedcity1 && $scope.add.selectedstate1 && $scope.add.pincode1){
                   if(scval=='UPS'){
                   var url ='http://nuatransmedia.com/song_app/stripe/cart_android.php?C_Name='+$scope.add.userName+'&C_Mail='+useremail+'&Total_Items='+cartitemsarr.length+'&Items_Name='+productarr+'&Items_Price='+pricearr+'&Items_Qty='+quantityarr+'&Items_Tax='+taxarr+'&Image='+imagearr+'&oths='+JSON.stringify(arr)+'&type='+JSON.stringify(scarr)+'&Seller=333 place St.,City,AL,36000&Buyer='+$scope.add.address1+','+$scope.add.selectedcity1+','+$scope.add.selectedstate1+','+$scope.add.pincode1;
                   }
                   else if(scval=='BS'){
                   var url ='http://nuatransmedia.com/song_app/stripe/cart_android.php?C_Name='+$scope.add.userName+'&C_Mail='+useremail+'&Total_Items='+cartitemsarr.length+'&Items_Name='+productarr+'&Items_Price='+pricearr+'&Items_Qty='+quantityarr+'&Items_Tax='+taxarr+'&Image='+imagearr+'&oths='+JSON.stringify(arr)+'&type=BS&Seller=333 place St.,City,AL,36000&Buyer='+$scope.add.address1+','+$scope.add.selectedcity1+','+$scope.add.selectedstate1+','+$scope.add.pincode1;
                   }
                   else{
                   var url ='http://nuatransmedia.com/song_app/stripe/cart_android.php?C_Name='+$scope.add.userName+'&C_Mail='+useremail+'&Total_Items='+cartitemsarr.length+'&Items_Name='+productarr+'&Items_Price='+pricearr+'&Items_Qty='+quantityarr+'&Items_Tax='+taxarr+'&Image='+imagearr+'&oths='+JSON.stringify(arr)+'&type='+scval+'&Seller=333 place St.,City,AL,36000&Buyer='+$scope.add.address1+','+$scope.add.selectedcity1+','+$scope.add.selectedstate1+','+$scope.add.pincode1;
                   }
                   
                   
                   var ref = window.open(url, '_blank', 'location=no,toolbar=yes,closebuttoncaption=Cancel');
                   ref.addEventListener('loadstop', function(event) {
                                        
                                        if(event.url=='http://nuatransmedia.com/song_app/stripe/done.html'){
                                        ref.close();
                                        var res = url.replace(/&/g, "^");
                                        
                                        $scope.payment_success('http://nuatransmedia.com/song_app/stripe/cart_details.php?url='+res);
                                        }
                                        });
                   }
                   else{
                   
                   $ionicPopup.alert({
                                     title: 'My Cart',
                                     content: 'Please Enter Valid Billing and Shipping Address'
                                     }).then(function(res) {
                                             console.log('Test Alert Box');
                                             });
                  
                   }
                   
                   }
                   
                   };
                   
                   $scope.payment_success = function(val){
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
                                      animation: 'fade-in',
                                      showBackdrop: true,
                                      maxWidth: 200,
                                      showDelay: 0
                                      });
                   console.log(val);
                   
                   $http({method: "GET", url:val, cache: false, params:{}})
                   .success(function(data, status){
                            var ordertitle = data.id;
                            var orderelement = data.content;
                            var orderdate = data.date;
                            var orderprice = data.total;
                            $http({method: "POST", url:"http://build.myappbuilder.com/api/buttons/via_url.json", cache: false, params:{"api_key":orderkey,"title":ordertitle,"image":"http://s3.amazonaws.com/iPhoneBooks/user/buttons/original/688.png"}})
                            .success(function(data, status){
                                     order_bid=data.id;
                                     var formData1 = new FormData();
                                     formData1.append('api_key',orderkey);
                                     formData1.append('button_id',order_bid);
                                     formData1.append('title',orderdate);
                                     formData1.append('text',orderelement);
                                     formData1.append('price',orderprice);
                                     formData1.append('additional_field','Pending');
                                     $http.post('http://build.myappbuilder.com/api/elements/create_default.json',formData1,{
                                                transformRequest:angular.identity,
                                                headers:{'Content-Type':undefined}
                                                })
                                     .success(function(data, status){
                                            order_eid=data.id;
                                              $http({method: "POST", url:"http://build.myappbuilder.com/api/subscriber_custom_fields.json", cache: false, params:{"api_key":appkey,"subscriber_id":userid,"title":order_bid,"value":"orders"}})
                                              .success(function(data, status){
                                                       pendingarr = [];
                                                       deliveredarr = [];
                                                       returnedarr = [];
                                                       $http({method: "GET", url:"http://build.myappbuilder.com/api/buttons.json", cache: false, params:{"api_key":orderkey}})
                                                       .success(function(data, status){
                                                                
                                                                
                                                                orderarr = data;
                                                                for(i=0;i<orderarr.length;i++){
                                                                if(orderarr[i].elements[0]){
                                                                if(orderarr[i].elements[0].additional_field=="Pending"){
                                                                pendingarr.push(orderarr[i]);
                                                                }
                                                                else if(orderarr[i].elements[0].additional_field=="Delivered"){
                                                                deliveredarr.push(orderarr[i]);
                                                                }
                                                                else{
                                                                returnedarr.push(orderarr[i]);
                                                                }
                                                                }
                                                                }
                                                                for(var j=0; j<cartarr.length; j++){
                                                                if(cartarr[j].value!="orders"){
                                                                $http({method: "DELETE", url:"http://build.myappbuilder.com/api/subscriber_custom_fields.json", cache: false, params:{"api_key":appkey,"id":cartarr[j].id}})
                                                                .success(function(data, status){
                                                                         cartitemsarr = [];
                                                                         $http({method: "GET", url:"http://build.myappbuilder.com/api/subscriber_custom_fields.json", cache: false, params:{"api_key":appkey}})
                                                                         .success(function(data, status){
                                                                                  cartarr = data;
                                                                                  $ionicLoading.hide();
                                                                                  for(var i=0; i<cartarr.length; i++){
                                                                                  if(cartarr[i].user_id==userid){
                                                                                  for(var j=0; j<listarr.length; j++){
                                                                                  for(var k=0; k<listarr[j].elements.length; k++){
                                                                                  if(cartarr[i].title == listarr[j].elements[k].id){
                                                                                  cartitemsarr.push(listarr[j].elements[k]);
                                                                                  }
                                                                                  
                                                                                  }
                                                                                  
                                                                                  }
                                                                                  }
                                                                                  }
                                                                                  $scope.cartitems = cartitemsarr;
                                                                                  $scope.cartlen = cartitemsarr.length;
                                                                                  $state.reload();
                                                                                  
                                                                                  })
                                                                         .error(function(data, status) {
                                                                                alert(JSON.stringify(data));
                                                                                $ionicLoading.hide();
                                                                                });
                                                                         
                                                                         })
                                                                .error(function(data, status) {
                                                                       alert(JSON.stringify(data));
                                                                       $ionicLoading.hide();
                                                                       });
                                                                }
                                                                }
                                                                $ionicLoading.hide();
                                                                $scope.addressModal.hide();
                                                                $ionicPopup.alert({
                                                                      title: 'Shopping App',
                                                                      template: 'Your payment has been Processed successfully'
                                                                          }).then(function(res) {
                                                                                $state.go('home');
                                                                                });
                                                                
                                                                
                                                                })
                                                       .error(function(data, status) {
                                                              alert(JSON.stringify(data));
                                                              $ionicLoading.hide();
                                                              });
                                                       })
                                              .error(function(data, status) {
                                                     alert(JSON.stringify(data));
                                                     $ionicLoading.hide();
                                                     });
                                              
                                              })
                                     .error(function(data, status) {
                                            alert("hi"+JSON.stringify(data));
                                            $ionicLoading.hide();
                                            });
                                     
                                     })
                            .error(function(data, status) {
                                   alert(JSON.stringify(data));
                                   $ionicLoading.hide();
                                   });
                            
                            })
                   .error(function(data, status) {
                          alert(JSON.stringify(data));
                          $ionicLoading.hide();
                          });
                   
                   };
                   
                   $scope.save = function(){
                   $scope.addcart($scope.itemid,$scope.qty1,$scope.size1);
                   };
                   
                   });


control.controller('AdminCtrl', function($scope, $ionicLoading, $state, $http, $ionicSideMenuDelegate, $ionicPopup, $window, $ionicModal) {
                   $scope.device = device;
                   
                   $scope.category = listarr;
//                   $scope.orders = pendingarr;
                   $scope.categoryid = categoryid;
                   $scope.title = title;
                   $scope.cartlen = cartitemsarr.length;
                   $scope.items = elementarr;
                   $scope.choice = 'UPS';
                   $scope.add = {};
                   $scope.addproduct = function(){
                   editData = "Add"
                   $state.go('addproduct');
                   };
                   
                   $scope.orderlistgo = function(){
                   $state.go('orderlist');
                   };
                   
                   $ionicModal.fromTemplateUrl('templates/shippingcost.html',{
                                               scope: $scope,
                                               animation: 'slide-in-up'
                                               }).then(function(modal) {
                                                       $scope.scModal = modal;
                                                       });
                  
                   
//                   $scope.pending = function(){
//                   $scope.orders = pendingarr;
//                   $state.reload();
//                   };
//                   $scope.delivered = function(){
//                   $scope.orders = deliveredarr;
//                   $state.reload();
//                   };
//                   $scope.returned = function(){
//                   $scope.orders = returnedarr;
//                   $state.reload();
//                   };
                   
                   $scope.addcatagory = function(){
                   $scope.data = {}
                   $ionicPopup.show({
                                    template: '<input type="text" ng-model="data.title">',
                                    title: 'Create New Category',
                                    scope: $scope,
                                    buttons: [
                                              { text: 'Cancel' },
                                              {
                                              text: '<b>Create</b>',
                                              type: 'button-positive',
                                              onTap: function(e) {
                                              if (!$scope.data.title) {
                                              
                                              e.preventDefault();
                                              } else {
//                                             alert($scope.data.title);
                                              $ionicLoading.show({
                                                                 content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
                                                                 animation: 'fade-in',
                                                                 showBackdrop: true,
                                                                 maxWidth: 200,
                                                                 showDelay: 0
                                                                 });
                                              $http({method: "POST", url:"http://build.myappbuilder.com/api/buttons/via_url.json", cache: false, params:{"api_key":appkey,"title":$scope.data.title,"image":"http://s3.amazonaws.com/iPhoneBooks/user/buttons/original/688.png"}})
                                              .success(function(data, status){
                                                       categoryid = data.id;
                                                       $scope.categoryid = categoryid;
                                                       title = data.title;
                                                       $http({method: "GET", url:"http://build.myappbuilder.com/api/buttons.json", cache: false, params:{"api_key":appkey}})
                                                       .success(function(data, status){
                                                                
                                                                $ionicLoading.hide();
                                                                listarr = data;
                                                                $scope.category = listarr;
                                                       $scope.listViewClickFtn(categoryid,title);
                                                                })
                                                       .error(function(data, status) {
                                                              alert(JSON.stringify(data));
                                                              $ionicLoading.hide();
                                                              });
                                                       })
                                              .error(function(data, status) {
                                                     alert(JSON.stringify(data));
                                                     $ionicLoading.hide();
                                                     });
                                              }
                                              }
                                              },
                                              ]
                                    });
                   }
                   
                   
                   $scope.editcatagory = function(val,val1){
                   $scope.data = {}
                   $scope.data.title = val1;
                   $ionicPopup.show({
                                    template: '<input type="text" ng-model="data.title">',
                                    title: 'Etit this Category',
                                    scope: $scope,
                                    buttons: [
                                              { text: 'Cancel' },
                                              {
                                              text: '<b>Edit</b>',
                                              type: 'button-positive',
                                              onTap: function(e) {
                                              if (!$scope.data.title) {
                                              
                                              e.preventDefault();
                                              } else {
                                              //                                             alert($scope.data.title);
                                              $ionicLoading.show({
                                                                 content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
                                                                 animation: 'fade-in',
                                                                 showBackdrop: true,
                                                                 maxWidth: 200,
                                                                 showDelay: 0
                                                                 });
                                              $http({method: "PUT", url:"http://build.myappbuilder.com/api/buttons/via_url.json", cache: false, params:{"api_key":appkey,"id":val,"title":$scope.data.title}})
                                              .success(function(data, status){
                                                       categoryid = data.id;
                                                       $scope.categoryid = categoryid;
                                                       title = data.title;
                                                       $http({method: "GET", url:"http://build.myappbuilder.com/api/buttons.json", cache: false, params:{"api_key":appkey}})
                                                       .success(function(data, status){
                                                                
                                                                $ionicLoading.hide();
                                                                listarr = data;
                                                                $scope.category = listarr;
                                                                $scope.listViewClickFtn(categoryid,title);
                                                                })
                                                       .error(function(data, status) {
                                                              alert(JSON.stringify(data));
                                                              $ionicLoading.hide();
                                                              });
                                                       })
                                              .error(function(data, status) {
                                                     alert(JSON.stringify(data));
                                                     $ionicLoading.hide();
                                                     });
                                              }
                                              }
                                              },
                                              ]
                                    });
                   }
                   
                   $scope.deletecatagory = function(val,val1){
                   var confirmPopup = $ionicPopup.confirm({
                                                          title: val1,
                                                          template: 'Are you sure you want to remove this Category?'
                                                          });
                   confirmPopup.then(function(res) {
                                     if(res) {
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
                                      animation: 'fade-in',
                                      showBackdrop: true,
                                      maxWidth: 200,
                                      showDelay: 0
                                      });
                   $http({method: "DELETE", url:"http://build.myappbuilder.com/api/buttons.json", cache: false, params:{"api_key":appkey,"id":val}})
                   .success(function(data, status){
                            if(val==categoryid){
                            categoryid = listarr[0].id;
                            $scope.categoryid = categoryid;
                            title = listarr[0].title;
                            $http({method: "GET", url:"http://build.myappbuilder.com/api/buttons.json", cache: false, params:{"api_key":appkey}})
                            .success(function(data, status){
                                     
                                     $ionicLoading.hide();
                                     listarr = data;
                                     $scope.category = listarr;
                                     $scope.listViewClickFtn(categoryid,title);
                                     })
                            .error(function(data, status) {
                                   alert(JSON.stringify(data));
                                   $ionicLoading.hide();
                                   });
                            }
                            else{
                            $http({method: "GET", url:"http://build.myappbuilder.com/api/buttons.json", cache: false, params:{"api_key":appkey}})
                            .success(function(data, status){
                                     
                                     $ionicLoading.hide();
                                     listarr = data;
                                     $scope.category = listarr;
                                     $scope.listViewClickFtn(categoryid,title);
                                     })
                            .error(function(data, status) {
                                   alert(JSON.stringify(data));
                                   $ionicLoading.hide();
                                   });
                            }
                            
                            })
                   .error(function(data, status) {
                          alert(JSON.stringify(data));
                          $ionicLoading.hide();
                          });
                                     }
                                     });
                   };
                  
                   
                   $scope.listViewClickFtn = function(val1,val2){
                   categoryid = val1;
                   title = val2;
                   elementarr = [];
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
                                      animation: 'fade-in',
                                      showBackdrop: true,
                                      maxWidth: 200,
                                      showDelay: 0
                                      });
                   $http({method: "GET", url:"http://build.myappbuilder.com/api/buttons.json", cache: false, params:{"api_key":appkey,"id":categoryid}})
                   .success(function(data, status){
                            
                            $ionicLoading.hide();
                            $ionicSideMenuDelegate.toggleLeft();
                            elementarr = data.elements;
                            $scope.items = elementarr;
                            $scope.categoryid = categoryid;
                            //                            alert($scope.items);
                            $scope.title = title;
                            $state.go('admin');
                            
                            })
                   .error(function(data, status) {
                          alert(JSON.stringify(data));
                          $ionicLoading.hide();
                          });
                   };
                   $ionicSideMenuDelegate.toggleLeft();
                   //                   $scope.listViewClickFtn(categoryid);
                   
                   $scope.itemClickFtn = function(val1,val2){
                   elementid = val1;
                   
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
                                      animation: 'fade-in',
                                      showBackdrop: true,
                                      maxWidth: 200,
                                      showDelay: 0
                                      });
                   $http({method: "GET", url:"http://build.myappbuilder.com/api/elements.json", cache: false, params:{"api_key":appkey,"id":elementid}})
                   .success(function(data, status){
                            contentntarr = data;
                            $scope.content = contentntarr;
                            $http({method: "GET", url:"http://build.myappbuilder.com/api/elements/tags.json", cache: false, params:{"api_key":appkey,"id":elementid}})
                            .success(function(data, status){
                                     
                                     $ionicLoading.hide();
                                     amenities = [];
                                     for(var i=0;i<data.length;i++){
                                     amenities.push(data[i].name);
                                     
                                     }

                                     
//                                     alert(amenities);
                                     $state.go('editproduct');
                                     
                                     })
                            .error(function(data, status) {
                                   alert(JSON.stringify(data));
                                   $ionicLoading.hide();
                                   });
                            
                            
                            })
                   .error(function(data, status) {
                          alert(JSON.stringify(data));
                          $ionicLoading.hide();
                          });
                   };
                   
                   
                   
                   $scope.convert = function(val){
                   var price = parseInt(val);
                   return price;
                   };
                   
                   $scope.logout = function(val){
                   userid = undefined;
                   userid1 = undefined;
                   $state.go('main');
                   };
                   
                   $scope.scopen = function(){
                   $http({method: "GET", url:"http://build.myappbuilder.com/api/book_custom_fields.json", cache: false, params:{"api_key":appkey}})
                   .success(function(data, status){
                            
                            for(var i=0;i<data.length;i++){
                            if(data[i].key=='Shipping Type'){
                            $scope.scid = data[i].id;
                            $scope.scval = data[i].value;
                            }
                            }
                            if($scope.scval=='UPS'){
                            $scope.choice = $scope.scval;
                            }
                            else if($scope.scval=='BS'){
                            $scope.choice = $scope.scval;
                            }
                            else{
                            var val = $scope.scval.split('*');
                            $scope.choice = val[0];
                            $scope.add.maxamount = val[1];
                            $scope.add.shippingprice = val[2];
                            }
                            $ionicLoading.hide();
                            $scope.scModal.show();
                            })
                   .error(function(data, status) {
                          alert(JSON.stringify(data));
                          $ionicLoading.hide();
                          });
                   };
                   
                   
                   $scope.scsave = function(val){
                   
                   
                   if(val=='UPS'){
                   $scope.scval = val;
                   }
                   else if(val=='BS'){
                   $scope.scval = val;
                   }
                   else{
                   if($scope.add.maxamount && $scope.add.shippingprice){
                   $scope.scval = val+'*'+$scope.add.maxamount+'*'+$scope.add.shippingprice;
                   }
                   else{
                   navigator.notification.alert('Please Enter Amount', function(){}, 'Shipping', 'OK' );
                   }
                   }
//                   alert($scope.scval);
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                      });
                   $http({method: "GET", url:"http://build.myappbuilder.com/api/book_custom_fields.json", cache: false, params:{"api_key":appkey}})
                   .success(function(data, status){
                           
                            for(var i=0;i<data.length;i++){
                            if(data[i].key=='Shipping Type'){
                            $scope.scid = data[i].id;
                            }
                            }
                            if($scope.scid){
                            $http({method: "PUT", url:"http://build.myappbuilder.com/api/book_custom_fields.json", cache: false, params:{"api_key":appkey,"id":$scope.scid,"value":$scope.scval}})
                            .success(function(data, status){
                                     $ionicLoading.hide();
                                     scval = data.value;
                                     $scope.scModal.hide();
                                     })
                            .error(function(data, status) {
                                   alert(JSON.stringify(data));
                                   $ionicLoading.hide();
                                   });
                            }
                            else{
                            if($scope.scval){
                            $http({method: "POST", url:"http://build.myappbuilder.com/api/book_custom_fields.json", cache: false, params:{"api_key":appkey,"title":"Shipping Type","value":$scope.scval}})
                            .success(function(data, status){
                                     $ionicLoading.hide();
                                     scval = data.value;
                                     $scope.scModal.hide();
                                     })
                            .error(function(data, status) {
                                   alert(JSON.stringify(data));
                                   $ionicLoading.hide();
                                   });
                            }
                            }
                            
                            })
                   .error(function(data, status) {
                          alert(JSON.stringify(data));
                          $ionicLoading.hide();
                          });
                   
                   };
//                    $ionicSideMenuDelegate.showRight();
                   });

control.controller('AddproductCtrl',function($scope, $ionicLoading, $state, $http, $ionicSideMenuDelegate, $ionicPopup,$window,$ionicModal,$ionicActionSheet){
                   $scope.device = device;
                   $scope.title = title;
                   $scope.add = {};
                   $scope.models = {};
                   $scope.scval = scval;
                   $ionicModal.fromTemplateUrl('templates/new_video.html',{
                                               scope: $scope,
                                               animation: 'slide-in-up'
                                               }).then(function(modal) {
                                                       $scope.videoModal = modal;
                                                       });
                   
                   $scope.Deletecust = function(val){
                   var confirmPopup = $ionicPopup.confirm({
                                                          title: $scope.title,
                                                          template: 'Are you sure do you want to remove this Field?'
                                                          });
                   confirmPopup.then(function(res) {
                                     if(res) {
                                     console.log('You are sure');
                                     
                                     $ionicLoading.show({
                                                        template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                                        });
                                     $.ajax({
                                            type: "DELETE",
                                            url: "http://build.myappbuilder.com/api/custom_values.json",
                                            data: {"api_key":appkey,"id":val},
                                            cache: false,
                                            success:function(response){
                                            $ionicLoading.hide();
                                            $scope.imagelist();
                                            
                                            },
                                            error:function(error,status){
                                            $ionicLoading.hide();
                                            var error = JSON.parse(error.responseText);
                                            navigator.notification.alert(error.error, function(){}, 'Product', 'OK' );
                                            }
                                            });
                                     } else {
                                     console.log('You are not sure');
                                     }
                                     });
                   
                   };
                   
                   $scope.addfield = function(){
                   $scope.data = {}
                   
                   if($scope.add.title){
                   if(editData == "Edit"){
                   title = $scope.add.title;
                   var myPopup = $ionicPopup.show({
                                                  template: '<input type="text" ng-model="data.title">',
                                                  title: 'Please Enter Caption',
                                                  subTitle: '',
                                                  scope: $scope,
                                                  buttons: [
                                                            { text: 'Cancel' },
                                                            {
                                                            text: '<b>OK</b>',
                                                            type: 'button-positive',
                                                            onTap: function(e) {
                                                            if (!$scope.data.title) {
                                                            //don't allow the user to close unless he enters wifi password
                                                            e.preventDefault();
                                                            } else {
                                                            $ionicLoading.show({
                                                                               template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                                                               });
                                                            
                                                            $http({method: "POST", url:"http://build.myappbuilder.com/api/custom_values.json", cache: false, params:{"api_key":appkey,"element_id":elementid,"title":$scope.data.title,"value":""}})
                                                            .success(function(data, status){
                                                                     
                                                                     $http({method: "GET", url:"http://build.myappbuilder.com/api/elements.json", cache: false, params:{"api_key":appkey,"id":elementid}})
                                                                     .success(function(data, status){
                                                                              $ionicLoading.hide();
                                                                              contentntarr = data;
                                                                              $scope.content = contentntarr;
                                                                              $scope.cust = contentntarr.custom_values;
                                                                              $state.reload();
                                                                              })
                                                                     .error(function(data, status) {
                                                                            alert(JSON.stringify(data));
                                                                            $ionicLoading.hide();
                                                                            });
                                                                     })
                                                            .error(function(data, status) {
                                                                   alert(JSON.stringify(data));
                                                                   $ionicLoading.hide();
                                                                   });
                                                            }
                                                            }
                                                            },
                                                            ]
                                                  });
                   myPopup.then(function(res) {
                                console.log('Tapped!', res);
                                });
                   }
                   else{
                   $scope.save2();
                   
                   }
                   
                   }else{
                   
                   $ionicPopup.alert({
                                     title: 'Product',
                                     content: 'Please Enter Your Product Title!'
                                     }).then(function(res) {
                                             console.log('Test Alert Box');
                                             });
                   
                   }
                   
                   // An elaborate, custom popup
                   
                   
                   };
                   
                   
                   
                   $scope.contentback = function(){
                   $state.go('admin');
                   };
                   
                   $scope.showActionsheet = function() {
                   
                   $ionicActionSheet.show({
                                          titleText: 'Choose',
                                          buttons: [
                                                    { text: 'Camera' },
                                                    { text: 'PhotoAlbum' },
                                                    ],
                                          
                                          cancelText: 'Cancel',
                                          cancel: function() {
                                          console.log('CANCELLED');
                                          },
                                          buttonClicked: function(index) {
                                          console.log('BUTTON CLICKED', index);
                                          if(index==0){
                                          navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
                                                                      destinationType: Camera.DestinationType.FILE_URI,sourceType : Camera.PictureSourceType.CAMERA,saveToPhotoAlbum: false,correctOrientation:true});
                                          return true;
                                          }
                                          else{
                                          navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
                                                                      destinationType: Camera.DestinationType.FILE_URI,sourceType : Camera.PictureSourceType.PHOTOLIBRARY,saveToPhotoAlbum: false,correctOrientation:true});
                                          return true;
                                          }
                                          
                                          }
                                          
                                          });
                   };
                   
                   function onSuccess(imageURI) {
                   image = imageURI;
                   $('.file-input-wrapper6 > .btn-file-input6').css('background-image', 'url('+imageURI+')');
                   }
                   
                   function onFail(message) {
                   navigator.notification.alert('Failed because: ' + message);
                   }
                   
                   
                   $scope.create_video = function(){
                   //                   navigator.notification.alert("error11: "+$('input[name="video"]').get(0).files[0]);
                   
                   if(image){
                   
                   for(var i=0;i<listarr.length;i++){
                   
                   if(listarr[i].id == categoryid ){
                    
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                      });
                   
                   cordova.exec(function(response){
                                console.log(JSON.stringify(response));
                                //                                $('#video').val('');
                                $ionicModal.fromTemplateUrl('templates/new_video.html',{
                                                            scope: $scope,
                                                            animation: 'slide-in-up'
                                                            }).then(function(modal) {
                                                                    $scope.videoModal = modal;
                                                                    });
                                $scope.videoModal.hide();
                                image = undefined;
                                $ionicLoading.hide();
                                $scope.imagelist();
                                }, function(error){
                                $ionicLoading.hide();
                                var error = JSON.parse(error.responseText);
                                navigator.notification.alert(error.error, function(){}, 'Content', 'OK' );
                                }, "ImageCompress", "imageCompress", ["320", "480", "image", image, "http://build.myappbuilder.com/api/elements/images.json?", "POST", { "api_key": appkey,"id":elementid}]);
                   
                   
                   }
                   }
                   }else{
                   
                   
                   var alertPopup = $ionicPopup.alert({
                                                      title: 'Shopping App',
                                                      template: 'Please Choose Images!'
                                                      });
                   alertPopup.then(function(res) {
                                   //console.log('Thank you for not eating my delicious ice cream cone');
                                   });
                   
                   }
                   }
                   
                   $scope.videoUploadFtn = function(){
                   if($scope.add.title){
                   if(editData == "Edit"){
                   title = $scope.add.title;
//                   $scope.save1();
                   $scope.videoModal.show();
                   }
                   else{
                   $scope.save1();
                   
                   }
                   
                   }else{
                   
                   $ionicPopup.alert({
                                     title: 'Product',
                                     content: 'Please Enter Your Product Title!'
                                     }).then(function(res) {
                                             console.log('Test Alert Box');
                                             });
                   
                   }
                   
                   };
                   
                   $scope.save1 = function(){
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                      });
                   $http({method: "POST", url:"http://build.myappbuilder.com/api/elements/create_default.json", cache: false, params:{"api_key":appkey,"button_id":categoryid,"title":$scope.add.title,"text":$scope.add.text,"price":$scope.add.price}})
                   .success(function(data, status){
//                            alert(data);
                            elementid = data.id;
                            editData = "Edit";
                            $http({method: "GET", url:"http://build.myappbuilder.com/api/buttons.json", cache: false, params:{"api_key":appkey,"id":categoryid}})
                            .success(function(data, status){
                                     
                                     $ionicLoading.hide();
                                     
                                     elementarr = data.elements;
                                     $scope.items = elementarr;
                                     //$state.go('home');
                                     $scope.videoModal.show();
                                     
                                     })
                            .error(function(data, status) {
                                   alert(JSON.stringify(data));
                                   $ionicLoading.hide();
                                   });
                            
                            
                            })
                   .error(function(data, status) {
                          
                          alert(JSON.stringify(data));
                          $ionicLoading.hide();
                          });
                   
        
                   
                   
                   };
                   
                   
                   
                   $scope.save2 = function(){
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                      });
                   $http({method: "POST", url:"http://build.myappbuilder.com/api/elements/create_default.json", cache: false, params:{"api_key":appkey,"button_id":categoryid,"title":$scope.add.title,"text":$scope.add.text,"price":$scope.add.price}})
                   .success(function(data, status){
                            //                            alert(data);
                            elementid = data.id;
                            editData = "Edit";
                            $http({method: "GET", url:"http://build.myappbuilder.com/api/buttons.json", cache: false, params:{"api_key":appkey,"id":categoryid}})
                            .success(function(data, status){
                                     
                                     $ionicLoading.hide();
                                     
                                     elementarr = data.elements;
                                     $scope.items = elementarr;
                                     var myPopup = $ionicPopup.show({
                                                                    template: '<input type="text" ng-model="data.title">',
                                                                    title: 'Please Enter Caption',
                                                                    subTitle: '',
                                                                    scope: $scope,
                                                                    buttons: [
                                                                              { text: 'Cancel' },
                                                                              {
                                                                              text: '<b>OK</b>',
                                                                              type: 'button-positive',
                                                                              onTap: function(e) {
                                                                              if (!$scope.data.title) {
                                                                              //don't allow the user to close unless he enters wifi password
                                                                              e.preventDefault();
                                                                              } else {
                                                                              $ionicLoading.show({
                                                                                                 template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                                                                                 });
                                                                              
                                                                              $http({method: "POST", url:"http://build.myappbuilder.com/api/custom_values.json", cache: false, params:{"api_key":appkey,"element_id":elementid,"title":$scope.data.title,"value":""}})
                                                                              .success(function(data, status){
                                                                                       
                                                                                       $http({method: "GET", url:"http://build.myappbuilder.com/api/elements.json", cache: false, params:{"api_key":appkey,"id":elementid}})
                                                                                       .success(function(data, status){
                                                                                                $ionicLoading.hide();
                                                                                                contentntarr = data;
                                                                                                $scope.content = contentntarr;
                                                                                                $scope.cust = contentntarr.custom_values;
                                                                                                $state.reload();
                                                                                                })
                                                                                       .error(function(data, status) {
                                                                                              alert(JSON.stringify(data));
                                                                                              $ionicLoading.hide();
                                                                                              });
                                                                                       })
                                                                              .error(function(data, status) {
                                                                                     alert(JSON.stringify(data));
                                                                                     $ionicLoading.hide();
                                                                                     });
                                                                              }
                                                                              }
                                                                              },
                                                                              ]
                                                                    });
                                     myPopup.then(function(res) {
                                                  console.log('Tapped!', res);
                                                  });
                                     
                                     })
                            .error(function(data, status) {
                                   alert(JSON.stringify(data));
                                   $ionicLoading.hide();
                                   });
                            
                            
                            })
                   .error(function(data, status) {
                          
                          alert(JSON.stringify(data));
                          $ionicLoading.hide();
                          });
                   
                   
                   
                   
                   }
                   
                   
                   $scope.save = function(){
                   amenities = [];
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                      });
                   
                   if($scope.add.elementTag==''){
                   amenities='';
                   }
                   else{
                   for(var i=0;i<$scope.add.elementTag.length;i++){
                   //                   amenities.push(response[i].name);
                   if(i==0){
                   amenities = $scope.add.elementTag[i].text;
                   }
                   else{
                   amenities = amenities+','+$scope.add.elementTag[i].text;
                   }
                   }
                   }
                   if(scval=="UPS"){
                   var adf = 'UPS*'+$scope.add.w+'*'+$scope.add.l+'*'+$scope.add.h+'*'+$scope.add.b;
                   }
                   if(editData == "Edit"){
                   
                   $http({method: "PUT", url:"http://build.myappbuilder.com/api/elements/update_default.json", cache: false, params:{"api_key":appkey,"id":elementid,"title":$scope.add.title,"text":$scope.add.text,"price":$scope.add.price,"additional_field":adf}})
                   .success(function(data, status){
                            
                            elementid = data.id;
                            editData = "Edit";
                            $http({method: "PUT", url:"http://build.myappbuilder.com/api/elements/tags.json", cache: false, params:{"api_key":appkey,"element_id":elementid,"value":amenities}})
                            .success(function(data, status){
                            
//                                     console.log(JSON.stringify(contentntarr));
                                     
                                     if($scope.cust){
                                     for(var j=0;j<contentntarr.custom_values.length;j++){
                                     var custvalues;
                                     if($scope.models[j]==''){
                                     custvalues='';
                                     }
                                     else{
                                     
                                     for(var i=0;i<$scope.models[j].length;i++){
                                     //                   amenities.push(response[i].name);
                                     if(i==0){
                                     custvalues = $scope.models[j][i].text;
                                     }
                                     else{
                                     custvalues = custvalues+','+$scope.models[j][i].text;
                                     }
                                     }
                                     }
                                     
                                     $http({method: "PUT", url:"http://build.myappbuilder.com/api/custom_values.json", cache: false, params:{"api_key":appkey,"id":contentntarr.custom_values[j].id,"value":custvalues}})
                                     .success(function(data, status){
                                              
                                              })
                                     .error(function(data, status) {
                                            alert(JSON.stringify(data));
                                            $ionicLoading.hide();
                                            });
                                     
                                     }
                                     }
                                     
                                     $http({method: "GET", url:"http://build.myappbuilder.com/api/buttons.json", cache: false, params:{"api_key":appkey,"id":categoryid}})
                                     .success(function(data, status){
                                              
                                              $ionicLoading.hide();
                                              
                                              elementarr = data.elements;
                                              $scope.items = elementarr;
                                              $state.go('admin');
                                              
                                              })
                                     .error(function(data, status) {
                                            alert(JSON.stringify(data));
                                            $ionicLoading.hide();
                                            });
                                     
                                     })
                            .error(function(data, status) {
                                   alert(JSON.stringify(data));
                                   $ionicLoading.hide();
                                   });
                   
                            
                            })
                   .error(function(data, status) {
                          
                          alert(JSON.stringify(data));
                          $ionicLoading.hide();
                          });
                   
                   }
                   else{
                   $http({method: "POST", url:"http://build.myappbuilder.com/api/elements/create_default.json", cache: false, params:{"api_key":appkey,"button_id":categoryid,"title":$scope.add.title,"text":$scope.add.text,"price":$scope.add.price,"additional_field":adf}})
                   .success(function(data, status){
                            
                            elementid = data.id;
                            editData = "Edit";
                            
                            $http({method: "POST", url:"http://build.myappbuilder.com/api/elements/tags.json", cache: false, params:{"api_key":appkey,"id":elementid,"tags":amenities}})
                            .success(function(data, status){
                                     
                                     $http({method: "GET", url:"http://build.myappbuilder.com/api/buttons.json", cache: false, params:{"api_key":appkey,"id":categoryid}})
                                     .success(function(data, status){
                                              
                                              $ionicLoading.hide();
                                              
                                              elementarr = data.elements;
                                              $scope.items = elementarr;
                                              $state.go('admin');
                                              
                                              })
                                     .error(function(data, status) {
                                            alert(JSON.stringify(data));
                                            $ionicLoading.hide();
                                            });
                                     
                                     })
                            .error(function(data, status) {
                                   alert(JSON.stringify(data));
                                   $ionicLoading.hide();
                                   });
                            
                            
                            
                            
                            })
                   .error(function(data, status) {
                         
                          alert(JSON.stringify(data));
                          $ionicLoading.hide();
                          });
                   }
                   }
                   
                   
                   
                   $scope.imagelist = function(){
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                      });
                   
                   $.ajax({
                          type: "GET",
                          url: "http://build.myappbuilder.com/api/buttons.json",
                          data:{'api_key':appkey},
                          cache: false,
                          success:function(response){
                          $ionicLoading.hide();
                          console.log("*************"+JSON.stringify(response));
                          listarr = response;
                          contentVideo = '';
                          buttonDeleteArray = [];
                          //                          navigator.notification.alert(chapterTitle+','+contentTitle);
                          for (var i = 0; i < listarr.length; i++) {
                          for (var j = 0; j < listarr[i].elements.length; j++) {
                          
                          if(elementid == listarr[i].elements[j].id){
                          if(listarr[i].first_paragraph_type == "default"){
                          $scope.buttonDeleteArray = listarr[i].elements[j].images;
                          
                          
                          }
                          }
                          }
                          }
                          
                          $state.reload();
                          
                          },
                          error:function(error,status){
                          $ionicLoading.hide();
                          var error = JSON.parse(error.responseText);
                          navigator.notification.alert(error.error, function(){}, 'Product', 'OK' );
                          }
                          });
                   };
                   
                   $scope.buttonDeletevideo = function(btnId){
                   var confirmPopup = $ionicPopup.confirm({
                                                          title: 'Product',
                                                          template: 'Are you sure you want to delete this image?'
                                                          });
                   confirmPopup.then(function(res) {
                                     if(res) {
                                     console.log('You are sure');
                                     
                                     $ionicLoading.show({
                                                        template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                                        });
                                     $.ajax({
                                            type: "DELETE",
                                            url: "http://build.myappbuilder.com/api/elements/images.json",
                                            data: {"api_key":appkey,"element_id":elementid,"id":categoryid},
                                            cache: false,
                                            success:function(response){
                                            $ionicLoading.hide();
                                            $scope.imagelist();
                                            
                                            },
                                            error:function(error,status){
                                            $ionicLoading.hide();
                                            var error = JSON.parse(error.responseText);
                                            navigator.notification.alert(error.error, function(){}, 'Product', 'OK' );
                                            }
                                            });
                                     } else {
                                     console.log('You are not sure');
                                     }
                                     });
                   
                   }
                   
                   });

control.controller('EditproductCtrl',function($scope, $ionicLoading, $state, $http, $ionicSideMenuDelegate, $ionicPopup,$window,$ionicModal,$ionicActionSheet){
                   $scope.device = device;
                   $scope.title = title;
                   $scope.Checked = false;
                   $scope.add = {};
                   $scope.models = {};
                   $scope.scval = scval;
                   
                   $scope.cust = contentntarr.custom_values;
                   if(contentntarr.custom_values!=null){
                   
                   $scope.cust = contentntarr.custom_values;
                   for(var i=0; i<contentntarr.custom_values.length; i++){
                   var custarr = [];
                   var res = (contentntarr.custom_values[i].value).split(",");
                   for(var j=0; j<res.length; j++){
                   custarr.push(res[j]);
                   }
                   $scope.models[i]= custarr;
                   }
                   }
                   console.log(amenities);
                   console.log($scope.models[0]);
                   elementid = contentntarr.id;
                   $scope.add.title = contentntarr.title;
                   $scope.add.price = contentntarr.price;
                   $scope.add.elementTag = amenities;
                   if(contentntarr.additional_field){
                   if(contentntarr.additional_field.indexOf("*")!=-1){
                   var str = contentntarr.additional_field.split('*');
                   $scope.add.w = str[1];
                   $scope.add.l = str[2];
                   $scope.add.h = str[3];
                   $scope.add.b = str[4];
                   }
                   }
                   
                   $scope.add.text = htmlToPlaintext(contentntarr.text).trim();
//                   alert(elementid+'-'+$scope.add.title+'-'+$scope.add.text+'-'+$scope.add.price);
                   $scope.buttonDeleteArray = contentntarr.images;
                   
                   function htmlToPlaintext(text) {
                   return String(text).replace(/<[^>]+>/gm, '');
                   }
                   
                   $ionicModal.fromTemplateUrl('templates/new_video.html',{
                                               scope: $scope,
                                               animation: 'slide-in-up'
                                               }).then(function(modal) {
                                                       $scope.videoModal = modal;
                                                       });
                   
                   $scope.pricecng = function(val){
                   $scope.add.price = val;
                   };
                   
                   $scope.contentback = function(){
                   $state.go('admin');
                   };
                   
                   $scope.showActionsheet = function() {
                   
                   $ionicActionSheet.show({
                                          titleText: 'Choose',
                                          buttons: [
                                                    { text: 'Camera' },
                                                    { text: 'PhotoAlbum' },
                                                    ],
                                          
                                          cancelText: 'Cancel',
                                          cancel: function() {
                                          console.log('CANCELLED');
                                          },
                                          buttonClicked: function(index) {
                                          console.log('BUTTON CLICKED', index);
                                          if(index==0){
                                          navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
                                                                      destinationType: Camera.DestinationType.FILE_URI,sourceType : Camera.PictureSourceType.CAMERA,saveToPhotoAlbum: false,correctOrientation:true});
                                          return true;
                                          }
                                          else{
                                          navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
                                                                      destinationType: Camera.DestinationType.FILE_URI,sourceType : Camera.PictureSourceType.PHOTOLIBRARY,saveToPhotoAlbum: false,correctOrientation:true});
                                          return true;
                                          }
                                          
                                          }
                                          
                                          });
                   };
                   
                   function onSuccess(imageURI) {
                   image = imageURI;
                   $('.file-input-wrapper6 > .btn-file-input6').css('background-image', 'url('+imageURI+')');
                   }
                   
                   function onFail(message) {
                   navigator.notification.alert('Failed because: ' + message);
                   }
                   
                   
                   $scope.create_video = function(){
                   //                   navigator.notification.alert("error11: "+$('input[name="video"]').get(0).files[0]);
                   
                   if(image){
                   
                   for(var i=0;i<listarr.length;i++){
                   
                   if(listarr[i].id == categoryid ){
                   
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                      });
                   
                   cordova.exec(function(response){
                                console.log(JSON.stringify(response));
                                //                                $('#video').val('');
                                $ionicModal.fromTemplateUrl('templates/new_video.html',{
                                                            scope: $scope,
                                                            animation: 'slide-in-up'
                                                            }).then(function(modal) {
                                                                    $scope.videoModal = modal;
                                                                    });
                                $scope.videoModal.hide();
                                image = undefined;
                                $ionicLoading.hide();
                                $scope.imagelist();
                                }, function(error){
                                $ionicLoading.hide();
                                var error = JSON.parse(error.responseText);
                                navigator.notification.alert(error.error, function(){}, 'Content', 'OK' );
                                }, "ImageCompress", "imageCompress", ["320", "480", "image", image, "http://build.myappbuilder.com/api/elements/images.json?", "POST", { "api_key": appkey,"id":elementid}]);
                   
                   
                   }
                   }
                   }else{
                   
                   
                   var alertPopup = $ionicPopup.alert({
                                                      title: 'Shopping App',
                                                      template: 'Please Choose Images!'
                                                      });
                   alertPopup.then(function(res) {
                                   //console.log('Thank you for not eating my delicious ice cream cone');
                                   });
                   
                   }
                   }
                   
                   $scope.videoUploadFtn = function(){
                   if($scope.add.title){
                   
                   $scope.videoModal.show();
                   
                   }else{
                   
                   $ionicPopup.alert({
                                     title: 'Product',
                                     content: 'Please Enter Your Product Title!'
                                     }).then(function(res) {
                                             console.log('Test Alert Box');
                                             });
                   
                   }
                   
                   };
                   
                   $scope.imagelist = function(){
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                      });
                   
                   $.ajax({
                          type: "GET",
                          url: "http://build.myappbuilder.com/api/buttons.json",
                          data:{'api_key':appkey},
                          cache: false,
                          success:function(response){
                          $ionicLoading.hide();
                          console.log("*************"+JSON.stringify(response));
                          listarr = response;
                          contentVideo = '';
                          buttonDeleteArray = [];
                          //                          navigator.notification.alert(chapterTitle+','+contentTitle);
                          for (var i = 0; i < listarr.length; i++) {
                          for (var j = 0; j < listarr[i].elements.length; j++) {
                          
                          if(elementid == listarr[i].elements[j].id){
                          if(listarr[i].first_paragraph_type == "default"){
                          $scope.buttonDeleteArray = listarr[i].elements[j].images;
                          $scope.cust = listarr[i].elements[j].custom_values;
                          
                          }
                          }
                          }
                          }
                          
                          $state.reload();
                          
                          },
                          error:function(error,status){
                          $ionicLoading.hide();
                          var error = JSON.parse(error.responseText);
                          navigator.notification.alert(error.error, function(){}, 'Product', 'OK' );
                          }
                          });
                   }
                   
                   $scope.buttonDeletevideo = function(btnId){
                   var confirmPopup = $ionicPopup.confirm({
                                                          title: 'Product',
                                                          template: 'Are you sure you want to delete this image?'
                                                          });
                   confirmPopup.then(function(res) {
                                     if(res) {
                                     console.log('You are sure');
                                     
                                     $ionicLoading.show({
                                                        template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                                        });
                                     $.ajax({
                                            type: "DELETE",
                                            url: "http://build.myappbuilder.com/api/elements/images.json",
                                            data: {"api_key":appkey,"element_id":elementid,"id":btnId},
                                            cache: false,
                                            success:function(response){
                                            $ionicLoading.hide();
                                            $scope.imagelist();
                                            
                                            },
                                            error:function(error,status){
                                            $ionicLoading.hide();
                                            var error = JSON.parse(error.responseText);
                                            navigator.notification.alert(error.error, function(){}, 'Product', 'OK' );
                                            }
                                            });
                                     } else {
                                     console.log('You are not sure');
                                     }
                                     });
                   
                   };
                   
                   $scope.Deletecust = function(val){
                   var confirmPopup = $ionicPopup.confirm({
                                                          title: $scope.title,
                                                          template: 'Are you sure do you want to remove this Field?'
                                                          });
                   confirmPopup.then(function(res) {
                                     if(res) {
                                     console.log('You are sure');
                                     
                                     $ionicLoading.show({
                                                        template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                                        });
                                     $.ajax({
                                            type: "DELETE",
                                            url: "http://build.myappbuilder.com/api/custom_values.json",
                                            data: {"api_key":appkey,"id":val},
                                            cache: false,
                                            success:function(response){
                                            $ionicLoading.hide();
                                            $scope.imagelist();
                                            
                                            },
                                            error:function(error,status){
                                            $ionicLoading.hide();
                                            var error = JSON.parse(error.responseText);
                                            navigator.notification.alert(error.error, function(){}, 'Product', 'OK' );
                                            }
                                            });
                                     } else {
                                     console.log('You are not sure');
                                     }
                                     });
                   
                   };
                   
                   $scope.addfield = function(){
                   $scope.data = {}
                  
                   // An elaborate, custom popup
                   var myPopup = $ionicPopup.show({
                                                  template: '<input type="text" ng-model="data.title">',
                                                  title: 'Please Enter Caption',
                                                  subTitle: '',
                                                  scope: $scope,
                                                  buttons: [
                                                            { text: 'Cancel' },
                                                            {
                                                            text: '<b>OK</b>',
                                                            type: 'button-positive',
                                                            onTap: function(e) {
                                                            if (!$scope.data.title) {
                                                            //don't allow the user to close unless he enters wifi password
                                                            e.preventDefault();
                                                            } else {
                                                            $ionicLoading.show({
                                                                               template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                                                               });
                                                           
                                                            $http({method: "POST", url:"http://build.myappbuilder.com/api/custom_values.json", cache: false, params:{"api_key":appkey,"element_id":elementid,"title":$scope.data.title,"value":""}})
                                                            .success(function(data, status){
                                                                     
                                                                     $http({method: "GET", url:"http://build.myappbuilder.com/api/elements.json", cache: false, params:{"api_key":appkey,"id":elementid}})
                                                                     .success(function(data, status){
                                                                              $ionicLoading.hide();
                                                                              contentntarr = data;
                                                                              $scope.content = contentntarr;
                                                                              $scope.cust = contentntarr.custom_values;
                                                                              $state.reload();
                                                                              })
                                                                     .error(function(data, status) {
                                                                            alert(JSON.stringify(data));
                                                                            $ionicLoading.hide();
                                                                            });
                                                                     })
                                                            .error(function(data, status) {
                                                                   alert(JSON.stringify(data));
                                                                   $ionicLoading.hide();
                                                                   });
                                                            }
                                                            }
                                                            },
                                                            ]
                                                  });
                   myPopup.then(function(res) {
                                console.log('Tapped!', res);
                                });
                   
                   };
                   
                   $scope.editproduct = function(){
                   
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                      });
                   
                   
                   if(scval=="UPS"){
                   var adf = 'UPS*'+$scope.add.w+'*'+$scope.add.l+'*'+$scope.add.h+'*'+$scope.add.b;
                   }
                   
                   
                   $http({method: "PUT", url:"http://build.myappbuilder.com/api/elements/update_default.json", cache: false, params:{"api_key":appkey,"id":elementid,"title":$scope.add.title,"text":$scope.add.text,"price":$scope.add.price,"additional_field":adf}})
                   .success(function(data, status){
                            elementid = data.id;
                            
                        if(scval=="BS"){
                            if($scope.add.elementTag==''){
                            amenities='';
                            }
                            else{
                            for(var i=0;i<$scope.add.elementTag.length;i++){
                            //                   amenities.push(response[i].name);
                            if(i==0){
                            amenities = $scope.add.elementTag[i].text;
                            }
                            else{
                            amenities = amenities+','+$scope.add.elementTag[i].text;
                            }
                            }
                            }
                            $http({method: "PUT", url:"http://build.myappbuilder.com/api/elements/tags.json", cache: false, params:{"api_key":appkey,"element_id":elementid,"value":amenities}})
                            .success(function(data, status){
                                     
                                     })
                            .error(function(data, status) {
                                   alert(JSON.stringify(data));
                                   $ionicLoading.hide();
                                   });
                            }
                            
                                     if(contentntarr.custom_values!=null){
                                     for(var j=0;j<contentntarr.custom_values.length;j++){
                                     var custvalues;
                                     if($scope.models[j]==''){
                                     custvalues='';
                                     }
                                     else{
                                     
                                     for(var i=0;i<$scope.models[j].length;i++){
                                     //                   amenities.push(response[i].name);
                                     if(i==0){
                                     custvalues = $scope.models[j][i].text;
                                     }
                                     else{
                                     custvalues = custvalues+','+$scope.models[j][i].text;
                                     }
                                     }
                                     }
                                     $http({method: "PUT", url:"http://build.myappbuilder.com/api/custom_values.json", cache: false, params:{"api_key":appkey,"id":contentntarr.custom_values[j].id,"value":custvalues}})
                                     .success(function(data, status){
                                              
                                              })
                                     .error(function(data, status) {
                                            alert(JSON.stringify(data));
                                            $ionicLoading.hide();
                                            });
                                     
                                     }
                                     }
                                     
                                     $http({method: "GET", url:"http://build.myappbuilder.com/api/buttons.json", cache: false, params:{"api_key":appkey,"id":categoryid}})
                                     .success(function(data, status){
                                              
                                              $ionicLoading.hide();
                                              
                                              elementarr = data.elements;
                                              $scope.items = elementarr;
                                              
                                              $state.go('admin');
                                              
                                              })
                                     .error(function(data, status) {
                                            alert(JSON.stringify(data));
                                            $ionicLoading.hide();
                                            });
                                     
                                     
                            
                            
                            })
                   .error(function(data, status) {
                          
                          alert(JSON.stringify(data));
                          $ionicLoading.hide();
                          });
                   
                   
                   };
                   
                   $scope.deleteproduct = function(){
                   var confirmPopup = $ionicPopup.confirm({
                                                          title: 'Product',
                                                          template: 'Are you sure you want to remove this Product?'
                                                          });
                   confirmPopup.then(function(res) {
                                     if(res) {
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                      });
                   
                   
                   $http({method: "DELETE", url:"http://build.myappbuilder.com/api/elements.json", cache: false, params:{"api_key":appkey,"id":elementid}})
                   .success(function(data, status){
                            elementid = data.id;
                            
                            $http({method: "GET", url:"http://build.myappbuilder.com/api/buttons.json", cache: false, params:{"api_key":appkey,"id":categoryid}})
                            .success(function(data, status){
                                     
                                     $ionicLoading.hide();
                                     
                                     elementarr = data.elements;
                                     $scope.items = elementarr;
                                     $state.go('admin');
                                     
                                     })
                            .error(function(data, status) {
                                   alert(JSON.stringify(data));
                                   $ionicLoading.hide();
                                   });
                            
                            
                            })
                   .error(function(data, status) {
                          
                          alert(JSON.stringify(data));
                          $ionicLoading.hide();
                          });
                                     
                                     } else {
                                     console.log('You are not sure');
                                     }
                                     });
                   };
                   
                   });
var orderpage="pending";
control.controller('OrderlistCtrl', function($scope, $ionicLoading, $state, $http, $ionicSideMenuDelegate, $ionicPopup,$window) {
                   $scope.device = device;
                   
//                   $scope.category = listarr;
                   if(orderpage=="pending"){
                   $scope.orders = pendingarr;
                   }
                   else if(orderpage=="delivered"){
                   $scope.orders = deliveredarr;
                   }
                   else{
                   $scope.orders = returnedarr;
                   }
                   
                   $scope.categoryid = categoryid;
//                   $scope.title = title;
//                   $scope.cartlen = cartitemsarr.length;
//                   $scope.items = elementarr;
                   $scope.page=orderpage;
                   
                   $scope.contentback = function(){
                   $state.go('admin');
                   };
                   
                   
                   $scope.pending = function(){
                   $scope.page="pending";
                   orderpage=$scope.page;
                   $scope.orders = pendingarr;
                   $state.reload();
                   };
                   $scope.delivered = function(){
                   $scope.page="delivered";
                   orderpage=$scope.page;
                   $scope.orders = deliveredarr;
                   $state.reload();
                   };
                   $scope.returned = function(){
                   $scope.page="returned";
                   orderpage=$scope.page;
                   $scope.orders = returnedarr;
                   $state.reload();
                   };
                   
                   $scope.ordersClickFtn = function(val1){
                   order_bid = val1;
                   orderelementarr = [];
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
                                      animation: 'fade-in',
                                      showBackdrop: true,
                                      maxWidth: 200,
                                      showDelay: 0
                                      });
                   $http({method: "GET", url:"http://build.myappbuilder.com/api/buttons.json", cache: false, params:{"api_key":orderkey,"id":order_bid}})
                   .success(function(data, status){
                            
                            $ionicLoading.hide();
                            //                            $ionicSideMenuDelegate.toggleRight();
                            orderelementarr = data.elements;
                            //                            $scope.orderitems = orderelementarr;
                            
                            $state.go('order');
                            
                            })
                   .error(function(data, status) {
                          alert(JSON.stringify(data));
                          $ionicLoading.hide();
                          });
                   };
                   
                   });

control.controller('OrderCtrl',function($scope,$state,$ionicLoading,$ionicModal,$http,$sce){
//                   alert(JSON.stringify(orderelementarr));
                   $scope.device = device;
                   
                   $scope.orderitems = $sce.trustAsHtml(orderelementarr[0].text);
                   $scope.status = orderelementarr[0].additional_field;
                   order_eid = orderelementarr[0].id;
                   $scope.contentback = function(){
                   $state.go('orderlist');
                   };
                   
                   $scope.save = function(val){
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                      });
                   $http({method: "PUT", url:"http://build.myappbuilder.com/api/elements/update_default.json", cache: false, params:{"api_key":orderkey,"id":order_eid,"additional_field":val}})
                   .success(function(data, status){
                            
                           
//                            $http({method: "GET", url:"http://build.myappbuilder.com/api/buttons.json", cache: false, params:{"api_key":orderkey,"id":order_bid}})
//                            .success(function(data, status){
//                                     
//                                     $ionicLoading.hide();
//                                     orderelementarr = data.elements;
//                                     $state.go('admin');
//                                     
//                                     })
//                            .error(function(data, status) {
//                                   alert(JSON.stringify(data));
//                                   $ionicLoading.hide();
//                                   });
                            pendingarr = [];
                            deliveredarr = [];
                            returnedarr = [];
                            $http({method: "GET", url:"http://build.myappbuilder.com/api/buttons.json", cache: false, params:{"api_key":orderkey}})
                            .success(function(data, status){
                                     
                                     $ionicLoading.hide();
                                     orderarr = data;
                                     for(i=0;i<orderarr.length;i++){
                                     if(orderarr[i].elements[0]){
                                     if(orderarr[i].elements[0].additional_field=="Pending"){
                                     pendingarr.push(orderarr[i]);
                                     }
                                     else if(orderarr[i].elements[0].additional_field=="Delivered"){
                                     deliveredarr.push(orderarr[i]);
                                     }
                                     else{
                                     returnedarr.push(orderarr[i]);
                                     }
                                     }
                                     }
                                     $state.go('admin');
                                     
                                     })
                            .error(function(data, status) {
                                   alert(JSON.stringify(data));
                                   $ionicLoading.hide();
                                   });
                            
                            
                            
                            })
                   .error(function(data, status) {
                          alert(JSON.stringify(data));
                          $ionicLoading.hide();
                          });
                   };
                   
                   $scope.appwall = function(){
                   admin=1;
                   $state.go('buttonAppWall');
                   };
                   
                   });

control.controller('listCtrl',function($scope,$state,$ionicLoading,$ionicModal,$http){
                   
                   });

control.controller("buttonAppWallCtrl",function($scope,$state,$ionicLoading,$http,$ionicActionSheet){
//                   $scope.bar_color=barcolor;
//                   $scope.appTitle = appTitle;
                   $scope.device = device;
                   $scope.appwallBack = function(){
                   if(admin==1){
                   $state.go('order');
                   }
                   else{
                   $state.go('history');
                   }
                   }
                   
                   messages = '';
//                   window.wizSpinner.show(options);
                   
                   $.ajax({
                          type: "GET",
                          url: "http://build.myappbuilder.com/api/messages.json",
                          data:{'api_key':orderkey,'button_id':order_bid},
                          cache: false,
                          success:function(response){
//                          window.wizSpinner.hide();
                          messages = response;
                          ButtonAppWallPostFun();
                          },
                          error:function(error,status){
//                          window.wizSpinner.hide();
                          var error = JSON.parse(error.responseText);
                          if(error.error == "Unauthorized"){
                          navigator.notification.alert("Please Login")
                          }else {
                          navigator.notification.alert("Login Error!");
                          }
                          }
                          });
                   
                   
                   
                   });


function ButtonAppWallPostFun(){
    
    var bodyMgs = '';
    var mgs_id = [];
    var body = [];
    var created_at = [];
    var parent_id = [];
    var element_name = [];
    var button_name =[];
    var sender_name = [];
    var sender_id = [];
    var sender_avatar_url = [];
    var replyappend ='';
    var z = 0;
    var p = 0;
    //alert("msgLen:"+messages.length);
    if(messages.length > 0){
        $.each( messages, function( key, value ) {
               $.each( value, function( k, v ) {
                      if(k == "id"){
                      mgs_id.push(v);
                      }else if(k == "created_at"){
                      created_at.push(v);
                      }else if(k == "parent_id"){
                      parent_id.push(v);
                      }else if(k == "body"){
                      body.push(v);
                      }else if(k == "element_name"){
                      element_name.push(v);
                      }else if(k == "button_name"){
                      button_name.push(v);
                      }else if(k == "sender_name"){
                      sender_name.push(v);
                      }else if(k == "sender_id"){
                      sender_id.push(v);
                      }else if(k == 'sender_avatar_url'){
                      if(v == null){
                      v = 'img/face.png';
                      }
                      sender_avatar_url.push(v);
                      }
                      });
               });
    }else{
        bodyMgs = '<a><p align="justify" class="divback2" ><font color="black" size="2">No Result Found</font></p></a>';
    }
    
    for(var i=0;i<body.length;i++){
        
        if(parent_id[i] == null){
            p=0;
            for(var j=0;j<body.length;j++){
                p = p+1;
                if(mgs_id[i] == parent_id[j]){
                    z = -1;
                    var k = parseInt(p)+z;
                    if(userid1 == sender_id[k]){
                        replyappend +='<div class="row"><div class="col col-80 divback1"><div class="row"><div class="col col-50" align="left">'+sender_name[k]+'</div><div class="col col-50" align="right"><i class="icon ion-clock"></i>  '+relative_time(created_at[k])+'</div></div><hr><div><p align="justify">'+body[k]+'</p><hr></div><div style="width:100%;"><div style="width:50%;"><div style="width:100%;"><div style="width:50%;float:left;"><img src="img/delete.png" id="delete-'+k+'" class="ButtondeleteMgs" style="width:100%;height:auto;"/></div></div></div></div></div><div class="col col-20"><img src="'+sender_avatar_url[k]+'" style="width:75%;height:auto;"/></div></div><br/>';
                    }else{
                        replyappend +='<div class="row"><div class="col col-80 divback1"><div class="row"><div class="col col-50" align="left">'+sender_name[k]+'</div><div class="col col-50" align="right"><i class="icon ion-clock"></i>  '+relative_time(created_at[k])+'</div></div><hr><div><p align="justify">'+body[k]+'</p></div><div class="row"></div></div><div class="col col-20"><img src="'+sender_avatar_url[k]+'" style="width:75%;height:auto;"/></div></div><br/>';
                    }
                }else{
                    
                }
            }
            
            if(userid1 == sender_id[i]){
                bodyMgs +='<div class="row"><div class="col col-20"><img src="'+sender_avatar_url[i]+'" style="width:75%;height:auto;"/></div><div class="col col-80 divback"><div class="row"><div class="col col-50" align="left">'+sender_name[i]+'</div><div class="col col-50" align="right"><i class="icon ion-clock"></i>  '+relative_time(created_at[i])+'</div></div><hr><div><p align="justify">'+body[i]+'</p><hr></div><div style="width:100%;"><div style="width:50%;"><div style="width:100%;"><div style="width:50%;float:left;" ><img src="img/reply.png" id="reply-'+i+'" class="ButtonreplyMgs" style="width:100%;height:auto;"/></div><div style="width:50%;float:left;" ><img src="img/delete.png" id="delete-'+i+'" class="ButtondeleteMgs" style="width:100%;height:auto;"/></div></div></div></div></div></div><div style="width:100%;"><div style="width:20%;float:left;opacity:0">Hello</div><div style="width:80%;float:left;"><div class="ButtonreplyHide bar bar-header item-input-inset" id="ButtonreplyHide'+i+'" ><label class="item-input-wrapper"><input id="Buttonreplymessage'+i+'" type="text" id="postmessage" placeholder="Enter Your Reply...."></label><button id="textReplyMgs" onclick="javascript:ButtonreplymessageFun();" class="button button-clear button-positive"><img src="img/btn_reply.png" style="width:70px;height:auto;"/></button></div></div></div><br /><div class="appendreplydata">'+replyappend+'</div>';
            }
            //            else{
            //                bodyMgs +='<div class="row"><div class="col col-20"><img src="'+sender_avatar_url[i]+'" style="width:100%;height:auto;"/></div><div class="col col-80 divback"><div class="row"><div class="col col-50" align="left">'+sender_name[i]+'</div><div class="col col-50" align="right"><i class="icon ion-clock"></i>  '+relative_time(created_at[i])+'</div></div><div align="center"><font color="white" size="2" style="background-color:#33CCFF">&nbsp;'+button_name[i]+'&nbsp;</font></div><hr><div><p align="justify">'+body[i]+'</p><hr></div><div style="width:100%"><div style="width:50%;float:left;"><div style="width:100%"><div style="width:50%;float:left;" ><img src="img/reply.png" id="reply-'+i+'" class="ButtonreplyMgs" style="width:100%;height:auto;"/></div></div></div></div></div></div><div style="width:100%;"><div style="width:20%;float:left;opacity:0">Hello</div><div style="width:80%;float:left;"><div class="ButtonreplyHide bar bar-header item-input-inset" id="ButtonreplyHide'+i+'" ><label class="item-input-wrapper"><input id="Buttonreplymessage'+i+'" type="text" id="postmessage" placeholder="Enter Your Reply...."></label><button id="textReplyMgs" onclick="javascript:ButtonreplymessageFun();" class="button button-clear button-positive"><img src="img/btn_reply.png" style="width:70px;height:auto;"/></button></div></div></div><br /><div class="appendreplydata">'+replyappend+'</div>';
            //            }
            else{
                bodyMgs +='<div class="row"><div class="col col-20"><img src="'+sender_avatar_url[i]+'" style="width:75%;height:auto;"/></div><div class="col col-80 divback"><div class="row"><div class="col col-50" align="left">'+sender_name[i]+'</div><div class="col col-50" align="right"><i class="icon ion-clock"></i>  '+relative_time(created_at[i])+'</div></div><hr><div><p align="justify">'+body[i]+'</p><hr></div></div></div><br /><div class="appendreplydata">'+replyappend+'</div>';
            }
            replyappend ='';
            
        }else{
            
        }
    }
    
    $('#ButtonappwallListview').append(bodyMgs).trigger("create");
    
    if($('.ButtonreplyHide').is(':visible')){
        $('.ButtonreplyHide').toggle();
    }else{
        
    }
    
    $(".ButtonreplyMgs").click(function(){
                               replyMgsNo1 = (this.id).split('-');
                               replyMgsNo = mgs_id[replyMgsNo1[1]];
                               var replyHide = "ButtonreplyHide"+replyMgsNo1[1];
                               $('#'+replyHide).toggle();
                               });
    
    $(".ButtondeleteMgs").click(function(){
                                var deleteMgsNo = (this.id).split('-');
//                                window.wizSpinner.show(options);
                                if(userid1){
                                $.ajax({url:'http://build.myappbuilder.com/api/messages.json?api_key='+orderkey+'&message_id='+mgs_id[deleteMgsNo[1]], type:"DELETE",data:{},
                                       success:function(response){
                                       $('#ButtonappwallListview').empty();
                                       $.ajax({
                                              type: "GET",
                                              url: "http://build.myappbuilder.com/api/messages.json",
                                              data:{'api_key':orderkey,'button_id':order_bid},
                                              cache: false,
                                              success:function(response){
//                                              window.wizSpinner.hide();
                                              messages = response;
                                              ButtonAppWallPostFun();
                                              },
                                              error:function(error,status){
//                                              window.wizSpinner.hide();
                                              
                                              var error = JSON.parse(error.responseText);
                                              if(error.error == "Unauthorized"){
                                              navigator.notification.alert("Please Login")
                                              }else {
                                              navigator.notification.alert("Login Error!");
                                              }
                                              }
                                              });
                                       },
                                       error:function(){
//                                       window.wizSpinner.hide();
                                       alert("Failure");}
                                       });
                                }else{
                                
                                }
                                });
    
}

function ButtonreplymessageFun(){
    if(userid1){
        var replyarray = "Buttonreplymessage"+replyMgsNo1[1];
        var replymessage = $('#'+replyarray).val();
        if(replymessage == ''){
            navigator.notification.alert("Please Enter Your Reply...");
        }else{
//            window.wizSpinner.show(options);
            $.ajax({url:'http://build.myappbuilder.com/api/messages.json', type:"POST",data:{"message[body]":replymessage,"message[parent_id]":replyMgsNo,"message[sender_id]":userid1,"api_key":orderkey,"button_id":order_bid},
                   success:function(response){
                   $('#ButtonappwallListview').empty();
                   $.ajax({
                          type: "GET",
                          url: "http://build.myappbuilder.com/api/messages.json",
                          data:{'api_key':orderkey,'button_id':order_bid},
                          cache: false,
                          success:function(response){
//                          window.wizSpinner.hide();
                          $('#'+replyarray).val('');
                          messages = response;
                          ButtonAppWallPostFun();
                          },
                          error:function(error,status){
//                          window.wizSpinner.hide();
                          
                          var error = JSON.parse(error.responseText);
                          if(error.error == "Unauthorized"){
                          navigator.notification.alert("Please Login")
                          }else {
                          navigator.notification.alert("Login Error!");
                          }
                          }
                          });
                   },
                   error:function(){
//                   window.wizSpinner.hide();
                   alert("Failure");}
                   });
        }
    }else{
        
    }
    
}



function ButtonpostmessageFun(){
    if(userid1){
        var postmessage = $('#Buttonpostmessage').val();
        if(postmessage == ''){
            navigator.notification.alert("Please Enter Your Comments...");
        }else{
//            window.wizSpinner.show(options);
            $.ajax({url:'http://build.myappbuilder.com/api/messages.json', type:"POST",data:{"message[body]":postmessage,"message[sender_id]":userid1,"api_key":orderkey,"button_id":order_bid},
                   success:function(response){
                   $('#ButtonappwallListview').empty();
                   $.ajax({
                          type: "GET",
                          url: "http://build.myappbuilder.com/api/messages.json",
                          data:{'api_key':orderkey,'button_id':order_bid},
                          cache: false,
                          success:function(response){
//                          window.wizSpinner.hide();
                          $('#Buttonpostmessage').val('');
                          messages = response;
                          ButtonAppWallPostFun();
                          },
                          error:function(error,status){
//                          window.wizSpinner.hide();
                          
                          var error = JSON.parse(error.responseText);
                          if(error.error == "Unauthorized"){
                          navigator.notification.alert("Please Login")
                          }else {
                          navigator.notification.alert("Login Error!");
                          }
                          }
                          });
                   },
                   error:function(){
//                   window.wizSpinner.hide();
                   alert(" Network Failure ");}
                   });
        }
    }else{
        
    }
}

function relative_time(date_str) {
    if (!date_str) {return;}
    date_str = $.trim(date_str);
    date_str = date_str.replace(/\.\d\d\d+/,""); // remove the milliseconds
    date_str = date_str.replace(/-/,"/").replace(/-/,"/"); //substitute - with /
    date_str = date_str.replace(/T/," ").replace(/Z/," UTC"); //remove T and substitute Z with UTC
    date_str = date_str.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"); // +08:00 -> +0800
    var parsed_date = new Date(date_str);
    var relative_to = (arguments.length > 1) ? arguments[1] : new Date(); //defines relative to what ..default is now
    var delta = parseInt((relative_to.getTime()-parsed_date)/1000);
    delta=(delta<2)?2:delta;
    var r = '';
    if (delta < 60) {
        r = delta + ' secs ago';
    } else if(delta < 120) {
        r = 'a min ago';
    } else if(delta < (45*60)) {
        r = (parseInt(delta / 60, 10)).toString() + ' mins ago';
    } else if(delta < (2*60*60)) {
        r = 'an hr ago';
    } else if(delta < (24*60*60)) {
        r = '' + (parseInt(delta / 3600, 10)).toString() + ' hrs ago';
    } else if(delta < (48*60*60)) {
        r = 'a day ago';
    } else {
        r = (parseInt(delta / 86400, 10)).toString() + ' days ago';
    }
    return '' + r;
}