'use strict';

app.directive('navbar', function ($state, $location, AuthFactory) {
	return {
		restrict: 'E',
		templateUrl: '/browser/components/navbar/navbar.html',
		link: function (scope) {
			scope.pathStartsWithStatePath = function (state) {
				var partial = $state.href(state);
				var path = $location.path();
				return path.startsWith(partial);
			};
			scope.logout = function () {
				AuthFactory.logout();
				AuthFactory.goHome();
			}
		}
	}
});
//secret
//ytwDFJckgB3tvo0pwD4bTpLn
//clientId
//834101702941-9nhfp6623bu62avnka00r9plqa6acl5s.apps.googleusercontent.com