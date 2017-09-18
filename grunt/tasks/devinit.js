//grunt/tasks/devinit.js

module.exports = function(grunt) {
  grunt.registerTask('devinit', [
  //____________________________________________
  // ***** SOURCE *****
  // Validate all js files
  // Validate all html files
   'jshint:all', 'htmlhint:all',
  //_____________________________________________

  //______________________________________________
  // ***** SOURCE -> DIST *****
  // Copies all files
  // Compresses less into style.css
  'copy:all', 'less:all', 

  //_______________________________________________
  // **** DIST ****
  // Js dependencies
  // Bower dependencies
  'htmlbuild:devinit', 'wiredep']);



  // ***** Additional Notes *****
  //jshint:all - Verify all js files excepting bower_components
  //copy:all - Copies all js, css, html, fonts and images folder
  //less:all - Takes all less files from app and compresses them into one css file
  //htmlbuild:devinit - Gives index.html dependencies for all custom js files, so they stay scattered.
  //wiredep - Gives index.html dependencies for bower
};