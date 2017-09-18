'use strict';

angular
	.module("components.apply")
	.config(applyConfig);

function applyConfig($stateProvider, $urlRouterProvider){
	var basePath = "components/";

	$stateProvider.state('apply', {
		url: '/apply',
		templateUrl: basePath + 'apply/apply.html',
		controllerAs: 'vm',
		controller: 'applyCtrl'
	});
}