/* jshint -W099 */
'use strict';

angular
	.module("components.courses")
	.service("coursesService", coursesService);

coursesService.$inject = ["languageService"];
function coursesService(ls){
	// jshint validthis: true
	var vm = this;

	vm.totalCount = getTotalCount();
	vm.getItems = getItems;

	function getTotalCount(){
		return 9;
	}

	function getItems(){
		var courseText = "course";
		var items = [];

		for(var i = 1; i <= vm.totalCount; i++){
			items.push({
				title: ls.get(courseText + i + "title"),
				desc: ls.get(courseText + i + "desc"),
			});
		}
		return items;
	}
}