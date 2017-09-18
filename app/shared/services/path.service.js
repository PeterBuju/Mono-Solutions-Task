'use strict';

angular
	.module("app.services")
	.service("pathService", pathService);

function pathService(){
	// jshint validthis: true
	var vm = this;

	vm.components = "components/";
}