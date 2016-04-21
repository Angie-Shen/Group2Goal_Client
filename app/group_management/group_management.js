'use strict';
var app = angular.module('myApp.group_management', ['ngRoute'])
    
app.controller('GroupCtrl', ['$scope', '$rootScope', '$http', 'UserService', function($scope, $rootScope, $http, UserService) {
        //$rootScope.menu=false;
        var localUsername = UserService.getUsername();
        console.log(localUsername);
        
        $scope.ownGroups = function () {
        	$http({
        		method: 'GET',
        		url: 'http://localhost:8080/owngroups/' + localUsername
        		// params: {user: localUsername}
        	}).then(function successCallback(response) {
	            console.log(response);

	            $scope.groupsOwn = response.data;
	            // if(response.data.message=="Sign up successfully!") {
	            //     window.location.href='#/login';
	            // }
	            // else{
	            // 	console.log(response.data.message);
	            //     window.location.href='#/';
	            // }
	        }, function errorCallback(response) {
	            console.log(response);
                // window.location.href='#/';
	        });
        };

        $scope.ownGroups();



        $scope.inGroups = function () {
        	$http({
        		method: 'GET',
        		url: 'http://localhost:8080/joinedgroups/' + localUsername
        		// params: {user: localUsername}
        	}).then(function successCallback(response) {
	            console.log(response);

	            $scope.groupsJoin = response.data;
	            // if(response.data.message=="Sign up successfully!") {
	            //     window.location.href='#/login';
	            // }
	            // else{
	            // 	console.log(response.data.message);
	            //     window.location.href='#/';
	            // }
	        }, function errorCallback(response) {
	            console.log(response);
                // window.location.href='#/';
	        });
        };

        $scope.inGroups();



        $scope.recommendGroups = function () {
        	$http({
        		method: 'GET',
        		url: 'http://localhost:8080/recommendgroups/' + localUsername
        		// params: {user: localUsername}
        	}).then(function successCallback(response) {
	            console.log(response);

	            $scope.groupsRecommend = response.data;
	            // if(response.data.message=="Sign up successfully!") {
	            //     window.location.href='#/login';
	            // }
	            // else{
	            // 	console.log(response.data.message);
	            //     window.location.href='#/';
	            // }
	        }, function errorCallback(response) {
	            console.log(response);
                // window.location.href='#/';
	        });
        };

        $scope.recommendGroups();



        $scope.createGroup = function () { 

        	$scope.groupsOwn.push($scope.groupname);

			$http({
	            method: 'POST',
	            url: "http://localhost:8080/creategroup/" + localUsername,
	            data: {groupname: $scope.groupname, groupowner: localUsername, groupmembers: localUsername, grouptags: $scope.grouptags}
	        }).then(function successCallback(response) {
	            console.log(response.data);

	            $scope.groupname = "";
	            $scope.grouptags = "";

	            // if(response.data.message=="Sign up successfully!") {
	            //     window.location.href='#/login';
	            // }
	            // else{
	            // 	console.log(response.data.message);
	            //     window.location.href='#/';
	            // }
	        }, function errorCallback(response) {
	            console.log(response.data);
                // window.location.href='#/';
	        });
	    };

	   	$scope.deleteGroup = function (groupname) { 
			$http({
	            method: 'DELETE',
	            url: "http://localhost:8080/deletegroup/" + groupname
	        }).then(function successCallback(response) {
	            console.log(response.data);
	        }, function errorCallback(response) {
	            console.log(response.data);
	        });
	    };

	   	$scope.withdrawGroup = function (groupname) {
	  		$http({
	            method: 'POST',
	            url: "http://localhost:8080/withdrawgroup/" + groupname + '/' + localUsername 
	        }).then(function successCallback(response) {
	            console.log(response.data);
	        }, function errorCallback(response) {
	            console.log(response.data);
	        });
	    };

	   	$scope.joinGroup = function (groupname) {

	   		$scope.groupsJoin.push(groupname);

	  		$http({
	            method: 'POST',
	            url: "http://localhost:8080/joingroup/" + localUsername,
	            data: {groupname: groupname}
	        }).then(function successCallback(response) {
	            console.log(response.data);
	        }, function errorCallback(response) {
	            console.log(response.data);
	        });
	    };	    

    }]);