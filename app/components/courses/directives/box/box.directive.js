'use strict';

angular
	.module("components.courses")
	.directive("box", boxDirective);

boxDirective.$inject = ["pathService"];
function boxDirective(ps){
	var templateUrl = ps.components + "courses/directives/box/box.html";
	var directive = {
		templateUrl: templateUrl,
		controllerAs: "vm",
		bindToController: true,
		controller: boxCtrl,
		restrict: "E",
		replace: true,
		scope: {
			title: "@",
			desc: "@"
		}
	};
	return directive;
}

boxCtrl.$inject = ['languageService'];
function boxCtrl(ls){
	// jshint validthis: true
	var vm = this;

	vm.getLabel = ls.get;
}

