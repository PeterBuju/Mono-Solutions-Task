'use strict';

angular
	.module("components.common")
	.directive("redirectGroup", redirectGroupDirective);

function redirectGroupDirective(){
	var template = 
		'<redirect ng-repeat="item in vm.items" text="{{vm.getLabel(item.textLabel)}}" state="{{item.state}}"></redirect>';
	var directive = {
		template: template,
		controllerAs: "vm",
		bindToController: true,
		controller: redirectGroupCtrl,
		restrict: "E",
		replace: true,
		scope: {
			state: "@",
			text: "@"
		}
	};
	return directive;
}

redirectGroupCtrl.$inject = ['languageService', '$rootScope'];
function redirectGroupCtrl(ls, $rootScope){
	// jshint validthis: true
	var vm = this;

	$rootScope.$on('redirectGroupReload', function (ev, data) {
		init();  
	});

	vm.getLabel = ls.get;

	init();

	function init(){
		vm.items = getItems();
	}

	function getItems(){
		var items = [
			{ textLabel: "homeTitle", state: "home"},
			{ textLabel: "coursesTitle", state: "courses" },
			{ textLabel: "aboutTitle", state: "about" },
			{ textLabel: "applyTitle", state: "apply" }
		];
		return items;
	}
}

