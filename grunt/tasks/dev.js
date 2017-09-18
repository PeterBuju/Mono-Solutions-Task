//grunt/tasks/dev.js

module.exports = function(grunt) {
  grunt.registerTask('dev', ['watch:dev']);

  grunt.event.on('watch', function(action, filepath, target){
    grunt.log.writeln(target + ': ' + filepath + ' might have ' + action);
  
    // Copy:changedFiles config is modified in order to only copy modified file
    var option = 'copy.changedFiles';
    var src = filepath.substring(filepath.indexOf("\\") + 1, filepath.length);
    grunt.log.writeln(option + '.src changed to ' + src);
    grunt.config(option, {
      expand: true,
      dot: true,
      cwd: 'app/',
      src: src,
      dest: 'dist/'
      });

    // If file is js, use jshint
    var type = filepath.split('.').pop();
    if(type.localeCompare("js") == 0){
      grunt.config("jshint.changedFiles", { src: filepath });

    // If file is .less, compress all the less files into "mystyle.css"
    } else if(type.localeCompare("less") == 0){
      grunt.config("less.changedFiles", grunt.config.get('less.all'));

      // If file is .html, call htmlbuild to insert custom js dependencies (index.html) and partial views (*.html)
    } else if(type.localeCompare("html") == 0){
      grunt.config("htmlbuild.changedFiles", grunt.config.get('htmlbuild.devinit'));

      // If modified file is index.html, call wiredep to insert bower dependencies
      if(src == 'index.html'){
        grunt.config("wiredep.changedFiles", grunt.config.get('wiredep.devinit'));
      }
    }
  });
};