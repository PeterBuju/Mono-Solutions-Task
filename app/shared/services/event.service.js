'use strict';

angular
	.module("app.services")
	.service("eventService", eventService);

eventService.$inject = ["$rootScope", "languageService", "testimonialGroupService", "$timeout"];
function eventService($rootScope, ls, testimonialGroupService, $timeout){
	// jshint validthis: true
	var vm = this;

	$rootScope.$watch(getLanguageData, languageDataChanged);

	function getLanguageData(){
		return ls.languageData;
	}

	function languageDataChanged(){
		console.log("Language data changed");
		$rootScope.$emit('testimonialGroupReload');
		$rootScope.$emit('boxGroupReload');
		$rootScope.$emit('redirectGroupReload');
		$rootScope.$emit('applyCoursesReload');
	}

}