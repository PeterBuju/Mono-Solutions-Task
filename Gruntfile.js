// Gruntfile.js

module.exports = function(grunt) {
  // Not supported by grunt-jit
  //grunt.loadNpmTasks('grunt-stripcomments');
  grunt.loadNpmTasks('grunt-html-build');
  //
  
  require('time-grunt')(grunt);
  var path = require('path');

  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'grunt/config'),
    jitGrunt: {
      customTasksDir: 'grunt/tasks'
    },
    data: {
      foo: 'bar', // accessible with '<%= foo %>'
    }
  });
};