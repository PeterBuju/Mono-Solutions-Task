/* jshint -W099 */
'use strict';

angular
	.module("components.language")
	.service("languageService", languageService);

languageService.$inject = ["$http", "$localStorage"];
function languageService($http, $localStorage){
	// jshint validthis: true
	var vm = this;

	vm.get = get;

	var languageList = [
		{ text: "english", textMin: "EN", fileName: "en", index: 0 },
		{ text: "danish", textMin: "DK", fileName: "dk", index: 1 },
		{ text: "romanian", textMin: "RO", fileName: "ro", index: 2 }
	];

	// Used externally 
	vm.languageList = languageList;
	vm.updateLanguageData = updateLanguageData;

	vm.defaultLanguageId = { value: 0 };
	init();

	// Initialization of service
	function init(){
		if(!$localStorage.currentLanguageId){
			$localStorage.currentLanguageId = vm.defaultLanguageId;
		}
		updateLanguageData();
	}

	// Updates the vm.languageData variable with the data from language json file.
	function updateLanguageData(){
		var path = getCurrentPath();
	  $http.get(path).
		  then(function onSuccess(response) {
		  	console.log(response);
		  	console.log($localStorage.currentLanguageId);
		  	vm.languageData = response.data;
		  }).
		  catch(function onError(response) {
		   	console.log(response);
		   	return response;
		  });
	}

	function getCurrentPath(){
		var path = "languages/";
		path += languageList[$localStorage.currentLanguageId.value].fileName;
		path += ".json";
		return path;
	}

	function get(label){
		return vm.languageData ? vm.languageData[label] : "";
	}
}