'use strict';

angular
	.module("components.about")
	.config(aboutConfig);

function aboutConfig($stateProvider, $urlRouterProvider){
	var basePath = "components/";

	$stateProvider.state('about', {
		url: '/about',
		templateUrl: basePath + 'about/about.html'
	});
}