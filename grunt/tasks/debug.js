//grunt/tasks/debug.js

module.exports = function(grunt) {
  grunt.registerTask('debug', ['shell', 'jshint', 'concat', 'copy' ,  'processhtml', 'wiredep', 'compress']);
};