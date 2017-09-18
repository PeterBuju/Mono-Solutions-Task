'use strict';

angular
	.module("components.home")
	.config(homeConfig);

function homeConfig($stateProvider, $urlRouterProvider){
	var basePath = "components/";

	$urlRouterProvider.otherwise('/');

	$stateProvider.state('home', {
		url: '/',
		templateUrl: basePath + 'home/home.html'
	});
}