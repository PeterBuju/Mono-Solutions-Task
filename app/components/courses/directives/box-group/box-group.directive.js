'use strict';

angular
	.module("components.courses")
	.directive("boxGroup", boxGroupDirective);

function boxGroupDirective(){
	var template = 
		"<box ng-repeat='item in vm.items' title='{{item.title}}' desc='{{item.desc}}'></box>";
	var directive = {
		template: template,
		controllerAs: "vm",
		bindToController: true,
		controller: boxGroupCtrl,
		restrict: "E",
		replace: true,
		scope: {
		}
	};
	return directive;
}

boxGroupCtrl.$inject = ['languageService', '$rootScope', 'coursesService'];
function boxGroupCtrl(ls, $rootScope, cs){
	// jshint validthis: true
	var vm = this;

	var getItems = cs.getItems;

	$rootScope.$on('boxGroupReload', function (ev, data) {
		init();  
	});

	init();

	function init(){
		vm.items = getItems();
	}


}