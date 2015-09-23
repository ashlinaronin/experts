var experts = angular.module('experts', ['ui.router']);

experts.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('home', {
		url: "",
		templateUrl: "partials/home.html"
	});
});