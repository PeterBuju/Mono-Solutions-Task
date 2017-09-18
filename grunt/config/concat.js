//grunt/config/concat.js

module.exports = { 
	options: {
	  separator: ';'
	},
	dist: {
	  src: ['app/**/*.js','!app/**/*_test.js', '!app/bower_components/**/*.js'],
	  dest: 'dist/<%= package.name %>.js'
	},

	uglifiedfiles: {
		src: ['app/temp/fccpApplication1.min.js', 'app/temp/fccpApplication2.min.js'],
		dest: 'dist/app.js'
	},

	lib: {
		
		src: ['app/temp/lib/jquery/jquery.js', 'app/temp/lib/angular/angular.js', 'app/temp/bootstrap/bootstrap.js',
		'app/temp/lib/**/*.js',
		'!app/temp/lib/bootstrap-sweetalert/sweetalert.js'

		],
		dest: 'dist/lib/lib.min.js'
	},

	js: {
		src: [
		'app/**/*.js',
		'!app/**/*_test.js', '!app/bower_components/**/*.js', '!app/temp/**/*.js'

		],

		dest: 'dist/assets/js/app.js'
	},

	experiment: {
		src: [
			'dist/lib/d3.min.js',
			'dist/lib/d3.min.js',
			'dist/lib/jquery.knob.min.js',
			'dist/lib/ngstorage.min.js',
			'dist/lib/sweetalert.min.js',
			'dist/lib/ngsweetalert.min.js',
			'dist/lib/respond.min.js',
			'dist/lib/summernote.min.js',
			'dist/lib/tablesaw.js',
			'dist/lib/ui.bootstrap-tpls.min.js'
		],
		dest: 'dist/lib/superhandies.js'
	}

};