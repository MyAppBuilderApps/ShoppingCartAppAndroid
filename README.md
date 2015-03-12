**Apache Cordova Shopping Android Application**

This is used as the default app template when creating new projects to capture new potential customers and sell more products.This Mobile friendly design makes it easy for customers to shop from the app.

**Versions and Tags**

Sample app is built and tested with Cordova 3.5.0 Android and we only support Cordova version greater than 3.0.

**Required reading**

Please see the Getting Started With android for PhoneGap guide [here](http://docs.phonegap.com/en/3.5.0/guide_platforms_android_index.md.html#Android%20Platform%20Guide).

###  **_App Controller_**  ##########

  www folder

i) index.html, templates(folder)

ii) js/app.js

iii)js/key.txt

iv) js/controller.js

######### **_key.txt_** #############

Before login to the app create an app in the api to generate an app key(api_key). Place the key in the key.txt file for login else older app will be executed.

   $http({method: "GET", url:"http://build.myappbuilder.com/api/buttons.json", cache: false, params:{"api_key":orderkey}})

          .success(function(data, status){

            })

          .error(function(data, status) {

            });                                       

                                   

orderkey : To maintain the products history orderkey is needed. Generate an orderkey in the api in separate app.

######### **_Sign in_** #############

Login controller inside the controller.js

API For User Sign In: **http://build.myappbuilder.com/api/login.json**

Code:

 if($scope.type=='shopkeper'){

                   $scope.userId = "sai";

                   $scope.password = "password"

                   }

  else{

                   $scope.userId = "cust123";

                   $scope.password = "password"

  }

val1 = userId;  // Based on the type

val2 = password;

  $http({method: "POST", url:"http://build.myappbuilder.com/api/login.json", cache: false, params:{"api_key":appkey,"login":val1,"password":val2}})

     .success(function(data, status){

     })

     .error(function(data, status) {

     });                                       

Creator of the app can only be able to login as Shopkeeper.

######### **_Register_** #############

Register controller inside the controller.js

API For User Sign In: **http://build.myappbuilder.com/api/subscribers.json**

Code:

 $http({method: "POST", url:"http://build.myappbuilder.com/api/subscribers.json", cache: false, params:{"api_key":appkey,"subscriber[username]":val1,"subscriber[email]":val2,"subscriber[password]":val3,"subscriber[password_confirmation]":val4}})

     .success(function(data, status){

     })

     .error(function(data, status) {

     });                                       

######### **_Home** #############

API For Getting products and the price details: **http://build.myappbuilder.com/api/subscriber_custom_fields.json**

Code:

 $http({method: "POST", url:"http://build.myappbuilder.com/api/subscriber_custom_fields.json", cache: false, params:{"api_key":appkey,"subscriber_id":userid,"title":val,"value":val1+"#"+val2}})

 .success(function(data, status){

     })

     .error(function(data, status) {

     });  

######### **_History list_** #############

API For Getting the history list : **http://build.myappbuilder.com/api/buttons.json**

Code:

 $http({method: "GET", url:"http://build.myappbuilder.com/api/buttons.json", cache: false, params:{"api_key":orderkey}})

.success(function(data, status){

     })

     .error(function(data, status) {

     });  

######### **_content_** #############

API Used: **http://build.myappbuilder.com/api/subscriber_custom_fields.json**

Code:

   $http({method: "POST", url:"http://build.myappbuilder.com/api/subscriber_custom_fields.json", cache: false, params:{"api_key":appkey,"subscriber_id":userid,"title":val,"value":cust}})

   .success(function(data, status){

     })

     .error(function(data, status) {

     });  

######### **_cart_** #############

API Used: **http://api.sba.gov/geodata/city_county_links_for_state_of/'+val+'.json**

Code:

 $http.get('http://api.sba.gov/geodata/city_county_links_for_state_of/'+val+'.json', {}, {

                              transformRequest:angular.identity,

                              headers:{'Content-Type':JSON}

                              })

   .success(function(data, status){

     })

     .error(function(data, status) {

     }); 

 To remove the added cart details DELETE method in the api is used : "http://build.myappbuilder.com/api/subscriber_custom_fields.json"

 To edit the added product details in the cart PUT  method in the api is used : "http://build.myappbuilder.com/api/subscriber_custom_fields.json"

######### ** ShopKeeper ** #############

######### ** Admin ** #############

To add the Product

Code:

 $http({method: "POST", url:"http://build.myappbuilder.com/api/buttons/via_url.json", cache: false, params:{"api_key":appkey,"title":$scope.data.title,"image":"http://s3.amazonaws.com/iPhoneBooks/user/buttons/original/688.png"}})

.success(function(data, status){

     })

     .error(function(data, status) {

     }); 

For Edit And Delete PUT and DELETE method in the api is used.

To get the Products list api used : http://build.myappbuilder.com/api/elements.json

   $http({method: "GET", url:"http://build.myappbuilder.com/api/elements.json", cache: false, params:{"api_key":appkey,"id":elementid}})

   .success(function(data, status){

     })

     .error(function(data, status) {

     }); 

######### ** Editproduct ** #############

Api used : http://build.myappbuilder.com/api/elements/images.json

Code:

  cordova.exec(function(response){

    }, function(error){

                       

  }, "ImageCompress", "imageCompress", ["320", "480", "image", image, "http://build.myappbuilder.com/api/elements/images.json?", "POST", { "api_key": appkey,"id":elementid}]);

To compress the image with desired height and width ImageCompress Plugin is used  here.

For Delete method DELETE method in the api : http://build.myappbuilder.com/api/elements/images.json

######### ** Order List ** #############

Api used : http://build.myappbuilder.com/api/buttons.json

Code:

$http({method: "GET", url:"http://build.myappbuilder.com/api/buttons.json", cache: false, params:{"api_key":orderkey,"id":order_bid}})

.success(function(data, status){

     })

     .error(function(data, status) {

     }); 

#########**Purchase the Products** #############

Code:

if(scval=='UPS'){

                   var url ='http://nuatransmedia.com/song_app/stripe/cart_android.php?C_Name='+$scope.add.userName+'&C_Mail='+useremail+'&Total_Items='+cartitemsarr.length+'&Items_Name='+productarr+'&Items_Price='+pricearr+'&Items_Qty='+quantityarr+'&Items_Tax='+taxarr+'&Image='+imagearr+'&oths='+JSON.stringify(arr)+'&type='+JSON.stringify(scarr)+'&Seller=333 place St.,City,AL,36000&Buyer='+$scope.add.address1+','+$scope.add.selectedcity1+','+$scope.add.selectedstate1+','+$scope.add.pincode1;

}

IF UPS is selected it add products height,width,length,breadth.

  else if(scval=='BS'){

                   var url ='http://nuatransmedia.com/song_app/stripe/cart_android.php?C_Name='+$scope.add.userName+'&C_Mail='+useremail+'&Total_Items='+cartitemsarr.length+'&Items_Name='+productarr+'&Items_Price='+pricearr+'&Items_Qty='+quantityarr+'&Items_Tax='+taxarr+'&Image='+imagearr+'&oths='+JSON.stringify(arr)+'&type=BS&Seller=333 place St.,City,AL,36000&Buyer='+$scope.add.address1+','+$scope.add.selectedcity1+','+$scope.add.selectedstate1+','+$scope.add.pincode1;

}

If Built in Schemes is selected it adds shipping details.

else{

                   var url ='http://nuatransmedia.com/song_app/stripe/cart_android.php?C_Name='+$scope.add.userName+'&C_Mail='+useremail+'&Total_Items='+cartitemsarr.length+'&Items_Name='+productarr+'&Items_Price='+pricearr+'&Items_Qty='+quantityarr+'&Items_Tax='+taxarr+'&Image='+imagearr+'&oths='+JSON.stringify(arr)+'&type='+scval+'&Seller=333 place St.,City,AL,36000&Buyer='+$scope.add.address1+','+$scope.add.selectedcity1+','+$scope.add.selectedstate1+','+$scope.add.pincode1;

 }

In this Pricing table shopkeeper can able to set limit for the product for ex if products purchased above 1000 then shipping charge will be free if below the specified price then shipping cost should be fixed.

(Stripe test account number - 4242 4242 4242 4242)

######### ** Payment ** #############

Code:

 $http({method: "POST", url:"http://build.myappbuilder.com/api/buttons/via_url.json", cache: false, params:{"api_key":orderkey,"title":ordertitle,"image":"http://s3.amazonaws.com/iPhoneBooks/user/buttons/original/688.png"}})

                            .success(function(data, status){

                                     $http({method: "POST", url:"http://build.myappbuilder.com/api/elements/create_default.json", cache: false, params:{"api_key":orderkey,"button_id":order_bid,"title":orderdate,"text":orderelement,"price":orderprice,"additional_field":"Pending"}})

                                     .success(function(data, status){

                                           

                                              $http({method: "POST", url:"http://build.myappbuilder.com/api/subscriber_custom_fields.json", cache: false, params:{"api_key":appkey,"subscriber_id":userid,"title":order_bid,"value":"orders"}})

                                             

                                              .success(function(data, status){

                                                   

                                                       $http({method: "GET", url:"http://build.myappbuilder.com/api/buttons.json", cache: false, params:{"api_key":orderkey}})

                                                      

                                                       .success(function(data, status){

                                                                

                        

                                                                if(orderarr[i].elements[0].additional_field=="Pending"){

                                                                pendingarr.push(orderarr[i]);

                                                                }

                                                                else if(orderarr[i].elements[0].additional_field=="Delivered"){

                                                                }

                                                                else{

                                                                returnedarr.push(orderarr[i]);

                                                                }

                                                                }

                                                               

                                                                $http({method: "DELETE", url:"http://build.myappbuilder.com/api/subscriber_custom_fields.json", cache: false, params:{"api_key":appkey,"id":cartarr[j].id}})

                                                             

                                                                .success(function(data, status){

                                                                         $http({method: "GET", url:"http://build.myappbuilder.com/api/subscriber_custom_fields.json", cache: false, params:{"api_key":appkey}})

                                                                        

                                                                         .success(function(data, status){

                                                                                  

                                                                                  })

                                                                         .error(function(data, status) {

                                                                             

                                                                                });

                                                                         

                                                                         })

                                                                .error(function(data, status) {

                                                                    

                                                                       });

                                                              

                                                                })

                                                       .error(function(data, status) {

             

                                                              });

                                                       })

                                              .error(function(data, status) {

                                                     });

                                              

                                              })

                                     .error(function(data, status) {

                                            });

                                     

######### ** Chat Support ** #############

Chat support with the product dealer

Api used: http://build.myappbuilder.com/api/messages.json

Code:

To get the messages 

 $.ajax({

                          type: "GET",

                          url: "http://build.myappbuilder.com/api/messages.json",

                          data:{'api_key':orderkey,'button_id':order_bid},

                          cache: false,

                          success:function(response){

                          },

                          error:function(error,status){

                          }

});

To post the messages 

  $.ajax({url:'http://build.myappbuilder.com/api/messages.json', type:"POST",data:{"message[body]":postmessage,"message[sender_id]":userid1,"api_key":orderkey,"button_id":order_bid},

  

  success:function(response){

  },

  error:function(error,status){

  }

});

To reply to the messages

   $.ajax({url:'http://build.myappbuilder.com/api/messages.json', type:"POST",data:{"message[body]":replymessage,"message[parent_id]":replyMgsNo,"message[sender_id]":userid1,"api_key":orderkey,"button_id":order_bid},

  success:function(response){

  },

  error:function(error,status){

  }

});

For Deleting the messages, DELETE method in the api used.

**For API references visit - ****http://build.myappbuilder.com/api**