//grunt/config/watch.js

module.exports = { 
	main: {
	  files: ['<%= jshint.files %>'],
	  tasks: ['jshint', 'qunit']
	},

	options: {
	  spawn: false,
	},
	dev: {
	  files: ['app/*.css',
	          'app/**/*.js',
	         'app/**/*.html',
	         'app/*.html',
	         'app/assets/less/*.less',
	         'app/components/**/*.less',
	         '!app/assets/less/icons/**/*less'
	          ],
	    tasks: ['jshint:changedFiles', 'htmlhint:all', 'copy:changedFiles', 'less:changedFiles', 'wiredep:changedFiles', 'htmlbuild:changedFiles', 'processhtml'],
	    options: {
	    livereload: true
	    }
	}



};