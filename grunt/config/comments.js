//grunt/config/comments.js

module.exports = { 
	lib: {
	  // Target-specific file lists and/or options go here. 
	  options: {
	      singleline: true,
	      multiline: true
	  },
	  src: [ 'app/temp/lib/**/*.js'] // files to remove comments from 
	}
};