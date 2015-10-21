'use strict';

app.controller('LoginCtrl', function ($scope, AuthFactory) {
	$scope.login = function () {
		AuthFactory.login($scope.email, $scope.password)
		.then(function (data) {
			console.log(data)
		})	
	}
})