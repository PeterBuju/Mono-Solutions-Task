//grunt/config/cssmin.js

module.exports = { 
	all: {
	  files: [{
	    expand: true,
	    cwd: 'app/temp',
	    src: ['*.css', '!*.min.css'],
	    dest: 'dist/assets/css',
	    ext: '.min.css'
	  }]
	},

	lib: {
	  files: [{
	    expand: true,
	    cwd: 'app/temp/lib/',
	    src: ['*.css'],
	    dest: 'app/temp/lib/cssmin',
	    ext: '.min.css'
	  }]
	}
};