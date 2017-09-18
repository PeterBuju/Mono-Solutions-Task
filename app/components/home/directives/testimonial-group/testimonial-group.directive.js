'use strict';

angular
	.module("components.home")
	.directive("testimonialGroup", testimonialGroupDirective);

testimonialGroupDirective.$inject = ["pathService"];
function testimonialGroupDirective(ps){
	var template =
		"<div class='col-sm-12'>" +
			"<testimonial ng-repeat='item in vm.items' name='{{item.name}}' position='{{item.position}}' desc='{{item.desc}}' avatar='{{item.avatar}}'></testimonial>" +
		"</div>";
	var directive = {
		template: template,
		controllerAs: "vm",
		bindToController: true,
		controller: testimonialGroupCtrl,
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

testimonialGroupCtrl.$inject = ['languageService', '$rootScope'];
function testimonialGroupCtrl(ls, $rootScope){
	// jshint validthis: true
	var vm = this;

	$rootScope.$on('testimonialGroupReload', function (ev, data) {
		init();  
	});

	init();

	function init(){
		vm.items = getItems();
	}

	function getItems(){
		var totalCount = 7;
		var testimonialText = "testimonial";
		var items = [];

		for(var i = 1; i <= totalCount; i++){
			items.push({
				name: ls.get(testimonialText + i + "name"),
				position: ls.get(testimonialText + i + "position"),
				desc: ls.get(testimonialText + i + "desc"),
				avatar: testimonialText + "-" + i + ".jpg",
			});
		}
		return items;
	}
}

