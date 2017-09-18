'use strict';

angular
	.module("components.common")
	.directive("redirect", redirectDirective);

function redirectDirective(){
	var template = 
		"<li class=' {{vm.liClass}}'>" +
			"<a ui-sref='{{vm.state}}' class='redirect-link'>{{vm.text}}</a>" +
		"</li>";
	var directive = {
		template: template,
		controllerAs: "vm",
		bindToController: true,
		controller: redirectCtrl,
		restrict: "E",
		replace: true,
		scope: {
			state: "@",
			text: "@"
		}
	};
	return directive;
}

redirectCtrl.$inject = [];
function redirectCtrl(){
	// jshint validthis: true
	var vm = this;

	vm.liClass = getLiClass(vm.state);

	function getLiClass(state){
		switch(state){
			case 'apply': return 'applyBtn';
			default: return "";
		}
	}
}

