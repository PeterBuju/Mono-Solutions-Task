'use strict';

angular
	.module("components.apply")
	.controller("applyCtrl", applyCtrl);

applyCtrl.$inject = ['languageService', '$scope', 'coursesService', '$rootScope', '$localStorage', 'SweetAlert', 'dbService'];
function applyCtrl(ls, $scope, cs, $rootScope, $localStorage, SweetAlert, db){
	// jshint validthis: true
	var vm = this;

	vm.getLabel = ls.get;

	if($localStorage.application){
		vm.application = $localStorage.application;
		vm.application.dateOfBirth = new Date($localStorage.application.dateOfBirth);
	} else {
		vm.application = {};
	}

	// Courses list section
	$rootScope.$on("applyCoursesReload", initCourseList);
	initCourseList();
	//vm.application.course = vm.courseList[0];
	
	function initCourseList(){
		var index = vm.courseList ? vm.courseList.indexOf(vm.application.course) : 0;
		index = index === -1 ? 0 : index;
		vm.courseList = getCourseList();
		vm.application.course = vm.courseList[index];
	}

	function getCourseList(){
		var items = cs.getItems();
		return items;
	}

	// END Courses list section

	// Datepicker related
	var formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
	vm.format = formats[0];
	vm.opened = false;
	vm.dateOptions = getDateOptions();
	vm.altInputFormats = ['M!/d!/yyyy'];
	vm.maxDate = new Date();
	vm.open = open;

	function open() {
    vm.opened = true;
  }

  function getDateOptions(){
		var options = {
			dateDisabled: false,
			formatYear: 'yyyy',
			maxDate: new Date(),
			minDate: new Date('1900', '01', '01'),
			startingDay: 1,
			datepickerMode: 'year'
		};
		return options;
  }

  // END Datepicker related

  // Validation section
  vm.validateInput = validateInput;
  vm.errorPattern = errorPattern;
  vm.errorRequired = errorRequired;
  vm.errorDate = errorDate;

  function validateInput(inputName){
		var validation = $scope.userForm[inputName].$invalid && (!$scope.userForm[inputName].$pristine || $scope.userForm[inputName].$touched);
		return validation;
  }

  function errorPattern(inputName){
		var validation = $scope.userForm[inputName].$error.pattern;
		return validation;
  }
  
  function errorRequired(inputName){
		var validation = $scope.userForm[inputName].$error.required;
		return validation;
  }

  function errorDate(inputName){
		var validation = $scope.userForm[inputName].$error.date;
		return validation;
  }
  // END Validation section

  // Submit section

  vm.submit = submit;

  function submit(){
		$localStorage.application = vm.application;
		var object = {
			firstName: vm.application.firstName,
			lastName: vm.application.lastName,
			dateOfBirth: vm.application.dateOfBirth,
			email: vm.application.email,
			motivation: vm.application.motivation,
			courseId: vm.courseList.indexOf(vm.application.course)
		};

		var confirmOptions = {
			title: ls.get("applyConfirmTitle"),
			text: ls.get("applyConfirmText"),
			type: "info",
			showCancelButton: true,
			closeOnConfirm: false,
			showLoaderOnConfirm: true,
			confirmButtonText: ls.get("submit"),
			cancelButtonText: ls.get("cancel"),
		};
		SweetAlert.swal(confirmOptions, 
			function(isConfirm){ 
				if(isConfirm) { 
					sendApplication(object); 
				} 
			}
		);
	}

	function sendApplication(obj){
		console.log("Sending to DB");
		db.post("request", obj, thenFunction);
	}

	function thenFunction(){
		SweetAlert.swal(
			ls.get("applyConfirmedTitle"), 
			ls.get("applyConfirmedText"), 
			"success");
	}
  // END Submit section

}