'use strict';

var app = angular.module("myApp", [
	"app.shared",
	"app.components",
	"ngStorage"
	])

.controller("myAppCtrl", myAppCtrl);
myAppCtrl.$inject = ["$http", "languageService", "$state", "eventService", "$localStorage"];

function myAppCtrl($http, ls, $state, es, $localStorage){
	// jshint validthis: true
	var vm = this;
	vm.getLabel = ls.get;
	vm.res = "My variable";
	$http.get("https://api.mlab.com/api/1/databases/mono-assignment/collections/user/?apiKey=r1PfjYNTJybxyHR2xYW3_rUvDIHuijoR")
    .then(function(response) {
        vm.res = response.data;
        //alert("Applied API !");
    });

  // Language section
  vm.languageList = ls.languageList;

  vm.selectLanguage = selectLanguage;

  function selectLanguage(item){
		$localStorage.currentLanguageId = { value: item.index };
		ls.updateLanguageData();
  }
}