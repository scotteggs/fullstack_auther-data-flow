'use strict';

var app = angular.module('auther', ['ui.router']);

app.config(function ($urlRouterProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');
	$urlRouterProvider.when('/auth/:provider', function () {
    window.location.reload();
	})
});



app.value('currentUser', {name: 'testing'});


app.run(function (AuthFactory, currentUser) {
	AuthFactory.setCurrentUser();
})

