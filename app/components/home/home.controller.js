'use strict';

angular
	.module("components.home")
	.controller("homeCtrl", homeCtrl);

homeCtrl.$inject = ['languageService'];
function homeCtrl(ls){
	// jshint validthis: true
	var vm = this;

	vm.getLabel = ls.get;
}