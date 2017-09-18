//grunt/tasks/default.js

module.exports = function(grunt) {
  grunt.registerTask('default', [
  	'clean:temp',	// Clears temporary files from app/temp/
  	'jshint:all',	// Check all JS
    'htmlhint:all', // Check all HTML
  	//'imagemin', 	// Minify images, send them to dist/assets/images/
    'copy:imagemin', // Alernative to imagemin - copies images
    'copy:fonts', // Copy all fonts to dist/assets/fonts/

  	//_______________________________________________________________
  	//			***** BOWER COMPONENTS SECTION *****
  	'bowercopy:toTemp', 'copy:lib', 'cssmin:lib', 'concat_css:lib', 'copy:images',
  	// Copy strictly required resources to temp/lib/
  	// JS: Minify JS files to dist/lib/
  	// CSS: Minify CSS each file in dist/minifiedlibcss/
  	// Concatinate css files from dist/minifiedlibcss/ into lib.min.css in dist/lib/
  	//_______________________________________________________________

  	//_______________________________________
  	// 			***** JS SECION *****
  	/*'uglify:toTemp',*/'concat:js', //'uglify:js',
  	// Concat all js into app/temp/app.js
  	//_______________________________________

  	//_______________________________________
  	//			***** LESS/ CSS SECTION *****
  	'less:toTemp', 'cssmin:all',
  	// Take all less files and put them into mystyle.css in app/temp
  	// Minify file and put in dist/assets/css/
  	//_______________________________________

    //_______________________________________
    //      ***** HTML SECTION *****
    'strip_code:livereload', 'htmlbuild:lib', 'minifyHtml:index', 'minifyHtml:views', 'copy:restOfViews',
    // Insert dependencies in index.html - lib, JS & CSS assets
    // Remove livereload reference in index.html
    // Minify index.html
    // Minify html files from views folder
    //_______________________________________

  	'clean:temp'  // Clears temporary files from app/temp/
  	]);

};