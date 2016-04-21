var app = angular.module('myApp.signup', ['ngRoute']);

app.controller('SignupCtrl', ['$scope', '$http', function($scope, $http) {
        //$rootScope.menu=false;

        $scope.toLogin = function () {
        	window.location.href = '#/login';
        };

        $scope.toSignup = function () {
        	window.location.href = '#/signup';
        };

        $scope.doSignup = function () { 
			$http({
	            method: 'POST',
	            url: "http://localhost:8080/signup",
	            data: {username: $scope.userName, password: $scope.userPassword, gmail: $scope.userGmail, interests: $scope.userInterests}
	        }).then(function successCallback(response) {
	            //console.log(response);
	            if(response.data.message=="Sign up successfully!") {
	                window.location.href='#/login';
	            }
	            else{
	            	console.log(response.data.message);
	                window.location.href='#/';
	            }
	        }, function errorCallback(response) {
	            console.log(response);
                window.location.href='#/';
	        });
	    };

    }]);

// app.factory('SignupService', ["$http", "$q", "GAuth","$cookies", "$rootScope", function($http, $q, GAuth, $cookies, $rootScope) {
//     var factory = {};
//     factory.localSignup = function(userName, userGmail, userPassword) {
//         //console.log(localUsername);
//         //console.log(localPassword);
//         var deferred = $q.defer();
//         $http({
//             method: 'POST',
//             url: "http://localhost:8080/signup",
//             data: {username: userName, password: userPassword, gmail: userGmail}
//         }).then(function successCallback(response) {
//             //console.log(response);
//             if(response.data.message=="Sign up successfully!") {
//                 deferred.resolve(response);
//             }
//             else{
//                 deferred.reject(response.data.message);
//             }
//         }, function errorCallback(response) {
//             //console.log(response);
//             deferred.reject(response);
//         });
//         return deferred.promise;
//     };

//     return factory;
// }]);


// app.controller('SignupCtrl', ['$scope', '$http', 'SignupService', function($scope, $http, SignupService) {
//         //$rootScope.menu=false;

//         $scope.toLogin = function () {
//         	window.location.href = '#/login';
//         };

//         $scope.toSignup = function () {
//         	window.location.href = '#/signup';
//         };

//         $scope.doSignup = function () {        	
//         SignupService.localSignup($scope.userName, $scope.userGmail, $scope.userPassword).then(
//         		function () {
//         			window.location.href='#/login';
//         		}, function(res){
//                     console.log(res);
//                     window.location.href='#/';
//                 }
//             );
//         };

//     }]);

