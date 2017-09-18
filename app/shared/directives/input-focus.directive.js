'use strict';

angular
	.module('app.directives')
	.directive('inputFocus', inputFocus);

function inputFocus() {
  var directive = {
    restrict: 'A',
    link: linkF
  };
  return directive;

  function linkF(scope, element, attr){
    // Create function for focusing on input
    // scope[attr.inputFocus] = function () {
    //   element[0].focus();
    // };
    element[0].focus();
  }
}