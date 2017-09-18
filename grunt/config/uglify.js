//grunt/config/uglify.js

module.exports = { 
	options: {
	  banner: '/*! <%= package.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
	  screwIE8: true
	},
	dist: {
	  files: {
	    'dist/<%= package.name %>.min.js': ['<%= concat.dist.dest %>']
	  }
	},

	js: {
		options: {
			compress: {
				//drop_console: true
				
			}
		},
		files: {

            'dist/assets/js/app.min.js' : [
            'app/temp/app.js'
            ]
		}		
	},

	lib: {
		options: {
			compress: {
				//drop_console: true
				angular: true
			}
		},
		expand: true,
		cwd: 'app/temp/',
		src: 'lib/*.js',
		dest: 'dist/'
	},
};