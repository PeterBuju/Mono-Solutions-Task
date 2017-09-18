//grunt/config/concat_css.js

module.exports = { 
	options: {
	      // Task-specific options go here. 
	    },
	    lib: {
	      src: ["app/temp/lib/cssmin/*.css"],
	      dest: "dist/lib/lib.min.css"
	    },
};