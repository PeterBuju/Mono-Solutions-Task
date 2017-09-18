'use strict';

angular
	.module("app.services")
	.service("dbService", dbService);

dbService.$inject = ["$http"];
function dbService($http){
	// jshint validthis: true
	var vm = this;

	var apiKey = "r1PfjYNTJybxyHR2xYW3_rUvDIHuijoR";
	var prefix = "https://api.mlab.com/api/1/databases/mono-assignment/collections/";
	var sufix = "/?apiKey=" + apiKey;

	vm.get = get;
	vm.post = post;
	vm.getResult = {};

	function get(collectionName){
		$http.get(prefix + collectionName + sufix)
			.then(function(response) {
				vm.getResult = response.data;
				console.log(response);
			}
		);
	}

	function post (collectionName, object, thenFunction){
		$http.post(prefix + collectionName + sufix, object)
			.then(thenFunction);
	}

}