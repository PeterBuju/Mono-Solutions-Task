'use strict';

angular
	.module("components.language")
	.directive("languageSelector", languageSelectorDirective);

function languageSelectorDirective(){
	var templateUrl = "components/common/language-selector/language-selector.html";
	var directive = {
		templateUrl: templateUrl,
		controllerAs: "vm",
		bindToController: true,
		controller: languageSelectorCtrl,
		restrict: "E",
		replace: true,
	};
	return directive;
}

languageSelectorCtrl.$inject = ['languageService'];
function languageSelectorCtrl(ls){
	// jshint validthis: true
	var vm = this;

	vm.languageList = ls.languageList;
}

