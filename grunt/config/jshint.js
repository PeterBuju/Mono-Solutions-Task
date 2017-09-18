//grunt/config/jshint.js

module.exports = { 
	all: {
	  src: ['app/**/*.js','!app/**/*_test.js', 'test/**/*.js', '!app/bower_components/**/*.js', 
	  '!app/assets/js/**/*.js', '!app/temp/**/*.js']},
	options: {
	  // options here to override JSHint defaults
	  globalstrict: true,
	  globals: {
	    angular:true,
	    jQuery: true,
	    console: true,
	    module: true,
	    document: true,
	    window: true,
	    localStorage:true,
	    alert:true,
	    location:true,
	    google:true,
	    confirm:true,
	    setTimeout: true,
	    clearTimeout: true,
	    "-W099": true
	  }
	},
	changedFiles: {
	}
};