'use strict';

angular
	.module("components.home")
	.directive("testimonial", testimonialDirective);

testimonialDirective.$inject = ["pathService"];
function testimonialDirective(ps){
	var templateUrl = ps.components + "home/directives/testimonial/testimonial.html";
	var directive = {
		templateUrl: templateUrl,
		controllerAs: "vm",
		bindToController: true,
		controller: testimonialCtrl,
		restrict: "E",
		replace: true,
		scope: {
			name: "@",
			position: "@",
			desc: "@",
			avatar: "@"
		}
	};
	return directive;
}

testimonialCtrl.$inject = [];
function testimonialCtrl(){
	// jshint validthis: true
	var vm = this;
}

