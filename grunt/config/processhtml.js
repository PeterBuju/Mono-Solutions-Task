//grunt/config/processhtml.js

module.exports = { 
	options: {
	  data: {
	    message: 'Hello world!'
	  },
	  strip: true,
	  process: true
	},
	dist: {
	  files: {
	    'dist/index.html': ['dist/index.html'],
	    'dist/index_process.html': ['dist/index_process.html']
	  }
	}
};