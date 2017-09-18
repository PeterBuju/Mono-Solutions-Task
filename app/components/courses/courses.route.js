'use strict';

angular
	.module("components.courses")
	.config(coursesConfig);

function coursesConfig($stateProvider, $urlRouterProvider){
	var basePath = "components/";

	$stateProvider.state('courses', {
		url: '/courses',
		templateUrl: basePath + 'courses/courses.html'
	});
}